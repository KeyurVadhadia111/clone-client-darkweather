import Icon from "components/utils/Icon";
import { useAppState } from "components/utils/useAppState";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
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

	useEffect(() => {
		if (localStorage.theme === "dark") {
			setThemeMode(true);
			setAppState({ isDark: true });
		}
		if (window.matchMedia("(prefers-color-scheme: dark)").matches || localStorage?.theme === undefined) {
			setThemeMode(true);
			setAppState({ isDark: true });
		}
	}, []);

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
		<header className="relative z[1] w-full border-b  shadow-[inset_0px_30px_30px_#ffffff0d] border-white/16">
			<div className="container flex items-center justify-between py-2 sm:py-5">
				<img
					className="w-auto h-8 sm:h-[60px] !cursor-pointer"
					alt="Dark Weather Logo"
					src={`assets/images/logo-${isDark ? "dark" : "light"}.svg`}
				/>

				<div className="flex items-center sm:hidden">
					<Icon className="w-6 h-6 text-text dark:text-textDark" icon="hamburger" />
				</div>
				<nav className="items-center gap-7 hidden sm:flex">
					{navItems.map((item, index) => (
						<Link
							key={index}
							to={item.href}
							aria-label={item.title}
							className="text-base tracking-[0.80px] leading-6 font-normal text-text dark:text-textDark dark:hover:text-gray-200 hover:text-gray-600">
							{item.title}
						</Link>
					))}
				</nav>

				<div className="items-center gap-6 hidden sm:flex">
					<div className="flex items-center cursor-pointer">
						<Icon className="w-5 h-5 text-text dark:text-textDark" icon="search" />
					</div>
					<div
						className="flex items-center cursor-pointer"
						onClick={() => {
							localStorage.setItem("theme", !isDark ? "dark" : "light");
							setThemeMode(!isDark);
						}}>
						<Icon className="w-6 h-6 text-text dark:text-textDark" icon={isDark ? "moon" : "sun"} />
					</div>
				</div>
			</div>
		</header>
	);
}
