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
			<div className="flex flex-col sm:flex-row items-center gap-8 p-8 bg-bgc dark:bg-fgcDark rounded-[20px]">
				<div className="flex flex-col items-center gap-[42px] relative self-stretch w-full flex-[0_0_auto]">
					<div className="relative w-fit mt-[-1.00px] [font-family:'Rubik',Helvetica] font-medium text-text dark:text-textDark text-[40px] text-center tracking-[0] leading-10 whitespace-nowrap">
						Question? Look here.
					</div>

					{/* <Tabs defaultValue="General Information" value={questionTabs} className="w-full">
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
					</Tabs> */}

					{/* FAQ Items */}
					<div className="flex items-center gap-[30px] relative self-stretch w-full flex-[0_0_auto]">
						{questionTabs === "General Information" ? <GeneralInformation /> : ""}
					</div>
				</div>
			</div>
		</div>
	);
};

export default FAQ;
