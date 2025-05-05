import React, { useEffect, useState, KeyboardEvent } from "react";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Dialog } from "@headlessui/react";
import { Input } from "components/utils/Input";
import Modal from "components/layout/modal";
import { Button } from "components/utils/Button";
import { toast } from "components/utils/toast";

type Props = {
	isOpen: boolean;
	setIsOpen: (val: boolean) => void;
	list: any;
	setList: (val: any[]) => void;
};

const predefinedActivities = ["Cycling", "Camping", "Fishing", "Boating", "Gardening", "Skateboarding", "Kite Flying"];

const ActivityPopup: React.FC<Props> = ({ isOpen, setIsOpen, list, setList }) => {
	const [newActivity, setNewActivity] = useState("");
	const [allActivities, setAllActivities] = useState<string[]>(predefinedActivities);

	const schema = yup.object({
		selectedActivities: yup
			.array()
			.of(yup.string().required())
			.required("Please select at least one activity.")
			.min(1, "At least one activity must be selected"),
	});
	type FormData = {
		selectedActivities: string[];
	};
	const {
		control,
		handleSubmit,
		setValue,
		getValues,
		reset,
		trigger,
		formState: { errors },
	} = useForm<FormData>({
		resolver: yupResolver(schema),
		defaultValues: { selectedActivities: [] },
		mode: "onChange",
	});

	useEffect(() => {
		if (isOpen) {
			setNewActivity("");
			setAllActivities(predefinedActivities);
			reset({ selectedActivities: [] });
			trigger();
		}
	}, [isOpen, reset, trigger]);

	const handleKeyPress = async (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter" && newActivity.trim() !== "") {
			e.preventDefault();
			const trimmed = newActivity.trim();

			if (!allActivities.includes(trimmed)) {
				setAllActivities(prev => [...prev, trimmed]);
			}

			const current = getValues("selectedActivities");
			if (!current.includes(trimmed)) {
				const updated = [...current, trimmed];
				setValue("selectedActivities", updated);
				await trigger("selectedActivities");
			}

			setNewActivity("");
		}
	};

	const onSubmit = (data: FormData) => {
		const form = JSON.parse(JSON.stringify(data));
		list = list.concat(form.selectedActivities);
		setList([...list]); // Add new data to the list
		reset(); // Reset the form after adding a new value
		setIsOpen(false);
		toast.success("Added success!");
	};

	return (
		<Modal openModal={isOpen} setOpenModal={() => setIsOpen(false)} size="md">
			<div>
				<Dialog.Title className="text-lg sm:text-2xl font-medium text-text dark:text-textDark mb-4 sm:mb-8">
					Add Activity Alerts
				</Dialog.Title>

				<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 sm:gap-6">
					{/* Activities */}
					<div className="flex flex-col items-start gap-3 sm:gap-5 w-full">
						<label className="text-sm sm:text-lg font-medium text-text dark:text-textDark">
							Select or Add Manually
						</label>

						<Controller
							control={control}
							name="selectedActivities"
							render={({ field }) => (
								<div className="flex flex-wrap gap-2 sm:gap-4">
									{allActivities.map(activity => (
										<label
											key={activity}
											className="flex items-center gap-2 px-3 py-2 sm:gap-3 sm:px-4 sm:py-2.5 border border-textSecondary/20 rounded-lg cursor-pointer">
											<input
												type="checkbox"
												checked={field.value.includes(activity)}
												onChange={() => {
													const isSelected = field.value.includes(activity);
													const updated = isSelected
														? field.value.filter(a => a !== activity)
														: [...field.value, activity];

													field.onChange(updated);
													trigger("selectedActivities");
												}}
												className="accent-primary w-4 h-4"
											/>
											<span className="text-text dark:text-textDark text-sm sm:text-base">
												{activity}
											</span>
										</label>
									))}
								</div>
							)}
						/>

						{errors.selectedActivities && (
							<p className="text-sm text-red-500">{errors.selectedActivities.message}</p>
						)}

						<div className="flex flex-col gap-2 w-full">
							<span className="text-sm text-textSecondary dark:text-textDark">
								Add Activity Alert Manually
							</span>
							<Input
								type="text"
								value={newActivity}
								onChange={e => setNewActivity(e.target.value)}
								onKeyPress={handleKeyPress}
								placeholder="Enter Activity Alert"
								className="sm:!h-[62px] !p-3 sm:!p-4 !w-full !h-[42px] !border !border-textSecondary/20 !rounded-xl text-sm sm:!text-base !text-text dark:!text-textDark !bg-transparent"
							/>
							<p className="text-xs text-textSecondary dark:text-textDark">
								*You can add multiple activity alerts
							</p>
						</div>
					</div>

					{/* Action Buttons */}
					<div className="flex w-full sm:w-auto sm:justify-end gap-3 mt-3 sm:mt-5">
						<Button
							type="button"
							onClick={() => setIsOpen(false)}
							className="!px-6 !py-3 sm:!px-6 sm:!py-4 !border !rounded-xl !text-sm sm:!text-base !font-semibold !text-text dark:!text-textDark !border-text dark:!border-textDark !bg-transparent w-full sm:w-auto">
							Cancel
						</Button>
						<Button
							type="submit"
							className="!px-6 !py-3 sm:!px-6 sm:!py-4 !bg-primary !text-text !text-sm sm:!text-base !font-semibold !rounded-xl w-full sm:w-auto">
							Add
						</Button>
					</div>
				</form>
			</div>
		</Modal>
	);
};

export default ActivityPopup;
