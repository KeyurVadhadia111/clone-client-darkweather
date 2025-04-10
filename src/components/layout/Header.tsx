import { Button } from "components/utils/Button";
import Icon from "components/utils/Icon";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
	// Navigation menu items
	const navItems = [
		{ title: "Home", href: "#" },
		{ title: "Radar & Maps", href: "#" },
		{ title: "Weather A.I.", href: "#" },
		{ title: "Go Premium", href: "#" },
		{ title: "Top Stories", href: "#" },
		{ title: "Alerts", href: "#" },
	];

	const [darkmode, setDarkmode] = useState(false);

	useEffect(() => {
		if (localStorage.theme === "dark") {
			setThemeMode(true);
		}
		if (window.matchMedia("(prefers-color-scheme: dark)").matches || localStorage?.theme === undefined) {
			setThemeMode(true);
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
		setDarkmode(isDark);
	};

	return (
		<header className="w-full bg-[#ffffff14] border-b [border-bottom-style:solid] border-transparent shadow-[inset_0px_30px_30px_#ffffff0d] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)] [border-image:linear-gradient(90deg,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0.16)_50%,rgba(255,255,255,0.16)_100%)_1] inset">
			<div className="container flex items-center justify-between py-2 sm:py-5">
				<img
					className="w-auto h-8 sm:h-[60px] !cursor-pointer"
					alt="Dark Weather Logo"
					src="assets/images/logo-light.svg"
				/>

				<div className="flex items-center sm:hidden">
					<Icon className="w-6 h-6" icon="hamburger" />
				</div>
				<nav className="items-center gap-7 hidden sm:flex">
					{navItems.map((item, index) => (
						<Link
							key={index}
							to={item.href}
							aria-label={item.title}
							className="text-base tracking-[0.80px] leading-6 font-normal text-text-dark hover:text-blue-50 dark:text-text">
							{item.title}
						</Link>
					))}
				</nav>

				<div className="items-center gap-6 hidden sm:flex">
					<div className="flex items-center cursor-pointer">
						<Icon className="w-5 h-5 text-white" icon="search" />
					</div>
					<div
						className="flex items-center cursor-pointer"
						onClick={() => {
							/* localStorage.setItem(
								'theme',
								!darkmode
									? 'dark'
									: 'light'
							);
							setThemeMode(!darkmode); */
						}}>
						<Icon className="w-6 h-6 text-white" icon={darkmode ? "moon" : "sun"} />
					</div>
				</div>
			</div>
		</header>
	);
}
