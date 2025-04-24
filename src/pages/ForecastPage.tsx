import React, { JSX } from "react";
import { WeatherRadar } from "components/common/WeatherRadar";
import { TemperatureTrend } from "components/common/TemperatureTrend";
import { NewsFeedStories } from "components/common/NewsFeedStories";
import WeatherCondition from "components/utils/forecast/WeatherCondition";
import ForecastHero from "components/utils/forecast/ForecastHero";
import ForecastList from "components/utils/forecast/ForecastList";

// Weather forecast data for Friday
const fridayForecast = [
	{
		time: "16:30",
		temperature: "37",
		condition: "Partly Cloudy",
		conditionIcon: "assets/images/partly-cloudy.svg",
		precipitation: "0%",
		precipitationIcon: "assets/images/rain-amount.svg",
		wind: "W 3 km/h",
		expanded: true,
	},
	{
		time: "17:30",
		temperature: "35",
		condition: "Mostly Sunny",
		conditionIcon: "assets/images/mostly-sunny.svg",
		precipitation: "0%",
		precipitationIcon: "assets/images/rain-amount.svg",
		wind: "W 13 km/h",
	},
	{
		time: "18:30",
		temperature: "34",
		condition: "Clear",
		conditionIcon: "assets/images/clear.svg",
		precipitation: "0%",
		precipitationIcon: "assets/images/rain-amount.svg",
		wind: "W 17 km/h",
	},
	{
		time: "19:30",
		temperature: "32",
		condition: "Clear",
		conditionIcon: "assets/images/clear.svg",
		precipitation: "0%",
		precipitationIcon: "assets/images/rain-amount.svg",
		wind: "W 14 km/h",
	},
	{
		time: "20:30",
		temperature: "30",
		condition: "Partly Cloudy",
		conditionIcon: "assets/images/partly-cloudy.svg",
		precipitation: "0%",
		precipitationIcon: "assets/images/rain-amount.svg",
		wind: "W 3 km/h",
	},
	{
		time: "21:30",
		temperature: "31",
		condition: "Mostly Sunny",
		conditionIcon: "assets/images/mostly-sunny.svg",
		precipitation: "0%",
		precipitationIcon: "assets/images/rain-amount.svg",
		wind: "W 08 km/h",
	},
	{
		time: "22:30",
		temperature: "32",
		condition: "Clear",
		conditionIcon: "assets/images/clear.svg",
		precipitation: "0%",
		precipitationIcon: "assets/images/rain-amount.svg",
		wind: "W 05 km/h",
	},
	{
		time: "23:30",
		temperature: "33",
		condition: "Clear",
		conditionIcon: "assets/images/clear.svg",
		precipitation: "0%",
		precipitationIcon: "assets/images/rain-amount.svg",
		wind: "W 10 km/h",
	},
];

// Weather forecast data for Friday
const SevendayForecast = [
	{
		day: "Today",
		temperature: "35",
		condition: "Partly Cloudy",
		conditionIcon: "assets/images/partly-cloudy.svg",
		precipitation: "0%",
		precipitationIcon: "assets/images/rain-amount.svg",
		wind: "W 13 km/h",
	},
	{
		day: "Sun 06",
		temperature: "35",
		condition: "Mostly Sunny",
		conditionIcon: "assets/images/mostly-sunny.svg",
		precipitation: "0%",
		precipitationIcon: "assets/images/rain-amount.svg",
		wind: "W 13 km/h",
	},
	{
		day: "Mon 07",
		temperature: "34",
		condition: "Clear",
		conditionIcon: "assets/images/clear.svg",
		precipitation: "0%",
		precipitationIcon: "assets/images/rain-amount.svg",
		wind: "W 17 km/h",
	},
	{
		day: "Tue 08",
		temperature: "32",
		condition: "Clear",
		conditionIcon: "assets/images/clear.svg",
		precipitation: "0%",
		precipitationIcon: "assets/images/rain-amount.svg",
		wind: "W 14 km/h",
	},
	{
		day: "Wed 09",
		temperature: "30",
		condition: "Partly Cloudy",
		conditionIcon: "assets/images/partly-cloudy.svg",
		precipitation: "0%",
		precipitationIcon: "assets/images/rain-amount.svg",
		wind: "W 3 km/h",
	},
	{
		day: "Thu 10",
		temperature: "31",
		condition: "Mostly Sunny",
		conditionIcon: "assets/images/mostly-sunny.svg",
		precipitation: "0%",
		precipitationIcon: "assets/images/rain-amount.svg",
		wind: "W 08 km/h",
	},
	{
		day: "Fri 11",
		temperature: "32",
		condition: "Clear",
		conditionIcon: "assets/images/clear.svg",
		precipitation: "0%",
		precipitationIcon: "assets/images/rain-amount.svg",
		wind: "W 05 km/h",
	},
];

