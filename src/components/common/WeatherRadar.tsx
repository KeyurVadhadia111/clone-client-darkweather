"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "components/utils/Icon";
import { Button } from "components/utils/Button";

export interface Props {
	openFrom?: string;
}
export const WeatherRadar: React.FC<Props> = ({ openFrom }) => {
	const [selectedLocation, setSelectedLocation] = useState("New York, NY");
	const [selectedLayer, setSelectedLayer] = useState("precipitation");
	const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	// Close dropdown when clicking outside
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setLocationDropdownOpen(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	// Function to draw the graph
	const drawGraph = () => {
		if (!canvasRef.current || !containerRef.current) return;

		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		// Get the container dimensions
		const rect = containerRef.current.getBoundingClientRect();

		// Set canvas dimensions with higher resolution for sharper rendering
		const dpr = window.devicePixelRatio || 1;
		canvas.width = rect.width * dpr;
		canvas.height = rect.height * dpr;

		// Set canvas CSS dimensions
		canvas.style.width = `${rect.width}px`;
		canvas.style.height = `${rect.height}px`;

		// Scale the context to account for the device pixel ratio
		ctx.scale(dpr, dpr);

		// Clear canvas
		ctx.clearRect(0, 0, rect.width, rect.height);

		// Draw based on selected layer
		switch (selectedLayer) {
			case "precipitation":
				drawPrecipitationGraph(ctx, rect.width, rect.height);
				break;
			case "wind":
				drawWindGraph(ctx, rect.width, rect.height);
				break;
			case "temperature":
				drawTemperatureGraph(ctx, rect.width, rect.height);
				break;
		}
	};

	// Draw the graph when the selected layer changes or on resize
	useEffect(() => {
		drawGraph();

		// Add resize event listener
		const handleResize = () => {
			drawGraph();
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [selectedLayer]);

	const locations = ["New York, NY", "Los Angeles, CA", "Chicago, IL", "Houston, TX", "Miami, FL", "Seattle, WA"];

	return (
		<section className="py-10 w-full mx-auto relative">
			{openFrom !== "forecast" && (
				<>
					<div
						className={`absolute z-0  w-full h-[518px] sm:h-[697px] bottom-0 left-auto overflow-visible bg-no-repeat bg-position-[center_bottom] bg-[length:300%] sm:bg-[length:100%] bg-[url('/assets/images/bg/bg-header.png')]`}
					/>
					<div
						className={`absolute w-full bg-gradient-to-b bottom-0 from-bgc via-bgc/0 to-bgc dark:from-bgcDark via-60% dark:via-bgcDark/80 dark:to-bgcDark h-[518px] sm:h-[697px]`}
					/>
				</>
			)}
			<div className="container relative z-[1]">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 mb-3 sm:mb-6">
					{/* Heading */}
					<h2
						className={`${openFrom === "forecast" ? "text-2xl sm:text-[30px]" : "text-2xl sm:text-[40px]"} font-semibold text-text dark:text-textDark`}>
						Live Weather Radar
					</h2>

					{/* Location Dropdown */}
					<div className="relative" ref={dropdownRef}>
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="flex items-center font-bold bg-bgc dark:bg-bgcDark backdrop-blur-sm rounded-xl px-5 py-3 text-sm sm:text-base text-text dark:text-textDark border border-gray-300 dark:border-gray-600"
							onClick={() => setLocationDropdownOpen(!locationDropdownOpen)}>
							<span>{selectedLocation}</span>
							<Icon icon="chevron-down" className="w-4 h-4 ml-2" />
						</motion.button>

						{locationDropdownOpen && (
							<div className="absolute mt-2 w-full bg-bgc dark:bg-text text-bgcDark dark:text-textDark  rounded-md shadow-[0_20px_35px_rgba(0,0,0,0.05)] border border-gray-300 dark:border-gray-600 z-10">
								{locations.map(location => (
									<div
										key={location}
										onClick={() => {
											setSelectedLocation(location);
											setLocationDropdownOpen(false);
										}}
										className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 text-black dark:text-textDark">
										{location}
									</div>
								))}
							</div>
						)}
					</div>
				</motion.div>

				{/* Radar Map */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="relative">
					<div className="rounded-xl">
						<div className="relative" ref={containerRef}>
							<img
								src={`/assets/images/${openFrom === "forecast" ? "map-forecast.png" : "map.png"}`}
								alt="Weather radar map"
								className="h-auto w-full"
							/>

							{/* Layer Controls */}
							{openFrom !== "forecast" ? (
								<div className="absolute w-full -bottom-3.5 sm:-bottom-7 left-1/2 transform -translate-x-1/2 z-20">
									<div className="flex w-fit mx-auto justify-center flex-row bg-bgc dark:bg-fgcDark rounded-md sm:rounded-xl overflow-hidden shadow-[0_35px_35px_rgba(0,0,0,0.05)]">
										<LayerButton
											active={selectedLayer === "precipitation"}
											onClick={() => setSelectedLayer("precipitation")}>
											<img
												src="/assets/images/rain-amount.svg"
												alt="Rain"
												className="w-[14px] sm:w-[30px] h-auto"
											/>
											<span>Precipitation</span>
										</LayerButton>
										<LayerButton
											active={selectedLayer === "wind"}
											onClick={() => setSelectedLayer("wind")}>
											<img
												src="/assets/images/wind.svg"
												alt="Wind"
												className="w-[14px] sm:w-[30px] h-auto"
											/>
											<span>Wind</span>
										</LayerButton>
										<LayerButton
											active={selectedLayer === "temperature"}
											onClick={() => setSelectedLayer("temperature")}>
											<img
												src="/assets/images/feels-like.svg"
												alt="Temperature"
												className="w-[14px] sm:w-[30px] h-auto"
											/>
											<span>Temperature</span>
										</LayerButton>
									</div>
								</div>
							) : (
								""
							)}
						</div>
					</div>
				</motion.div>

				{openFrom !== "forecast" ? (
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
						className="mt-6 sm:mt-24">
						<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 sm:gap-0">
							{/* Left Side: Temperature and Description */}
							<div className="flex flex-col w-full sm:w-[35%]">
								<div className="text-[42px] sm:text-7xl font-bold text-text dark:text-textDark mb-0 sm:mb-3">
									72°
								</div>
								<div className="text-text dark:text-textDark flex flex-row sm:items-center gap-1 text-base sm:text-base w-full">
									<p className="text-center sm:text-left">Partly Cloudy</p>
									<p className="text-center sm:text-left">Feels like 74°</p>
								</div>
							</div>

							{/* Temperature Forecast Section - Exactly matching Figma */}
							<div className="hidden sm:flex bg-bgc dark:bg-fgcDark rounded-3xl p-4 sm:p-6 flex-col sm:flex-row justify-evenly items-center w-full shadow-[0_30px_30px_rgba(0,0,0,0.05)] dark:shadow-none ">
								{/* Morning */}
								<div className="flex items-center">
									<img
										src="/assets/images/cloud-cover.svg"
										alt="Cloud Icon"
										width={50}
										height={50}
										className="mr-4 sm:mr-5"
									/>
									<div className="flex flex-col">
										<p className="text-text dark:text-textDark text-2xl sm:text-[32px] font-bold">
											68°
										</p>
										<p className="text-text dark:text-textDark text-sm sm:text-base mt-1">
											Morning
										</p>
									</div>
								</div>

								{/* Divider */}
								<div className="hidden sm:block h-20 w-px bg-textSecondary dark:bg-[#eeeeee]/30 opacity-70"></div>

								{/* Afternoon */}
								<div className="flex items-center">
									<img
										src="/assets/images/cloud-cover.svg"
										alt="Cloud Icon"
										width={48}
										height={48}
										className="mr-4 sm:mr-5"
									/>
									<div className="flex flex-col">
										<p className="text-text dark:text-textDark text-2xl sm:text-[32px] font-bold mt-1">
											75°
										</p>
										<p className="text-text dark:text-textDark text-sm sm:text-base mt-1">
											Afternoon
										</p>
									</div>
								</div>

								{/* Divider */}
								<div className="hidden sm:block h-20 w-px bg-textSecondary dark:bg-[#eeeeee]/30 opacity-70"></div>

								{/* Evening */}
								<div className="flex items-center">
									<img
										src="/assets/images/cloud-cover.svg"
										alt="Cloud Icon"
										width={50}
										height={50}
										className="mr-4 sm:mr-5 "
									/>
									<div className="flex flex-col">
										<p className="text-text dark:text-textDark text-2xl sm:text-[32px] font-bold mt-1">
											70°
										</p>
										<p className="text-text dark:text-textDark text-sm sm:text-base mt-1">
											Evening
										</p>
									</div>
								</div>
							</div>

							<div className="sm:hidden bg-bgc dark:bg-fgcDark rounded-3xl p-4 sm:p-6 flex flex-wrap items-center justify-center sm:flex-row w-full shadow-[0_30px_30px_rgba(0,0,0,0.05)] dark:shadow-none">
								{/* Morning */}
								<div className="flex items-center w-1/2 sm:w-1/3">
									<img
										src="/assets/images/cloud-cover.svg"
										alt="Cloud Icon"
										width={50}
										height={50}
										className="mr-4 sm:mr-5"
									/>
									<div className="flex flex-col">
										<p className="text-text dark:text-textDark text-2xl sm:text-[32px] font-bold">
											68°
										</p>
										<p className="text-text dark:text-textDark text-sm sm:text-base mt-1">
											Morning
										</p>
									</div>
								</div>

								{/* Afternoon */}
								<div className="flex items-center w-1/2 sm:w-1/3 border-l border-textSecondary/50 pl-2">
									<img
										src="/assets/images/cloud-cover.svg"
										alt="Cloud Icon"
										width={48}
										height={48}
										className="mr-4 sm:mr-5"
									/>
									<div className="flex flex-col">
										<p className="text-text dark:text-textDark text-2xl sm:text-[32px] font-bold mt-1">
											75°
										</p>
										<p className="text-text dark:text-textDark text-sm sm:text-base mt-1">
											Afternoon
										</p>
									</div>
								</div>

								{/* Evening */}
								<div className="flex items-center w-full border-t border-textSecondary/50 mt-2 justify-center">
									<img
										src="/assets/images/cloud-cover.svg"
										alt="Cloud Icon"
										width={50}
										height={50}
										className="mr-4 sm:mr-5 "
									/>
									<div className="flex flex-col">
										<p className="text-text dark:text-textDark text-2xl sm:text-[32px] font-bold mt-1">
											70°
										</p>
										<p className="text-text dark:text-textDark text-sm sm:text-base mt-1">
											Evening
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="flex justify-center mt-6 sm:mt-12">
							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="rounded-xl hover:shadow-[0_20px_35px_rgba(0,0,0,0.05)] transition-all">
								<Button className=" !px-6 py-3">View Full Radar</Button>
							</motion.div>
						</div>
					</motion.div>
				) : (
					""
				)}
			</div>
		</section>
	);
};

function LayerButton({
	active,
	onClick,
	children,
}: {
	active: boolean;
	onClick: () => void;
	children: React.ReactNode;
}) {
	return (
		<motion.button
			whileTap={{ scale: 0.95 }}
			className={`cursor-pointer flex items-center px-2 py-1.5 gap-0 sm:gap-4 sm:px-6 sm:py-4 text-[10px] sm:text-base font-semibold ${active ? "bg-primary text-black rounded-md sm:rounded-xl" : "text-black dark:text-textDark"
				}`}
			onClick={onClick}>
			{children}
		</motion.button>
	);
}

function drawPrecipitationGraph(ctx: CanvasRenderingContext2D, width: number, height: number) {
	// Set up the graph area with padding
	const padding = { top: 30, right: 20, bottom: 30, left: 40 };
	const graphWidth = width - padding.left - padding.right;
	const graphHeight = height - padding.top - padding.bottom;

	// Draw graph background with subtle grid
	ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
	ctx.fillRect(padding.left, padding.top, graphWidth, graphHeight);

	// Draw grid lines
	ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
	ctx.lineWidth = 1;

	// Horizontal grid lines
	for (let i = 0; i <= 5; i++) {
		const y = padding.top + (graphHeight / 5) * i;
		ctx.beginPath();
		ctx.moveTo(padding.left, y);
		ctx.lineTo(padding.left + graphWidth, y);
		ctx.stroke();
	}

	// Vertical grid lines
	for (let i = 0; i <= 6; i++) {
		const x = padding.left + (graphWidth / 6) * i;
		ctx.beginPath();
		ctx.moveTo(x, padding.top);
		ctx.lineTo(x, padding.top + graphHeight);
		ctx.stroke();
	}

	// Sample precipitation data (x, y) where x is time and y is precipitation amount
	const data = [
		[0, 0.1],
		[0.1, 0.3],
		[0.2, 0.8],
		[0.3, 0.6],
		[0.4, 0.4],
		[0.5, 0.5],
		[0.6, 0.7],
		[0.7, 0.3],
		[0.8, 0.2],
		[0.9, 0.1],
		[1, 0.05],
	];

	// Create gradient for the area
	const gradient = ctx.createLinearGradient(0, padding.top, 0, padding.top + graphHeight);
	gradient.addColorStop(0, "rgba(59, 130, 246, 0.8)");
	gradient.addColorStop(1, "rgba(59, 130, 246, 0.1)");

	// Draw the area
	ctx.fillStyle = gradient;
	ctx.beginPath();
	ctx.moveTo(padding.left, padding.top + graphHeight);

	data.forEach(([x, y]) => {
		const pointX = padding.left + x * graphWidth;
		const pointY = padding.top + graphHeight - y * graphHeight;
		ctx.lineTo(pointX, pointY);
	});

	ctx.lineTo(padding.left + graphWidth, padding.top + graphHeight);
	ctx.closePath();
	ctx.fill();

	// Draw the line with enhanced styling
	ctx.beginPath();
	data.forEach(([x, y], i) => {
		const pointX = padding.left + x * graphWidth;
		const pointY = padding.top + graphHeight - y * graphHeight;

		if (i === 0) {
			ctx.moveTo(pointX, pointY);
		} else {
			ctx.lineTo(pointX, pointY);
		}
	});
	ctx.strokeStyle = "rgba(59, 130, 246, 1)";
	ctx.lineWidth = 3;
	ctx.stroke();

	// Draw data points
	data.forEach(([x, y]) => {
		const pointX = padding.left + x * graphWidth;
		const pointY = padding.top + graphHeight - y * graphHeight;

		ctx.beginPath();
		ctx.arc(pointX, pointY, 4, 0, Math.PI * 2);
		ctx.fillStyle = "white";
		ctx.fill();
		ctx.strokeStyle = "rgba(59, 130, 246, 1)";
		ctx.lineWidth = 2;
		ctx.stroke();
	});

	// Draw axes labels
	ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
	ctx.font = "12px Inter, sans-serif";
	ctx.textAlign = "center";

	// X-axis labels (time)
	const times = ["12 AM", "4 AM", "8 AM", "12 PM", "4 PM", "8 PM", "12 AM"];
	times.forEach((time, i) => {
		const x = padding.left + (graphWidth / 6) * i;
		ctx.fillText(time, x, height - 10);
	});

	// Y-axis labels (precipitation in inches)
	ctx.textAlign = "right";
	const precipLevels = ['0"', '0.2"', '0.4"', '0.6"', '0.8"', '1.0"'];
	precipLevels.forEach((level, i) => {
		const y = padding.top + graphHeight - (graphHeight / 5) * i;
		ctx.fillText(level, padding.left - 5, y + 4);
	});

	// Draw title
	ctx.textAlign = "left";
	ctx.font = "bold 14px Inter, sans-serif";
	ctx.fillText("Precipitation Forecast (inches)", padding.left, 20);
}

function drawWindGraph(ctx: CanvasRenderingContext2D, width: number, height: number) {
	// Set up the graph area with padding
	const padding = { top: 30, right: 20, bottom: 30, left: 40 };
	const graphWidth = width - padding.left - padding.right;
	const graphHeight = height - padding.top - padding.bottom;

	// Draw graph background with subtle grid
	ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
	ctx.fillRect(padding.left, padding.top, graphWidth, graphHeight);

	// Draw grid lines
	ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
	ctx.lineWidth = 1;

	// Horizontal grid lines
	for (let i = 0; i <= 5; i++) {
		const y = padding.top + (graphHeight / 5) * i;
		ctx.beginPath();
		ctx.moveTo(padding.left, y);
		ctx.lineTo(padding.left + graphWidth, y);
		ctx.stroke();
	}

	// Vertical grid lines
	for (let i = 0; i <= 6; i++) {
		const x = padding.left + (graphWidth / 6) * i;
		ctx.beginPath();
		ctx.moveTo(x, padding.top);
		ctx.lineTo(x, padding.top + graphHeight);
		ctx.stroke();
	}

	// Sample wind data (x, y) where x is time and y is wind speed
	const data = [
		[0, 0.3],
		[0.1, 0.4],
		[0.2, 0.5],
		[0.3, 0.7],
		[0.4, 0.6],
		[0.5, 0.8],
		[0.6, 0.9],
		[0.7, 0.7],
		[0.8, 0.5],
		[0.9, 0.4],
		[1, 0.3],
	];

	// Draw the line with enhanced styling
	ctx.beginPath();
	data.forEach(([x, y], i) => {
		const pointX = padding.left + x * graphWidth;
		const pointY = padding.top + graphHeight - y * graphHeight;

		if (i === 0) {
			ctx.moveTo(pointX, pointY);
		} else {
			ctx.lineTo(pointX, pointY);
		}
	});
	ctx.strokeStyle = "rgba(34, 197, 94, 1)";
	ctx.lineWidth = 3;
	ctx.stroke();

	// Draw wind direction arrows
	data.forEach(([x, y]) => {
		const pointX = padding.left + x * graphWidth;
		const pointY = padding.top + graphHeight - y * graphHeight;

		// Draw arrow
		ctx.save();
		ctx.translate(pointX, pointY);
		ctx.rotate(Math.PI / 4); // 45 degrees rotation for wind direction

		ctx.beginPath();
		ctx.moveTo(-10, 0);
		ctx.lineTo(10, 0);
		ctx.strokeStyle = "rgba(34, 197, 94, 0.8)";
		ctx.lineWidth = 2;
		ctx.stroke();

		// Draw arrowhead
		ctx.beginPath();
		ctx.moveTo(10, 0);
		ctx.lineTo(5, -5);
		ctx.lineTo(5, 5);
		ctx.closePath();
		ctx.fillStyle = "rgba(34, 197, 94, 1)";
		ctx.fill();

		ctx.restore();
	});

	// Draw data points
	data.forEach(([x, y]) => {
		const pointX = padding.left + x * graphWidth;
		const pointY = padding.top + graphHeight - y * graphHeight;

		ctx.beginPath();
		ctx.arc(pointX, pointY, 4, 0, Math.PI * 2);
		ctx.fillStyle = "white";
		ctx.fill();
		ctx.strokeStyle = "rgba(34, 197, 94, 1)";
		ctx.lineWidth = 2;
		ctx.stroke();
	});

	// Draw axes labels
	ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
	ctx.font = "12px Inter, sans-serif";
	ctx.textAlign = "center";

	// X-axis labels (time)
	const times = ["12 AM", "4 AM", "8 AM", "12 PM", "4 PM", "8 PM", "12 AM"];
	times.forEach((time, i) => {
		const x = padding.left + (graphWidth / 6) * i;
		ctx.fillText(time, x, height - 10);
	});

	// Y-axis labels (wind speed in mph)
	ctx.textAlign = "right";
	const windSpeeds = ["0", "5", "10", "15", "20", "25"];
	windSpeeds.forEach((speed, i) => {
		const y = padding.top + graphHeight - (graphHeight / 5) * i;
		ctx.fillText(`${speed} mph`, padding.left - 5, y + 4);
	});

	// Draw title
	ctx.textAlign = "left";
	ctx.font = "bold 14px Inter, sans-serif";
	ctx.fillText("Wind Speed Forecast (mph)", padding.left, 20);
}

function drawTemperatureGraph(ctx: CanvasRenderingContext2D, width: number, height: number) {
	// Set up the graph area with padding
	const padding = { top: 30, right: 20, bottom: 30, left: 40 };
	const graphWidth = width - padding.left - padding.right;
	const graphHeight = height - padding.top - padding.bottom;

	// Create temperature gradient background
	const bgGradient = ctx.createLinearGradient(0, padding.top, 0, padding.top + graphHeight);
	bgGradient.addColorStop(0, "rgba(239, 68, 68, 0.2)"); // Red (hot)
	bgGradient.addColorStop(0.5, "rgba(234, 179, 8, 0.2)"); // Yellow (warm)
	bgGradient.addColorStop(1, "rgba(59, 130, 246, 0.2)"); // Blue (cold)

	// Draw graph background with gradient
	ctx.fillStyle = bgGradient;
	ctx.fillRect(padding.left, padding.top, graphWidth, graphHeight);

	// Draw grid lines
	ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
	ctx.lineWidth = 1;

	// Horizontal grid lines
	for (let i = 0; i <= 5; i++) {
		const y = padding.top + (graphHeight / 5) * i;
		ctx.beginPath();
		ctx.moveTo(padding.left, y);
		ctx.lineTo(padding.left + graphWidth, y);
		ctx.stroke();
	}

	// Vertical grid lines
	for (let i = 0; i <= 6; i++) {
		const x = padding.left + (graphWidth / 6) * i;
		ctx.beginPath();
		ctx.moveTo(x, padding.top);
		ctx.lineTo(x, padding.top + graphHeight);
		ctx.stroke();
	}

	// Sample temperature data (x, y) where x is time and y is temperature
	const data = [
		[0, 0.2],
		[0.1, 0.3],
		[0.2, 0.4],
		[0.3, 0.6],
		[0.4, 0.8],
		[0.5, 0.7],
		[0.6, 0.5],
		[0.7, 0.4],
		[0.8, 0.3],
		[0.9, 0.2],
		[1, 0.1],
	];

	// Create gradient for the line
	const lineGradient = ctx.createLinearGradient(0, padding.top, 0, padding.top + graphHeight);
	lineGradient.addColorStop(0, "rgba(239, 68, 68, 1)"); // Red (hot)
	lineGradient.addColorStop(0.5, "rgba(234, 179, 8, 1)"); // Yellow (warm)
	lineGradient.addColorStop(1, "rgba(59, 130, 246, 1)"); // Blue (cold)

	// Draw the line with gradient
	ctx.beginPath();
	data.forEach(([x, y], i) => {
		const pointX = padding.left + x * graphWidth;
		const pointY = padding.top + graphHeight - y * graphHeight;

		if (i === 0) {
			ctx.moveTo(pointX, pointY);
		} else {
			ctx.lineTo(pointX, pointY);
		}
	});
	ctx.strokeStyle = lineGradient;
	ctx.lineWidth = 3;
	ctx.stroke();

	// Draw temperature range bands
	const tempRanges = [
		{ min: 0, max: 0.2, color: "rgba(59, 130, 246, 0.2)" }, // Cold
		{ min: 0.2, max: 0.4, color: "rgba(147, 197, 253, 0.2)" }, // Cool
		{ min: 0.4, max: 0.6, color: "rgba(234, 179, 8, 0.2)" }, // Mild
		{ min: 0.6, max: 0.8, color: "rgba(245, 158, 11, 0.2)" }, // Warm
		{ min: 0.8, max: 1, color: "rgba(239, 68, 68, 0.2)" }, // Hot
	];

	// Draw data points with temperature indicators
	data.forEach(([x, y]) => {
		const pointX = padding.left + x * graphWidth;
		const pointY = padding.top + graphHeight - y * graphHeight;

		// Draw point
		ctx.beginPath();
		ctx.arc(pointX, pointY, 6, 0, Math.PI * 2);

		// Color based on temperature
		let pointColor;
		if (y < 0.3)
			pointColor = "rgba(59, 130, 246, 1)"; // Cold
		else if (y < 0.5)
			pointColor = "rgba(147, 197, 253, 1)"; // Cool
		else if (y < 0.7)
			pointColor = "rgba(234, 179, 8, 1)"; // Mild
		else if (y < 0.9)
			pointColor = "rgba(245, 158, 11, 1)"; // Warm
		else pointColor = "rgba(239, 68, 68, 1)"; // Hot

		ctx.fillStyle = pointColor;
		ctx.fill();
		ctx.strokeStyle = "white";
		ctx.lineWidth = 2;
		ctx.stroke();

		// Draw temperature value
		const temp = Math.round(50 + y * 50); // Scale to 50-100°F
		ctx.fillStyle = "white";
		ctx.font = "bold 10px Inter, sans-serif";
		ctx.textAlign = "center";
		ctx.fillText(`${temp}°`, pointX, pointY - 12);
	});

	// Draw axes labels
	ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
	ctx.font = "12px Inter, sans-serif";
	ctx.textAlign = "center";

	// X-axis labels (time)
	const times = ["12 AM", "4 AM", "8 AM", "12 PM", "4 PM", "8 PM", "12 AM"];
	times.forEach((time, i) => {
		const x = padding.left + (graphWidth / 6) * i;
		ctx.fillText(time, x, height - 10);
	});

	// Y-axis labels (temperature in °F)
	ctx.textAlign = "right";
	const temps = ["50°", "60°", "70°", "80°", "90°", "100°"];
	temps.forEach((temp, i) => {
		const y = padding.top + graphHeight - (graphHeight / 5) * i;
		ctx.fillText(temp, padding.left - 5, y + 4);
	});

	// Draw title
	ctx.textAlign = "left";
	ctx.font = "bold 14px Inter, sans-serif";
	ctx.fillText("Temperature Forecast (°F)", padding.left, 20);
}
