"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function HourlyForecast() {
	const [activeTab, setActiveTab] = useState("hourly");
	const [highlight, setHighlight] = useState(0);
	const [forecastData, setForecastData] = useState([
		{ time: "12 PM", temp: 72, condition: "Sunny", icon: "sun" },
		{ time: "1 PM", temp: 74, condition: "Partly Cloudy", icon: "partly-cloudy" },
		{ time: "2 PM", temp: 75, condition: "Mostly Cloudy", icon: "mostly-cloudy" },
		{ time: "3 PM", temp: 76, condition: "Cloudy", icon: "cloudy" },
		{ time: "4 PM", temp: 75, condition: "Cloudy", icon: "cloudy" },
		{ time: "5 PM", temp: 74, condition: "Cloudy", icon: "cloudy" },
		{ time: "6 PM", temp: 74, condition: "Cloudy", icon: "cloudy" },
		{ time: "7 PM", temp: 74, condition: "Cloudy", icon: "cloudy" },
		{ time: "8 PM", temp: 74, condition: "Cloudy", icon: "cloudy" },
	]);
	const [loading, setLoading] = useState(false);

	if (loading) {
		return <div className="text-center py-10">Loading forecast...</div>;
	}

	return (
		<section className="w-full mx-auto py-6 relative">
			<div className="container">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="mb-6 sm:mb-12 flex flex-col sm:flex-row sm:items-center justify-between">
					<h2 className="text-2xl sm:text-[40px] font-medium text-text dark:text-textDark mb-4">
						Interactive Forecast
					</h2>

					<div className="inline-block">
						<div className="inline-block bg-bgc dark:bg-fgcDark rounded-xl overflow-hidden shadow-[0_35px_35px_rgba(0,0,0,0.05)]">
							<motion.button
								whileTap={{ scale: 0.95 }}
								className={`cursor-pointer sm:w-auto px-6 sm:px-8 py-3 sm:py-3 text-sm sm:text-base transition-colors duration-200 ${
									activeTab === "hourly"
										? "bg-primary text-black font-semibold rounded-xl"
										: "bg-bgc dark:bg-fgcDark text-black dark:text-textDark"
								}`}
								onClick={() => setActiveTab("hourly")}>
								Hourly
							</motion.button>

							<motion.button
								whileTap={{ scale: 0.95 }}
								className={`cursor-pointer sm:w-auto px-6 sm:px-8 py-3 sm:py-3 text-sm sm:text-base transition-colors duration-200 ${
									activeTab === "daily"
										? "bg-primary text-black font-semibold  rounded-xl"
										: "bg-white dark:bg-fgcDark text-black dark:text-textDark"
								}`}
								onClick={() => setActiveTab("daily")}>
								Daily
							</motion.button>
						</div>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}>
					<Swiper
						navigation={true}
						modules={[Navigation]}
						spaceBetween={20}
						slidesPerView={2}
						breakpoints={{
							640: { slidesPerView: 3.2 },
							768: { slidesPerView: 4.2 },
							1024: { slidesPerView: 6 },
						}}
						className=""
						wrapperClass="py-6">
						{forecastData.map((item: any, index) => (
							<SwiperSlide key={index}>
								<motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
									<ForecastItem
										time={item.time}
										temp={item.temp}
										condition={item.condition}
										icon={item.icon}
										index={index}
										highlight={highlight}
									/>
								</motion.div>
							</SwiperSlide>
						))}
					</Swiper>
				</motion.div>
			</div>
		</section>
	);
}

function ForecastItem({
	time,
	temp,
	condition,
	icon,
	index,
	highlight,
}: {
	time: string;
	temp: number;
	condition: string;
	icon: string;
	index: number;
	highlight: number;
}) {
	const isFirstItem = index === highlight;
	return (
		<div
			className={`bg-bgc dark:bg-fgcDark rounded-xl p-4 sm:p-10 flex flex-col items-center gap-6 sm:gap-9 justify-center !shadow-[0_20px_35px_rgba(0,0,0,0.03)] ${isFirstItem ? "border-2 border-primary" : ""}`}>
			{/* Time */}
			{isFirstItem ? (
				<div className="absolute -top-3 sm:-top-4 z-1 bg-fgc dark:bg-bgcDark px-1.5 py-1 sm:px-3 sm:py-1.5 rounded-[6px] text-xs sm:text-base sm:rounded-[10px] text-text dark:text-textDark">
					Current
				</div>
			) : (
				""
			)}
			<p className="text-base sm:text-lg lg:text-2xl font-semibold text-textSecondary dark:text-textDark mb-2 sm:mb-3">
				{time}
			</p>

			{/* Icon */}
			<motion.div>{getWeatherIcon(icon)}</motion.div>

			<div className="flex flex-col items-center gap-2">
				{/* Temperature */}
				<h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-text dark:text-textDark flex items-start">
					{temp}
					<sup className="text-sm sm:text-base mt-2 font-semibold text-text dark:text-textDark align-super">
						°F
					</sup>
				</h3>

				{/* Condition */}
				<p className="text-base sm:text-[20px] font-semibold text-textSecondary dark:text-textDark text-center !-mx-6">
					{condition}
				</p>
			</div>
		</div>
	);
}

function getWeatherIcon(icon: string) {
	switch (icon) {
		case "sun":
			return (
				<img
					src="/assets/images/sunny.svg"
					alt="Droplet Icon"
					className="w-auto mx-auto h-[52px] sm:h-[70px]"
				/>
			);
		case "partly-cloudy":
			return (
				<img
					src="/assets/images/partly-cloudy.svg"
					alt="Droplet Icon"
					className="w-auto mx-auto h-[52px] sm:h-[70px]"
				/>
			);
		case "mostly-cloudy":
			return (
				<img
					src="/assets/images/partly-cloudy.svg"
					alt="Droplet Icon"
					className="w-auto mx-auto h-[52px] sm:h-[70px]"
				/>
			);
		case "cloudy":
			return (
				<img
					src="/assets/images/cloud-cover.svg"
					alt="Droplet Icon"
					className="w-auto mx-auto h-[52px] sm:h-[70px]"
				/>
			);
		case "clear":
			return (
				<img
					src="/assets/images/sunny.svg"
					alt="Droplet Icon"
					className="w-auto mx-auto h-[52px] sm:h-[70px]"
				/>
			);
		default:
			return (
				<img
					src="/assets/images/sunny.svg"
					alt="Droplet Icon"
					className="w-auto mx-auto h-[52px] sm:h-[70px]"
				/>
			);
	}
}
