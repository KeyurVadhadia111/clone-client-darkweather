import { NewsFeedStories } from "components/common/NewsFeedStories";
import React, { JSX, useState } from "react";

const AboutUs = (): JSX.Element => {
	const [sections] = useState([
		{
			title: "From Fear to Clarity",
			paragraphs: [
				"Dark Weather was born from a deeply personal experience. Our founder grew up gripped by fear of severe storms—tornadoes, hail, and damaging winds weren't just weather events, they were sources of constant anxiety.",
				"He often wished for a meteorologist in his pocket—someone to explain what was happening, when to worry, and when to breathe easy. That wish became a mission.",
				"That personal struggle with weather anxiety sparked the inspiration for what would eventually become Dark Weather—a platform designed not just to report weather, but to explain it in a way that brings comfort and clarity.",
			],
		},
		{
			title: "The Solution We Built",
			paragraphs: [
				"Dark Weather is the realization of our mission: a smart, intuitive weather assistant that empowers users to understand complex weather data without needing a meteorology degree.",
				'Whether you\'re wondering "What exactly is a supercell?", "How dangerous is ping pong-sized hail?", or just "Should I bring an umbrella today?"—we\'ve built a platform that gives you answers when you need them most.',
				"Beyond education, our cutting-edge user interface makes navigating weather information simple, fast, and enjoyable. We believe clarity is power, and we've designed every part of Dark Weather to keep you informed—not overwhelmed.",
			],
		},
	]);
	const [coreValues] = useState([
		{
			title: "Clarity",
			icon: "/assets/images/clarity.svg",
			description:
				"We transform complex weather data into easily understood information. Because when things are clear, fear subsides.",
		},
		{
			title: "Accessibility",
			icon: "/assets/images/accessibility.svg",
			description:
				"Weather information should be available and understandable to everyone, regardless of their background or expertise.",
		},
		{
			title: "Innovation",
			icon: "/assets/images/innovation.svg",
			description:
				"We're continually developing new tools and conducting research to advance weather communication technology.",
		},
		{
			title: "Truth",
			icon: "/assets/images/truth.svg",
			description:
				"We’re committed to truth in every forecast we deliver. In a world of sensationalism, we prioritize science, data, and facts over fear.",
		},
	]);

	return (
		<div className="my-6 sm:my-[60px]">
			<div className="container">
				<div className="flex flex-col items-start pt-2.5 px-2.5 sm:pt-4 pb-0 sm:px-4 flex-[0_0_auto] bg-bgc dark:bg-fgcDark rounded-[20px_20px_0px_0px]">
					<div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-[30px] flex-[0_0_auto]">
						<div className="flex flex-col items-start gap-5 sm:gap-[30px] w-full sm:w-[546px]">
							<div className="font-medium text-text dark:text-textDark text-2xl sm:text-[40px]  tracking-[0] sm:leading-10 whitespace-nowrap">
								About Us
							</div>
							{sections.map((section, idx) => (
								<div
									key={section.title}
									className="flex flex-col items-start gap-3 sm:gap-6 w-full flex-[0_0_auto]">
									<div className="font-semibold text-text dark:text-textDark text-base sm:text-2xl tracking-[0] leading-6 ">
										{section.title}
									</div>
									<div className="flex flex-col items-start gap-3  w-full flex-[0_0_auto]">
										{section.paragraphs.map((text, pIdx) => (
											<p
												key={pIdx}
												className="self-stretch font-normal text-textSecondary dark:text-textDark leading-[20.8px] text-sm sm:text-base tracking-[0]">
												{text}
											</p>
										))}
									</div>
								</div>
							))}
						</div>
						<div className="w-full h-[364px] sm:w-[546px] sm:h-[649px]">
							<img src="/assets/images/about-img.svg" alt="about-img" className="w-full h-full" />
						</div>
					</div>
				</div>
				{/* Core Values */}
				<div className="flex flex-col w-full gap-12 pt-6 sm:pt-[42px] pb-6 sm:pb-[60px] px-0">
					<div className="font-medium text-start text-text dark:text-textDark text-2xl sm:text-[40px] tracking-[0] sm:leading-10 whitespace-nowrap">
						Our Core Values
					</div>
					<div className="flex flex-wrap justify-center gap-4 sm:gap-[30px] w-full">
						{coreValues.map(value => (
							<div
								key={value.title}
								className="flex flex-col w-full sm:w-[270px] items-center gap-4 sm:gap-6 p-4 sm:p-6 bg-bgc dark:bg-fgcDark rounded-3xl shadow-[0px_20px_35px_#0000000d]">
								<div className="flex items-center justify-center w-[42px] h-[42px] sm:w-[60px] sm:h-[60px]">
									<img className="w-full h-full" alt={value.title} src={value.icon} />
								</div>
								<div className="flex flex-col items-center gap-4 w-full">
									<div className="font-semibold text-text dark:text-textDark text-base sm:text-2xl text-center tracking-[0] sm:leading-6">
										{value.title}
									</div>
									<div className="flex flex-col items-center gap-3 w-full">
										<div className="flex items-start justify-center gap-3 w-full">
											<p className="font-normal text-textSecondary dark:text-textDark text-xs sm:text-base text-center tracking-[0] sm:leading-6">
												{value.description}
											</p>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			<NewsFeedStories />
			<div className="container flex flex-col items-start gap-2.5 pt-6 sm:pt-0 relative">
				<div className="z-[10] flex flex-col items-start justify-center gap-2.5 px-[16px] py-[16px] sm:px-[72px] sm:py-[60px] relative self-stretch w-full flex-[0_0_auto] rounded-3xl bg-[url('/assets/images/main-bg.png')] bg-no-repeat bg-[position:24%_-80px] bg-[length:340%] sm:bg-[position:-10px_-260px] sm:bg-[length:165%]">
					<div
						className={`absolute hidden dark:block  w-full h-full bottom-0 left-0 bg-gradient-to-b dark:from-bgcDark/50 dark:to-bgcDark/50 `}></div>
					<div className="z-[1] inline-flex flex-col items-start justify-center gap-6 sm:gap-12 relative flex-[0_0_auto]">
						<div className="flex flex-col w-[295px] sm:w-[450px] items-start gap-[14px] sm:gap-4 relative flex-[0_0_auto]">
							<p className="relative font-medium text-white text-2xl sm:text-[40px] ">
								Join the Weather-Aware Community
							</p>

							<p className="relative  font-medium text-white text-base sm:text-xl ">
								Experience weather information that's clear, intuitive, and empowering.
							</p>
						</div>

						<div className="inline-flex items-center justify-center gap-8 px-6 py-3 sm:px-8 sm:py-4 relative flex-[0_0_auto] bg-primary rounded-[10px] sm:rounded-xl cursor-pointer">
							<div className="relative w-fit mt-[-1.00px]  font-semibold text-text dark:text-textDark text-[14px] sm:text-base whitespace-nowrap">
								Chat With Ai Assistant
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
