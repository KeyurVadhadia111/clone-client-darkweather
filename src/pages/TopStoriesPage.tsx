import { TemperatureTrend } from "components/common/TemperatureTrend";
import { WeatherRadar } from "components/common/WeatherRadar";
import { useAppState } from "components/utils/useAppState";
import WeatherCard from "components/utils/WeatherCard";
import { JSX, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "lib/utils";
import WeatherCondition from "components/utils/forecast/WeatherCondition";
import { AssistantCard } from "components/premiumPlan/AssistantCard";
import { NewsFeedStories } from "components/common/NewsFeedStories";
import { Button } from "components/utils/Button";
import Icon from "components/utils/Icon";
import { useNavigate } from "react-router-dom";
import Pagination from "components/utils/Pagination";

const TopStoriesPage = (): JSX.Element => {
	const [{ isDark, userDetails }, setAppState] = useAppState();
	const navigate = useNavigate();

	const newsArticles = [
		{
			id: 1,
			title: "Rain-wrapped tornadoes hit Texas and Arkansas",
			content:
				"Rain-wrapped tornadoes struck parts of Texas and Arkansas, making them especially dangerous as the heavy rain concealed their visibility. These tornadoes caused significant damage to homes and infrastructure, with emergency services responding swiftly to affected areas. Residents were urged to stay indoors and monitor weather alerts closely. Power outages were reported across several...",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image.png",
			timeAgo: "4 hours ago",
			isLarge: true,
		},
		{
			id: 2,
			title: "Food truck owner drives an hour to help feed survivors of the selmer",
			content:
				"A kind-hearted food truck owner drove over an hour to Selmer to help feed survivors affected by the disaster. Offering free meals, the owner...",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-1.png",
			timeAgo: "8 hours ago",
			isLarge: false,
		},
	];

	const newsItems = [
		{
			id: 1,
			date: "February 6th, 2025",
			title: "Snowfall in New York disrupts travel and schools.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-3.png",
			content:
				"A heavy snowfall in New York has led to significant disruptions across the city, affecting both travel and education. Icy roads and reduced visibility have caused widespread delays and cancellations of flights, while public transportation is experiencing interruptions. Many schools across the state have closed or shifted to remote learning due to safety concerns. City officials are urging residents to stay indoors and avoid non-essential travel as snowplows...",
		},
	];

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

	const [currentPage, setCurrentPage] = useState(1);
	const [mobileRecords, setMobileRecords] = useState(6);
	const list = [
		{
			id: 1,
			date: "February 6th, 2025",
			title: "Air pollution harms health and the environment.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-3.png",
		},
		{
			id: 2,
			date: "February 5th, 2025",
			title: "Wildfires destroy ecosystems and endanger lives.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-4.png",
		},
		{
			id: 3,
			date: "March 5th, 2025",
			title: "Tornadoes cause sudden, devastating destruction.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
		{
			id: 4,
			date: "March 4th, 2025",
			title: "Earthquakes hit suddenly and cause destruction.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
		{
			id: 5,
			date: "April 1st, 2025",
			title: "Heavy fog reduces visibility and disrupts travel.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
		{
			id: 6,
			date: "April 3rd, 2025",
			title: "Industrial waste leads to severe pollution.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
		{
			id: 7,
			date: "April 4th, 2025",
			title: "Floods cause widespread damage and displacement.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
		{
			id: 8,
			date: "April 5th, 2025",
			title: "Droughts lead to water shortages and crop failures.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
		{
			id: 9,
			date: "April 6th, 2025",
			title: "Hurricanes bring strong winds and heavy rain.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
		{
			id: 10,
			date: "April 7th, 2025",
			title: "Heatwaves increase risk of heat-related illness.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
		{
			id: 11,
			date: "April 8th, 2025",
			title: "Cold snaps cause frostbite and hypothermia.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
		{
			id: 12,
			date: "April 9th, 2025",
			title: "Blizzards disrupt travel and cause power outages.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
		{
			id: 13,
			date: "April 10th, 2025",
			title: "Sandstorms reduce visibility and damage property.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
		{
			id: 14,
			date: "April 11th, 2025",
			title: "Tsunamis cause massive flooding and destruction.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
		{
			id: 15,
			date: "April 12th, 2025",
			title: "Volcanic eruptions spew ash and lava.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
		{
			id: 16,
			date: "April 13th, 2025",
			title: "Landslides bury roads and homes.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
		{
			id: 17,
			date: "April 14th, 2025",
			title: "Avalanches pose risks to skiers and hikers.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
		{
			id: 18,
			date: "April 15th, 2025",
			title: "Cyclones bring heavy rain and strong winds.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
		{
			id: 19,
			date: "April 16th, 2025",
			title: "Tornadoes cause sudden, devastating destruction.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
		{
			id: 20,
			date: "April 17th, 2025",
			title: "Earthquakes hit suddenly and cause destruction.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
		{
			id: 21,
			date: "April 18th, 2025",
			title: "Heavy fog reduces visibility and disrupts travel.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
		{
			id: 22,
			date: "April 19th, 2025",
			title: "Industrial waste leads to severe pollution.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
		{
			id: 23,
			date: "April 20th, 2025",
			title: "Floods cause widespread damage and displacement.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
		{
			id: 24,
			date: "April 21st, 2025",
			title: "Droughts lead to water shortages and crop failures.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
		{
			id: 25,
			date: "April 22nd, 2025",
			title: "Hurricanes bring strong winds and heavy rain.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
		{
			id: 26,
			date: "April 23rd, 2025",
			title: "Heatwaves increase risk of heat-related illness.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
		{
			id: 27,
			date: "April 24th, 2025",
			title: "Severe thunderstorms bring heavy rain and hail.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
		{
			id: 28,
			date: "April 25th, 2025",
			title: "Heatwaves increase risk of heat-related illness.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
		{
			id: 29,
			date: "April 26th, 2025",
			title: "Cold snaps cause frostbite and hypothermia.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
		{
			id: 30,
			date: "April 27th, 2025",
			title: "Blizzards disrupt travel and cause power outages.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
		{
			id: 31,
			date: "April 28th, 2025",
			title: "Sandstorms reduce visibility and damage property.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
		{
			id: 32,
			date: "April 29th, 2025",
			title: "Tsunamis cause massive flooding and destruction.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
		{
			id: 33,
			date: "April 30th, 2025",
			title: "Volcanic eruptions spew ash and lava.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
		{
			id: 34,
			date: "May 1st, 2025",
			title: "Landslides bury roads and homes.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
		{
			id: 35,
			date: "May 2nd, 2025",
			title: "Avalanches pose risks to skiers and hikers.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
		{
			id: 36,
			date: "May 3rd, 2025",
			title: "Cyclones bring heavy rain and strong winds.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
		{
			id: 37,
			date: "May 4th, 2025",
			title: "Tornadoes cause sudden, devastating destruction.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
		{
			id: 38,
			date: "May 5th, 2025",
			title: "Earthquakes hit suddenly and cause destruction.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
		{
			id: 39,
			date: "May 6th, 2025",
			title: "Heavy fog reduces visibility and disrupts travel.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
		{
			id: 40,
			date: "May 7th, 2025",
			title: "Industrial waste leads to severe pollution.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
		{
			id: 41,
			date: "May 8th, 2025",
			title: "Floods cause widespread damage and displacement.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
		{
			id: 42,
			date: "May 9th, 2025",
			title: "Droughts lead to water shortages and crop failures.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
		{
			id: 43,
			date: "May 10th, 2025",
			title: "Hurricanes bring strong winds and heavy rain.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
		{
			id: 44,
			date: "May 11th, 2025",
			title: "Heatwaves increase risk of heat-related illness.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
		{
			id: 45,
			date: "May 12th, 2025",
			title: "Cold snaps cause frostbite and hypothermia.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
		{
			id: 46,
			date: "May 13th, 2025",
			title: "Blizzards disrupt travel and cause power outages.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
		{
			id: 47,
			date: "May 14th, 2025",
			title: "Sandstorms reduce visibility and damage property.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
		{
			id: 48,
			date: "May 15th, 2025",
			title: "Tsunamis cause massive flooding and destruction.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
		{
			id: 49,
			date: "May 16th, 2025",
			title: "Volcanic eruptions spew ash and lava.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
		{
			id: 50,
			date: "May 17th, 2025",
			title: "Landslides bury roads and homes.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
		{
			id: 51,
			date: "May 18th, 2025",
			title: "Avalanches pose risks to skiers and hikers.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
		{
			id: 52,
			date: "May 19th, 2025",
			title: "Heatwaves increase risk of heat-related illness.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
		{
			id: 53,
			date: "May 20th, 2025",
			title: "Cold snaps cause frostbite and hypothermia.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
		{
			id: 54,
			date: "May 21th, 2025",
			title: "Blizzards disrupt travel and cause power outages.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
	];

	return (
		<div className="min-h-screen flex flex-col items-center w-full ">
			{/*bg-bgc dark:bg-bgcDark */}
			<div className="py-6 lg:pt-[72px] w-full relative">
				<div className="absolute inset-0 h-[1000px] sm:h-[1000px] -z-[1]"></div>
				<div className="container">
					<section className="flex flex-col md:flex-row gap-6 lg:gap-8 w-full">
						{/* Left Column - Weather Forecasts */}
						<div className="flex flex-col w-full lg:w-2/3 gap-3 lg:gap-[30px]">
							<h2
								className={`font-medium sm:font-semibold text-text dark:text-textDark sm:text-[40px] text-2xl leading-10`}>
								Top Stories
							</h2>
							<div className="flex flex-col w-full gap-6 lg:gap-8">
								{newsItems.map(item => (
									<motion.div
										initial={{ opacity: 0, y: 20 }}
										key={item.id}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.5, type: "spring", stiffness: 400 }}
										whileHover={{ scale: 1.02 }}
										className={cn(
											"w-full dark:bg-fgcDark bg-bgc rounded-[20px] sm:shadow-[0_35px_35px_rgba(0,0,0,0.05)] shadow-[0px_20px_35px_#0000000d] border-none",
											"sm:p-4 p-2.5 flex gap-5",
											"flex-col cursor-pointer",
										)}
										onClick={() => {
											if (item.id) {
												navigate(`/top-story/${item.id}`);
											} else {
												navigate("/top-stories");
											}
										}}>
										<img
											className={`sm:h-[300px] h-[182px] w-full" object-cover rounded-2xl`}
											alt={item.title}
											src={item.image}
										/>

										<div className="flex flex-col items-start gap-y-3 gap-x-5">
											{item.date && (
												<span
													className={`font-normal dark:text-textDark text-textSecondary text-sm leading-[21px]`}>
													{item.date}
												</span>
											)}
											<div className="flex flex-col-reverse w-full sm:flex-row gap-2 justify-between items-center">
												{item.title && (
													<h3
														className={`grow font-medium text-text dark:text-textDark text-base sm:text-xl leading-[26px] line-clamp-2`}>
														{item.title}
													</h3>
												)}
											</div>

											{item.content && (
												<p
													className={`font-normal dark:text-textDark text-textSecondary text-sm sm:text-base leading-[21px] line-clamp-5`}>
													{item.content}
													<span className="font-bold"> Read More</span>
												</p>
											)}
										</div>
									</motion.div>
								))}
							</div>

							<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
								{list
									.slice(
										window.innerWidth >= 640 ? (currentPage - 1) * 6 : 0,
										window.innerWidth >= 640 ? currentPage * 6 : mobileRecords,
									)
									.map(item => (
										<WeatherCard
											key={item.id}
											item={item}
											size="sm"
											className="!w-full !h-auto"
											onClick={() => {
												if (item.id) {
													navigate(`/top-story/${item.id}`);
												} else {
													navigate("/top-stories");
												}
											}}
										/>
									))}
							</div>

							{/* Pagination */}
							<div className="hidden sm:flex w-[770px] h-14 items-start justify-between">
								<Pagination
									totalRecords={list.length}
									recordsPerPage={6}
									currentPage={currentPage}
									handlePageChange={(page: number) => {
										setCurrentPage(page);
										setTimeout(() => {
											window.scrollTo({ top: 840, behavior: "smooth" });
										}, 100);
									}}
								/>
							</div>
							<div className="sm:hidden w-full flex justify-center">
								<Button
									size="lg"
									onClick={() => setMobileRecords(prev => prev + 6)}
									className={""}
									disabled={mobileRecords >= list.length}>
									Load More
								</Button>
							</div>
						</div>

						{/* Right Column - Weather Forecasts */}
						<div className="w-full sm:w-[370px]">
							<div className="flex items-center justify-between relative self-stretch w-full mb-3 sm:mb-[30px]">
								<h2 className={`font-medium text-text dark:text-textDark  text-2xl leading-7`}>
									Severe Weather
								</h2>
							</div>

							<div className="flex flex-col w-full items-start gap-12">
								<div className="flex items-center gap-[30px] relative w-full">
									<div className="flex flex-col w-full gap-[30px]">
										{newsArticles.map(article => (
											<WeatherCard key={article.id} item={article} />
										))}
									</div>
								</div>
								<WeatherCondition cityConditions={cityConditions} />
							</div>
						</div>
					</section>
				</div>
			</div>
			<div className="container mt-6 sm:mt-10">
				<AssistantCard />
			</div>
		</div>
	);
};
export default TopStoriesPage;
