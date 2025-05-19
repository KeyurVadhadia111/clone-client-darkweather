import { AssistantCard } from "components/premiumPlan/AssistantCard";
import React, { useState } from "react";

const HealthActivities: React.FC = () => {
	const pollenLevels = [
		{ color: "bg-primary", label: "None" },
		{ color: "bg-[#59b61f]", label: "Low" },
		{ color: "bg-[#197600]", label: "Very Low" },
		{ color: "bg-[#f0fd3b]", label: "Moderate" },
		{ color: "bg-[#fd623b]", label: "High" },
		{ color: "bg-[#ff3e0e]", label: "Very High" },
	];

	const [pollenData] = useState([
		{
			type: "Tree Pollen",
			color: "border-primary",
			dot: "bg-primary",
			levels: ["None", "None", "None"],
			img: "/assets/images/tree-pollen.svg",
		},
		{
			type: "Grass Pollen",
			color: "border-[#59b61f]",
			dot: "bg-[#59b61f]",
			levels: ["Low", "Low", "Low"],
			img: "/assets/images/grass-pollen.svg",
		},
		{
			type: "Ragweed Pollen",
			color: "border-primary",
			dot: "bg-primary",
			levels: ["None", "None", "None"],
			img: "/assets/images/ragweed-pollen.svg",
		},
	]);

	const dayLabels = ["Tonight", "Tomorrow", "Sunday"];

	const [tips] = useState([
		{
			img: "/assets/images/shower.svg",
			title: "Shower after being outdoors",
			desc: "To remove pollen you pick up outside, take a shower and change your clothes.",
		},
		{
			img: "/assets/images/minimise.svg",
			title: "Minimise indoor pollen",
			desc: "Keep your windows shut and use your AC or a HEPA purifier to filter allergens.",
		},
		{
			img: "/assets/images/sunny.svg",
			title: "Check the Weather",
			desc: "Learn when conditions such as the wind increase pollen levels, so you can prepare.",
		},
		{
			img: "/assets/images/medication.svg",
			title: "Know your allergy relief options",
			desc: "From medications to nasal sprays, talk to your doctor about your options.",
		},
	]);

	return (
		<section className="container mt-[30px] sm:mt-[60px] mb-9 sm:mb-[72px]">
			<div className=" flex flex-col items-center justify-center gap-6 sm:gap-12">
				<div className="w-full h-auto sm:h-[282px] p-5 sm:p-0 bg-bgc dark:bg-bgcDark rounded-[20px] flex flex-col items-center justify-center">
					<div className="flex flex-col items-center gap-4 sm:gap-[30px]">
						<div className="flex flex-col items-center gap-3 sm:gap-5 ">
							<div className="font-medium text-text dark:text-textDark text-2xl sm:text-[40px] text-center leading-10">
								Pollen Breakdown
							</div>
							<p className="font-normal text-textSecondary dark:text-textDark text-sm sm:text-base text-center tracking-[0.80px] leading-6 whitespace-normal sm:whitespace-nowrap">
								Do you know which kinds of pollen aggravate your symptoms? Here is the 3 day outlook for
								the worst offenders.
							</p>
						</div>
						<div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-[30px]">
							{pollenLevels.map(level => (
								<div key={level.label} className="flex w-[111px] items-center gap-2 sm:gap-3">
									<div className="flex items-center justify-center w-6 h-6">
										<div className={`w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full ${level.color}`} />
									</div>
									<div className="font-medium text-text dark:text-textDark text-sm sm:text-base leading-6 whitespace-nowrap">
										{level.label}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-[30px] justify-center w-full mb-8 sm:mb-[72px]">
					{pollenData.map(pollen => (
						<div
							key={pollen.type}
							className={`flex flex-col w-full sm:w-[370px] items-center gap-4 sm:gap-6 p-6 bg-bgc dark:bg-fgcDark rounded-3xl border-l-4 border-solid ${pollen.color} shadow-[0px_20px_35px_rgba(0,0,0,0.05)]`}>
							<img
								src={pollen.img}
								alt={pollen.type}
								className="w-[35px] h-[35px] sm:w-[60px] sm:h-[60px] object-contain "
							/>
							<div className="flex flex-col gap-3 sm:gap-4">
								<div className="font-semibold text-text dark:text-textDark text-base sm:text-xl text-center leading-6">
									{pollen.type}
								</div>
								<div className="flex flex-col gap-2 sm:gap-3 w-full items-center">
									{pollen.levels.map((level, idx) => (
										<div
											key={idx}
											className=" flex items-center gap-2 sm:gap-3 w-[140px] sm:w-[159px]">
											<div className="flex items-center justify-center w-3 h-3 sm:w-6 sm:h-6">
												<div
													className={`w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full ${pollen.dot}`}
												/>
											</div>
											<span className="text-text dark:text-textDark text-base leading-6 whitespace-nowrap">
												{dayLabels[idx]}: <span className="font-medium">{level}</span>
											</span>
										</div>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="flex flex-col items-start gap-6 sm:gap-12 mt-6 sm:mt-12 mb-9 sm:mb-[72px] w-full ">
				<p className="font-medium text-text dark:text-textDark text-3xl sm:text-[40px] text-center leading-10 whitespace-normal sm:whitespace-nowrap">
					Tips to Help Manage Your Allergies
				</p>
				<div className="flex flex-col items-start gap-6 sm:gap-[30px] w-full">
					<div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-[30px]">
						{tips.slice(0, 2).map((tip, idx) => (
							<div
								key={idx}
								className="flex items-center sm:flex-1 gap-3 sm:gap-4 p-4  bg-bgc dark:bg-fgcDark rounded-2xl shadow-[0px_35px_35px_rgba(0,0,0,0.05)]">
								<img src={tip.img} alt={tip.title} className="w-8 h-8 sm:w-12 sm:h-12 object-contain" />
								<div className="flex flex-col items-start gap-0.5 sm:flex-1">
									<div className="font-medium text-text dark:text-textDark text-sm sm:text-base tracking-[0.80px] sm:leading-6">
										{tip.title}
									</div>
									<p className="font-medium text-textSecondary dark:text-textDark text-xs sm:text-base tracking-[0.80px] sm:leading-6">
										{tip.desc}
									</p>
								</div>
							</div>
						))}
					</div>
					<div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-[30px]">
						{tips.slice(2, 4).map((tip, idx) => (
							<div
								key={idx}
								className="flex items-center gap-3 sm:flex-1 sm:gap-4 p-4  bg-bgc dark:bg-fgcDark rounded-2xl shadow-[0px_35px_35px_rgba(0,0,0,0.05)]">
								<img src={tip.img} alt={tip.title} className="w-8 h-8 sm:w-12 sm:h-12 object-contain" />
								<div className="flex flex-col items-start gap-0.5 sm:flex-1">
									<div className="font-medium text-text dark:text-textDark text-sm sm:text-base tracking-[0.80px] sm:leading-6">
										{tip.title}
									</div>
									<p className="font-medium text-textSecondary dark:text-textDark text-xs sm:text-base tracking-[0.80px] sm:leading-6">
										{tip.desc}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<AssistantCard />
		</section>
	);
};

export default HealthActivities;
