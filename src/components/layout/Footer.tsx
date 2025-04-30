import { Button } from "components/utils/Button";
import { useAppState } from "components/utils/useAppState";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Footer() {
	const [{ isDark, userDetails, premiumStep }, setAppState] = useAppState();
	const [isAuthPage, setIsAuthPage] = useState(false);
	const location = useLocation();

	// Navigation menu items
	const navItems = [
		{ title: "Home", href: "/", authRequired: false },
		{ title: "Radar & Maps", href: "#", authRequired: true },
		{ title: "Weather A.I.", href: "/weather-ai", authRequired: false },
		{ title: "Go Premium", href: "/premium-plan", authRequired: true },
		{ title: "Top Stories", href: "#", authRequired: false },
		{ title: "Alerts", href: "/alerts", authRequired: false },
	];

	useEffect(() => {
		setIsAuthPage(
			prev =>
				location.pathname === "/login" ||
				location.pathname === "/register" ||
				location.pathname === "/forgot-password",
		);
		return () => {
			true;
		};
	}, [location.pathname]);

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
		<footer
			className={`flex flex-col w-full items-start relative ${isAuthPage && "overflow-hidden"} pt-0 bg-text dark:bg-bgc text-bgc dark:text-text`}>
			{/* <div
				className={`absolute bottom-0 left-0 w-full h-[702px] scale-x-[-1] overflow-hidden bg-no-repeat bg-bottom rotate-180 bg-[length:450%] ${isAuthPage ? "sm:bg-[length:115%]" : "sm:bg-[length:140%]"} bg-[url('/assets/images/footer-bg.png')]`}
				style={{
					backgroundPosition: "center top", // Center horizontally, align bottom
				}}
			/>
			<div
				className={`absolute w-full ${isAuthPage ? "h-full" : "h-[702px]"} bottom-0 left-0 bg-gradient-to-t from-white/0 to-white dark:from-bgcDark/70 dark:to-bgcDark `}></div> */}

			{/* Footer Navigation */}
			<div className="z-[1] gap-4 sm:gap-[30px] px-6 sm:px-[135px] py-6  sm:pt-[72px] sm:pb-12  flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
				<Link to={"/"}>
					<img
						className="relative h-8 sm:h-[60px]"
						alt="Dark Weather Logo"
						src={`assets/images/logo-${!isDark ? "dark" : "light"}.svg`}
					/>
				</Link>

				<nav className="w-full flex items-center justify-center flex-wrap gap-4 sm:gap-12 text-sm sm:text-base">
					{navItems
						.filter(item => (!userDetails?._id ? !item.authRequired : true))
						.map((item, index) => (
							<Link
								key={index}
								to={item.href}
								aria-label={item.title}
								className="tracking-[0.80px] hover:opacity-90">
								{item.title}
							</Link>
						))}
				</nav>

				<Button
					variant="none"
					className="inline-flex items-center justify-center gap-4 px-4 sm:px-6 !py-0 !bg-bgc/10 dark:!bg-text/10 rounded-xl border-0 !cursor-pointer !h-[42px] sm:!h-14"
					onClick={() => {
						localStorage.setItem("theme", !isDark ? "dark" : "light");
						setThemeMode(!isDark);
					}}>
					<span className="!font-semibold">{!isDark ? "Dark" : "Light"} Mode</span>
					<img
						className="w-5 h-5 sm:w-6 sm:h-6"
						alt="Sun icon"
						src={`assets/images/${!isDark ? "moonset.svg" : "sunny.svg"}`}
					/>
				</Button>

				<img
					className="absolute w-[137px] sm:w-[214px] h-auto opacity-10 dark:opacity-100 top-20 sm:top-[45px] -left-20 sm:-left-24"
					alt="Weather icon"
					src="assets/images/cloud-cover.svg"
				/>

				<img
					className="absolute w-[137px] sm:w-[214px] h-auto opacity-10 dark:opacity-100  top-20 sm:top-[15px] -right-20 sm:-right-24"
					alt="Weather icon"
					src="assets/images/cloud-cover.svg"
				/>
			</div>

			{/* Copyright Section */}
			<div className="z-[1] px-6 sm:px-[135px] py-4 sm:py-6 flex flex-col items-center relative self-stretch w-full flex-[0_0_auto] text-xs sm:text-base">
				<div className="flex flex-col gap-4 sm:gap-9 sm:flex-row items-center justify-between container">
					<p className="[font-family:'Rubik',Helvetica] font-normal tracking-[0.80px] leading-6">
						© 2025 Dark Weather. All rights reserved.
					</p>

					<div className="flex items-center gap-6">
						<Link to={"/"} className="tracking-[0.80px]">
							Privacy Policy
						</Link>
						<Link to={"/"} className="tracking-[0.80px]">
							Terms And Conditions
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
