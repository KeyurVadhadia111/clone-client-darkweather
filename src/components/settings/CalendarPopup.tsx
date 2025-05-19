import { Button } from "@headlessui/react";
import Modal from "components/layout/modal";
import Icon from "components/utils/Icon";
import { Tabs, TabsList, TabsTrigger } from "components/utils/tabs";
import { toast } from "components/utils/toast";
import { useAppState } from "components/utils/useAppState";
import React from "react";
import WeekCalendar from "./WeekCalendar";

interface DeleteCardPopupProps {
	open: boolean;
	setOpen: (open: boolean) => void;
}

const CalendarPopup: React.FC<DeleteCardPopupProps> = ({ open, setOpen }) => {
	const [{ forecastTab }, setAppState] = useAppState();

	const forecastTabs = ["Day", "Week", "Month"];

	return (
		<Modal openModal={open} setOpenModal={setOpen} size="lx" className="sm:!p-6">
			<div className="text-center flex flex-col items-center gap-4 sm:gap-6">
				<div className="flex items-center justify-between w-full">
					<h2 className="text-base sm:text-2xl font-medium self-start text-text dark:text-textDark">
						Google Calendar
					</h2>
					<div
						className="w-4 h-4 sm:w-[26px] sm:h-[26px] rounded-full bg-text dark:bg-bgc flex items-center justify-center cursor-pointer"
						onClick={() => setOpen(false)}>
						<Icon icon="close" className="w-3 h-3 sm:w-4 sm:h-4 text-textDark dark:text-text" />
					</div>
				</div>

				<div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-4 sm:gap-0 w-full">
					<div className="flex items-center gap-3 sm:gap-4 text-text dark:text-textDark">
						<Icon icon="arrow-down" className="rotate-90 w-4 h-4" />
						<p className="text-base sm:text-lg font-medium  ">April, 2025</p>
						<Icon icon="arrow-down" className="-rotate-90 w-4 h-4" />
					</div>
					{/* Forecast view tabs */}
					<Tabs defaultValue="Week">
						<TabsList className="w-full bg-bgc dark:bg-fgcDark !h-[30px] lg:!h-10 rounded-lg !p-0">
							{forecastTabs.map(tab => (
								<TabsTrigger
									key={tab}
									value={tab}
									className=" px-[9px] py-[7px] lg:px-[24.9px] lg:py-[11px] dark:text-textDark text-xs lg:text-[14px] rounded-lg font-normal">
									{tab}
								</TabsTrigger>
							))}
						</TabsList>
					</Tabs>
				</div>
				<WeekCalendar />
			</div>
		</Modal>
	);
};

export default CalendarPopup;
