import { Button } from "components/utils/Button";
import Icon from "components/utils/Icon";
import { Separator } from "components/utils/Separator";
import React, { useState } from "react";
import CalendarPopup from "./CalendarPopup";

interface Props {
	setActiveSection: (section: string) => void;
}
const EventsCalendar: React.FC<Props> = ({ setActiveSection }) => {
	const [showConnected, setShowConnected] = useState(true);
	const [showCalendarPopup, setShowCalendarPopup] = useState(false);

	const [googleConnected, setGoogleConnected] = useState(true);

	const calendarOptions = [
		{
			name: "Google Calendar",
			icon: "/assets/images/google-calendar.svg",
			buttonLabel: googleConnected ? "Disconnect" : "Connect",
			// Change bg color based on connect state
			buttonStyle: googleConnected
				? "!border !border-text !bg-transparent dark:!border-bgc !text-text dark:!text-textDark"
				: "bg-primary",
			connected: googleConnected,
		},
		{
			name: "Apple Calendar",
			icon: "/assets/images/apple-calendar.svg",
			buttonLabel: "Connect",
			buttonStyle: "bg-primary",
			connected: false,
		},
		{
			name: "Outlook",
			icon: "/assets/images/outlook-calendar.svg",
			buttonLabel: "Connect",
			buttonStyle: "bg-primary",
			connected: false,
		},
		{
			name: "Default Mobile Calendar",
			icon: "/assets/images/default-calendar.svg",
			buttonLabel: "Connect",
			buttonStyle: "bg-primary",
			connected: false,
		},
	];
	return (
		<div className="flex flex-col items-start gap-4 sm:gap-[30px]">
			<div className="font-semibold text-text dark:text-textDark text-base sm:text-xl tracking-[0] leading-[26px] flex items-center gap-3 whitespace-nowrap">
				<div className="sm:hidden flex">
					<Icon
						icon="chevron-down"
						onClick={() => setActiveSection("")}
						className="rotate-90 w-[18px] h-[18px] block sm:hidden"
					/>
				</div>
				Event &amp; Calendar Sync
			</div>

			<Separator className="bg-textSecondary/20 dark:!bg-textSecondary/30 !bg-none !w-full !h-px" />

			<div className="flex flex-col items-start gap-4 sm:gap-[30px] w-full flex-[0_0_auto]">
				<div className="font-medium text-text dark:text-textDark text-sm sm:text-lg tracking-[0] leading-[27px] whitespace-nowrap">
					Sync with Calendar
				</div>

				<div className="flex flex-col sm:flex-row gap-4 w-full">
					{calendarOptions.slice(0, 2).map((option, idx) => (
						<div key={option.name} className="flex gap-4 w-full">
							<div className="flex flex-col items-start gap-4 sm:gap-6 p-4 sm:p-6 flex-1 grow rounded-xl border border-solid border-textSecondary/20 ">
								<div className="flex flex-col items-start gap-4 sm:gap-5 relative">
									<img src={option.icon} alt={option.name} className="w-6 h-6 sm:w-8 sm:h-8" />
									{option.name === "Google Calendar" && (
										<Icon
											icon={showConnected ? "eye" : "eye-slash"}
											onClick={() => {
												setShowConnected(!showConnected);
												setGoogleConnected(prev => !prev);
											}}
											className="w-[22px] h-[22px]  sm:w-6 sm:h-6 cursor-pointer absolute top-0 sm:-top-[13px] left-[234px] sm:left-[283px]  text-neutral-400"
										/>
									)}

									<div className="font-normal text-base sm:text-lg leading-[27px] whitespace-nowrap text-text dark:text-textDark tracking-[0]">
										{option.name}
									</div>
								</div>
								<Button
									className={`w-full h-[38px] sm:h-[42px] !rounded-[10px] ${option.buttonStyle}`}
									onClick={() => {
										// Only open popup if Google Calendar and not connected
										if (option.name === "Google Calendar" && !googleConnected) {
											setShowCalendarPopup(true);
										}
									}}>
									{option.buttonLabel}
								</Button>
							</div>
						</div>
					))}
				</div>

				<div className="flex gap-4 flex-col sm:flex-row w-full">
					{calendarOptions.slice(2).map(option => (
						<div
							key={option.name}
							className="flex flex-col items-start gap-4 sm:gap-6 p-4 sm:p-6 flex-1 grow rounded-xl border border-solid border-textSecondary/20 ">
							<div className="flex flex-col items-start gap-4 sm:gap-5">
								<img src={option.icon} alt={option.name} className="w-6 h-6 sm:w-8 sm:h-8" />

								<div className="font-normal text-base sm:text-lg leading-[27px] whitespace-nowrap text-text dark:text-textDark tracking-[0]">
									{option.name}
								</div>
							</div>
							<Button className="w-full h-[38px] sm:h-[42px] !rounded-[10px] bg-primary">
								{option.buttonLabel}
							</Button>
						</div>
					))}
				</div>
			</div>
			<CalendarPopup open={showCalendarPopup} setOpen={setShowCalendarPopup} />
		</div>
	);
};

export default EventsCalendar;
