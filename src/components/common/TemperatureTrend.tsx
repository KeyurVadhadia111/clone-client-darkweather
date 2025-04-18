import { Button } from "components/utils/Button";
import { motion } from "framer-motion";
import WeatherCard from "components/utils/WeatherCard";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "components/utils/Card";
import Icon from "components/utils/Icon";
import { Separator } from "components/utils/Separator";

export interface Props {
	isVertical?: boolean;
}

export const TemperatureTrend: React.FC<Props> = ({ isVertical }) => {
	const temperatureScales = ["50°", "40°", "30°", "20°", "10°"];
	const temperatureHours = ["12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "8PM"];

	return (
		<Card className="p-4 lg:p-[30px] shadow-[0_20px_35px_rgba(0,0,0,0.05)] dark:!bg-fgcDark">
			<div className="flex items-center lg:items-start justify-between mb-4 lg:mb-[30px]">
				<h2 className="font-medium text-base lg:text-2xl text-text dark:text-textDark">
					Temperature Trend
				</h2>
				<div className="flex items-center gap-2.5 lg:gap-3 px-2.5 py-2 lg:px-3.5 lg:py-2.5 border border-fgc rounded-[8px] lg:rounded-[10px]">
					<span className="font-normal text-xs lg:text-sm text-textSecondary dark:text-textDark">
						Hourly
					</span>
					<Icon
						icon="arrow-down"
						className="w-2.5 h-2.5 lg:w-3.5 lg:h-3.5 text-textSecondary dark:text-textDark"
					/>
				</div>
			</div>

			<div className="flex lg:gap-[11px]">
				<div className="flex flex-col pr-2 h-[179px] lg:h-[301px] items-end justify-between">
					{temperatureScales.map((scale, index) => (
						<span
							key={index}
							className="font-normal text-xs lg:text-sm text-textSecondary dark:text-textDark">
							{scale}
						</span>
					))}
				</div>
				<div className="flex flex-col lg:h-[333px] flex-1 gap-3 lg:gap-5">
					<div className="relative flex-1  ">
						<div className="w-full h-[179px] lg:h-[289px]">
							<div className="relative w-full h-[179px] lg:h-[289px]">
								{/* Vertical grid lines */}
								<div className="absolute top-0 left-0 w-full h-full flex justify-between">
									{[...Array(8)].map((_, i) => (
										<div key={i} className="w-[1px] h-full bg-textSecondary/30" />
									))}
								</div>

								{/* Horizontal grid lines */}
								<div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between">
									{[...Array(5)].map((_, index) => (
										<Separator
											key={index}
											className="bg-textSecondary/20 dark:!bg-textSecondary/30 !bg-none"
										/>
									))}
								</div>
							</div>
							<div className="absolute w-full top-[19px] left-0">
								<div className="relative w-full ">
									<img
										className="absolute w-full h-[70px] lg:h-[188px] top-[49px] left-0"
										alt="Temperature trend line"
										src="assets/images/vector.png"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="flex items-start justify-between">
						{temperatureHours.map((hour, index) => (
							<span
								key={index}
								className="font-normal text-xs lg:text-base text-textSecondary dark:text-textDark">
								{hour}
							</span>
						))}
					</div>
				</div>
			</div>
		</Card>
	);
};
