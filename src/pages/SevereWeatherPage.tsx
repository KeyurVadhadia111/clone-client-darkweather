import { useAppState } from "components/utils/useAppState";
import WeatherCard from "components/utils/WeatherCard";
import { JSX } from "react";
import WeatherCondition from "components/utils/forecast/WeatherCondition";
import { AssistantCard } from "components/premiumPlan/AssistantCard";
import { NewsFeedStories } from "components/common/NewsFeedStories";
import { Button } from "components/utils/Button";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import WeatherCard3 from "components/utils/WeatherCard3";
import { m } from "framer-motion";
import Icon from "components/utils/Icon";
import { Separator } from "components/utils/Separator";

const SevereWeather = (): JSX.Element => {
	const [{ isDark, userDetails }, setAppState] = useAppState();
	const navigate = useNavigate();

	// Weather conditions for different cities
	const cityConditions = [
		{
			city: "Amarillo",
			icon: "/assets/images/partly-cloudy.svg",
			temperature: "32",
		},
		{
			city: "Austin",
			icon: "/assets/images/sunny.svg",
			temperature: "35",
		},
		{
			city: "Boston",
			icon: "/assets/images/sunny.svg",
			temperature: "39",
		},
		{
			city: "Chicago",
			icon: "/assets/images/partly-cloudy.svg",
			temperature: "28",
		},
		{
			city: "Columbia",
			icon: "/assets/images/sunny.svg",
			temperature: "34",
		},
		{
			city: "Jackson",
			icon: "/assets/images/partly-cloudy.svg",
			temperature: "26",
		},
		{
			city: "New York",
			icon: "/assets/images/partly-cloudy.svg",
			temperature: "20",
		},
	];

	const newsArticles = [
		{
			id: 1,
			title: "Rain-wrapped tornadoes hit Texas and Arkansas",
			content:
				"Rain-wrapped tornadoes struck parts of Texas and Arkansas, making them especially dangerous as the heavy rain concealed their visibility. These tornadoes caused significant damage to homes and infrastructure, with emergency services responding swiftly to affected areas. Residents were urged to stay indoors and monitor weather alerts closely.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image.png",
			timeAgo: "4 hours ago",
			isLarge: true,
			more: false,
		},
		{
			id: 2,
			title: "Food truck owner drives an hour to help feed survivors of the selmer",
			content:
				"A kind-hearted food truck owner drove over an hour to Selmer to help feed survivors affected by the disaster. Offering free meals, the owner...",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-1.png",
			timeAgo: "8 hours ago",
			isLarge: false,
			more: true,
		},
		{
			id: 3,
			title: "Tornado-warned supercells roar through the Ark-La-Tex region",
			content:
				"Tornado-warned supercells tore through the Ark-La-Tex region, bringing intense winds, hail, and the threat of multiple tornadoes. These powerful...",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-2.png",
			timeAgo: "8 hours ago",
			isLarge: false,
			more: true,
		},
	];
	const mapLegend = [
		{ color: "#ff0000", label: "Red Warning for Pre Fire Alert" },
		{ color: "#ffa500", label: "Orange Warning for High Wind Advisory" },
		{ color: "#ffa500", label: "Orange Alert for Dust Storm Likelihood" },
		{ color: "#ffa500", label: "Orange Alert for Pre-Fire" },
		{ color: "#ffff00", label: "Yellow Watch for Thunderstorms" },
		{ color: "#ffff00", label: "Yellow Watch for Heat Wave" },
		{ color: "#ffa500", label: "Orange Alert for Hazy Weather" },
		{ color: "#ff0000", label: "Red Alert for Flash Flood Risk" },
		{ color: "#ffa500", label: "Orange Warning for Hail" },
		{ color: "#ffa500", label: "Orange Warning for Dense Fog" },
		{ color: "#ff0000", label: "Red Alert for Severe Thunderstorm" },
		{ color: "#ff0000", label: "Red Warning for Extreme Heatwave" },
		{ color: "#ffff00", label: "Yellow Warning for Lightning" },
		{ color: "#369e99", label: "Green Alert for Morning Dew" },
		{ color: "#0000ff", label: "Blue Warning for Blizzard" },
		{ color: "#369e99", label: "Green Alert Weather Conditions Stable" },
		{ color: "#369e99", label: "Green Alert Light Drizzle Expected" },
		{ color: "#ffff00", label: "Yellow Warning for Forest Fire Risk" },
		{ color: "#0000ff", label: "Blue Alert for Coastal Wind Gusts" },
		{ color: "#0000ff", label: "Blue Warning for Light Snowfall" },
	];
	return (
		<section className="flex flex-col items-center w-full ">
			{/*bg-bgc dark:bg-bgcDark */}
			<div className="my-6 sm:my-[60px] sm:pb-0 w-full relative">
				<div className="container">
					<div className="flex flex-col md:flex-row gap-6 lg:gap-8 w-full">
						{/* Left Column - Weather Forecasts */}
						<div className="w-full">
							{/* Map Section */}
							<div className="flex flex-col w-full sm:w-[772px] items-start gap-4 sm:gap-[30px] relative flex-[0_0_auto]">
								<div className="flex flex-col items-start gap-4 sm:gap-6 relative self-stretch w-full flex-[0_0_auto]">
									<div className="font-medium text-text dark:text-textDark text-2xl sm:text-[40px] text-center tracking-[0] sm:leading-10 relative whitespace-nowrap">
										Severe Weather Map
									</div>
									<div className="relative self-stretch w-full h-[232px] sm:h-[550px] rounded-2xl sm:rounded-3xl overflow-hidden">
										<img
											className="w-full h-full object-cover"
											alt="Severe Weather Map"
											src="/assets/images/severe-weather-map.png"
										/>
										<div className="absolute top-3 left-[88%] sm:top-5 sm:left-[696px] bg-bgc dark:bg-fgcDark rounded-[6px] sm:rounded-xl p-2 sm:p-3 flex items-center justify-center gap-4 text-text dark:text-textDark">
											<Icon
												icon="fullscreen"
												className="w-4 h-4 sm:w-[30px] sm:h-[30px] cursor-pointer"
											/>
										</div>

										<div className="absolute top-[71%] left-[88%] sm:top-[425px] sm:left-[696px] bg-bgc dark:bg-fgcDark rounded-[6px] sm:rounded-xl p-1.5 sm:p-3 flex flex-col items-center justify-center gap-2 sm:gap-4 w-[30px] h-[57px] sm:w-[54px] sm:h-[105px] text-text dark:text-textDark">
											<Icon icon="plus" className="w-5 h-5 cursor-pointer" />
											<Separator className="bg-textSecondary/20 dark:!bg-textSecondary/30 !bg-none" />
											<Icon icon="minus" className="w-5 h-5 cursor-pointer" />
										</div>
									</div>
								</div>
								{/* Map Legend */}
								<div className="flex flex-col items-start gap-4 sm:gap-[30px] relative self-stretch w-full flex-[0_0_auto]">
									<div className="flex items-center justify-center gap-2.5 pt-0 pb-3 px-0 relative self-stretch w-full flex-[0_0_auto] border-b border-solid border-textSecondary/20">
										<p className="relative w-full sm:w-[770px] font-normal text-textSecondary dark:text-textDark text-xs sm:text-base text-center tracking-[0] sm:leading-6">
											Click an active alert area on map for details&nbsp;&nbsp;
											<br />
											The severe weather watches and warnings depicted in this map are derived
											from official government sources
										</p>
									</div>
									{/*  Render legend */}
									<div className="flex flex-col items-start gap-3 sm:gap-[30px] relative self-stretch w-full flex-[0_0_auto]">
										<div className="grid grid-cols-1 sm:grid-cols-3 gap-y-3 sm:gap-y-6 sm:gap-x-3 items-center relative w-full flex-[0_0_auto]">
											{mapLegend.map((item, i) => (
												<div
													key={item.label}
													className="flex w-full sm:w-[254px] items-center gap-2.5 sm:gap-3">
													<div
														className="relative w-4 h-4 sm:w-6 sm:h-6 rounded shrink-0"
														style={{ background: item.color }}
													/>
													<p className="relative font-normal text-text dark:text-textDark text-sm tracking-[0] sm:leading-[18.2px] mt-0.5">
														{item.label}
													</p>
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
							<div className="px-0 pt-6 sm:pt-12">
								<h2
									className={`font-semibold text-text dark:text-textDark sm:text-[40px] text-2xl sm:leading-10 mb-3 sm:mb-6`}>
									Severe Weather
								</h2>

								<div className="flex  w-full items-start gap-12">
									<div className="hidden sm:flex flex-col items-center gap-[30px] relative w-full">
										<WeatherCard3
											item={newsArticles[0]}
											direction="horizontal"
											className="!w-full"
										/>
										<div className="flex gap-[30px]">
											{newsArticles.slice(1).map(article => (
												<WeatherCard3 key={article.id} item={article} size="sm" />
											))}
										</div>
									</div>
									<div className="sm:hidden  flex flex-col items-center gap-4 w-full">
										{newsArticles.map((article: any, index) => (
											<WeatherCard3 key={article.id} item={article} />
										))}
									</div>
								</div>

								<div className=" flex justify-center mt-6">
									<Button size="lg">View More</Button>
								</div>
							</div>
						</div>

						{/* Right Column - Weather Forecasts */}
						<div className="hidden sm:block w-full sm:w-[370px]">
							<NewsFeedStories isVertical={true} />
							<WeatherCondition cityConditions={cityConditions} />
						</div>
					</div>
				</div>
				<div className="sm:hidden block w-full">
					<NewsFeedStories />
					<div className="container">
						<WeatherCondition cityConditions={cityConditions} />
					</div>
				</div>
			</div>
		</section>
	);
};
export default SevereWeather;
