import { Button } from "components/utils/Button";
import { motion } from "framer-motion";
import WeatherCard from "components/utils/WeatherCard";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useAppState } from "components/utils/useAppState";
import { useNavigate } from "react-router-dom";

export interface Props {
	isVertical?: boolean;
}

export const NewsFeedStories: React.FC<Props> = ({ isVertical }) => {
	const [{ isDark, userDetails }, setAppState] = useAppState();
	const navigate = useNavigate();

	const newsItems = [
		{
			id: 1,
			date: "February 6th, 2025",
			title: "Snowfall in New York disrupts travel and schools.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-3.png",
		},
		{
			id: 2,
			date: "March 5th, 2025",
			title: "Heavy rains in New York this weekend; flood alerts issued.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-4.png",
		},
		{
			id: 3,
			date: "March 4th, 2025",
			title: "Strong winds in Dubai reduce visibility with dust.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-5.png",
		},
	];

	return (
		<section className={`sm:p-0 sm:pb-[72px] p-6 w-full mx-auto relative`}>
			<div className="container !px-0">
				<div
					className={`flex items-center justify-between relative self-stretch w-full ${isVertical ? "mb-4 sm:mb-6" : "mb-4 sm:mb-12"}`}>
					<h2
						className={`${isVertical ? "font-medium sm:font-semibold !text-2xl" : "font-medium"} text-text dark:text-textDark sm:text-[40px] text-2xl sm:leading-10`}>
						Top Stories
					</h2>
					{!isVertical ? (
						<div className="sm:block hidden">
							<Button size="lg" onClick={() => navigate("/top-stories")}>
								View More
							</Button>
						</div>
					) : (
						""
					)}
				</div>

				<div className={`flex flex-col w-full items-start gap-12`}>
					<div
						className={`hidden sm:flex items-center relative w-full  ${isVertical ? "flex-col gap-6" : "gap-[30px]"}`}>
						{newsItems.map(article => (
							<WeatherCard
								key={article.id}
								item={article}
								size="sm"
								className="!w-full"
								onClick={() => {
									if (article.id) {
										navigate(`/top-story/${article.id}`);
									} else {
										navigate("/");
									}
								}}
							/>
						))}
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
							{newsItems.map((article: any, index) => (
								<SwiperSlide className={`pb-6 sm:pb-10`} key={index}>
									<WeatherCard
										key={article.id}
										item={article}
										size="sm"
										onClick={() => {
											if (article.id) {
												navigate(`/top-story/${article.id}`);
											} else {
												navigate("/");
											}
										}}
									/>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
				{!isVertical ? (
					<div className="sm:hidden flex justify-center">
						<Button size="lg">View More</Button>
					</div>
				) : (
					""
				)}
			</div>
		</section>
	);
};
