import React, { useState } from "react";
import Profile from "../components/settings/Profile";
import SmartPreferences from "../components/settings/SmartPreferences";
import Notification from "../components/settings/Notification";
import EventsCalendar from "../components/settings/EventsCalendar";
import Subscriptions from "components/settings/Subscriptions";
import Security from "components/settings/Security";
import Icon from "components/utils/Icon";

const Settings = () => {
	const [activeSection, setActiveSection] = useState(window.innerWidth > 768 ? "profile" : "");

	const menuItems = [
		{ name: "Profile", icon: "frame" },
		{ name: "Smart Preferences", icon: "setting" },
		{ name: "Notification", icon: "notification-bing" },
		{ name: "Subscription & Payments", icon: "money" },
		{ name: "Event & Calendar Sync", icon: "calendar" },
		{ name: "Security", icon: "security" },
	];

	const nameText = (name: string) => name.toLowerCase().replace(/\s+/g, "");

	return (
		<div className="container flex gap-4 sm:gap-[30px] my-6 sm:mt-[60px]  sm:mb-[64px]">
			<div
				className={`flex flex-col w-full sm:w-[370px] h-[422px] sm:h-[535px] items-start gap-4 sm:gap-6 p-4 sm:p-6 bg-bgc dark:bg-fgcDark rounded-2xl sm:rounded-[20px] ${activeSection ? "hidden sm:flex" : "flex sm:flex"}`}>
				<div className=" font-medium text-text dark:text-textDark text-base sm:text-lg  whitespace-nowrap">
					Setting
				</div>

				<div className="flex flex-col items-start gap-2.5 sm:gap-5 w-full flex-[0_0_auto]">
					{menuItems.map(item => {
						const nameTexts = nameText(item.name);
						return (
							<div
								key={item.name}
								className={`flex items-center gap-2.5 sm:gap-3 px-4 sm:px-[18px] py-3 sm:py-4 w-full flex-[0_0_auto] ${
									activeSection === nameTexts ? "bg-primary" : "bg-fgc dark:bg-bgcDark"
								} rounded-xl cursor-pointer`}
								onClick={() => setActiveSection(nameTexts)}>
								<Icon
									icon={item.icon}
									className={`w-4 h-4 sm:w-6 sm:h-6 shrink-0 ${
										activeSection === nameTexts
											? "font-semibold text-text"
											: "font-medium text-text dark:text-textDark"
									} `}
								/>
								<div
									className={` text-sm sm:text-base  whitespace-nowrap ${
										activeSection === nameTexts
											? "font-semibold text-text"
											: "font-medium text-text dark:text-textDark"
									}`}>
									{item.name}
								</div>
							</div>
						);
					})}
				</div>
			</div>
			{activeSection ? (
				<div className=" w-full sm:w-[770px] p-4 sm:p-[30px] bg-bgc dark:bg-fgcDark rounded-2xl sm:rounded-[20px]">
					{activeSection === "profile" && <Profile setActiveSection={setActiveSection} />}
					{activeSection === "smartpreferences" && <SmartPreferences setActiveSection={setActiveSection} />}
					{activeSection === "notification" && <Notification setActiveSection={setActiveSection} />}
					{activeSection === "subscription&payments" && <Subscriptions setActiveSection={setActiveSection} />}
					{activeSection === "event&calendarsync" && <EventsCalendar />}
					{activeSection === "security" && <Security setActiveSection={setActiveSection} />}
				</div>
			) : (
				""
			)}
		</div>
	);
};

export default Settings;
