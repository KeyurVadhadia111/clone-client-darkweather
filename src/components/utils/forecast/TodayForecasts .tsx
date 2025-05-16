import React from "react";
import { Separator } from "../Separator";
import { useAppState } from "../useAppState";
import TodayForecastDetails from "./details/TodayForecastDetails";

interface ForecastProps {
	forecastData: any[];
	expandedIndex: any;
}

const TodayForecasts: React.FC<ForecastProps> = ({ forecastData, expandedIndex }) => {
	const [{ forecastTab }, setAppState] = useAppState();

	return (
		<div className={`flex flex-col gap-3 sm:gap-4`}>
			<div className="flex flex-col items-start gap-2">
				<h2 className="font-semibold text-xl lg:text-2xl text-text dark:text-textDark ">Today Weather</h2>
				<p className="text-textSecondary dark:text-textDark text-xs lg:text-[14px] ">As of 10:23 IST</p>
			</div>

			<div className="flex flex-col rounded-xl">
				<TodayForecastDetails />
				{forecastData.map((forecast, index) => (
					<React.Fragment key={index}>
						<div
							className="flex items-center justify-between p-4 lg:p-6 cursor-pointer"
							onClick={() => setAppState({ forecastTab: "Hourly" })}>
							<div className=" w-[95px]  text-textSecondary dark:text-textDark text-base lg:text-xl tracking-[1px]">
								{forecast.day}
							</div>
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
						</div>

						{/* Show Separator only if not last item */}
						{index < forecastData.length - 1 && (
							<Separator className="bg-textSecondary/20 dark:!bg-textSecondary/30 !bg-none" />
						)}
					</React.Fragment>
				))}
			</div>
		</div>
	);
};

export default TodayForecasts;