// Weather forecast data for Saturday
const saturdayForecast = [
	{
		time: "00:30",
		temperature: "26",
		condition: "Clear",
		conditionIcon: "assets/images/clear.svg",
		precipitation: "0%",
		precipitationIcon: "assets/images/rain-amount.svg",
		wind: "W 02 km/h",
	},
	{
		time: "01:30",
		temperature: "26",
		condition: "Clear",
		conditionIcon: "assets/images/clear.svg",
		precipitation: "0%",
		precipitationIcon: "assets/images/rain-amount.svg",
		wind: "W 19 km/h",
	},
	{
		time: "02:30",
		temperature: "24",
		condition: "Partly Cloudy",
		conditionIcon: "assets/images/partly-cloudy.svg",
		precipitation: "0%",
		precipitationIcon: "assets/images/rain-amount.svg",
		wind: "W 12 km/h",
	},
	{
		time: "03:30",
		temperature: "23",
		condition: "Partly Cloudy",
		conditionIcon: "assets/images/partly-cloudy.svg",
		precipitation: "0%",
		precipitationIcon: "assets/images/rain-amount.svg",
		wind: "W 05 km/h",
	},
	{
		time: "04:30",
		temperature: "21",
		condition: "Clear",
		conditionIcon: "assets/images/clear.svg",
		precipitation: "0%",
		precipitationIcon: "assets/images/rain-amount.svg",
		wind: "W 04 km/h",
	},
	{
		time: "05:30",
		temperature: "28",
		condition: "Partly Cloudy",
		conditionIcon: "assets/images/clear.svg",
		precipitation: "0%",
		precipitationIcon: "assets/images/rain-amount.svg",
		wind: "W 06 km/h",
	},
	{
		time: "06:30",
		temperature: "35",
		condition: "Mostly Sunny",
		conditionIcon: "assets/images/mostly-sunny.svg",
		precipitation: "0%",
		precipitationIcon: "assets/images/rain-amount.svg",
		wind: "W 14 km/h",
	},
	{
		time: "07:30",
		temperature: "37",
		condition: "Mostly Sunny",
		conditionIcon: "assets/images/mostly-sunny.svg",
		precipitation: "0%",
		precipitationIcon: "assets/images/rain-amount.svg",
		wind: "W 13 km/h",
	},
];

// Weather forecast data for Sunday
const sundayForecast = [
	{
		time: "00:30",
		temperature: "24",
		condition: "Clear",
		conditionIcon: "assets/images/clear.svg",
		precipitation: "0%",
		precipitationIcon: "assets/images/rain-amount.svg",
		wind: "W 06 km/h",
	},
	{
		time: "01:30",
		temperature: "25",
		condition: "Clear",
		conditionIcon: "assets/images/clear.svg",
		precipitation: "0%",
		precipitationIcon: "assets/images/rain-amount.svg",
		wind: "W 10 km/h",
	},
	{
		time: "02:30",
		temperature: "24",
		condition: "Clear",
		conditionIcon: "assets/images/clear.svg",
		precipitation: "0%",
		precipitationIcon: "assets/images/rain-amount.svg",
		wind: "W 12 km/h",
	},
	{
		time: "03:30",
		temperature: "23",
		condition: "Partly Cloudy",
		conditionIcon: "assets/images/partly-cloudy.svg",
		precipitation: "0%",
		precipitationIcon: "assets/images/rain-amount.svg",
		wind: "W 25 km/h",
	},
	{
		time: "04:30",
		temperature: "26",
		condition: "Mostly Sunny",
		conditionIcon: "assets/images/mostly-sunny.svg",
		precipitation: "0%",
		precipitationIcon: "assets/images/rain-amount.svg",
		wind: "W 20 km/h",
	},
	{
		time: "05:30",
		temperature: "32",
		condition: "Partly Cloudy",
		conditionIcon: "assets/images/partly-cloudy.svg",
		precipitation: "0%",
		precipitationIcon: "assets/images/rain-amount.svg",
		wind: "W 16 km/h",
	},
	{
		time: "06:30",
		temperature: "35",
		condition: "Mostly Sunny",
		conditionIcon: "assets/images/mostly-sunny.svg",
		precipitation: "0%",
		precipitationIcon: "assets/images/rain-amount.svg",
		wind: "W 05 km/h",
	},
	{
		time: "07:30",
		temperature: "37",
		condition: "Mostly Sunny",
		conditionIcon: "assets/images/mostly-sunny.svg",
		precipitation: "0%",
		precipitationIcon: "assets/images/rain-amount.svg",
		wind: "W 03 km/h",
	},
];

