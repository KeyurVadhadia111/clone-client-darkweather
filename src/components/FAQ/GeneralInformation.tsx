import Icon from "components/utils/Icon";
import { Separator } from "components/utils/Separator";
import React, { JSX, useState } from "react";

const GeneralInformation = (): JSX.Element => {
	const [openIndex, setOpenIndex] = useState<number | null>(0);
	const faqItems = [
		{
			question: "What is this website for?",
			answer: "It provides accurate, real-time weather forecasts and alerts.",
		},
		{
			question: "How frequently is the weather updated?",
			answer: "Our weather data is updated every 15 minutes to ensure accuracy.",
		},
		{
			question: "Which regions do you cover?",
			answer: "We cover weather forecasts for locations worldwide.",
		},
		{
			question: "Do I need an account to use the website?",
			answer: "Basic forecasts are available without an account, but creating one unlocks additional features.",
		},
		{
			question: "Is this weather data reliable?",
			answer: "Yes, we source our data from multiple trusted meteorological services and satellites.",
		},
		{
			question: "What units do you support?",
			answer: "We support both metric and imperial units, which can be toggled in your account settings.",
		},
	];

	const toggleFaq = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};
	return (
		<div className="flex flex-col w-full sm:w-[706px] items-start gap-2 sm:gap-4">
			{faqItems.map((item, index) => (
				<div key={index} className="w-full flex-[0_0_auto]">
					<div
						className={`flex flex-col items-start gap-2 sm:gap-3 p-2.5 sm:p-4 w-full flex-[0_0_auto] ${
							openIndex === index
								? "bg-fgc dark:bg-fgcDark rounded-lg sm:rounded-xl"
								: index === faqItems.length - 1
									? ""
									: "border-b border-textSecondary/20"
						}`}>
						<div
							className="flex items-start sm:items-center gap-3 w-full flex-[0_0_auto] cursor-pointer"
							onClick={() => toggleFaq(index)}>
							<p className="font-medium text-text dark:text-textDark text-base sm:text-lg">
								{index + 1}.
							</p>
							<div className="flex items-center justify-between flex-1 cursor-pointer">
								<p className=" font-medium text-text dark:text-textDark text-base sm:text-lg w-[230px] sm:w-[500px]">
									{item.question}
								</p>

								<Icon
									icon={openIndex === index ? "minus" : "plus"}
									className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform text-text dark:text-textDark shrink-0 ${
										openIndex === index ? "rotate-180" : ""
									}`}
								/>
							</div>
						</div>
						{openIndex === index && (
							<>
								<Separator className="bg-textSecondary/20 dark:!bg-textSecondary/30 !bg-none" />
								<p className="w-full sm:w-[684px] font-normal text-text dark:text-textDark text-sm sm:text-base tracking-[0] leading-6 ">
									{item.answer}
								</p>
							</>
						)}
					</div>
				</div>
			))}
		</div>
	);
};
export default GeneralInformation;
