import Icon from "components/utils/Icon";
import { useAppState } from "components/utils/useAppState";
import { use, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SimpleBar from 'simplebar-react';

export default function WeatherAiSidebar() {
	const [{ isDark, userDetails }, setAppState] = useAppState();
	const [isOpen, setIsOpen] = useState(false);
	const sidebarRef = useRef<HTMLDivElement>(null);

	const handleClickOutside = (event: MouseEvent) => {
		if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
			setIsOpen(false); // Close the sidebar
		}
	};

	useEffect(() => {
		if (isOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isOpen]);

	return (
		<>
			<div
				className="fixed top-3 right-4 z-10 px-3 sm:hidden flex items-center "
				onClick={() => setIsOpen(!isOpen)}>
				<Icon className="w-6 h-6 text-textDark dark:text-text" icon="hamburger" />
			</div>

			{isOpen && <div className="fixed sm:hidden z-10 h-screen w-full backdrop-blur-xs"></div>}

			<div
				ref={sidebarRef}
				className={`${isOpen ? "translate-x-0" : "-translate-x-full"
					}  sm:translate-x-0 top-0 left-0 z-50 transition-transform ease-in-out duration-300 transform fixed sm:relative md:min-h-screen w-[310px]`}>
				<div className="min-w-[300px] max-w-[300px] inline-flex flex-col items-start justify-between p-6 bg-text dark:bg-bgc gap-4">
					<div className="flex flex-col w-[255px] items-center gap-4 sm:gap-6 flex-[0_0_auto]">
						{isOpen && (
							<div
								onClick={() => setIsOpen(!isOpen)}
								className="w-10 h-10 flex items-center justify-center shrink-0 bg-text dark:bg-bgc absolute top-11 -right-2 rounded-full sm:hidden">
								<Icon icon="left" className="w-6 h-6 text-textDark dark:text-text" />
							</div>
						)}
						<Link to={"/"}>
							<img
								className="w-auto h-8 sm:h-[42px] !cursor-pointer"
								alt="Dark Weather Logo"
								src={`assets/images/logo-${!isDark ? "dark" : "light"}.svg`}
							/>
						</Link>

						<SimpleBar
							className="!h-[calc(100dvh-320px)] sm:!h-[calc(100dvh-286px)] w-full">
							<div className="flex flex-col items-start gap-4 sm:!gap-6 ">
								<div className="flex items-center justify-center sm:justify-start h-[42px] sm:h-12  gap-3 px-4 py-3 sm:px-[18px] sm:py-4  self-stretch w-full bg-primary sm:rounded-xl rounded-[10px] ">
									<img
										className="w-4 h-4 sm:w-5 sm:h-5"
										alt="Subtract"
										src="/assets/images/plus-bg.svg"
									/>

									<div className=" font-medium text-text text-sm  whitespace-nowrap">New Chat</div>
								</div>

								<div className="flex flex-col items-start gap-3 sm:gap-[18px] w-full flex-[0_0_auto]">
									<div className="flex items-center justify-between w-full flex-[0_0_auto]">
										<div className=" font-medium text-bgc dark:text-text text-xs sm:text-sm text-center whitespace-nowrap">
											Chat History
										</div>

										<div className="inline-flex items-center gap-3 sm:gap-3.5  flex-[0_0_auto]">
											<Icon
												icon="search"
												className="w-4 h-4 sm:w-5 sm:h-5 text-bgc dark:text-text"
											/>
											<Icon
												icon="filter"
												className="w-4 h-4  sm:w-5 sm:h-5 text-bgc dark:text-text"
											/>
										</div>
									</div>

									<div className="flex flex-col items-start gap-3 sm:gap-4 w-full flex-[0_0_auto]">
										<div className=" font-normal text-bgc dark:text-text text-[10px] sm:text-xs text-center whitespace-nowrap">
											Today
										</div>

										<div className="flex flex-col items-start gap-3 w-full flex-[0_0_auto]">
											<div className="flex h-12 items-center gap-2 sm:gap-2.5 px-3.5 py-3 sm:p-4  w-full bg-bgcSecondary dark:bg-fgc rounded-xl">
												<Icon
													icon="star-two"
													className="w-4 h-4 sm:w-6 sm:h-6 text-bgc dark:text-text"
												/>

												<div className="font-medium text-bgc dark:text-text text-xs sm:text-sm text-center whitespace-nowrap">
													Weekly Rain Forecast..
												</div>
											</div>

											<div className="flex h-12 items-center gap-2 sm:gap-2.5 px-3.5 py-3 sm:p-4 w-full bg-bgcSecondary dark:bg-fgc rounded-xl">
												<Icon
													icon="star-two"
													className="w-4 h-4 sm:w-6 sm:h-6 text-bgc dark:text-text"
												/>

												<p className=" font-medium text-bgc dark:text-text text-xs sm:text-sm text-center whitespace-nowrap">
													Chance of Rain This...
												</p>
											</div>
										</div>
									</div>

									<div className="flex flex-col items-start gap-3 sm:gap-4 w-full flex-[0_0_auto]">
										<div className="font-normal text-bgc dark:text-text text-xs text-center tracking-[0] leading-[18px] whitespace-nowrap">
											Yesterday
										</div>

										<div className="flex flex-col items-start gap-2 sm:gap-3  w-full flex-[0_0_auto]">
											<div className="flex h-12 items-center gap-2 sm:gap-2.5 px-3.5 py-3 sm:p-4  w-full bg-bgcSecondary dark:bg-fgc rounded-xl">
												<Icon
													icon="star-two"
													className="w-4 h-4 sm:w-6 sm:h-6 text-bgc dark:text-text"
												/>

												<div className="font-medium text-bgc dark:text-text text-xs sm:text-sm text-center  whitespace-nowrap">
													Daily Weather Briefing
												</div>
											</div>

											<div className="flex h-12 items-center gap-2 sm:gap-2.5 px-3.5 py-3 sm:p-4  w-full bg-bgcSecondary dark:bg-fgc rounded-xl">
												<Icon
													icon="star-two"
													className="w-4 h-4 sm:w-6 sm:h-6 text-bgc dark:text-text"
												/>

												<div className="font-medium text-bgc dark:text-text text-xs sm:text-sm text-center  whitespace-nowrap">
													Storm Warnings &amp; Updates
												</div>
											</div>
										</div>
									</div>

									<div className="flex flex-col items-start gap-3 sm:gap-4  w-full flex-[0_0_auto]">
										<div className="font-normal text-bgc dark:text-text text-xs text-center whitespace-nowrap">
											Previous 7 Days
										</div>

										<div className="flex flex-col items-start gap-2 sm:gap-3 w-full flex-[0_0_auto]">
											<div className="flex h-12 items-center gap-2 sm:gap-2.5 px-3.5 py-3 sm:p-4  w-full bg-bgcSecondary dark:bg-fgc rounded-xl">
												<Icon
													icon="star-two"
													className="w-4 h-4 sm:w-6 sm:h-6 text-bgc dark:text-text"
												/>

												<div className="font-medium text-bgc dark:text-text text-xs sm:text-sm text-center  whitespace-nowrap">
													5-Day Rainfall Prediction
												</div>
											</div>

											<div className="flex h-12 items-center gap-2 sm:gap-2.5 px-3.5 py-3 sm:p-4  w-full bg-bgcSecondary dark:bg-fgc rounded-xl">
												<Icon
													icon="star-two"
													className="w-4 h-4 sm:w-6 sm:h-6 text-bgc dark:text-text"
												/>

												<div className="font-medium text-bgc dark:text-text text-xs sm:text-sm text-center  whitespace-nowrap">
													Evening Weather Outlook
												</div>
											</div>

											<div className="flex h-12 items-center gap-2 sm:gap-2.5 px-3.5 py-3 sm:p-4  w-full bg-bgcSecondary dark:bg-fgc rounded-xl">
												<Icon
													icon="star-two"
													className="w-4 h-4 sm:w-6 sm:h-6 text-bgc dark:text-text"
												/>

												<div className="font-medium text-bgc dark:text-text text-xs sm:text-sm text-center  whitespace-nowrap">
													Rain forecast for week
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</SimpleBar>
					</div>

					<div className="flex flex-col items-start  w-full flex-[0_0_auto] rounded-xl overflow-hidden">
						<div className="flex flex-col h-[114px] items-center gap-2.5 p-4  w-full bg-bgcSecondary dark:bg-fgc rounded-lg sm:rounded-xl">
							<div className=" mt-[-1.00px]  font-medium text-bgc dark:text-text text-base sm:text-xl text-center">
								Upgrade to Pro
							</div>

							<p className="font-normal text-transparent text-xs sm:text-sm text-center">
								<span className="text-bgc dark:text-text">You have </span>

								<span className="font-semibold text-primary">28 free</span>

								<span className="text-bgc dark:text-text"> questions remaining out of </span>

								<span className="font-semibold text-primary">30</span>
							</p>
						</div>
						<div className="flex flex-col items-start gap-4 w-full">
							<Link
								to={"/premium-plan"}
								className="flex h-[42px] items-center justify-center px-4 py-2.5 sm:px-[18px] sm:py-3 rounded-b-xl w-full bg-primary">
								<div className="font-medium text-text text-xs sm:text-sm  whitespace-nowrap">
									Get YouPro
								</div>
							</Link>
							<div className="sm:hidden flex items-center justify-center gap-4">
								<div className="relative flex rounded-full bg-text border border-text text-sm focus:ring-0 focus:outline-hidden">
									<img className="w-12 h-12" alt="Ellipse" src="assets/images/user.png" />
								</div>
								<div className=" text-textDark dark:text-text text-base  whitespace-nowrap">
									Alex Johnson
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
