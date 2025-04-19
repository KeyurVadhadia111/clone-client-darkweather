import React, { JSX, useEffect } from "react";
import { Card } from "../Card";
import { Button } from "../Button";
import { Separator } from "../Separator";
import Icon from "../Icon";
import { Tabs, TabsList, TabsTrigger } from "../tabs";
import { useAppState } from "../useAppState";

const ForecastHero = (): JSX.Element => {
	const [{ forecastTab }, setAppState] = useAppState();
	// Weather data
	const weatherData = {
		location: "New York, NY",
		time: "As of 11:47 IST",
		condition: "Today: Sunny",
		precipitation: "Precipitation Chance: 0%",
		highTemp: "76",
		lowTemp: "62",
	};

	// Tab options for forecast view
	const forecastTabs = ["Today", "Hourly", "7 Day", "Weekend", "Monthly"];

	return (
		<>
			{/* Main weather card */}
			<div className="container">
				<Card className="w-full rounded-[16px] lg:rounded-[20px] mt-6 lg:mt-12 bg-bgc dark:bg-bgcDark">
					<div className="p-4 lg:p-10 ">
						{/* SearchIcon and location row */}
						<div className="flex items-center justify-center lg:justify-between gap-[16px] lg:gap-0 mb-6 lg:mb-12 flex-wrap">
							{/* SearchIcon input */}
							<div className="flex items-center h-11 lg:h-12 bg-bgc dark:bg-fgcDark rounded-[10px] shadow-[0_35px_35px_rgba(0,0,0,0.05)] overflow-hidden">
								<input
									className="h-full border-none pl-4 outline-0 ring-0 lg:pl-6 font-normal text-text dark:text-textDark text-[12px] lg:text-sm w-[350px] "
									placeholder="Search City or Zip Code"
								/>
								<Button className=" !min-w-9 !h-9  lg:!min-w-10 lg:!h-10 !border-none  flex items-center justify-center !p-0 !bg-text dark:!bg-bgc !rounded-lg mr-[2px] lg:mr-1">
									<Icon
										className="w-4 h-4 lg:w-5 lg:h-5 text-textDark dark:text-text"
										icon="search"
									/>
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
											className="w-10 h-[30px] lg:w-[63px] lg:h-[40px] dark:text-textDark rounded-lg font-normal">
											°F
										</TabsTrigger>
										<TabsTrigger
											value="celsius"
											className="w-10 h-[30px] lg:w-[63px] lg:h-[40px] dark:text-textDark rounded-lg font-normal">
											°C
										</TabsTrigger>
									</TabsList>
								</Tabs>
							</div>
						</div>

						{/* Weather information row */}
						<div className="flex items-center justify-center gap-6 lg:gap-0 lg:justify-between mb-6 lg:mb-12 flex-wrap  ">
							{/* Current weather */}
							<div className="flex items-center gap-3 lg:gap-4">
								<img
									className="w-[52px] h-[52px] lg:w-[76px] lg:h-[76px]"
									alt="Sunny weather icon"
									src="assets/images/sunny.svg"
								/>
								<div className="flex flex-col gap-3">
									<h2 className="font-semibold text-text dark:text-textDark text-2xl lg:text-3xl leading-[30px]">
										{weatherData.condition}
									</h2>
									<p className="font-normal text-textSecondary dark:text-textDark text-[14px] lg:text-base leading-6">
										{weatherData.precipitation}
									</p>
								</div>
							</div>

							{/* Temperature range */}
							<div className="flex items-center ">
								{/* High temperature */}
								<div className="flex items-center pr-[38px] lg:pr-12 gap-2 lg:gap-[30px] ">
									<img
										className="w-8 sm:w-12"
										alt="High temperature icon"
										src="assets/images/cloud-cover.svg"
									/>
									<div className="flex flex-col gap-1 lg:gap-2">
										<span className="font-semibold text-text dark:text-textDark text-[28px] sm:text-[30px] text-3xl leading-[30px] flex items-start">
											{weatherData.highTemp}
											<span className="text-lg -mt-1">°F</span>
										</span>
										<span className="font-medium text-textSecondary dark:text-textDark text-[14px] sm:text-base text-base leading-6">
											High
										</span>
									</div>
								</div>

								<Separator orientation="vertical" className="!h-[62px] !w-[1px]" />

								{/* Low temperature */}
								<div className="flex items-center pl-[38px] lg:pl-12 gap-2 lg:gap-[30px]">
									<img
										className="w-8 sm:w-12"
										alt="Low temperature icon"
										src="assets/images/cloud-cover.svg"
									/>
									<div className="flex flex-col gap-1 lg:gap-2">
										<span className="font-semibold text-text dark:text-textDark text-[28px] sm:text-[30px] text-3xl leading-[30px] flex items-start">
											{weatherData.lowTemp}
											<span className="text-lg -mt-1">°F</span>
										</span>
										<span className="font-medium text-textSecondary dark:text-textDark text-[14px] sm:text-base text-base leading-6">
											Low
										</span>
									</div>
								</div>
							</div>
						</div>

						{/* Forecast view tabs */}
						<Tabs defaultValue="Hourly" className="w-[280px] lg:w-[471px] mx-auto">
							<TabsList className="w-full bg-bgc dark:bg-fgcDark !h-[30px] lg:!h-10 rounded-lg shadow-[0_35px_35px_rgba(0,0,0,0.05)] !p-0">
								{forecastTabs.map(tab => (
									<TabsTrigger
										key={tab}
										value={tab}
										className=" px-[9px] py-[7px] lg:px-[24.9px] lg:py-[11px] dark:text-textDark text-xs lg:text-[14px] rounded-lg font-normal"
										onClick={() => setAppState({ forecastTab: tab })}>
										{tab}
									</TabsTrigger>
								))}
							</TabsList>
						</Tabs>
					</div>
				</Card>
			</div>
		</>
	);
};
export default ForecastHero;
