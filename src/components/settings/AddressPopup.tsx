import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Dialog } from "@headlessui/react";
import { Input } from "components/utils/Input";
import Modal from "components/layout/modal";
import Icon from "components/utils/Icon";
import { Button } from "components/utils/Button";
import { toast } from "components/utils/toast";

type Props = {
	isOpen: boolean;
	setIsOpen: (val: boolean) => void;
	list: any;
	setList: (val: any[]) => void;
	editIndex: number | null;
};

const AddressPopup: React.FC<Props> = ({ isOpen, setIsOpen, list, setList, editIndex }) => {
	const [addressDropdownOpen, setaddressDropdownOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const addressList = [
		"Home",
		"Office",
		"Work",
		"Vacation Home",
		"Holiday House",
		"Relative's Home",
		"Client's Office",
	];

	const schema = yup.object().shape({
		type: yup.string().required("Address Type is required"),
		address: yup.string().required("address is required"),
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

	useEffect(() => {
		if (editIndex !== null) {
			reset(list[editIndex]);
		} else {
			reset({});
		}
	}, [isOpen]);

	// Optional: close dropdown on outside click
	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
				setaddressDropdownOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const onSubmit = (data: FormData) => {
		const form = JSON.parse(JSON.stringify(data));
		form.icon = "office";
		if (editIndex !== null) {
			list[editIndex] = form;
			setList([...list]);
		} else {
			setList([...list, form]); // Add new data to the list
			reset(); // Reset the form after adding a new value
		}
		toast.success((editIndex !== null ? "Updated" : "Added") + " success!");
		setIsOpen(false);
	};

	return (
		<Modal
			openModal={isOpen}
			setOpenModal={() => {
				setIsOpen(false);
				reset();
			}}
			size="md">
			<div>
				<Dialog.Title className="text-lg sm:text-2xl font-medium text-text dark:text-textDark mb-4 sm:mb-8">
					Add New Address
				</Dialog.Title>

				<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 sm:gap-4">
					{/* Address Type Dropdown */}
					<div className="flex flex-col gap-2 sm:gap-3">
						<label className="text-sm font-medium text-textSecondary dark:text-textDark">
							Select Address Type
						</label>
						<div className="relative w-full" ref={dropdownRef}>
							<button
								type="button"
								className="flex items-center justify-between backdrop-blur-sm rounded-xl text-sm sm:text-base text-text dark:text-textDark border border-textSecondary/20 w-full  h-[42px] sm:h-[60px] gap-2.5 p-3 sm:p-4 "
								onClick={() => setaddressDropdownOpen(!addressDropdownOpen)}>
								<span className="font-normal text-sm sm:text-base text-textSecondary dark:text-textDark ">
									{getValues("type") || "Select Address Type"}
								</span>
								<Icon
									icon="chevron-down"
									className="w-[18px] h-[18px] sm:w-6 sm:h-6 text-textSecondary dark:text-textDark"
								/>
							</button>

							{addressDropdownOpen && (
								<div className="absolute mt-2 w-full bg-bgc dark:bg-text text-bgcDark dark:text-textDark rounded-md shadow z-10 max-h-40 overflow-auto">
									{addressList.map(address => (
										<div
											key={address}
											onClick={() => {
												setValue("type", address, { shouldValidate: true });
												setaddressDropdownOpen(false);
											}}
											className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 ">
											{address}
										</div>
									))}
								</div>
							)}
						</div>
						{errors.type && <span className="text-sm text-red-500">{errors.type.message}</span>}
					</div>

					{/* address Input */}
					<div className="flex flex-col gap-2 sm:gap-3 relative">
						<label className="text-sm font-medium text-textSecondary dark:text-textDark">
							Select address <span className="text-red-500">*</span>
						</label>
						<Input
							{...register("address")}
							placeholder="Select Location"
							className="!bg-bgc dark:!bg-fgcDark !font-normal !text-sm sm:!text-base !border !border-textSecondary/20 !h-[42px] sm:!h-[60px] !p-3 sm:!p-4"
							error={errors?.address?.message}
						/>
						<Icon
							icon="location"
							className="absolute top-[57%] sm:top-[55%] right-[3%] w-4 h-4 sm:w-[22px] sm:h-[22px] text-textSecondary"
						/>
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
							{editIndex !== null ? "Update Address" : "Add Address"}
						</Button>
					</div>
				</form>
			</div>
		</Modal>
	);
};

export default AddressPopup;
