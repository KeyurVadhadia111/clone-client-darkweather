import AIWeatherAssistant from "components/common/AIWeatherAssistant";
import CurrentWeather from "components/common/CurrentWeather";
import HourlyForecast from "components/common/HourlyForecast";
import { NewsFeedStories } from "components/common/NewsFeedStories";
import { WeatherInfo } from "components/common/WeatherInfo";
import { WeatherRadar } from "components/common/WeatherRadar";
import { useAppState } from "components/utils/useAppState";
import React, { JSX } from "react";

export const AlertsPage = (): JSX.Element => {
	return (
		<div className="min-h-screen flex flex-col items-center w-full">
			<div className="mt-10 text-2xl">Coming Soon</div>
		</div>
	);
};
export default AlertsPage;
