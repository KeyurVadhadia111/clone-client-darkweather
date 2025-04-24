import { Button } from "components/utils/Button";
import WeatherCard from "components/utils/WeatherCard";
import React from "react";
import { Swiper } from "swiper/react";
import { useAppState } from "components/utils/useAppState";
import WeatherCard2 from "components/utils/WeatherCard2";

export interface Props {
	isVertical?: boolean;
}

export const NewsFeedStoriesOne: React.FC<Props> = ({ isVertical }) => {
	const [{ isDark, userDetails }, setAppState] = useAppState();

	const newsItems = [
		{
			id: 1,
			date: "February 6th, 2025",
			title: "Snowfall in New York disrupts travel and schools.",
			image: "https://c.animaapp.com/m9bl492vih9UJG/img/image-3.png",
			content:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
		},
	];

	return (
		<section
			className={`sm:p-0 sm:pb-[72px] p-6 w-full mx-auto relative`}>
			<div className="container !px-0">
				<div
					className={`flex items-center justify-between relative self-stretch w-full ${isVertical ? "mb-6 sm:mb-6" : "mb-4 sm:mb-8"}`}>
					<h2
						className={`${isVertical ? "font-medium sm:font-semibold !text-2xl" : "font-medium"} text-text dark:text-textDark sm:text-[40px] text-2xl leading-10`}>
						Top Stories
					</h2>
					{!isVertical ? (
						<div className="sm:block hidden">
							<Button size="lg">View All</Button>
						</div>
					) : (
						""
					)}
				</div>

				<div className={`flex flex-col w-full items-start gap-12`}>
					<div
						className={`flex items-center relative w-full  ${isVertical ? "flex-col gap-6" : "gap-[30px]"}`}>
						{newsItems.map(article => (
							<WeatherCard2 key={article.id} item={article} size="sm" className="!w-full " />
						))}
					</div>
				</div>
				{!isVertical ? (
					<div className="sm:hidden flex justify-center mt-6 sm:mt-6">
						<Button size="lg">View All</Button>
					</div>
				) : (
					""
				)}
			</div>
		</section>
	);
};
