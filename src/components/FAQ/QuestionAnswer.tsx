import Icon from "components/utils/Icon";
import { Separator } from "components/utils/Separator";
import React, { JSX, useState } from "react";

export interface FaqItem {
	question: string;
	answer: string;
}

interface Props {
	faqItems: FaqItem[];
	startIndex?: number;
}

const QuestionAnswer = ({ faqItems, startIndex = 0 }: Props): JSX.Element => {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

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
								{startIndex + index + 1}.
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

export default QuestionAnswer;
