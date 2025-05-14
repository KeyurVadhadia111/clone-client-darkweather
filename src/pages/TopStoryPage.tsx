import { useAppState } from "components/utils/useAppState";
import WeatherCard from "components/utils/WeatherCard";
import { JSX } from "react";
import { motion } from "framer-motion";
import { cn } from "lib/utils";
import WeatherCondition from "components/utils/forecast/WeatherCondition";
import { AssistantCard } from "components/premiumPlan/AssistantCard";
import { NewsFeedStories } from "components/common/NewsFeedStories";

const TopStoryPage = (): JSX.Element => {

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
			title: "Snowfall in New York disrupts travel and schools.",
			date: "February 6th, 2025",
			image: "https://c.animaapp.com/mani2bh19bqBhZ/img/image-3.png",
			paragraphs:
				"A heavy snowfall in New York has led to significant disruptions across the city, affecting both travel and education. Icy roads and reduced visibility have caused widespread delays and cancellations of flights, while public transportation is experiencing interruptions. Many schools across the state have closed or shifted to remote learning due to safety concerns. City officials are urging residents to stay indoors and avoid non-essential travel as snowplows.",
			content: [
				{
					subtitle: "Travel Disruptions",
					paragraphs: [
						"Icy roads and near-zero visibility have caused numerous accidents and delays throughout the city. According to the Department of Transportation, several major expressways and arterial roads were temporarily shut down due to traffic pile-ups and snow accumulation.",
						"Public transit systems such as the MTA subway and bus services are running limited schedules, and numerous regional rail lines are experiencing service interruptions.",
						"Meanwhile, at JFK and LaGuardia Airports, hundreds of flights have been delayed or canceled, leaving passengers stranded and rebooking their travel plans.",
					],
				},
				{
					subtitle: "Impact on Education",
					paragraphs: ["Schools across New York State have responded swiftly to the weather emergency:"],
					bulletPoints: [
						"Public schools in NYC have either closed or shifted to remote learning.",
						"Private and charter schools followed suit, citing safety concerns for students and staff.",
						"Colleges and universities, including CUNY and NYU, have canceled in-person lectures and moved to virtual formats for the remainder of the week.",
					],
					additionalParagraph:
						"Remote learning platforms are seeing a spike in usage as educators adapt to the sudden shift.",
				},
				{
					subtitle: "Official Announcements",
					paragraphs: ["City officials have urged residents to:"],
					bulletPoints: [
						"Avoid non-essential travel.",
						"Stay indoors unless absolutely necessary.",
						"Prepare for potential power outages in heavily affected areas.",
						"Check on elderly or vulnerable neighbors.",
					],
					additionalParagraph:
						"Snowplows and emergency crews are working around the clock, but officials warn that cleanup efforts may take several days.",
				},
				{
					subtitle: "Weather Forecast",
					paragraphs: ["According to the National Weather Service:"],
					bulletLine: [
						"“Snow showers will continue intermittently through Friday morning, followed by a sharp temperature drop that could lead to black ice conditions over the weekend.”",
					],
					additionalParagraph:
						"Temperatures are expected to plummet into the low teens, making road salt less effective and prolonging recovery efforts.",
				},
				{
					subtitle: "What You Can Do",
					paragraphs: [
						"Stay updated through official city channels and weather alerts.",
						"Charge electronic devices and stock up on essentials.",
						"Avoid unnecessary commutes and work from home if possible.",
						"Dress warmly and layer up when going outside.",
					],
				},
			],
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

	return (
		<div className="min-h-screen flex flex-col items-center w-full ">
			{/*bg-bgc dark:bg-bgcDark */}
			<div className="py-6 lg:py-[60px] w-full relative">
				<div className="absolute inset-0 h-[1000px] sm:h-[1000px] -z-[1]"></div>
				<div className="container">
					<section className="flex flex-col md:flex-row gap-6 lg:gap-8 w-full">
						{/* Left Column - Weather Forecasts */}
						<div className="flex flex-col w-full lg:w-2/3 gap-3 lg:gap-[30px]">
							<h2
								className={`font-medium sm:font-semibold text-text dark:text-textDark text-2xl sm:leading-10`}>
								Snowfall in New York disrupts travel and schools.
							</h2>

							<div className="flex flex-col w-full items-start gap-[30px] relative">
								{newsItems.map(item => (
									<motion.div
										initial={{ opacity: 0, y: 20 }}
										key={item.id}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.5, type: "spring", stiffness: 400 }}
										whileHover={{ scale: 1.02 }}
										className={cn(
											"w-full dark:bg-fgcDark bg-bgc rounded-2xl sm:rounded-[20px] sm:shadow-[0_35px_35px_rgba(0,0,0,0.05)] shadow-[0px_20px_35px_#0000000d] border-none",
											"sm:p-4 px-2.5 pb-5 pt-2.5 flex gap-3 sm:gap-5",
											"flex-col",
										)}>
										{item.image ? (
											<img
												className={`sm:h-[300px] h-[182px] w-full object-cover rounded-xl sm:rounded-2xl`}
												alt={item.title || "News Image"}
												src={item.image}
											/>
										) : (
											<div className="w-full h-[182px] bg-gray-300 rounded-2xl" />
										)}

										<div className="flex flex-col items-start gap-y-3 gap-x-5 px-3 sm:py-2">
											<span className="font-normal dark:text-textDark text-textSecondary text-xs sm:text-sm leading-[21px]">
												{item.date}
											</span>

											<h3 className="font-medium text-text dark:text-textDark text-base sm:text-xl leading-[26px]">
												{item.title}
											</h3>

											<p className="font-normal dark:text-textDark text-textSecondary text-xs sm:text-base sm:leading-[21px] ">
												{item.paragraphs}
											</p>
										</div>

										{item.content.map((section, index) => (
											<div key={index} className="flex flex-col items-start gap-5 px-3 sm:py-2">
												<div className="flex flex-col items-start gap-2 sm:gap-3">
													<p className="font-medium text-text dark:text-textDark text-sm sm:text-lg">
														{section.subtitle}
													</p>

													{section.subtitle !== "What You Can Do" &&
														section.paragraphs.map((para, paraIndex) => (
															<p
																key={paraIndex}
																className="font-normal text-textSecondary dark:text-textDark text-xs sm:text-base">
																{para}
															</p>
														))}

													{section.bulletPoints && (
														<div className=" flex flex-col gap-2 sm:gap-3">
															{section.bulletPoints.map((point, pointIndex) => (
																<div className="flex items-center sm:items-baseline gap-2">
																	<div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full shrink-0"></div>
																	<p
																		key={pointIndex}
																		className="font-normal text-textSecondary dark:text-textDark text-xs sm:text-base ">
																		{point}
																	</p>
																</div>
															))}
														</div>
													)}
													{section.bulletLine && (
														<div className="flex items-center gap-2 sm:gap-4">
															<div className="w-2 h-16 sm:h-[50px] bg-primary rounded-full"></div>
															<p className="font-normal text-textSecondary dark:text-textDark text-xs sm:text-base ">
																{section.bulletLine}
															</p>
														</div>
													)}
													{section.additionalParagraph && (
														<p className="font-normal text-textSecondary dark:text-textDark text-xs sm:text-base">
															{section.additionalParagraph}
														</p>
													)}

													{section.subtitle === "What You Can Do" &&
														section.paragraphs.map((para, paraIndex) => (
															<div className="flex items-center sm:items-baseline gap-2">
																<div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full shrink-0"></div>
																<p
																	key={paraIndex}
																	className="font-normal text-textSecondary dark:text-textDark text-xs sm:text-base ">
																	{para}
																</p>
															</div>
														))}
												</div>
											</div>
										))}
									</motion.div>
								))}
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
			<NewsFeedStories />
			<div className="container">
				<AssistantCard />
			</div>
		</div>
	);
};
export default TopStoryPage;
