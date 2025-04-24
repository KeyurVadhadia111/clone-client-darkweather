import AIWeatherAssistant from "components/common/AIWeatherAssistant";
import CurrentWeather from "components/common/CurrentWeather";
import HourlyForecast from "components/common/HourlyForecast";
import { NewsFeedStories } from "components/common/NewsFeedStories";
import { NewsFeedStoriesOne } from "components/common/NewsFeedStoriesOne";
import { WeatherInfo } from "components/common/WeatherInfo";
import { WeatherRadar } from "components/common/WeatherRadar";
import { useAppState } from "components/utils/useAppState";
import React, { JSX } from "react";

export const LandingPage = (): JSX.Element => {
	const [{ isDark, userDetails }, setAppState] = useAppState();

	return (
		<div className="min-h-screen flex flex-col items-center w-full">
			<CurrentWeather />
			{userDetails?._id && (
				<>
					<HourlyForecast />
					<WeatherRadar />
					<AIWeatherAssistant />
				</>
			)}
			{!userDetails?._id && (
				<>
					<NewsFeedStoriesOne />
				</>
			)}
			<WeatherInfo />
			{userDetails?._id && <NewsFeedStories />}
			{!userDetails?._id && <AIWeatherAssistant />}
		</div>
	);
};
export default LandingPage;
