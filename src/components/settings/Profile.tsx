import { Button } from "components/utils/Button";
import { Input } from "components/utils/Input";
import { Separator } from "components/utils/Separator";
import React, { useRef, useState } from "react";
import Icon from "components/utils/Icon";
import { toast } from "components/utils/toast";

interface Props {
	setActiveSection: (section: string) => void;
}
const Profile: React.FC<Props> = ({ setActiveSection }) => {
	const [profilePicture, setProfilePicture] = useState<string>("assets/images/user.png");
	const [formData, setFormData] = useState({
		fullName: "Alex Johnson",
		email: "alexjohnson@example.com",
		mobileNumber: "+1 578 9878 4564",
	});
	const [selectedLocation, setSelectedLocation] = useState("Portland, OR");
	const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const locations = ["Portland, OR", "New York", "Los Angeles", "Chicago", "Houston"];

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData(prevData => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setProfilePicture(reader.result as string);
			};
			reader.readAsDataURL(file);
		}
	};

	const handleDeletePicture = () => {
		if (window.confirm("Are you sure you want to delete your profile picture?")) {
			setProfilePicture("assets/images/user.png");
		}
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Here you would typically send the data to your backend
		toast.success("Updated success!");
	};

	return (
		<form onSubmit={handleSubmit} className="flex flex-col items-start gap-4 sm:gap-[30px] w-full">
			<div className="font-semibold text-text dark:text-textDark text-base sm:text-xl whitespace-nowrap flex items-center">
				<span className="block sm:hidden">
					<Icon icon="chevron-down" onClick={() => setActiveSection("")} className="rotate-90 w-4 h-4 mr-2" />
				</span>
				Profile
			</div>

			<Separator className="bg-textSecondary/20 dark:!bg-textSecondary/30 !bg-none !w-full !h-px" />

			<div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-[30px] w-full flex-[0_0_auto]">
				<div className="w-[180px] font-medium text-text dark:text-textDark text-sm sm:text-base ">
					Profile Picture
				</div>

				<div className="flex items-center gap-4 sm:gap-9 flex-[0_0_auto]">
					<img className="w-[52px] h-[52px] sm:w-20 sm:h-20" alt="Profile" src={profilePicture} />

					<div className="flex items-center gap-3 sm:gap-3.5 flex-[0_0_auto]">
						<label className="px-4 py-2 sm:px-6 sm:py-2.5 rounded-md inline-flex items-center justify-center  whitespace-nowrap flex-[0_0_auto] bg-primary cursor-pointer">
							<Input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
							<div className="font-medium text-text text-[10px] sm:text-xs">Change Picture</div>
						</label>

						<Button
							type="button"
							onClick={handleDeletePicture}
							className="inline-flex items-center justify-center !px-4 !py-2 sm:!px-6 sm:!py-2.5 whitespace-nowrap flex-[0_0_auto] !rounded-md !border !border-solid !bg-transparent !border-[#f04349] !font-medium !text-[#f04349] !text-[10px] sm:!text-xs">
							Delete Picture
						</Button>
					</div>
				</div>
			</div>

			<Separator className="bg-textSecondary/20 dark:!bg-textSecondary/30 !bg-none !w-full !h-px" />

			{Object.entries(formData).map(([key, value]) => (
				<React.Fragment key={key}>
					<div className="flex flex-col gap-2 sm:gap-3 w-full flex-[0_0_auto]">
						<div className=" font-medium text-textSecondary dark:text-textDark text-sm sm:text-sm ">
							{key.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase())}
						</div>

						<div className="flex flex-col h-7 sm:h-[60px] items-start justify-center gap-1.5 sm:gap-2.5 p-4 border border-textSecondary/20 w-full rounded-[10px] sm:rounded-xl">
							<div className="w-full">
								<Input
									placeholder={`Enter your ${key}`}
									type={key === "email" ? "email" : key === "mobileNumber" ? "tel" : "text"}
									name={key}
									value={value}
									onChange={handleInputChange}
									className=" !text-text dark:!text-textDark !text-xs sm:!text-base !p-0 !bg-transparent !outline-none !ring-0 !rounded-none !border-none !w-full"
								/>
							</div>
						</div>
					</div>
				</React.Fragment>
			))}

			<div className="flex flex-col  items-start justify-between gap-2 sm:gap-3 w-full  ">
				{/* Heading */}
				<h2 className={`font-medium text-textSecondary dark:text-textDark text-sm sm:text-sm`}>
					Primary Location
				</h2>

				{/* Location Dropdown */}
				<div className="relative w-full" ref={dropdownRef}>
					<button
						type="button"
						className="flex items-center justify-between font-bold  backdrop-blur-sm rounded-xl text-sm sm:text-base text-text dark:text-textDark border border-textSecondary/20 w-full h-7 sm:h-[60px]  gap-1.5 sm:gap-2.5 p-4"
						onClick={() => setLocationDropdownOpen(!locationDropdownOpen)}>
						<span className="font-normal text-text dark:text-textDark text-xs sm:text-base ">
							{selectedLocation}
						</span>
						<Icon icon="chevron-down" className="w-[18px] h-[18px] sm:w-6 sm:h-6" />
					</button>

					{locationDropdownOpen && (
						<div className="absolute mt-2 w-full bg-bgc dark:bg-text text-bgcDark dark:text-textDark  rounded-md shadow-[0_20px_35px_rgba(0,0,0,0.05)] border-textSecondary/20  z-10 ">
							{locations.map(location => (
								<div
									key={location}
									onClick={() => {
										setSelectedLocation(location);
										setLocationDropdownOpen(false);
									}}
									className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 text-black dark:text-textDark">
									{location}
								</div>
							))}
						</div>
					)}
				</div>
			</div>
			<Separator className="bg-textSecondary/20 dark:!bg-textSecondary/30 !bg-none !w-full !h-px" />

			<Button
				type="submit"
				className="!px-6 py-3 sm:!py-4 !rounded-[10px] sm:!rounded-xl inline-flex items-center justify-center flex-[0_0_auto] bg-primary font-semibold text-text  !text-xs sm:!text-base self-end">
				Save Changes
			</Button>
		</form>
	);
};
export default Profile;
