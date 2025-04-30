import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Icon from "components/utils/Icon";
import { useAppState } from "components/utils/useAppState";
import { use, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
	const [{ isDark, userDetails }, setAppState] = useAppState();

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
		setAppState({ userDetails: JSON.parse(localStorage.getItem("auth") || "{}") });
		// Check for dark mode preference
		if (localStorage.theme === "dark") {
			setThemeMode(true);
			setAppState({ isDark: true });
		}
		if (window.matchMedia("(prefers-color-scheme: dark)").matches && localStorage?.theme === undefined) {
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
		<header
			className={`relative z-[1] w-full border-b mb-[-1px] shadow-[inset_0px_30px_30px_#ffffff0d] border-white/16 bg-text dark:bg-bgc text-bgc dark:text-text`}>
			<div className="container flex items-center justify-between py-2 sm:py-4">
				<Link to={"/"}>
					<img
						className="w-auto h-8 sm:h-[56px] !cursor-pointer"
						alt="Dark Weather Logo"
						src={`assets/images/logo-${!isDark ? "dark" : "light"}.svg`}
					/>
				</Link>

				<div className="flex items-center sm:hidden">
					<Icon className="w-6 h-6" icon="hamburger" />
				</div>
				<nav className="items-center gap-7 hidden sm:flex">
					{navItems
						.filter(item => (!userDetails?._id ? !item.authRequired : true))
						.map((item, index) => (
							<Link
								key={index}
								to={item.href}
								aria-label={item.title}
								className="text-base tracking-[0.80px] leading-6 font-normal hover:opacity-90">
								{item.title}
							</Link>
						))}
				</nav>

				<div className="items-center gap-6 hidden sm:flex">
					<div className="flex items-center cursor-pointer">
						<Icon className="w-5 h-5" icon="search" />
					</div>
					<div
						className="flex items-center cursor-pointer"
						onClick={() => {
							localStorage.setItem("theme", !isDark ? "dark" : "light");
							setThemeMode(!isDark);
						}}>
						<Icon className="w-6 h-6" icon={isDark ? "moon" : "sun"} />
					</div>

					{/* Profile dropdown */}
					{userDetails?._id ? (
						<Menu as="div" className="relative">
							<div>
								<MenuButton className="relative flex rounded-full bg-bgc dark:!bg-text border border-bgc dark:border-text text-sm focus:ring-0 focus:outline-hidden cursor-pointer">
									<span className="absolute -inset-1" />
									<span className="sr-only">Open user menu</span>
									<img alt="" src="assets/images/user.png" className="size-12 rounded-full" />
								</MenuButton>
							</div>
							<MenuItems
								modal={false}
								transition
								anchor="bottom end"
								className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-bgc dark:bg-bgcDark py-1 shadow-[0_20px_35px_rgba(0,0,0,0.05)] ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in [--anchor-gap:4px] sm:[--anchor-gap:8px]">
								<MenuItem disabled>
									<a
										href="#"
										className="block px-4 py-2 text-xs text-text/60 dark:text-textDark/60 data-focus:bg-gray-100 data-focus:outline-hidden text-nowrap text-ellipsis overflow-hidden">
										<div>Welcome, </div>
										<div className="text-text dark:text-textDark">{userDetails?.email}</div>
									</a>
								</MenuItem>
								<div className="my-1 h-px bg-black/10 dark:bg-textDark/10" />
								<MenuItem>
									<a
										href="#"
										className="block px-4 py-2 text-sm text-text dark:text-textDark data-focus:bg-gray-100 data-focus:outline-hidden dark:hover:bg-textDark/5"
										onClick={() => {
											localStorage.removeItem("auth");
											setAppState({ userDetails: {} });
										}}>
										Logout
									</a>
								</MenuItem>
							</MenuItems>
						</Menu>
					) : (
						<Link
							to="/login"
							className="flex bg-primary items-center px-8 py-4 text-sm font-semibold text-text rounded-md">
							Login
						</Link>
					)}
				</div>
			</div>
		</header>
	);
}
