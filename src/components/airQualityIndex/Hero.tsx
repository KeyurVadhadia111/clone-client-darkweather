import { Button } from "@headlessui/react";
import Icon from "components/utils/Icon";
import { Separator } from "components/utils/Separator";
import { Tabs, TabsList, TabsTrigger } from "components/utils/tabs";
import React, { JSX, useState } from "react";

export const Hero = (): JSX.Element => {
	const [currentTemperature, setCurrentTemperature] = useState("fahrenheit");

	const weatherData = {
		location: "New York, NY",
		time: "As of 11:47 IST",
		highTemp: 76,
		lowTemp: 62,
	};

	const convertTemp = (temp: number, unit: string) => {
		if (unit === "celsius") {
			return Math.round(((temp - 32) * 5) / 9);
		}
		return temp;
	};

	return (
		<>
			<img
				className="hidden sm:block absolute w-[136px] sm:w-[214px] h-auto top-28 sm:top-48 -left-20 sm:-left-28 scale-x-[-1]"
				alt="Weather icon"
				src="assets/images/cloud-cover.svg"
			/>
			<img
				className="hidden sm:block absolute w-[136px] sm:w-[214px] h-auto top-28 sm:top-64 -right-16 sm:-right-[120px] scale-x-[-1]"
				alt="Weather icon"
				src="assets/images/cloud-cover.svg"
			/>
			<div className="w-full p-4 sm:px-10 sm:pt-10 sm:pb-[29px] mt-6 sm:mt-12 bg-bgc dark:bg-bgcDark rounded-t-[20px]">
				<div className="flex flex-col  gap-10 ">
					<div className="flex items-center justify-center lg:justify-between gap-[16px] lg:gap-0 flex-wrap w-full">
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
									{weatherData.location}
								</span>
								<span className="font-normal text-textSecondary dark:text-textDark text-xs lg:text-sm leading-[21px]">
									{weatherData.time}
								</span>
							</div>

							<Tabs
								defaultValue="fahrenheit"
								className="bg-bgc dark:bg-fgcDark rounded-lg shadow-[0_35px_35px_rgba(0,0,0,0.05)] ">
								<TabsList className="!p-0 bg-transparent">
									<TabsTrigger
										value="fahrenheit"
										className="w-10 h-[30px] lg:w-[63px] lg:h-[40px] dark:text-textDark rounded-lg font-normal"
										onClick={() => setCurrentTemperature("fahrenheit")}>
										°F
									</TabsTrigger>
									<TabsTrigger
										value="celsius"
										className="w-10 h-[30px] lg:w-[63px] lg:h-[40px] dark:text-textDark rounded-lg font-normal"
										onClick={() => setCurrentTemperature("celsius")}>
										°C
									</TabsTrigger>
								</TabsList>
							</Tabs>
						</div>
					</div>

					<div className="flex items-start justify-between w-full flex-[0_0_auto]">
						<div className="flex flex-col items-start gap-6 ">
							<div className="flex items-center gap-[15px] sm:gap-[35px] w-full flex-[0_0_auto]">
								<div className="inline-flex flex-col items-start justify-center gap-2.5 sm:gap-3 flex-[0_0_auto]">
									<div className="inline-flex gap-2 items-center flex-[0_0_auto]">
										<div className=" relative z-10 left-0.5 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#E75835] rounded-full" />
										<div className="absolute w-2.5 h-2.5 sm:w-3 sm:h-3 bg-[#E75935] opacity-50 rounded-full" />

										<div className="font-normal text-textSecondary dark:text-textDark text-xs sm:text-sm">
											Live AQI
										</div>
									</div>

									<span className="font-semibold text-text dark:text-textDark text-[28px] sm:text-[40px] leading-10 text-center">
										80
									</span>

									<div className="flex px-6 py-1 sm:px-8 sm:py-1.5 w-full bg-primary/10 rounded-sm sm:rounded-md border-[0.5px] border-solid border-primary items-center justify-center gap-8">
										<span className="font-semibold text-primary text-[10px] whitespace-nowrap">
											Poor
										</span>
									</div>
								</div>

								<div className="inline-flex gap-4 sm:gap-5 items-center flex-[0_0_auto]">
									<div className="inline-flex flex-col items-start justify-center gap-1.5 sm:gap-2 p-3.5 sm:p-4  flex-[0_0_auto] rounded-2xl">
										<div className="font-normal text-textSecondary dark:text-textDark text-sm sm:text-base  whitespace-nowrap">
											PM10
										</div>

										<p className="font-normal text-text dark:text-textDark text-base sm:text-2xl text-center whitespace-nowrap">
											<span className="font-semibold">63 </span>

											<span className="font-medium text-xs sm:text-base leading-4">μg/m³</span>
										</p>
									</div>

									<Separator orientation="vertical" className="!h-[88px] !w-[1px]" />

									<div className="inline-flex flex-col items-start justify-center gap-1.5 sm:gap-2 p-3.5 sm:p-4  flex-[0_0_auto] rounded-2xl">
										<div className="font-normal text-textSecondary dark:text-textDark text-sm sm:text-base  whitespace-nowrap">
											PM10
										</div>

										<p className="font-normal text-text dark:text-textDark text-base sm:text-2xl text-center whitespace-nowrap">
											<span className="font-semibold">63 </span>

											<span className="font-medium text-xs sm:text-base leading-4">μg/m³</span>
										</p>
									</div>
								</div>
							</div>

							<div className="flex flex-col items-start gap-3 w-full">
								{/* Top labels and bar */}
								<div className="flex w-full items-center">
									{[
										{ label: "Good", color: "#59b61f" },
										{ label: "Poor", color: "#f7a100" },
										{ label: "Unhealthy", color: "#e95478" },
										{ label: "Severe", color: "#b33fba" },
										{ label: "Hazardous", color: "#c92033" },
									].map((item, index) => (
										<div key={index} className="flex flex-col gap-2.5 items-center flex-1">
											<div className="text-[10px] sm:text-xs text-text dark:text-textDark font-normal">
												{item.label}
											</div>
											<div className="relative w-full h-[5px]">
												{/* AQI marker */}
												{index === 1 && (
													<div className="absolute -top-1 left-[65%] w-3 h-3 border-[2px] border-primary  rounded-full bg-bgc z-10 shadow-md" />
												)}
												<div
													className="h-full w-full"
													style={{ backgroundColor: item.color }}
												/>
											</div>
										</div>
									))}
								</div>

								{/* Number indicators */}
								<div className="flex w-full items-center justify-between sm:justify-around text-[8px] sm:text-[10px] text-textSecondary dark:text-textDark ">
									<span>0</span>
									<span>50</span>
									<span>100</span>
									<span>200</span>
									<span>300</span>
									<span>301+</span>
								</div>
							</div>
						</div>

						<div className="hidden sm:flex flex-col w-[537px] items-start gap-4 px-0 py-[30px]  rounded-2xl">
							<div className="flex items-center justify-between  w-full flex-[0_0_auto]">
								<div className="inline-flex gap-5 items-center  flex-[0_0_auto]">
									<img className=" w-12 h-12" alt="Cloud cover" src="assets/images/cloud-cover.svg" />

									<span className="font-semibold text-text dark:text-textDark text-3xl flex">
										{convertTemp(weatherData.highTemp, currentTemperature)}{" "}
										<span className="text-lg">
											°{currentTemperature === "fahrenheit" ? "F" : "C"}
										</span>
									</span>
								</div>

								<div className=" font-medium text-text dark:text-textDark text-xl text-center whitespace-nowrap">
									Overcast
								</div>

								<div className="flex w-[46px] h-[46px] items-center justify-center gap-2.5 p-2.5  bg-primary rounded-xl">
									<Icon icon="send" className="w-5 h-5" />
								</div>
							</div>

							<Separator className="bg-textSecondary/20 dark:!bg-textSecondary/30 !bg-none !w-full !h-px" />

							<div className="flex items-center justify-between  w-full flex-[0_0_auto]">
								<div className="flex  items-center gap-3 ">
									<img
										alt="Droplet Icon"
										className="w-10 h-10"
										src="assets/images/humidity.svg"></img>

									<div className="inline-flex flex-col items-start justify-center gap-1  flex-[0_0_auto]">
										<div className="font-normal text-textSecondary dark:text-textDark text-sm whitespace-nowrap">
											Humidity
										</div>

										<div className="font-semibold text-text dark:text-textDark text-lg text-center whitespace-nowrap">
											12%
										</div>
									</div>
								</div>

								<Separator orientation="vertical" className="!h-[36px] !w-[1px]" />

								<div className="flex  items-center gap-3 ">
									<img alt="Cloud Sun Icon" className="w-10 h-10" src="assets/images/wind.svg" />
									<div className="inline-flex flex-col items-start justify-center gap-1  flex-[0_0_auto]">
										<div className="font-normal text-textSecondary dark:text-textDark text-sm whitespace-nowrap">
											Wind
										</div>

										<div className="font-semibold text-text dark:text-textDark text-lg text-center whitespace-nowrap">
											8 km/h
										</div>
									</div>
								</div>

								<Separator orientation="vertical" className="!h-[36px] !w-[1px]" />

								<div className="flex  items-center gap-3 ">
									<img alt="uv-index Icon" className="w-10 h-10" src="assets/images/uv-index.svg" />

									<div className="inline-flex flex-col items-start justify-center gap-1  flex-[0_0_auto]">
										<div className="font-normal text-textSecondary dark:text-textDark text-sm whitespace-nowrap">
											UV Index
										</div>

										<div className="font-semibold text-text dark:text-textDark text-lg text-center whitespace-nowrap">
											4 of 11
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
