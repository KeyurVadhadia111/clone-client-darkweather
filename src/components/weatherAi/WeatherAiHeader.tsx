import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Icon from "components/utils/Icon";
import { Input } from "components/utils/Input";
import { useAppState } from "components/utils/useAppState";
import { use, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function WeatherAiHeader() {
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
		<>
			<div className="sm:hidden flex w-full items-center justify-between px-6 bg-text dark:bg-bgc h-12">
				<div>
					<Link to={"/"}>
						<img
							className="w-auto h-8 sm:h-[42px] !cursor-pointer"
							alt="Dark Weather Logo"
							src={`assets/images/logo-${!isDark ? "dark" : "light"}.svg`}
						/>
					</Link>
				</div>
			</div>

			<div className="hidden sm:flex w-full items-center justify-between p-4 bg-bgc dark:bg-fgcDark">
				<div className="hidden sm:flex relative items-center justify-between rounded-lg">
					<Input
						className=" font-normal !w-[360px] !h-[50px] text-bgcSecondary dark:text-textDark text-sm whitespace-nowrap [background:transparent] border-[none] p-0  !bg-fgc dark:!bg-bgcDark"
						placeholder="Search here"
						type="text"
					/>

					<Icon icon="search" className="w-5 h-5 text-text dark:text-textDark absolute right-4" />
				</div>

				<div className="inline-flex items-center gap-6 relative flex-[0_0_auto]">
					<div className="inline-flex items-center gap-1.5 relative flex-[0_0_auto]">
						<div className="relative w-[50px] h-[50px]">
							<Icon
								icon="translate"
								className=" text-text dark:text-textDark absolute w-6 h-6 top-[13px] left-[13px]"
							/>
						</div>

						<div className="relative w-[50px] h-[50px]">
							<div className="relative w-6 h-6 top-[13px] left-[13px]">
								<div className="h-6">
									<div className="relative w-6 h-6">
										<div
											className="flex items-center cursor-pointer"
											onClick={() => {
												localStorage.setItem("theme", !isDark ? "dark" : "light");
												setThemeMode(!isDark);
											}}>
											<Icon
												className="w-6 h-6 text-text dark:text-textDark"
												icon={isDark ? "moon" : "sun"}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="relative w-[50px] h-[50px]">
							<Icon
								icon="ball"
								className=" text-text dark:text-textDark absolute w-6 h-6 top-[13px] left-[13px]"
							/>
						</div>
						<Menu as="div" className="relative">
							<div>
								<MenuButton className="relative flex rounded-full bg-text border border-text text-sm focus:ring-0 focus:outline-hidden cursor-pointer">
									<span className="absolute -inset-1" />
									<span className="sr-only">Open user menu</span>
									<img alt="" src="assets/images/user.png" className="size-12 rounded-full" />
								</MenuButton>
							</div>
							<MenuItems
								modal={false}
								transition
								anchor="bottom end"
								className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-bgcDark py-1 shadow-[0_20px_35px_rgba(0,0,0,0.05)] ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in [--anchor-gap:4px] sm:[--anchor-gap:8px]">
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
					</div>
				</div>
			</div>
		</>
	);
}
