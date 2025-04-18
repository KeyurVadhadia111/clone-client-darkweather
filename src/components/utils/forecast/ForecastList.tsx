import React, { JSX, useEffect, useState } from "react";
import { Button } from "../Button";
import WeatherForecast from "./WeatherForecast ";
import { useAppState } from "../useAppState";

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
};
const ForecastList: React.FC<Props> = ({ forecasts, weatherDetails, SevendayForecast }) => {
	// Extract forecast data for Friday, Saturday, Sunday
	const fridayForecast = forecasts.find(f => f.day.toLowerCase() === "friday")?.data || [];
	const saturdayForecast = forecasts.find(f => f.day.toLowerCase() === "saturday")?.data || [];
	const sundayForecast = forecasts.find(f => f.day.toLowerCase() === "sunday")?.data || [];

	const [expandedIndex, setExpandedIndex] = useState<{ day: string; index: number } | null>(null);

	const handleToggle = (day: string, index: number) => {
		setExpandedIndex(prevIndex => (prevIndex?.day === day && prevIndex.index === index ? null : { day, index }));
	};

	const [{ forecastTab }, setAppState] = useAppState();

	useEffect(() => {
		handleToggle("Friday 4 April", 0);

		return () => {
			true;
		}
	}, [])


	return (
		<div className="flex flex-col gap-6">
			{forecastTab === "Today" || forecastTab === "Weekend" || forecastTab === "Monthly" || forecastTab === "7 Day" ? (
				<div className="text-3xl text-center">Coming Soon</div>
			) : ''}

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

		</div>
	);
};

export default ForecastList;
