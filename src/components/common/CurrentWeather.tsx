"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "components/utils/Button";
import { Link } from "react-router-dom";
import Icon from "components/utils/Icon";

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

	return (
		<section
			className={`py-6 sm:pb-[84px] w-full ${alertType ? "sm:pt-[22px]" : "sm:pt-[100px]"} mx-auto sm:px-10 relative`}>
			{alertType ? (
				<>
					<div className="container relative text-bgc">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className={`flex items-center justify-between gap-2 py-2 px-3 sm:py-3 sm:px-4 mb-6 sm:mb-[22px] ${bgColor[alertType]} rounded-[10px] sm:rounded-2xl`}>
							<span
								className={`flex items-center justify-center w-4 sm:w-8 h-4 sm:h-8 rounded-full self-start ${bgColor[alertType]}/10`}>
								<Icon
									icon="info-fill"
									className={`w-3 sm:w-6 h-3 sm:h-6 rounded-full `}
								/>
							</span>
							<div className="grow text-xs sm:text-base">
								A tornado has been spotted nearby. Seek shelter immediately in a safe location.
							</div>
							<div
								className={`flex items-end sm:flex-row flex-col-reverse justify-center gap-2`}>
								<Link
									to={"/alerts"}
									className="underline text-[8px] sm:text-base font-semibold text-nowrap">
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
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="sm:mb-10 mb-6">
					<div className="flex items-start sm:flex-row flex-col gap-6">
						<div className="sm:w-[45%] w-full flex flex-col gap-6 sm:gap-10">
							<div className="flex items-center text-text dark:text-textDark gap-2">
								<img
									src="/assets/images/pin.png"
									alt="Location Icon"
									className="w-5 h-5 lg:w-7 lg:h-7 sm:mr-2"
								/>

								<h2 className="flex items-center text-sm sm:text-2xl font-semibold">
									{location.name}, {location.region}
									<span className="text-sm sm:text-base font-normal align-middle ml-[6px] sm:ml-[8px] md:ml-[10px]">
										As of 11:47 IST
									</span>
								</h2>
							</div>

							<div>
								<div className="flex items-center gap-16 sm:mb-4">
									<div className="relative sm:text-[100px] text-7xl leading-[1] font-semibold text-text dark:text-textDark">
										{Math.round(current.temp_f)}
										<span className="text-6xl font-bold text-text dark:text-textDark absolute top-1 right-[-56px]">
											°F
										</span>
									</div>
									<div className="pt-3">
										<img
											src="/assets/images/sun.png"
											alt="Sun Icon"
											className="w-[70px] h-[70px]"
										/>
									</div>
								</div>

								<div className="text-text dark:text-textDark text-base sm:text-xl font-medium">
									{current.condition.text}
								</div>
								<div className="text-text dark:text-textDark text-base sm:text-xl font-medium">
									Feels Like: {Math.round(current.feelslike_f)}°F
								</div>
							</div>
						</div>

						<div className="flex sm:gap-10 gap-4 sm:w-[55%] w-full">
							<motion.div
								className="w-1/2 "
								whileHover={{ y: -5 }}
								transition={{ type: "spring", stiffness: 300 }}>
								<TemperatureCard
									value={weatherData.forecast.forecastday[0].day.maxtemp_f.toString()}
									label="High"
								/>
							</motion.div>
							<motion.div
								className="w-1/2 "
								whileHover={{ y: -5 }}
								transition={{ type: "spring", stiffness: 300 }}>
								<TemperatureCard
									value={weatherData.forecast.forecastday[0].day.mintemp_f.toString()}
									label="Low"
								/>
							</motion.div>
						</div>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className=" sm:mb-14 mb-6">
					<motion.div
						whileHover={{ scale: 1.02 }}
						transition={{ type: "spring", stiffness: 400 }}
						className="flex flex-wrap flex-row bg-bgc dark:bg-fgcDark rounded-2xl sm:p-[30px] p-4">
						{/* Section 1: Humidity */}
						<div className="flex items-center justify-start w-1/2 sm:w-1/3 gap-3 sm:gap-6">
							<img
								src="assets/images/water-drop.png"
								alt="Droplet Icon"
								className="w-10 sm:w-12 h-auto"
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
								src="assets/images/wind-cloud-sun.png"
								alt="Cloud Sun Icon"
								className="w-10 sm:w-12 h-auto"
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
							<img src="assets/images/sun.png" alt="Sun Icon" className="w-10 sm:w-12 h-auto" />
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
					className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-5">
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

function TemperatureCard({ value, label }: { value: string; label: string }) {
	return (
		<div className="bg-bgc dark:bg-fgcDark rounded-2xl p-4 sm:py-10 sm:px-12 w-[100%] h-[auto] flex flex-col items-center justify-center sm:gap-9 gap-2.5">
			<div className="">
				<img src="assets/images/cloud.png" alt="Cloud Icon" className="w-auto sm:h-[62px] h-[42px]" />
			</div>
			<div className="text-center flex flex-col gap-0 sm:gap-2">
				<h3 className="relative inline-block sm:text-5xl text-[32px] font-bold text-text dark:text-textDark">
					<span className="mr-3">{value}</span>
					<span className="absolute top-1.5 sm:top-0 sm:right-[-10px] right-[-8px] text-xl sm:text-2xl font-bold">
						°F
					</span>
				</h3>
				<p className="sm:text-2xl text-base font-semibold dark:text-textDark text-textSecondary">{label}</p>
			</div>
		</div>
	);
}
