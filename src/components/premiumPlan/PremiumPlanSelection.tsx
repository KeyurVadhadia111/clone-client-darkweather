import { JSX, useState } from "react";
import PricingCard from "./PricingCard";
import { AssistantCard } from "./AssistantCard";
import { Tabs, TabsList, TabsTrigger } from "components/utils/tabs";
import { useAppState } from "components/utils/useAppState";

const pricingPlans = [
	{
		name: "Free Tier",
		description: "For everyday weather checkers",
		monthlyPrice: "0",
		yearlyPrice: "0",
		features: [
			"30 questions/month",
			"Casual users",
			"Basic email support",
			"Daily weather checks, occasional planning",
		],
		buttonText: "Start for Free",
	},
	{
		name: "Premium Tier",
		description: "For power users who want more control & live insights",
		monthlyPrice: "9.99",
		yearlyPrice: "99.99",
		tag: "Popular",
		features: [
			"Unlimited questions",
			"Early access to Dark Weather AI projects",
			"Weather enthusiasts & frequent users",
			"Priority email support",
			"Unlimited forecasts, beta feature testing",
		],
		buttonText: "Get Started",
	},
	{
		name: "Consultation Tier",
		description: "For weather enthusiasts who want direct expert access",
		monthlyPrice: "Custom Quote",
		yearlyPrice: "Custom Quote",
		features: [
			"Unlimited questions",
			"Early access to Dark Weather AI projects",
			"Direct access to meteorologist for tailored insights",
			"Businesses, professionals, & high-demand users",
			"Dedicated account manager & phone support",
			"Event planning, agriculture, logistics",
		],
		buttonText: "Contact Us",
	},
];

interface Props { }

const PremiumPlanSelection: React.FC<Props> = ({ }): JSX.Element => {
	const [{ premiumStep, currentPremiumPlan }, setAppState] = useAppState();
	const tabs = ["Monthly", "Yearly"];
	const [activeTab, setActiveTab] = useState("Monthly");
	const selectCard = (value: any) => {
		setAppState({
			premiumStep: 2,
			currentPremiumPlan: {
				...value,
				billingCycle: activeTab.toLowerCase(),
				renewDate: new Date().toISOString(),
			},
		});
	};

	return (
		<>
			<div className="container">
				<div className="w-full  sm:h-[292px] p-5 bg-bgc dark:bg-bgcDark text-text- dark:text-textDark rounded-t-[14px] sm:rounded-t-[20px] flex flex-col items-center justify-center gap-4 sm:gap-8 shadow-[0_20px_35px_rgba(0,0,0,0.03)] mt-6 sm:mt-12">
					<div className="flex flex-col items-center gap-4 sm:gap-5">
						<div className="font-medium text-text dark:text-textDark text-2xl leading-none sm:text-[40px] text-center ">
							Choose Your Forecast Power
						</div>
						<p className="font-normal text-textSecondary dark:text-textDark text-[14px] sm:text-base text-center tracking-[0.8px] leading-6">
							Access personalized insights, expert guidance, and advanced weather tools.
						</p>
					</div>

					<Tabs defaultValue="Monthly" className="">
						<TabsList className=" bg-bgc dark:bg-fgcDark px-[12px] py-2 sm:px-8 sm:py-4 rounded-lg shadow-[0_35px_35px_rgba(0,0,0,0.05)] !p-0">
							{tabs.map(tab => (
								<TabsTrigger
									onClick={() => {
										setActiveTab(tab);
									}}
									key={tab}
									value={tab}
									className=" px-[12px] py-2 sm:px-8 sm:py-4 dark:text-textDark text-xs lg:text-[14px] rounded-[12px] font-normal">
									{tab}
								</TabsTrigger>
							))}
						</TabsList>
					</Tabs>
				</div>
			</div>

			<div className="w-full">
				<div className="container">
					<div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-[30px]  bg-bgc dark:bg-bgcDark">
						{pricingPlans.map((plan, index) => (
							<PricingCard
								key={plan.name}
								tier={{
									...plan,
									price: activeTab === "Monthly" ? plan.monthlyPrice : plan.yearlyPrice,
								}}
								selectCard={selectCard}
							/>
						))}
					</div>
				</div>
			</div>
			<div className="container mt-[48px] sm:mt-[72px]">
				<AssistantCard />
			</div>
		</>
	);
};
export default PremiumPlanSelection;
