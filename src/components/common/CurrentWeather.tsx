"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "components/utils/Button";
import { Link } from "react-router-dom";
import Icon from "components/utils/Icon";
import { Tabs, TabsList, TabsTrigger } from "components/utils/tabs";

enum AlertType {
	Error = "error",
	Warning = "warning",
	Success = "success",
}

const bgColor = {
	[AlertType.Error]: "bg-error",
	[AlertType.Warning]: "bg-warning",
	[AlertType.Success]: "bg-success",
};
export default function CurrentWeather() {
	const mockWeatherData = {
		location: {
			name: "New York",
			region: "NY",
			country: "United States",
			lat: 40.71,
			lon: -74.01,
			localtime: "2023-07-15 12:30",
		},
		current: {
			temp_f: 72,
			temp_c: 22.2,
			condition: {
				text: "Sunny with light breeze",
				icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
			},
			wind_mph: 6,
			wind_dir: "SW",
			humidity: 40,
			feelslike_f: 74,
			feelslike_c: 23.3,
			uv: 5,
		},
		forecast: {
			forecastday: [
				{
					date: "2023-07-15",
					day: {
						maxtemp_f: 78,
						maxtemp_c: 25.6,
						mintemp_f: 65,
						mintemp_c: 18.3,
						condition: {
							text: "Partly cloudy",
							icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
						},
					},
					hour: [
						{
							time: "2023-07-15 12:00",
							temp_f: 72,
							temp_c: 22.2,
							condition: {
								text: "Sunny with light breeze",
								icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
							},
						},
						{
							time: "2023-07-15 13:00",
							temp_f: 74,
							temp_c: 23.3,
							condition: {
								text: "Partly cloudy",
								icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
							},
						},
						// Additional hours would be here
					],
				},
			],
		},
		alerts: {
			alert: [
				{
					headline: "Thunderstorm Warning",
					severity: "Moderate",
					urgency: "Expected",
					areas: "New York City",
					desc: "Heavy rain and strong winds expected from 3 PM to 9 PM. Stay indoors if possible.",
					effective: "2023-07-15T15:00:00",
					expires: "2023-07-15T21:00:00",
				},
			],
		},
	};
	const [weatherData, setWeatherData] = useState<any>(mockWeatherData);
	const [loading, setLoading] = useState(false);
	const [alertType, setAlertType] = useState<AlertType | null>(AlertType.Error);

	if (loading) {
		return <div className="text-center py-10">Loading weather data...</div>;
	}

	if (!weatherData) {
		return null;
	}

	const { location, current } = weatherData;

	const [currentTemperature, setCurrentTemperature] = useState("f");

	return (
		<section
			className={`py-6 sm:pb-[40px] w-full ${alertType ? "pt-1.5 sm:pt-2" : "sm:pt-[72px]"} mx-auto sm:px-10 relative`}>
			{alertType ? (
				<>
					<div className="container relative text-bgc">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className={`flex items-center justify-between gap-2 py-2 px-3 sm:py-3 sm:px-4 mb-1.5 sm:mb-2 ${bgColor[alertType]} rounded-[10px] sm:rounded-2xl`}>
							<span
								className={`flex items-center justify-center w-4 sm:w-8 h-4 sm:h-8 rounded-full self-start ${bgColor[alertType]}/10`}>
								<Icon icon="info-fill" className={`w-3 sm:w-6 h-3 sm:h-6 rounded-full `} />
							</span>
							<div className="grow text-xs sm:text-base">
								A tornado has been spotted nearby. Seek shelter immediately in a safe location.
								<Link
									to={"/alerts"}
									className="block sm:hidden underline text-[8px] sm:text-base font-semibold text-nowrap">
									View Details
								</Link>
							</div>
							<div
								className={`flex items-end sm:flex-row flex-col-reverse justify-start sm:justify-center gap-2`}>
								<Link
									to={"/alerts"}
									className="hidden sm:block underline text-[8px] sm:text-base font-semibold text-nowrap">
									View Details
								</Link>
								<Icon
									icon="close"
									className={`w-3 sm:w-6 h-3 sm:h-6 rounded-full cursor-pointer`}
									onClick={() => setAlertType(null)}
								/>
							</div>
						</motion.div>
					</div>
				</>
			) : (
				""
			)}

			<div className="container relative">
				{/* SearchIcon and location row */}

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="flex items-center justify-center lg:justify-between gap-[16px] lg:gap-0  flex-wrap">
					{/* SearchIcon input */}
					<div className="flex items-center h-11 lg:h-12 bg-bgc dark:bg-fgcDark rounded-[10px] shadow-[0_35px_35px_rgba(0,0,0,0.05)] overflow-hidden">
						<input
							className="h-full border-none pl-4 outline-0 ring-0 lg:pl-6 font-normal text-text dark:text-textDark text-[12px] lg:text-sm w-[350px] "
							placeholder="Search City or Zip Code"
						/>
						<Button className=" !min-w-9 !h-9  lg:!min-w-10 lg:!h-10 !border-none  flex items-center justify-center !p-0 !bg-text dark:!bg-bgc !rounded-lg mr-[2px] lg:mr-1">
							<Icon className="w-4 h-4 lg:w-5 lg:h-5 text-textDark dark:text-text" icon="search" />
						</Button>
					</div>

					{/* Location and temperature unit toggle */}
					<div className="flex items-center w-full lg:w-[282px] justify-between">
						<div className="flex flex-col">
							<span className="font-medium text-text dark:text-textDark text-base lg:text-xl text-center leading-[26px]">
								{location.name}, {location.region}
							</span>
							<span className="font-normal text-textSecondary dark:text-textDark text-xs lg:text-sm leading-[21px]">
								As of 11:47 IST
							</span>
						</div>

						<Tabs
							defaultValue="fahrenheit"
							className="bg-bgc dark:bg-fgcDark rounded-lg shadow-[0_35px_35px_rgba(0,0,0,0.05)] ">
							<TabsList className="!p-0 bg-transparent">
								<TabsTrigger
									value="fahrenheit"
									className="w-10 h-[30px] lg:w-[63px] lg:h-[40px] dark:text-textDark rounded-lg font-normal"
									onClick={() => setCurrentTemperature("f")}>
									°F
								</TabsTrigger>
								<TabsTrigger
									value="celsius"
									className="w-10 h-[30px] lg:w-[63px] lg:h-[40px] dark:text-textDark rounded-lg font-normal"
									onClick={() => setCurrentTemperature("c")}>
									°C
								</TabsTrigger>
							</TabsList>
						</Tabs>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="sm:mb-[23px] mb-4">
					<div className="flex items-start sm:flex-row flex-col gap-6">
						<div className="sm:w-[45%] w-full flex flex-col gap-6 sm:gap-10">
							<div>
								<div className="flex items-center gap-16 mt-4 sm:mt-8 sm:mb-4">
									<div className="relative sm:text-[100px] text-7xl leading-[1] font-semibold text-text dark:text-textDark">
										{currentTemperature === "f"
											? Math.round(current.temp_f)
											: Math.round(current.temp_c)}
										<span className="text-6xl font-bold text-text dark:text-textDark absolute top-1 right-[-56px]">
											{currentTemperature === "f" ? "°F" : "°C"}
										</span>
									</div>
									<div className="pt-3">
										<img
											src="/assets/images/sunny.svg"
											alt="Sun Icon"
											className="w-[70px] h-[70px]"
										/>
									</div>
								</div>

								<div className="text-text dark:text-textDark text-base sm:text-xl font-medium">
									{current.condition.text}
								</div>
								<div className="text-text dark:text-textDark text-base sm:text-xl font-medium">
									Feels Like:{" "}
									{currentTemperature === "f"
										? Math.round(current.feelslike_f)
										: Math.round(current.feelslike_c)}
									°{currentTemperature === "f" ? "F" : "C"}
								</div>
							</div>
						</div>

						<div className="flex sm:gap-10 gap-4 sm:w-[55%] w-full mt-4">
							<motion.div
								className="w-1/2 "
								whileHover={{ y: -5 }}
								transition={{ type: "spring", stiffness: 300 }}>
								<TemperatureCard
									value={
										currentTemperature === "f"
											? weatherData.forecast.forecastday[0].day.maxtemp_f.toString()
											: weatherData.forecast.forecastday[0].day.maxtemp_c.toString()
									}
									label="High"
									currentTemperature={currentTemperature}
								/>
							</motion.div>
							<motion.div
								className="w-1/2 "
								whileHover={{ y: -5 }}
								transition={{ type: "spring", stiffness: 300 }}>
								<TemperatureCard
									value={
										currentTemperature === "f"
											? weatherData.forecast.forecastday[0].day.mintemp_f.toString()
											: weatherData.forecast.forecastday[0].day.mintemp_c.toString()
									}
									label="Low"
									currentTemperature={currentTemperature}
								/>
							</motion.div>
						</div>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className=" sm:mb-6	 mb-4">
					<motion.div
						whileHover={{ scale: 1.02 }}
						transition={{ type: "spring", stiffness: 400 }}
						className="flex flex-wrap flex-row bg-bgc dark:bg-fgcDark rounded-2xl sm:p-[16px] p-4">
						{/* Section 1: Humidity */}
						<div className="flex items-center justify-start w-1/2 sm:w-1/3 gap-3 sm:gap-6">
							<img
								src="assets/images/humidity.svg"
								alt="Droplet Icon"
								className="w-[42px] h-[42px] sm:w-14 sm:h-14"
							/>
							<div className="flex flex-col">
								<p className="text-base sm:text-lg lg:text-2xl font-bold text-text dark:text-textDark">
									{`${current.humidity}%`}
								</p>
								<p className="text-sm sm:text-base text-textSecondary">Humidity</p>
							</div>
						</div>

						{/* Section 2: Wind */}
						<div className="flex items-center justify-start w-1/2 sm:w-1/3 sm:pl-[30px] pl-[14px] border-l border-gray-300 dark:border-gray-600 gap-3 sm:gap-6">
							<img
								src="assets/images/wind.svg"
								alt="Cloud Sun Icon"
								className="w-[42px] h-[42px] sm:w-14 sm:h-14"
							/>
							<div className="flex flex-col">
								<p className="text-base sm:text-lg lg:text-2xl font-bold text-text dark:text-textDark">
									{`${current.wind_mph} mph ${current.wind_dir}`}
								</p>
								<p className="text-sm sm:text-base text-textSecondary">Wind</p>
							</div>
						</div>

						{/* Section 3: UV Index */}
						<div className="flex items-center sm:justify-start justify-center w-full sm:w-1/3 sm:pt-0 pt-4 sm:pl-[30px] sm:border-l sm:border-t-0 border-t border-gray-300 dark:border-gray-600 sm:mt-0 mt-4 gap-3 sm:gap-6">
							<img
								src="assets/images/uv-index.svg"
								alt="uv-index Icon"
								className="w-[42px] h-[42px] sm:w-14 sm:h-14"
							/>
							<div className="flex flex-col">
								<p className="text-base sm:text-lg lg:text-2xl font-bold text-text dark:text-textDark">
									{getUVIndexText(current.uv)}
								</p>
								<p className="text-sm sm:text-base text-textSecondary">UV Index</p>
							</div>
						</div>
					</motion.div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
					<Link to={"/forecast"}>
						<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
							<Button className="w-full sm:w-fit" size="lg">
								View Hourly Forecast
							</Button>
						</motion.div>
					</Link>

					<Link to={"/forecast"}>
						<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
							<Button className="w-full sm:w-fit" variant="outline" size="lg">
								See 7-Day Forecast
							</Button>
						</motion.div>
					</Link>
				</motion.div>
			</div>
		</section>
	);
}