// Weather conditions for different cities
const cityConditions = [
	{
		city: "Amarillo",
		icon: "assets/images/partly-cloudy.svg",
		temperature: "32",
	},
	{
		city: "Austin",
		icon: "assets/images/sunny.svg",
		temperature: "35",
	},
	{
		city: "Boston",
		icon: "assets/images/sunny.svg",
		temperature: "39",
	},
	{
		city: "Chicago",
		icon: "assets/images/partly-cloudy.svg",
		temperature: "28",
	},
	{
		city: "Columbia",
		icon: "assets/images/sunny.svg",
		temperature: "34",
	},
	{
		city: "Jackson",
		icon: "assets/images/partly-cloudy.svg",
		temperature: "26",
	},
	{
		city: "New York",
		icon: "assets/images/partly-cloudy.svg",
		temperature: "20",
	},
];

// Weather details data
const weatherDetails = [
	{
		icon: "assets/images/feels-like.svg",
		label: "Feels Like",
		value: "37°",
	},
	{
		icon: "assets/images/wind.svg",
		label: "Wind",
		value: "WNW 8 km/h",
	},
	{
		icon: "assets/images/humidity.svg",
		label: "Humidity",
		value: "12%",
	},
	{
		icon: "assets/images/uv-index.svg",
		label: "UV Index",
		value: "4 of 11",
	},
	{
		icon: "assets/images/cloud-cover.svg",
		label: "Cloud Cover",
		value: "33%",
	},
	{
		icon: "assets/images/rain-amount.svg",
		label: "Rain Amount",
		value: "0 mm",
	},
];

const forecasts = [
	{
		day: "Friday",
		data: fridayForecast,
	},
	{
		day: "Saturday",
		data: saturdayForecast,
	},
	{
		day: "Sunday",
		data: sundayForecast,
	},
];

export const ForecastPage = (): JSX.Element => {
	return (
		<div className="min-h-screen flex flex-col items-center w-full ">
			<ForecastHero />
			{/* bg-white dark:bg-bgcDark */}
			<div className="py-6 lg:py-[72px] w-full relative">
				<div className="absolute inset-0 h-[1000px] sm:h-[1000px] -z-[1]" ></div>
				<div className="container">
					<section className="flex flex-col md:flex-row gap-6 lg:gap-8 w-full">
						{/* Left Column - Weather Forecasts */}
						<div className="flex flex-col w-full lg:w-2/3 gap-6 lg:gap-8">
							<ForecastList
								forecasts={forecasts}
								weatherDetails={weatherDetails}
								SevendayForecast={SevendayForecast}
							/>
							{/* Temperature Trend */}
							<div className="hidden sm:block">
								<div className="mb-10">
									<WeatherRadar openFrom={"forecast"} />
								</div>
								<TemperatureTrend />
							</div>
						</div>

						{/* Right Column - Weather Forecasts */}
						<div className="w-full sm:w-[370px]">
							<div className=" -mx-6 sm:mx-0">
								<NewsFeedStories isVertical={true} />
							</div>
							<WeatherCondition cityConditions={cityConditions} />
						</div>

						{/* Temperature Trend */}
						<div className="sm:hidden block">
							<div className="-mx-6">
								<WeatherRadar openFrom={"forecast"} />
							</div>

							<TemperatureTrend />
						</div>
					</section>
				</div>
			</div>
			{/* <div className="pb-6 lg:pb-[72px] container">
				<div className="w-full sm:w-2/3">
					<TemperatureTrend />
				</div>
			</div> */}
		</div>
	);
};
export default ForecastPage;
