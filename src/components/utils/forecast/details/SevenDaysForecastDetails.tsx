import { Separator } from "components/utils/Separator";
import React from "react";

const cardData = [
	{
		date: "Sat 05",
		period: "Day",
		temperature: "41",
		icon: "assets/images/partly-cloudy.svg",
		label: "son",
		condition: "Partly cloudy, Hazy",
		wind: "W 13 km/h",
		description: "Partly cloudy. Hazy. High 41°C. Winds WNW at 10 to 15 km/h.",
		humidity: {
			label: "Humidity",
			value: "12%",
			icon: "assets/images/humidity.svg",
		},
		uvIndex: {
			label: "UV Index",
			value: "4 of 11",
			icon: "assets/images/uv-index.svg",
		},
		sunrise: {
			time: "06:28",
			icon: "assets/images/sunrise.svg",
		},
		sunset: {
			time: "18:56",
			icon: "assets/images/sunset.svg",
		},
		timeLabel1: "Sunrise",
		timeLabel2: "Sunset",
	},
	{
		date: "Sat 05",
		period: "Night",
		temperature: "24",
		icon: "assets/images/night.svg",
		label: "moon",
		condition: "Generally clear, Hazy",
		wind: "W 09 km/h",
		description: "Generally clear. Hazy. Low 24°C. Winds W and variable.",
		moonPhase: "First Quarter",
		humidity: {
			label: "Humidity",
			value: "12%",
			icon: "assets/images/humidity.svg",
		},
		uvIndex: {
			label: "UV Index",
			value: "4 of 11",
			icon: "assets/images/uv-index.svg",
		},
		moonrise: {
			time: "12:15",
			icon: "assets/images/moonrise.svg",
		},
		moonset: {
			time: "01:32",
			icon: "assets/images/moonset.svg",
		},
		timeLabel1: "Moonrise",
		timeLabel2: "Moonset",
	},
];

const SevenDaysForecastDetails: React.FC = () => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-[30px] ">
			{cardData.map((detail, index) => {
				return (
					<div
						key={index}
						className=" bg-bgc dark:bg-fgcDark rounded-2xl sm:rounded-[20px] p-3 sm:p-4 shadow-[0_35px_35px_rgba(0,0,0,0.05)]">
						{/* Header */}
						<div className="mb-2 sm:mb-3">
							<h2 className="text-text font-medium dark:text-textDark text-xs sm:text-sm ">
								{detail.date} |{" "}
								<span className="font-normal text-textSecondary dark:text-textDark">
									{detail.period}
								</span>
							</h2>
							<div className="flex items-center justify-between mt-2 sm:mt-3">
								<div className="flex items-center sm:gap-2">
									<h3 className="text-3xl sm:text-5xl font-bold text-text  dark:text-textDark  flex items-start">
										{detail.temperature}
										<span className="text-[14px] lg:text-2xl">°F</span>
									</h3>
									<img src={detail.icon} alt={detail.label} className="w-9 h-9 lg:w-14 lg:h-14" />
								</div>
								<span className="text-textSecondary dark:text-textDark text-base sm:text-xl">
									{detail.wind}
								</span>
							</div>
						</div>

						{/* Description */}
						<p className="text-xs sm:text-sm text-text  dark:text-textDark mb-3 sm:mb-3.5 w-[307px]">
							{detail.description}
						</p>

						{/* Status */}
						<div className="relative overflow-hidden flex flex-col gap-4 sm:gap-6 p-4 sm:p-6 bg-bgc dark:bg-bgcDark border border-textTurnery/20 dark:border-textSecondary/30 rounded-[12px] sm:rounded-2xl">
							{detail.period === "Night" && detail.moonPhase && (
								<div className="absolute top-0 left-0 bg-textSecondary/20 dark:bg-bg-bgcDark text-text dark:text-textDark text-[10px] sm:text-xs font-normal px-2 pt-[1px] pb-[2px] sm:px-3 sm:pt-[2px] sm:pb-1 rounded-br-[12px] sm:rounded-br-2xl ">
									{detail.moonPhase}
								</div>
							)}
							<div className=" flex items-center justify-between gap-4 sm:gap-0">
								<div className="flex items-center gap-3 w-[120px]  ">
									<img
										src={detail.humidity.icon}
										alt={detail.humidity.label}
										className="w-8 h-8 lg:w-10 lg:h-10"
									/>
									<div className="flex flex-col">
										<span className="text-xs lg:text-sm text-textSecondary dark:text-textDark ">
											{detail.humidity.label}
										</span>
										<span className="text-base lg:text-lg font-semibold text-text dark:text-textDark ">
											{detail.humidity.value}
										</span>
									</div>
								</div>
								<Separator orientation="vertical" className="!h-[48px] !w-[1px]" />
								<div className="flex items-center gap-3 w-[120px]">
									<img
										src={detail.uvIndex.icon}
										alt={detail.uvIndex.label}
										className="w-8 h-8 lg:w-10 lg:h-10"
									/>
									<div className="flex flex-col">
										<span className="text-xs lg:text-sm text-textSecondary dark:text-textDark ">
											{detail.uvIndex.label}
										</span>
										<span className="text-base lg:text-lg font-semibold text-text dark:text-textDark ">
											{detail.uvIndex.value}
										</span>
									</div>
								</div>
							</div>

							<Separator className="col-span-2 bg-textSecondary/20 dark:!bg-textSecondary/30 !bg-none" />

							{/* Time Labels (sun/moon rise/set) */}
							<div className="flex items-center justify-between gap-4 sm:gap-0">
								<div className="flex items-center gap-3 w-[120px]">
									<img
										src={detail.sunrise?.icon || detail.moonrise?.icon}
										alt={detail.timeLabel1}
										className="w-8 h-8 lg:w-10 lg:h-10"
									/>
									<div className="flex flex-col">
										<span className="text-xs lg:text-sm text-textSecondary dark:text-textDark ">
											{detail.timeLabel1}
										</span>
										<span className="text-base lg:text-lg font-semibold text-text dark:text-textDark ">
											{detail.sunrise?.time || detail.moonrise?.time}
										</span>
									</div>
								</div>
								<Separator orientation="vertical" className="!h-[48px] !w-[1px]" />
								<div className="flex items-center gap-3 w-[120px]">
									<img
										src={detail.sunset?.icon || detail.moonset?.icon}
										alt={detail.timeLabel2}
										className="w-8 h-8 lg:w-10 lg:h-10"
									/>
									<div className="flex flex-col">
										<span className="text-xs lg:text-sm text-textSecondary dark:text-textDark ">
											{detail.timeLabel2}
										</span>
										<span className="text-base lg:text-lg font-semibold text-text dark:text-textDark ">
											{detail.sunset?.time || detail.moonset?.time}
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};
export default SevenDaysForecastDetails;

