import Icon from "components/utils/Icon";
import React, { JSX } from "react";

// Days and times
const days = ["Mon 14", "Tue 15", "Wed 16", "Thu 17", "Fri 18", "Sat 19", "Sun 20"];
const times = ["2 AM", "3 AM", "4 AM", "5 AM", "6 AM", "7 AM"];

// Event data: events[timeIndex][dayIndex]
// const events: any[][] = [];
const events: (null | {
	title: string;
	location: string;
	time: string;
	hidden?: boolean;
})[][] = [
	// 2 AM
	[
		null,
		{
			title: "Marketing Meeting",
			location: "South West, NY",
			time: "2:00AM - 4:00AM",
		},
		null,
		null,
		{
			title: "Workout",
			location: "South West, NY",
			time: "2:00AM - 3:00AM",
		},
		null,
		null,
	],
	// 3 AM
	[
		null,
		{
			title: "Marketing Meeting",
			location: "C-4 South West, NY",
			time: "2:00am - 4:00am",
			hidden: true,
		},
		null,
		null,
		null,
		null,
		{
			title: "Marketing Meeting",
			location: "South West, NY",
			time: "3:00AM - 5:00AM",
		},
	],
	// 4 AM
	[
		null,
		null,
		null,
		{
			title: "Business Summit",
			location: "South West, NY",
			time: "4:00AM - 7:00AM",
		},
		null,
		null,
		{
			title: "Marketing Meeting",
			location: "C-4 South West, NY",
			time: "2:00am - 4:00am",
			hidden: true,
		},
	],
	// 5 AM
	[
		{
			title: "Doctor Appoint.",
			location: "South West, NY",
			time: "5:00AM - 6:00AM",
		},
		null,
		null,
		{
			title: "Marketing Meeting",
			location: "C-4 South West, NY",
			time: "2:00am - 4:00am",
			hidden: true,
		},
		null,
		null,
		null,
	],
	// 6 AM
	[
		null,
		null,
		null,
		{
			title: "Marketing Meeting",
			location: "C-4 South West, NY",
			time: "2:00am - 4:00am",
			hidden: true,
		},
		null,
		{
			title: "Family Dinner",
			location: "South West, NY",
			time: "6:00AM - 7:00AM",
		},
		null,
	],
	// 7 AM
	[
		null,
		{
			title: "Workout",
			location: "South West, NY",
			time: "7:00AM - 8:00AM",
		},
		null,
		null,
		null,
		null,
		null,
	],
];

const WeekCalendar = (): JSX.Element => {
	return (
		<div className="overflow-x-auto sm:overflow-hidden w-full sm:w-auto flex flex-col items-start ">
			<div>
				{/* Header */}
				<div className="flex items-start self-stretch w-full flex-[0_0_auto] bg-fgc dark:bg-bgcDark rounded-t-[24px] border border-solid border-textSecondary/20">
					<div className="w-[72px] sm:w-[100px] h-[45px] sm:h-16 rounded-tl-[30px] shrink-0 border-r border-textSecondary/20" />
					{days.map(day => (
						<div
							key={day}
							className="flex flex-col w-[120px] h-[45px] sm:w-[146px] sm:h-16 items-center justify-center gap-2.5 px-6 py-3.5 flex-1 grow border-r last:border-r-0 border-textSecondary/20">
							<div className="font-medium text-text dark:text-textDark textsm sm:text-base text-center leading-6 whitespace-nowrap">
								{day}
							</div>
						</div>
					))}
				</div>

				{/* Time Rows */}
				{times.map((time, rowIdx) => (
					<div
						key={time}
						className={`flex w-full h-[76px] sm:h-[116px] items-start self-stretch  border-r border-b border-l border-textSecondary/20 ${
							rowIdx === times.length - 1 ? "rounded-b-[24px]" : ""
						}`}>
						<div className="flex flex-col w-[72px] sm:w-[100px] h-full items-center justify-center gap-2.5 px-6 py-4 border-r border-textSecondary/20">
							<div className="font-medium text-textSecondary dark:text-textDark text-base text-center leading-6 whitespace-nowrap">
								{time}
							</div>
						</div>
						<div className="flex">
							{days.map((_, colIdx) => {
								const event = events[rowIdx]?.[colIdx];
								if (event) {
									if (event.hidden) {
										// Render only the cell with bg and border, no content
										return (
											<div
												key={colIdx}
												className="flex flex-col items-start w-[120px] sm:w-[146px] h-[76px] sm:h-[116px] gap-3 pl-2 pr-2.5 py-2.5 bg-primarySecondary dark:bg-bgcDark border-l-2 border-primary "
											/>
										);
									}
									return (
										<div
											key={colIdx}
											className="flex flex-col items-start w-[120px] sm:w-[146px] h-[76px] sm:h-[116px] gap-3 pl-2 pr-2.5 py-2.5 bg-primarySecondary dark:bg-bgcDark border-l-2 border-primary">
											<div className="flex flex-col items-start gap-2 sm:gap-2.5 w-full">
												<div className="font-medium text-text dark:text-textDark text-xs sm:text-sm sm:leading-[21px] whitespace-nowrap">
													{event.title}
												</div>
												<div className="flex items-center gap-1.5 w-full">
													<Icon
														icon="location"
														className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-textSecondary dark:text-textDark"
													/>
													<div className="font-normal text-textSecondary dark:text-textDark text-[10px] sm:text-xs text-center sm:leading-[18px] whitespace-nowrap">
														{event.location}
													</div>
												</div>
												<div className="inline-flex items-center gap-1.5">
													<Icon
														icon="clock"
														className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-textSecondary dark:text-textDark"
													/>
													<div className="font-normal text-textSecondary dark:text-textDark text-[10px] sm:text-xs text-center sm:leading-[18px] whitespace-nowrap">
														{event.time}
													</div>
												</div>
											</div>
										</div>
									);
								}
								return (
									<div
										key={colIdx}
										className="flex flex-col w-[120px] sm:w-[146px] h-[76px] sm:h-[116px] items-center justify-center gap-2.5 px-6 py-4 flex-1 border-r last:border-r-0 border-textSecondary/20">
										<div className="w-[67px] h-5" />
									</div>
								);
							})}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default WeekCalendar;
