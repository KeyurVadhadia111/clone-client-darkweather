import { Hero } from "components/airQualityIndex/Hero";
import { HistoricalAirQualityData } from "components/airQualityIndex/HistoricalAirQualityData";
import { MajorAirPollutants } from "components/airQualityIndex/MajorAirPollutants";
import { MostPollutedCities } from "components/airQualityIndex/MostPollutedCities";
import AIWeatherAssistant from "components/common/AIWeatherAssistant";
import React, { JSX } from "react";

export const AirQualityIndexPage = (): JSX.Element => {
	return (
		<>
			<div className="container flex flex-col gap-6 sm:gap-[72px] ">
				<Hero />
				<MajorAirPollutants />
				<HistoricalAirQualityData />
				<MostPollutedCities />
				<AIWeatherAssistant />
			</div>
		</>
	);
};
