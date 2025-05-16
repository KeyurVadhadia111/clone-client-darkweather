import React, { JSX, useEffect, useRef, useState } from "react";
import { Button } from "../Button";
import WeatherForecast from "./WeatherForecast ";
import { useAppState } from "../useAppState";
import Icon from "../Icon";
import MonthlyForecast from "./MonthlyForecast";
import TodayForecasts from "./TodayForecasts ";

type ForecastData = {
	day: string;
	data: {
		time: string;
		temperature: string;
		condition: string;
		conditionIcon: string;
		precipitation: string;
		precipitationIcon: string;
		wind: string;
		expanded?: boolean;
	}[];
};

type Props = {
	forecasts: ForecastData[];
	weatherDetails: {
		icon: string;
		label: string;
		value: string;
	}[];
	SevendayForecast: any[];
	WeekendForecast: any[];
	TodayForecast: any[];
};
const ForecastList: React.FC<Props> = ({
	forecasts,
	weatherDetails,
	SevendayForecast,
	WeekendForecast,
	TodayForecast,
}) => {
	// Extract forecast data for Friday, Saturday, Sunday
	const fridayForecast = forecasts.find(f => f.day.toLowerCase() === "friday")?.data || [];
	const saturdayForecast = forecasts.find(f => f.day.toLowerCase() === "saturday")?.data || [];
	const sundayForecast = forecasts.find(f => f.day.toLowerCase() === "sunday")?.data || [];

	const ThisWeekend = WeekendForecast.find(f => f.day.toLowerCase() === "this weekend")?.data || [];
	const NextWeekend = WeekendForecast.find(f => f.day.toLowerCase() === "next weekend")?.data || [];

	const [expandedIndex, setExpandedIndex] = useState<{ day: string; index: number } | null>(null);

	const handleToggle = (day: string, index: number) => {
		setExpandedIndex(prevIndex => (prevIndex?.day === day && prevIndex.index === index ? null : { day, index }));
	};

	const [{ forecastTab }, setAppState] = useAppState();

	useEffect(() => {
		handleToggle("Friday 4 April", 0);

		return () => {
			true;
		};
	}, []);

	return (
		<div className={`flex flex-col ${forecastTab === "Weekend" ? "gap-4" : "gap-6"}`}>
			{forecastTab === "Today" ? (
				<>
					<TodayForecasts forecastData={TodayForecast} expandedIndex={expandedIndex} />
					<Button className=" bg-primary hover:bg-primary/60 self-center text-text text-sm sm:text-base w-[104px] h-[42px] lg:w-[112px] lg:h-14 font-semibold rounded-xl">
						Hourly
					</Button>
				</>
			) : (
				""
			)}

			{forecastTab === "Hourly" ? (
				<>
					<WeatherForecast
						day="Friday 4 April"
						forecastData={fridayForecast}
						expandedIndex={expandedIndex}
						handleToggle={handleToggle}
						weatherDetails={weatherDetails}
					/>

					<WeatherForecast
						day="Saturday 5 April"
						forecastData={saturdayForecast}
						expandedIndex={expandedIndex}
						handleToggle={handleToggle}
						weatherDetails={weatherDetails}
					/>

					<WeatherForecast
						day="Sunday 6 April"
						forecastData={sundayForecast}
						expandedIndex={expandedIndex}
						handleToggle={handleToggle}
						weatherDetails={weatherDetails}
					/>

					{/* 10 Day Weather Button */}
					<Button className=" bg-primary hover:bg-primary/60 self-center text-text text-xs sm:text-base w-[153px] h-[42px] lg:w-[168px] lg:h-14 font-semibold rounded-xl">
						10 Day Weather
					</Button>
				</>
			) : (
				""
			)}

			{forecastTab === "7 Day" ? (
				<>
					<WeatherForecast
						day="7-Day Weather"
						forecastData={SevendayForecast}
						expandedIndex={expandedIndex}
						handleToggle={handleToggle}
					/>

					<Button className=" bg-primary hover:bg-primary/60 self-center text-text text-xs sm:text-base w-[104px] h-[42px] lg:w-[112px] lg:h-14 font-semibold rounded-xl">
						Monthly
					</Button>
				</>
			) : (
				""
			)}

			{/* Weekend Weather */}
			{forecastTab === "Weekend" ? (
				<>
					<div className="flex flex-col items-start gap-2">
						<h2 className="font-semibold text-xl lg:text-2xl text-text dark:text-textDark ">
							Weekend Weather
						</h2>
						<p className="text-textSecondary dark:text-textDark text-xs lg:text-[14px] ">As of 11:47 IST</p>
					</div>
					<WeatherForecast
						day="This Weekend"
						forecastData={ThisWeekend}
						expandedIndex={expandedIndex}
						handleToggle={handleToggle}
					/>

					<WeatherForecast
						day="Next Weekend"
						forecastData={NextWeekend}
						expandedIndex={expandedIndex}
						handleToggle={handleToggle}
					/>
					<Button className=" bg-primary hover:bg-primary/60 self-center text-text text-sm sm:text-base w-[104px] h-[42px] lg:w-[112px] lg:h-14 font-semibold rounded-xl">
						Monthly
					</Button>
				</>
			) : (
				""
			)}

			{forecastTab === "Monthly" ? (
				<>
					<MonthlyForecast title="Monthly Weather" />
					<Button className=" bg-primary hover:bg-primary/60 self-center text-text text-sm sm:text-base w-[104px] h-[42px] lg:w-[112px] lg:h-14 font-semibold rounded-xl">
						Today
					</Button>
				</>
			) : (
				""
			)}
		</div>
	);
};

export default ForecastList;
