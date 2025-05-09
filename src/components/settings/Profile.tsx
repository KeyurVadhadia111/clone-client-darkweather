import { Button } from "components/utils/Button";
import { Input } from "components/utils/Input";
import { Separator } from "components/utils/Separator";
import React, { useRef, useState } from "react";
import Icon from "components/utils/Icon";
import { toast } from "components/utils/toast";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "components/utils/Select";

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

	const locations = [
		{
			value: "Portland, OR",
			text: "Portland, OR",
		},
		{
			value: "New York, NY",
			text: "New York, NY",
		},
		{
			value: "Los Angeles, CA",
			text: "Los Angeles, CA",
		},
		{
			value: "Chicago, IL",
			text: "Chicago, IL",
		},
		{
			value: "Houston, TX",
			text: "Houston, TX",
		},
		{
			value: "Phoenix, AZ",
			text: "Phoenix, AZ",
		},
		{
			value: "Philadelphia, PA",
			text: "Philadelphia, PA",
		},
	];

	const schema = yup.object().shape({
		mobileNumber: yup.string().required("Mobile number is required"),
		fullName: yup.string().required("Full Name is required"),
		email: yup.string().email("Invalid email").required("Email is required"),
		location: yup.string().required("Location is required"),
	});
	type FormData = yup.InferType<typeof schema>;
	const {
		register,
		handleSubmit,
		setValue,
		getValues,
		reset,
		trigger,
		formState: { errors },
	} = useForm<FormData>({
		resolver: yupResolver(schema),
	});

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

	const onSubmit = (data: FormData) => {
		toast.success("Updated success!");
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start gap-4 sm:gap-[30px] w-full">
			<div className="font-semibold text-text dark:text-textDark text-base sm:text-xl whitespace-nowrap flex items-center gap-3">
				<div className="sm:hidden flex">
					<Icon
						icon="chevron-down"
						onClick={() => setActiveSection("")}
						className="rotate-90 w-[18px] h-[18px] block sm:hidden"
					/>
				</div>
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
						<label className="px-4 py-2 sm:px-6 sm:py-2.5 rounded-md inline-flex items-center justify-center  whitespace-nowrap flex-[0_0_auto] bg-primary cursor-pointer h-8 sm:h-[38px]">
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

			<div className="w-full flex flex-col gap-3 relative">
				<label className="text-sm font-medium text-textSecondary dark:text-textDark">
					Full Name <span className="text-red-500">*</span>
				</label>
				<Input
					{...register("fullName")}
					placeholder="Enter full name"
					className="!bg-transparent  !border-textSecondary/20 "
					error={errors?.fullName?.message}
				/>
			</div>

			<div className="w-full flex flex-col gap-3 relative">
				<label className="text-sm font-medium text-textSecondary dark:text-textDark">
					Email <span className="text-red-500">*</span>
				</label>
				<Input
					type="email"
					{...register("email")}
					placeholder="Enter email"
					className="!bg-transparent  !border-textSecondary/20"
					error={errors?.email?.message}
				/>
			</div>

			<div className="w-full flex flex-col gap-3 relative">
				<label className="text-sm font-medium text-textSecondary dark:text-textDark">
					Mobile Number <span className="text-red-500">*</span>
				</label>
				<Input
					{...register("mobileNumber")}
					placeholder="Enter mobile number"
					className="!bg-transparent  !border-textSecondary/20 "
					error={errors?.mobileNumber?.message}
				/>
			</div>

			<div className="w-full flex flex-col gap-3 relative">
				<Select
					name={"location"}
					label={"Primary Location"}
					items={locations}
					error={errors?.location?.message?.toString()}
					register={register}
					trigger={trigger}
					required
				/>
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
