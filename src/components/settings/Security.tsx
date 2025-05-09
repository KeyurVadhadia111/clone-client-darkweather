import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Separator } from "components/utils/Separator";
import { Input } from "components/utils/Input";
import { Button } from "components/utils/Button";
import Icon from "components/utils/Icon";
import DeleteAccountPopup from "./DeleteAccountPopup";
import { toast } from "components/utils/toast";

interface Props {
	setActiveSection: (section: string) => void;
}
const Security: React.FC<Props> = ({ setActiveSection }) => {
	const [showDeletePopup, setShowDeletePopup] = useState(false);

	const schema = yup.object().shape({
		oldPassword: yup.string().required("*Password is required"),
		newPassword: yup
			.string()
			.required("*New password is required")
			.min(8, "Password must be at least 8 characters"),
		confirmNewPassword: yup
			.string()
			.oneOf([yup.ref("newPassword"), undefined], "*Password doesn’t match.")
			.required("*Confirm password is required"),
	});

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data: any) => {
		toast.success("Password Changed");
		reset();
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start gap-4 sm:gap-[30px] w-full">
			<div className="text-base sm:text-xl  font-semibold text-text dark:text-textDark flex items-center gap-3">
				<div className="sm:hidden flex">
					<Icon
						icon="chevron-down"
						onClick={() => setActiveSection("")}
						className="rotate-90 w-[18px] h-[18px] block sm:hidden"
					/>
				</div>
				Security
			</div>

			<Separator className="bg-textSecondary/20 dark:!bg-textSecondary/30 !bg-none !w-full !h-px" />

			<div className="flex flex-col items-end gap-4 sm:gap-[30px] w-full">
				<div className="flex flex-col items-start gap-4 sm:gap-5 w-full">
					<div className="font-medium text-text dark:text-textDark text-sm sm:text-lg">Change Password</div>

					<div className="flex flex-col gap-4 w-full">
						{/* Old Password */}
						<div className="flex flex-col gap-2 sm:gap-3 w-full">
							<label className="inline-flex gap-0.5">
								<span className="font-medium text-textSecondary dark:text-textDark text-xs sm:text-sm">
									Old Password
								</span>
								<span className="font-bold text-red-500 text-xs ">*</span>
							</label>
							<Input
								type="password"
								placeholder="Enter Old Password"
								{...register("oldPassword")}
								className="!border-textSecondary/20 bg-transparent"
								error={errors?.oldPassword?.message?.toString()}
							/>
						</div>

						{/* New Password */}
						<div className="flex flex-col gap-2 sm:gap-3 w-full">
							<label className="inline-flex gap-0.5">
								<span className="font-medium text-textSecondary dark:text-textDark text-xs sm:text-sm">
									New Password
								</span>
								<span className="font-bold text-red-500 text-xs ">*</span>
							</label>
							<Input
								type="password"
								placeholder="Enter New Password"
								{...register("newPassword")}
								className="!border-textSecondary/20 bg-transparent"
								error={errors?.newPassword?.message?.toString()}
							/>
						</div>

						{/* Confirm Password */}
						<div className="flex flex-col gap-2 sm:gap-3 w-full">
							<label className="inline-flex gap-0.5">
								<span className="font-medium text-textSecondary dark:text-textDark text-xs sm:text-sm">
									Confirm New Password
								</span>
								<span className="font-bold text-red-500 text-xs ">*</span>
							</label>
							<Input
								type="password"
								placeholder="Enter Confirm New Password"
								{...register("confirmNewPassword")}
								className="!border-textSecondary/20 bg-transparent"
								error={errors?.confirmNewPassword?.message?.toString()}
							/>
						</div>
					</div>
				</div>

				{/* Save Button */}
				<Button type="submit" className="!px-6 sm:!px-8 sm:!py-4 !border-none rou">
					Save
				</Button>
			</div>

			<Separator className="bg-textSecondary/20 dark:!bg-textSecondary/30 !bg-none !w-full !h-px" />

			<div className="flex flex-col items-start gap-4 sm:gap-[30px] relative self-stretch w-full">
				<div className="flex flex-col items-start gap-4 sm:gap-5 self-stretch w-full">
					<div className="font-medium text-text dark:text-textDark text-sm sm:text-lg  whitespace-nowrap">
						Delete Account
					</div>

					<p className="self-stretch font-normal text-textSecondary dark:text-textDark text-sm sm:text-base ">
						Permanently remove your Dark Weather account. This action cannot be undone.
					</p>
				</div>
				<Button
					onClick={() => {
						setShowDeletePopup(true);
					}}
					className="self-end  !border-text dark:!border-bgc text-text dark:text-textDark !px-6 sm:!px-8 !font-semibold !bg-transparent">
					Delete Account
				</Button>
			</div>
			<DeleteAccountPopup open={showDeletePopup} setOpen={setShowDeletePopup} />
		</form>
	);
};

export default Security;
