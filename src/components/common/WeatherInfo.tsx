import { Button } from "components/utils/Button";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import WeatherCard from "components/utils/WeatherCard";
import React from "react";

export const WeatherInfo: React.FC = () => {
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
		{
			id: 3,
			title: "Tornado-warned supercells roar through the Ark-La-Tex region",
			content:
				"Tornado-warned supercells tore through the Ark-La-Tex region, bringing intense winds, hail, and the threat of multiple tornadoes. These powerful...",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-2.png",
			timeAgo: "8 hours ago",
			isLarge: false,
		},
	];

	return (
		<section className={`sm:p-0 sm:pb-[72px] p-6 w-full mx-auto bg-white dark:bg-bgcDark relative`}>
			<div className="container !px-0">
				<div className="flex items-center justify-between relative self-stretch w-full mb-6 sm:mb-12">
					<h2
						className={`font-medium text-text dark:text-textDark sm:text-[40px] text-2xl leading-10`}>
						Severe Weather
					</h2>

					<div className="sm:block hidden">
						<Button size="lg">View More</Button>
					</div>
				</div>

				<div className="flex flex-col w-full items-start gap-12">
					<div className="hidden sm:flex items-center gap-[30px] relative w-full">
						<WeatherCard item={newsArticles[0]} />

						<div className="flex flex-col w-[570px] gap-[30px]">
							{newsArticles.slice(1).map(article => (
								<WeatherCard key={article.id} item={article} direction="horizontal" />
							))}
						</div>
					</div>
					<div className="sm:hidden block w-full">
						<Swiper
							spaceBetween={16}
							slidesPerView={1.2}
							grabCursor={true}
							breakpoints={{
								640: { slidesPerView: 1.2 },
								768: { slidesPerView: 2.2 },
								1024: { slidesPerView: 6 },
							}}>
							{newsArticles.map((article: any, index) => (
								<SwiperSlide className={`pb-6 sm:pb-10`} key={index}>
									<WeatherCard key={article.id} item={article} />
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>

				<div className="sm:hidden flex justify-center">
					<Button size="lg">View More</Button>
				</div>
			</div>
		</section>
	);
};
