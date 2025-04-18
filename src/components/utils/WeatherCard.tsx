import { cn } from "lib/utils";
import React from "react";
import { motion } from "framer-motion";

interface WeatherCardProps {
	item: {
		title: string;
		content?: string;
		image: string;
		timeAgo?: string;
		date?: string;
	};
	direction?: "vertical" | "horizontal";
	className?: string;
	size?: "sm" | "lg";
}

const WeatherCard: React.FC<WeatherCardProps> = ({ item, direction = "vertical", className, size = "lg" }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, type: "spring", stiffness: 400 }}
			whileHover={{ scale: 1.02 }}
			className={cn(
				"sm:w-[570px] h-full dark:bg-fgcDark bg-bgc rounded-[20px] sm:shadow-[0_35px_35px_rgba(0,0,0,0.05)] shadow-[0px_20px_35px_#0000000d] border-none",
				className,
				"sm:p-4 p-2.5 flex gap-5",
				direction === "vertical" ? "flex-col" : "flex-row",
			)}>
			<img
				className={`${direction === "vertical" ? (size === "lg" ? "sm:h-[300px] h-[182px] w-full" : "sm:h-[240px] h-[182px] w-full") : "w-[259px] h-[227px]"} object-cover rounded-2xl`}
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

				{item.title && (
					<h3
						className={`font-medium text-text dark:text-textDark text-base sm:text-xl leading-[26px] line-clamp-2`}>
						{item.title}
					</h3>
				)}

				{item.content && (
					<p
						className={`font-normal dark:text-textDark text-textSecondary text-sm sm:text-base leading-[21px] sm:line-clamp-none line-clamp-4`}>
						{item.content}
						<span className="font-bold"> Read More</span>
					</p>
				)}

				{item.timeAgo && (
					<span
						className={`font-normal dark:text-textDark text-textSecondary text-sm leading-[21px]`}>
						{item.timeAgo}
					</span>
				)}
			</div>
		</motion.div>
	);
};

export default WeatherCard;
