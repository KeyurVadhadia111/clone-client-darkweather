import { Separator } from "components/utils/Separator";
import React from "react";

interface Props {
	weatherDetails: any[];
}
const HourlyForecastDetails: React.FC<Props> = ({ weatherDetails }) => {
	return (
		<div className="relative z-30 grid grid-cols-2 lg:grid-cols-3  gap-x-6 gap-y-5 p-4 lg:p-6 rounded-xl  shadow-[0_20px_35px_rgba(0,0,0,0.05)] bg-white dark:bg-fgcDark">
			{weatherDetails.map((detail, index) => (
				<div key={index} className="flex items-center gap-3">
					<img src={detail.icon} alt={detail.label} className="w-8 h-8 lg:w-10 lg:h-10" />
					<div className="flex flex-col">
						<span className="text-xs lg:text-sm text-textSecondary dark:text-textDark ">
							{detail.label}
						</span>
						<span className="text-base lg:text-lg font-semibold text-text dark:text-textDark ">
							{detail.value}
						</span>
					</div>
				</div>
			))}
		</div>
	);
};

export default HourlyForecastDetails;
