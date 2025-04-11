import { Button } from "components/utils/Button";
import { useAppState } from "components/utils/useAppState";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
	const [{ isDark }, setAppState] = useAppState();

	// Navigation menu items
	const navItems = [
		{ title: "Home", href: "#" },
		{ title: "Radar & Maps", href: "#" },
		{ title: "Weather A.I.", href: "#" },
		{ title: "Go Premium", href: "#" },
		{ title: "Top Stories", href: "#" },
		{ title: "Alerts", href: "#" },
	];

	const setThemeMode = (isDark: boolean) => {
		if (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) {
			document.documentElement.classList.add("dark");
			isDark = true;
		}
		if (isDark) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
		setAppState({ isDark: isDark });
	};

	return (
		<footer className="flex flex-col w-full items-start relative overflow-hidden pt-0">
			<img
				className="hidden sm:block absolute w-auto sm:w-full auto rotate-180 bottom-0 left-0 "
				alt="Footer background"
				src="assets/images/footer-bg.png"
			/>
			<div className="sm:hidden block absolute w-full h-full rotate-180 bottom-0 left-0 overflow-visible bg-no-repeat bg-top sm:bg-cover bg-[length:auto] bg-[url('/assets/images/footer-bg.png')] " />
			<div className="absolute dark:z-[1] w-full h-full bottom-0 left-0 bg-gradient-to-t from-white/0 to-white dark:from-bgcDark/70 dark:to-bgcDark"></div>

			{/* Footer Navigation */}
			<div className="z-[1] gap-4 sm:gap-[30px] px-6 sm:px-[135px] py-6 sm:py-12 border-b border-white/16 flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
				<img
					className="relative h-8 sm:h-[60px]"
					alt="Dark Weather Logo"
					src={`assets/images/logo-${isDark ? "dark" : "light"}.svg`}
				/>

				<nav className="w-full flex items-center justify-center flex-wrap gap-4 sm:gap-12 text-text dark:text-textDark text-sm sm:text-base">
					{navItems.map((item, index) => (
						<Link
							key={index}
							to={item.href}
							aria-label={item.title}
							className="tracking-[0.80px] text-text dark:text-textDark dark:hover:text-gray-200 hover:text-gray-600">
							{item.title}
						</Link>
					))}
				</nav>

				<Button
					variant="outline"
					className="inline-flex items-center justify-center gap-4 px-6 !py-0 !bg-white/20 rounded-xl border-0 text-text dark:text-textDark !cursor-pointer !h-[42px] sm:!h-14"
					onClick={() => {
						localStorage.setItem("theme", !isDark ? "dark" : "light");
						setThemeMode(!isDark);
					}}>
					<span className="!font-semibold text-text dark:text-textDark">
						{isDark ? "Dark" : "Light"} Mode
					</span>
					<img className="w-6 h-6" alt="Sun icon" src={`assets/images/${isDark ? "moon" : "sun"}.png`} />
				</Button>

				<img
					className="absolute w-[136px] sm:w-[214px] h-auto top-20 sm:top-[45px] -left-20 sm:-left-24"
					alt="Weather icon"
					src="assets/images/cloud.png"
				/>

				<img
					className="absolute w-[136px] sm:w-[214px] h-auto top-20 sm:top-[15px] -right-20 sm:-right-24"
					alt="Weather icon"
					src="assets/images/cloud.png"
				/>
			</div>

			{/* Copyright Section */}
			<div className="z-[1] px-6 sm:px-[135px] py-4 sm:py-6 flex flex-col items-center relative self-stretch w-full flex-[0_0_auto] text-xs sm:text-base">
				<div className="flex flex-col gap-4 sm:gap-9 sm:flex-row items-center justify-between container">
					<p className="[font-family:'Rubik',Helvetica] font-normal text-text dark:text-textDark tracking-[0.80px] leading-6">
						© 2025 Dark Weather. All rights reserved.
					</p>

					<div className="flex items-center gap-6">
						<Link to={"/"} className="text-text dark:text-textDark tracking-[0.80px]">
							Privacy Policy
						</Link>
						<Link to={"/"} className="text-text dark:text-textDark tracking-[0.80px]">
							Terms And Conditions
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
