import Icon from "components/utils/Icon";
import { Separator } from "components/utils/Separator";
import React from "react";

type Tier = {
	name: string;
	description: string;
	price: string;
	monthlyPrice: string;
	yearlyPrice: string;
	tag?: string;
	features: string[];
	buttonText: string;
};

interface PricingCardProps {
	tier: Tier;
	selectCard: (value: Tier) => void;
}

const PricingCard: React.FC<PricingCardProps> = ({ tier, selectCard }) => {
	return (
		<div
			className={`flex flex-col items-center relative flex-1 self-stretch grow bg-primary rounded-[16px] sm:rounded-3xl shadow-[0_35px_35px_rgba(0,0,0,0.05)]
				${tier.tag ? "p-px" : ""}`}>
			<div className="flex flex-col items-start gap-4 p-4 sm:gap-6 sm:px-6 sm:py-[30px] relative flex-1 self-stretch w-full grow bg-bgc dark:bg-bgcDark rounded-[16px] sm:rounded-3xl">
				<div className="flex flex-col items-start sm:gap-2 relative self-stretch w-full flex-[0_0_auto]">
					<div className="font-semibold text-text dark:text-textDark text-xl sm:text-2xl">{tier.name}</div>
					<div className="text-textSecondary dark:text-textDark text-[14px] sm:text-base min-h-12">
						{tier.description}
					</div>
				</div>
				<div className="flex items-center justify-between relative w-full">
					{tier.price !== "Custom Quote" && (
						<p className="text-2xl sm:text-[42px] font-bold text-text dark:text-textDark ">
							${tier.price}
							<span className="text-base sm:text-xl font-normal">
								{tier.price === tier.monthlyPrice ? "/month" : "/year"}
							</span>
						</p>
					)}
					{tier.tag && (
						<div className="flex items-center gap-1 pl-1 pr-2.5 sm:gap-2 sm:pl-1.5 sm:pr-3 py-1 bg-[#FFF2DB] dark:bg-fgcDark rounded-l-full absolute -right-[17px] sm:-right-[25px]">
							<Icon icon="star-icon" className="w-4 h-4 sm:w-5 sm:h-5 text-bgc dark:text-bgcDark " />
							<span className="text-xs sm:text-sm font-medium text-text dark:text-textDark">
								{tier.tag}
							</span>
						</div>
					)}
				</div>
				{tier.price === "Custom Quote" && (
					<p className="text-base sm:text-xl font-semibold text-text dark:text-textDark">{tier.price}</p>
				)}

				<Separator className="bg-textSecondary/20 dark:!bg-textSecondary/30 !bg-none" />

				<div className="font-medium text-text dark:text-textDark textbase sm:text-lg">Includes</div>

				<div className="flex flex-col items-start gap-3	sm:gap-6 w-full">
					{tier.features.map((feature, index) => (
						<div key={index} className="flex items-baseline gap-2 sm:gap-3 w-full">
							<div className="w-[17px] h-[17px] sm:w-5 sm:h-5 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
								<Icon icon="check" className=" w-[11px] h-[11px] sm:w-3 sm:h-3 pt-0.5 text-primary" />
							</div>
							<div className="text-text dark:text-textDark text-[14px] sm:text-base">{feature}</div>
						</div>
					))}
				</div>
			</div>

			<div
				className="flex sm:h-14 gap-8 px-6 py-3 sm:px-8 sm:py-4 w-full items-center justify-center rounded-[12px] cursor-pointer sm:rounded-xl"
				onClick={() => selectCard(tier)}>
				<div className="font-semibold text-text  text-[14px] sm:text-base whitespace-nowrap">
					{tier.buttonText}
				</div>
			</div>
		</div>
	);
};

export default PricingCard;
