import React from "react";
import { Card, CardContent } from "../Card";
import { Separator } from "../Separator";
import Icon from "../Icon";
import HourlyForecastDetails from "./details/HourlyForecastDetails";
import { useAppState } from "../useAppState";

interface ForecastProps {
	day: string;
	forecastData: any[];
	expandedIndex: any;
	handleToggle: (day: string, index: number) => void;
	weatherDetails: any[];
}

const WeatherForecast: React.FC<ForecastProps> = ({
	day,
	forecastData,
	expandedIndex,
	handleToggle,
	weatherDetails,
}) => {
	const [{ forecastTab }, setAppState] = useAppState();

	return (
		<div className="flex flex-col gap-4">

			{forecastTab === "Hourly" && (
				<h2 className="font-semibold text-xl lg:text-2xl text-text dark:text-textDark ">
					{day}
				</h2>
			)}
			<div className="flex flex-col rounded-xl">
				{forecastData.map((forecast, index) => (
					<React.Fragment key={index}>
						<div
							className="flex items-center justify-between p-4 lg:p-6 cursor-pointer"
							onClick={() => handleToggle(day, index)}>
							{forecastTab === "Hourly" && (
								<div className=" w-[48px] lg:w-[60px]  text-textSecondary dark:text-textDark text-base lg:text-xl tracking-[1px]">
									{forecast.time}
								</div>
							)}
							<div className="lg:w-14  font-semibold text-text dark:text-textDark text-xl lg:text-2xl flex items-start">
								{forecast.temperature}
								<span className="text-[14px] lg:text-lg">°F</span>
							</div>
							<div className="flex items-center gap-1.5 lg:w-[173px]">
								<img
									className="w-6 h-6 lg:w-[30px] lg:h-[30px]"
									alt="Weather condition"
									src={forecast.conditionIcon}
								/>
								<span className="hidden lg:block  text-textSecondary dark:text-textDark text-xl tracking-[1px] whitespace-nowrap">
									{forecast.condition}
								</span>
							</div>
							<div className="flex lg:w-20 items-center gap-1.5">
								<img
									className="w-6 h-6 lg:w-[30px] lg:h-[30px]"
									alt="Precipitation"
									src={forecast.precipitationIcon}
								/>
								<span className=" text-textSecondary dark:text-textDark text-base lg:text-xl tracking-[1px] whitespace-nowrap">
									{forecast.precipitation}
								</span>
							</div>
							<div className="hidden lg:block w-[110px]  text-textSecondary dark:text-textDark text-xl tracking-[1px]">
								{forecast.wind}
							</div>
							<span className="text-2xl text-textSecondary dark:text-textDark">
								{expandedIndex?.day === day && expandedIndex.index === index ? (
									<Icon icon="minus" className="w-4 h-4 lg:w-5 lg:h-5" />
								) : (
									<Icon icon="plus" className="w-4 h-4 lg:w-5 lg:h-5" />
								)}
							</span>
						</div>

						{/* Show expandable details only if this index is selected */}
						{expandedIndex?.day === day && expandedIndex.index === index && (
							<>
								{forecastTab === "Hourly" ? (
									<HourlyForecastDetails weatherDetails={weatherDetails} />
								) : (
									""
								)}
							</>
						)}

						{index < forecastData.length - 1 &&
							!(expandedIndex?.day === day && expandedIndex.index === index) && (
								<Separator className="bg-textSecondary/20 dark:!bg-textSecondary/30 !bg-none" />
							)}
					</React.Fragment>
				))}
			</div>
		</div>
	);
};

export default WeatherForecast;