function getUVIndexText(uv: number): string {
	if (uv <= 2) return "Low";
	if (uv <= 5) return "Moderate";
	if (uv <= 7) return "High";
	if (uv <= 10) return "Very High";
	return "Extreme";
}

function TemperatureCard({
	value,
	label,
	currentTemperature,
}: {
	value: string;
	label: string;
	currentTemperature: string;
}) {
	return (
		<div className="bg-bgc dark:bg-fgcDark rounded-2xl sm:rounded-[20px] px-4 py-3 sm:py-4 sm:px-12 w-[100%] h-[auto] flex flex-col items-center justify-center sm:gap-4 gap-2.5">
			<div className="">
				<img src="assets/images/cloud-cover.svg" alt="Cloud Icon" className="w-auto sm:h-[52px] h-[32px]" />
			</div>
			<div className="text-center flex flex-col gap-0 sm:gap-2">
				<h3 className="relative inline-block sm:text-5xl text-[32px] font-bold text-text dark:text-textDark">
					<span className="mr-3">{value}</span>
					<span className="absolute top-1.5 sm:top-0 sm:right-[-10px] right-[-8px] text-xl sm:text-2xl font-bold">
						°{currentTemperature.toUpperCase()}
					</span>
				</h3>
				<p className="sm:text-2xl text-base font-semibold dark:text-textDark text-textSecondary">{label}</p>
			</div>
		</div>
	);
}
