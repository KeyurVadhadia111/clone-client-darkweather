import Icon from "components/utils/Icon";
import { Separator } from "components/utils/Separator";
import { toast } from "components/utils/toast";
import React, { JSX, useState } from "react";

interface Props {
	setActiveSection: (section: string) => void;
}
interface NotificationSetting {
	key: string;
	title: string;
	description: string;
	enabled: boolean;
}

const Notification: React.FC<Props> = ({ setActiveSection }) => {
	const [switches, setSwitches] = useState<NotificationSetting[]>([
		{
			key: "severeWeatherAlerts",
			title: "Severe Weather Alerts",
			description: "Get instant alerts for high-impact weather like thunderstorms, hurricanes, and blizzards.",
			enabled: false,
		},
		{
			key: "dailyForecastSummary",
			title: "Daily Forecast Summary",
			description: "Receive a morning notification with your location's daily forecast overview.",
			enabled: true,
		},
		{
			key: "weatherTrendAlerts",
			title: "Weather Trend Alerts",
			description: "Stay informed when unusual temperature, humidity, or pressure trends are detected.",
			enabled: false,
		},
		{
			key: "locationBasedNotifications",
			title: "Location-Based Notifications",
			description: "Get updates based on your current or saved locations — even when you're on the move.",
			enabled: false,
		},
		{
			key: "aiWeatherAssistant",
			title: "AI Weather Assistant Suggestions",
			description: "Let our AI help you prepare for the week ahead with smart, personalized weather tips.",
			enabled: true,
		},
		{
			key: "preAlertNotices",
			title: "Pre-Alert Notices",
			description: "Get notified 2–3 days ahead of forecasted severe weather or major climate shifts.",
			enabled: true,
		},
		{
			key: "weeklySummaryEmail",
			title: "Weekly Summary Email",
			description: "Receive a digest of weather highlights, insights, and forecasts in your inbox every week.",
			enabled: false,
		},
	]);

	const handleToggle = (index: number) => {
		setSwitches(prev => {
			const newState = [...prev];
			const newEnabled = !newState[index].enabled;
			newState[index].enabled = newEnabled;
			toast.success("Changes Saved");
			return newState;
		});
	};

	const renderSwitch = (isOn: boolean, onClick: () => void) => (
		<div
			className={`relative w-[27px] h-4 sm:w-[37px] sm:h-[22px] bg-textSecondary dark:bg-borderDark rounded-xl cursor-pointer`}
			onClick={onClick}>
			<div
				className={`relative w-3.5 h-3.5 sm:w-5 sm:h-5 top-px ${isOn ? "left-3 sm:left-4  bg-primary" : "left-px bg-bgc"}   rounded-[10px] shadow-[0px_1px_2px_1px_#0000001f] transition-all duration-300`}
			/>
		</div>
	);

	return (
		<div className="flex flex-col items-start gap-4 sm:gap-[30px]">
			<div className="text-base sm:text-xl font-semibold text-text dark:text-textDark flex items-center gap-3">
				<div className="sm:hidden flex">
					<Icon
						icon="chevron-down"
						onClick={() => setActiveSection("")}
						className="rotate-90 w-[18px] h-[18px] block sm:hidden"
					/>
				</div>
				Notification
			</div>

			<Separator className="bg-textSecondary/20 dark:!bg-textSecondary/30 !bg-none !w-full !h-px" />

			<div className="flex flex-col items-start gap-4 sm:gap-6 w-full">
				{switches.map((item, index) => (
					<div key={item.key} className="flex items-baseline sm:items-center gap-4 w-full rounded-lg">
						<div className="flex flex-col flex-1 w-full">
							<div className="font-medium text-text dark:text-textDark text-sm sm:text-base leading-6">
								{item.title}
							</div>
							<p className="text-textSecondary font-normal dark:text-textDark text-xs sm:text-sm sm:leading-[21px]">
								{item.description}
							</p>
						</div>
						<div className="flex items-center justify-end ">
							{renderSwitch(item.enabled, () => handleToggle(index))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
export default Notification;
