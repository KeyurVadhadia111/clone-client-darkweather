import Icon from "components/utils/Icon";
import React, { useEffect, useState } from "react";
import AddressPopup from "./AddressPopup";
import ActivityPopup from "./ActivityPopup";
import HealthPopup from "./HealthPopup";

interface Props {
	setActiveSection: (section: string) => void;
}
const SmartPreferences: React.FC<Props> = ({ setActiveSection }) => {
	const [activePopup, setActivePopup] = useState<null | "address" | "activity" | "health">(null);
	const [editIndex, setEditIndex] = useState<number | null>(null);
	const [locations, setLocations] = useState([
		{
			type: "Home",
			address: "C-4 South West, New York, usa, 3680051",
			icon: "home",
		},
		{
			type: "Office",
			address: "555 First Ave, New York, usa, 10021",
			icon: "office",
		},
		{
			type: "Vacation Spot",
			address: "New Paltz, Hudson Valley, New York, usa, 12561",
			icon: "vacation-spot",
		},
	]);

	const [activities, setActivities] = useState(["Snowboarding", "Dog Walking", "Hiking", "Morning Runs"]);

	const [conditions, setConditions] = useState(["Asthma", "Allergies (high Pollen Days)", "Joint Pain (arthritis)"]);

	return (
		<>
			{/* Main Content */}
			<div className="flex flex-col items-start gap-4 sm:gap-[30px]">
				<div className="text-ba	se sm:text-xl font-semibold text-text dark:text-textDark flex items-center gap-3">
					<Icon
						icon="chevron-down"
						onClick={() => setActiveSection("")}
						className="rotate-90 w-[18px] h-[18px] block sm:hidden"
					/>
					Smart Preferences
				</div>
				<div className="w-full h-px bg-textSecondary/20" />

				{/* Favorite Locations */}
				<div className="w-full">
					<div className="flex items-start justify-between sm:items-center w-full mb-3 sm:mb-5">
						<div className="text-sm sm:text-lg font-medium text-text dark:text-textDark">
							Favorite Locations
						</div>
						<button
							className="inline-flex items-center gap-2.5 text-sm sm:text-base font-medium text-primary"
							onClick={() => setActivePopup("address")}>
							<Icon icon="plus" className="w-4 h-4 " />
							Add New Address
						</button>
					</div>
					<div className="flex flex-wrap  gap-4">
						{locations.length ? (
							locations.map((loc, index) => (
								<div
									key={index}
									className="flex flex-col gap-3.5 sm:gap-4 p-4 sm:p-5 border border-textSecondary/20 rounded-xl w-full sm:w-[calc(50%-8px)]">
									<div className="flex justify-between items-center w-full">
										<div className="flex items-center gap-2.5 sm:gap-3">
											<div className="w-5 h-5 sm:w-7 sm:h-7 bg-text dark:bg-textDark rounded-md flex items-center justify-center overflow-hidden">
												<Icon
													icon={loc.icon}
													className="w-2.5 h-2.5 sm:w-[14px] sm:h-[14px] text-bgc dark:text-text"
												/>
											</div>
											<div className="text-base sm:text-lg font-medium text-text dark:text-textDark">
												{loc.type}
											</div>
										</div>
										<div className="flex gap-3">
											<button className="w-4 h-4 sm:w-6 sm:h-6 text-primary">
												<Icon
													icon="edit"
													className=""
													onClick={() => {
														setEditIndex(index);
														setActivePopup("address");
													}}
												/>
											</button>
											<button
												className="w-4 h-4 sm:w-6 sm:h-6 text-red-700"
												onClick={() => setLocations(locations.filter((_, i) => i !== index))}>
												<Icon icon="trash" className="" />
											</button>
										</div>
									</div>
									<p className="text-sm sm:text-base text-text dark:text-textDark">{loc.address}</p>
								</div>
							))
						) : (
							<p className="text-base text-text dark:text-textDark">No favorite locations found.</p>
						)}
					</div>
				</div>

				{/* Activity Alerts */}
				<div className="w-full">
					<div className="flex justify-between items-center w-full mb-5">
						<div className="text-sm sm:text-lg font-medium text-text dark:text-textDark">
							Activity Alerts
						</div>
						<button
							className="inline-flex items-center gap-2.5 text-sm sm:text-base font-medium text-primary"
							onClick={() => setActivePopup("activity")}>
							<Icon icon="plus" className="w-4 h-4 " />
							Add Another
						</button>
					</div>
					<div className="flex gap-4 flex-wrap ">
						{activities.length ? (
							activities.map((activity, index) => (
								<div
									key={index}
									className="relative inline-flex items-center gap-4 px-3 py-2 sm:px-4 sm:py-2.5 border border-textSecondary/20 rounded-[10px]">
									<span className="text-sm sm:text-lg text-text dark:text-textDark">{activity}</span>
									<button
										className="absolute -top-px -right-[2px] sm:top-[-5px] sm:right-[-5px] w-2.5 h-2.5 sm:w-4 sm:h-4 bg-text dark:bg-bgc flex items-center justify-center rounded-full"
										onClick={() => setActivities(activities.filter((_, i) => i !== index))}>
										<Icon
											icon="close"
											className="w-2 h-2 sm:w-3 sm:h-3 text-bgc dark:text-text"></Icon>
									</button>
								</div>
							))
						) : (
							<p className="text-base text-text dark:text-textDark">No activity found.</p>
						)}
					</div>
				</div>

				{/* Health Conditions */}
				<div className="w-full">
					<div className="flex justify-between items-center w-full mb-5">
						<div className="text-sm sm:text-lg font-medium text-text dark:text-textDark">
							Health Conditions
						</div>
						<button
							className="inline-flex items-center gap-2.5 text-sm sm:text-base font-medium text-primary"
							onClick={() => setActivePopup("health")}>
							<Icon icon="plus" className="w-4 h-4" />
							Add Another
						</button>
					</div>
					<div className="flex gap-4 flex-wrap ">
						{conditions.length ? (
							conditions.map((condition, index) => (
								<div
									key={index}
									className="relative inline-flex items-center gap-4 px-3 py-2 sm:px-4 sm:py-2.5 border border-textSecondary/20 rounded-[10px]">
									<span className="text-sm sm:text-lg text-text dark:text-textDark">{condition}</span>
									<button
										className="absolute -top-px -right-[2px] sm:top-[-5px] sm:right-[-5px] w-2.5 h-2.5 sm:w-4 sm:h-4 bg-text dark:bg-bgc flex items-center justify-center rounded-full"
										onClick={() => setConditions(conditions.filter((_, i) => i !== index))}>
										<Icon
											icon="close"
											className="w-2 h-2 sm:w-3 sm:h-3 text-bgc dark:text-text"></Icon>
									</button>
								</div>
							))
						) : (
							<p className="text-base text-text dark:text-textDark">No conditions found.</p>
						)}
					</div>
				</div>
				<AddressPopup
					isOpen={activePopup === "address"}
					setIsOpen={() => {
						setEditIndex(null);
						setActivePopup(null);
					}}
					list={locations}
					setList={setLocations}
					editIndex={editIndex}
				/>
				<ActivityPopup
					isOpen={activePopup === "activity"}
					setIsOpen={() => {
						setActivePopup(null);
					}}
					list={activities}
					setList={setActivities}
				/>
				<HealthPopup
					isOpen={activePopup === "health"}
					setIsOpen={() => setActivePopup(null)}
					list={conditions}
					setList={setConditions}
				/>
			</div>
		</>
	);
};

export default SmartPreferences;
