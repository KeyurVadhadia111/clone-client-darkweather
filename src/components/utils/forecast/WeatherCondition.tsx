import React from "react";
import { Card, CardContent, CardTitle } from "../Card";
import { Separator } from "../Separator";

type Props = {
	cityConditions: any[];
};

const WeatherCondition: React.FC<Props> = ({ cityConditions }) => {
	return (
		<>
			<Card className="!p-0 shadow-[0_20px_35px_rgba(0,0,0,0.05)] w-[327px] h-[403px] lg:w-[370px] lg:h-[529px] dark:!bg-fgcDark">
				<CardTitle className="font-semibold text-xl lg:text-2xl text-text dark:text-textDark p-4 lg:p-6">
					Weather Conditions
				</CardTitle>
				<Separator className="bg-textSecondary/20 dark:!bg-textSecondary/30 !bg-none" />
				<CardContent className="!p-4 lg:!p-6">
					<div className="flex flex-col gap-3 lg:gap-4">
						{cityConditions.map((city, index) => (
							<React.Fragment key={index}>
								<div className="flex items-center justify-between">
									<span className="w-[76px] font-normal text-[14px] lg:text-base text-textSecondary dark:text-textDark">
										{city.city}
									</span>
									<img
										className="w-[24px] h-[24px] lg:w-[30px] lg:h-[30px]"
										alt="Weather condition"
										src={city.icon}
									/>
									<span className="font-semibold text-base lg:text-xl text-text dark:text-textDark flex items-start">
										{city.temperature}
										<span className="text-xs lg:text-[15px] ">°F</span>
									</span>
								</div>
								{index < cityConditions.length - 1 && (
									<Separator className="bg-textSecondary/20 dark:!bg-textSecondary/30 !bg-none" />
								)}
							</React.Fragment>
						))}
					</div>
				</CardContent>
			</Card>
		</>
	);
};
export default WeatherCondition;
