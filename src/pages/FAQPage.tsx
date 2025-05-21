import GeneralInformation from "components/FAQ/GeneralInformation";
import { Tabs, TabsList, TabsTrigger } from "components/utils/tabs";
import { useAppState } from "components/utils/useAppState";
import React, { JSX, useState } from "react";

const FAQ = (): JSX.Element => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const [{ questionTabs }, setAppState] = useAppState();

	const QuestionTabs = [
		"General Information",
		"Forecast & Features",
		"Location & Maps",
		"Alerts & Notifications",
		"Account & Support",
	];

	return (
		<div className="container my-6 sm:my-[60px]">
			<div className="flex flex-col  items-center gap-8 p-4 sm:p-8 bg-bgc dark:bg-fgcDark rounded-[20px]">
				<div className="flex flex-col items-center gap-6 sm:gap-[42px]">
					<div className=" font-medium text-text dark:text-textDark text-2xl sm:text-[40px] text-center tracking-[0] leading-10 whitespace-nowrap">
						Question? Look here.
					</div>
					{/* Tabs for Desktop */}
					<Tabs defaultValue="General Information" value={questionTabs} className="w-full hidden sm:block">
						<TabsList className="w-full bg-bgc dark:bg-fgcDark rounded-lg shadow-[0_35px_35px_rgba(0,0,0,0.05)] !p-0">
							{QuestionTabs.map(tab => (
								<TabsTrigger
									key={tab}
									value={tab}
									className="!px-8 !py-4 !w-full dark:text-textDark !text-base rounded-xl font-normal"
									onClick={() => setAppState({ questionTabs: tab })}>
									{tab}
								</TabsTrigger>
							))}
						</TabsList>
					</Tabs>

					{/* Mobile Tabs */}
					<div className="flex flex-col gap-4 w-full sm:hidden ">
						{QuestionTabs.map(tab => (
							<React.Fragment key={tab}>
								<button
									className={`w-full px-6 py-2.5 rounded-xl text-base font-normal shadow-[0_35px_35px_rgba(0,0,0,0.05)] ${
										questionTabs === tab
											? "bg-primary text-text font-semibold mb-2"
											: "bg-bgc text-text dark:text-textDark"
									}`}
									onClick={() => setAppState({ questionTabs: tab })}>
									{tab}
								</button>
								{questionTabs === tab && tab === "General Information" && <GeneralInformation />}
							</React.Fragment>
						))}
					</div>
				</div>
				<div className="flex flex-col sm:flex-row items-center gap-[30px] ">
					{/* FAQ Items */}
					<div className="hidden sm:flex items-center gap-[30px] ">
						{questionTabs === "General Information" ? <GeneralInformation /> : ""}
					</div>
					<div className="flex items-center justify-center shrink-0">
						<img
							src="/assets/images/faq-img.svg"
							alt="faq-img"
							className="w-[295px] sm:w-[370px] h-[318px] sm:h-[330px]"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FAQ;
