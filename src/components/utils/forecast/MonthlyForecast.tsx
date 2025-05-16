import React, { useEffect, useRef, useState } from "react";
import Icon from "../Icon";
import { Separator } from "../Separator";
import { useAppState } from "../useAppState";
import MonthlyForecastDetails from "./details/MonthlyForecastDetails";

interface Props {
	title: string;
}

const MonthlyForecast: React.FC<Props> = ({ title }) => {
	const [selectedMonths, setSelectedMonths] = useState("May");
	const [selectedYears, setSelectedYears] = useState(2025);
	const [monthsDropdownOpen, setMonthsDropdownOpen] = useState(false);
	const [yearsDropdownOpen, setYearsDropdownOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	const years = [2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];

	const forecastData = [
		{ date: 27, icon: "partly-cloudy.svg", high: "+41°", low: "+28°" },
		{ date: 28, icon: "partly-cloudy.svg", high: "+41°", low: "+28°" },
		{ date: 29, icon: "mostly-sunny.svg", high: "+38°", low: "+24°" },
		{ date: 30, icon: "partly-cloudy.svg", high: "+40°", low: "+28°" },
		{ date: 1, icon: "clear.svg", high: "+37°", low: "+25°" },
		{ date: 2, icon: "partly-cloudy.svg", high: "+40°", low: "+28°" },
		{ date: 3, icon: "clear.svg", high: "+37°", low: "+25°" },
		{ date: 4, icon: "partly-cloudy.svg", high: "+37°", low: "+25°" },
		{ date: 5, icon: "rain-amount.svg", high: "+40°", low: "+28°" },
		{ date: 6, icon: "rain-amount.svg", high: "+38°", low: "+24°" },
		{ date: 7, icon: "partly-cloudy.svg", high: "+41°", low: "+28°" },
		{ date: 8, icon: "mostly-sunny.svg", high: "+41°", low: "+28°" },
		{ date: 9, icon: "mostly-sunny.svg", high: "+38°", low: "+24°" },
		{ date: 10, icon: "rain-amount.svg", high: "+40°", low: "+28°" },
		{ date: 11, icon: "clear.svg", high: "+37°", low: "+25°" },
		{ date: 12, icon: "mostly-sunny.svg", high: "+40°", low: "+28°" },
		{ date: 13, icon: "partly-cloudy.svg", high: "+37°", low: "+25°" },
		{ date: 14, icon: "partly-cloudy.svg", high: "+37°", low: "+25°" },
		{ date: 15, icon: "partly-cloudy.svg", high: "+40°", low: "+28°" },
		{ date: 16, icon: "mostly-sunny.svg", high: "+38°", low: "+24°" },
		{ date: 17, icon: "mostly-sunny.svg", high: "+41°", low: "+28°" },
		{ date: 18, icon: "clear.svg", high: "+41°", low: "+28°" },
		{ date: 19, icon: "clear.svg", high: "+38°", low: "+24°" },
		{ date: 20, icon: "mostly-sunny.svg", high: "+40°", low: "+28°" },
		{ date: 21, icon: "rain-amount.svg", high: "+37°", low: "+25°" },
		{ date: 22, icon: "rain-amount.svg", high: "+40°", low: "+28°" },
		{ date: 23, icon: "rain-amount.svg", high: "+37°", low: "+25°" },
		{ date: 24, icon: "clear.svg", high: "+37°", low: "+25°" },
		{ date: 25, icon: "partly-cloudy.svg", high: "+40°", low: "+28°" },
		{ date: 26, icon: "mostly-sunny.svg", high: "+38°", low: "+24°" },
		{ date: 27, icon: "mostly-sunny.svg", high: "+41°", low: "+28°" },
		{ date: 28, icon: "mostly-sunny.svg", high: "+41°", low: "+28°" },
		{ date: 29, icon: "partly-cloudy.svg", high: "+38°", low: "+24°" },
		{ date: 30, icon: "sunny.svg", high: "+40°", low: "+28°" },
		{ date: 31, icon: "partly-cloudy.svg", high: "+37°", low: "+25°" },
	];

	const [days] = useState<string[]>(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]);

	const [expandedIndex, setExpandedIndex] = useState<{ index: number; day: number } | null>({ index: 0, day: 0 });

	const handleToggle = (_: string, index: { index: number; day: number }) => {
		setExpandedIndex(prev => (prev && prev.index === index.index && prev.day === index.day ? null : index));
	};

	const [{ forecastTab }] = useAppState();

	// Get the first day of the month and total days in month
	const getMonthDetails = (month: string, year: number) => {
		const monthIndex = months.indexOf(month);
		const firstDay = new Date(year, monthIndex, 1).getDay();
		const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
		return { firstDay, daysInMonth };
	};

	// Get previous month's last few days if needed
	const getPrevMonthDays = (month: string, year: number) => {
		const monthIndex = months.indexOf(month);
		const prevMonthIndex = monthIndex === 0 ? 11 : monthIndex - 1;
		const prevMonthYear = monthIndex === 0 ? year - 1 : year;
		const prevMonthDays = new Date(prevMonthYear, monthIndex, 0).getDate();
		const { firstDay } = getMonthDetails(month, year);

		const prevDays = [];
		for (let i = firstDay - 1; i >= 0; i--) {
			const randomForecast = forecastData[Math.floor(Math.random() * forecastData.length)];
			prevDays.push({
				date: prevMonthDays - i,
				icon: randomForecast.icon,
				high: randomForecast.high,
				low: randomForecast.low,
				isCurrentMonth: false,
			});
		}
		return prevDays;
	};

	// Get next month's first few days if needed
	const getNextMonthDays = (month: string, year: number, currentMonthDays: any[]) => {
		const totalCells = Math.ceil((currentMonthDays.length + getPrevMonthDays(month, year).length) / 7) * 7;
		const remainingDays = totalCells - (currentMonthDays.length + getPrevMonthDays(month, year).length);

		const nextDays = [];
		for (let i = 1; i <= remainingDays; i++) {
			const randomForecast = forecastData[Math.floor(Math.random() * forecastData.length)];
			nextDays.push({
				date: i,
				icon: randomForecast.icon,
				high: randomForecast.high,
				low: randomForecast.low,
				isCurrentMonth: false,
			});
		}
		return nextDays;
	};

	// Generate calendar data
	const generateCalendarData = () => {
		const { daysInMonth } = getMonthDetails(selectedMonths, selectedYears);

		// Current month days
		const currentMonthDays = Array.from({ length: daysInMonth }, (_, i) => {
			const randomForecast = forecastData[Math.floor(Math.random() * forecastData.length)];
			return {
				date: i + 1,
				icon: randomForecast.icon,
				high: randomForecast.high,
				low: randomForecast.low,
				isCurrentMonth: true,
			};
		});

		// Combine previous, current, and next month days
		const allDays = [
			...getPrevMonthDays(selectedMonths, selectedYears),
			...currentMonthDays,
			...getNextMonthDays(selectedMonths, selectedYears, currentMonthDays),
		];

		// Split into weeks
		const weeks = [];
		for (let i = 0; i < allDays.length; i += 7) {
			weeks.push(allDays.slice(i, i + 7));
		}

		return weeks;
	};

	const weeklyForecasts = generateCalendarData();

	// Close dropdown when clicking outside
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setMonthsDropdownOpen(false);
				setYearsDropdownOpen(false);
			}
		}

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className="flex flex-col gap-3 sm:gap-6">
			<div className="flex flex-col items-start gap-2">
				<h2 className="font-semibold text-xl lg:text-2xl text-text dark:text-textDark">{title}</h2>
				<p className="text-textSecondary dark:text-textDark text-xs lg:text-[14px] ">As of 11:47 IST</p>
			</div>
			<div className="flex items-center justify-between gap-4">
				<div className="flex items-center gap-2 sm:gap-3 text-text dark:text-textDark text-sm sm:text-base">
					<Icon icon="arrow-down" className="w-3 h-3 sm:w-4 sm:h-4 rotate-90" />
					Apr
				</div>
				<div className="flex items-center gap-4 sm:gap-5">
					<div className="relative">
						<button
							className="flex items-center gap-3 font-medium text-base sm:text-xl text-text dark:text-textDark "
							onClick={() => setMonthsDropdownOpen(!monthsDropdownOpen)}>
							<span>{selectedMonths}</span>
							<Icon icon="chevron-down" className="w-3 h-3 sm:w-4 sm:h-4" />
						</button>

						{monthsDropdownOpen && (
							<div className="absolute mt-2 w-[100px] bg-bgc dark:bg-text text-bgcDark dark:text-textDark  rounded-md shadow-[0_20px_35px_rgba(0,0,0,0.05)] border border-gray-300 dark:border-gray-600 z-10">
								{months.map(month => (
									<div
										key={month}
										onClick={() => {
											setSelectedMonths(month);
											setMonthsDropdownOpen(false);
										}}
										className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 text-black dark:text-textDark">
										{month}
									</div>
								))}
							</div>
						)}
					</div>

					<div className="relative">
						<button
							className="flex items-center gap-3 font-medium text-base sm:text-xl text-text dark:text-textDark "
							onClick={() => setYearsDropdownOpen(!yearsDropdownOpen)}>
							<span>{selectedYears}</span>
							<Icon icon="chevron-down" className="w-3 h-3 sm:w-4 sm:h-4" />
						</button>

						{yearsDropdownOpen && (
							<div className="absolute mt-2 w-[100px] bg-bgc dark:bg-text text-bgcDark dark:text-textDark  rounded-md shadow-[0_20px_35px_rgba(0,0,0,0.05)] border border-gray-300 dark:border-gray-600 z-10">
								{years.map(year => (
									<div
										key={year}
										onClick={() => {
											setSelectedYears(year);
											setYearsDropdownOpen(false);
										}}
										className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 text-black dark:text-textDark">
										{year}
									</div>
								))}
							</div>
						)}
					</div>
				</div>
				<div className="flex items-center gap-2 sm:gap-3 text-text dark:text-textDark text-sm sm:text-base">
					Jun
					<Icon icon="arrow-down" className="w-3 h-3 sm:w-4 sm:h-4 -rotate-90" />
				</div>
			</div>
			<Separator className="bg-textSecondary/20 dark:!bg-textSecondary/30 !bg-none" />

			<div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
				{days.map(day => (
					<div
						key={day}
						className="relative w-[74px] font-normal text-text dark:text-textDark text-base text-center ">
						<span className="block sm:hidden">{day[0]}</span>
						<span className="hidden sm:block">{day}</span>
					</div>
				))}
			</div>
			<div className="flex flex-col gap-2 sm:gap-3">
				{weeklyForecasts.map((week, weekIndex) => {
					const isAnyActive = expandedIndex && expandedIndex.index === weekIndex;
					return (
						<React.Fragment key={weekIndex}>
							<div className="flex items-center justify-between w-full ">
								{week.map((day, i) => {
									const isActive =
										expandedIndex && expandedIndex.index === weekIndex && expandedIndex.day === i;
									return (
										<div
											key={i}
											onClick={() => handleToggle("", { index: weekIndex, day: i })}
											className={`flex flex-col w-[38px] sm:w-[78px] items-center sm:items-start gap-2 sm:gap-3 p-2 sm:p-2.5 rounded-[10px] sm:rounded-xl cursor-pointer ${
												isActive ? "bg-primary" : ""
											}`}>
											<div
												className={`leading-[100%] text-base sm:text-xl font-medium ${isActive ? "text-text dark:text-textDark" : day.isCurrentMonth ? "text-textSecondary dark:text-textDark" : "text-textSecondary/50 dark:text-textDark/50"}`}>
												{day.date}
											</div>
											<div className="flex items-center justify-center sm:justify-start gap-0 sm:gap-3 w-full">
												<img
													src={`/assets/images/${day.icon}`}
													alt="weather icon"
													className={`w-5 h-5 ${!day.isCurrentMonth ? "opacity-50" : ""}`}
												/>
												<div className="hidden sm:flex flex-col sm:gap-1">
													<div
														className={`text-text dark:text-textDark text-xs leading-[100%] ${!day.isCurrentMonth ? "opacity-50" : ""}`}>
														{day.high}
													</div>
													<div
														className={`leading-[100%] text-xs ${isActive ? "text-textDark" : day.isCurrentMonth ? "text-textSecondary dark:text-textDark" : "text-textSecondary/50 dark:text-textDark/50"}`}>
														{day.low}
													</div>
												</div>
											</div>
										</div>
									);
								})}
							</div>

							{/* Hide Separator if any item in this week is active */}
							{weekIndex < weeklyForecasts.length - 0 && !isAnyActive && (
								<Separator className="bg-textSecondary/20 dark:!bg-textSecondary/30 !bg-none" />
							)}

							{expandedIndex && expandedIndex.index === weekIndex && (
								<>{forecastTab === "Monthly" ? <MonthlyForecastDetails /> : ""}</>
							)}
						</React.Fragment>
					);
				})}
			</div>
		</div>
	);
};
export default MonthlyForecast;
