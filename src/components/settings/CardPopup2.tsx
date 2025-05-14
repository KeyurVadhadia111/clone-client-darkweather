import React, { Fragment, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Dialog, Transition } from "@headlessui/react";
import Modal from "components/layout/modal";
import { Input } from "components/utils/Input";

const cardSchema = yup.object().shape({
	nameOnCard: yup.string().required("Name is required"),
	cardNumber: yup
		.string()
		.required("Card number is required")
		.matches(/^\d{16}$/, "Card number must be 16 digits"),
	expiryDate: yup
		.string()
		.required("Expiry date is required")
		.matches(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, "Format must be MM/YY")
		.test("expiry", "Card has expired", value => {
			if (!value) return false;
			const [month, year] = value.split("/");
			const currentDate = new Date();
			const currentYear = currentDate.getFullYear() % 100;
			const currentMonth = currentDate.getMonth() + 1;
			const inputYear = parseInt(year);
			const inputMonth = parseInt(month);

			if (inputYear < currentYear) return false;
			if (inputYear === currentYear && inputMonth < currentMonth) return false;
			return true;
		}),
	cvv: yup
		.string()
		.required("CVV is required")
		.matches(/^\d{3,4}$/, "CVV must be 3 or 4 digits"),
});

type FormData = yup.InferType<typeof cardSchema>;

type CardData = {
	cardNumber: string;
	cvv: string;
	cardType: string;
	isSelected: boolean;
	icon: string;
};

type Props = {
	onClose: () => void;
};

type RequestType = {
	isOpen: boolean;
	setIsOpen: (fl: boolean) => void;
	cardIndex: number | null;
	paymentPageData: any;
	setPaymentPageData: (data: any) => void;
};

const CardPopup2: React.FC<RequestType> = ({ isOpen, setIsOpen, cardIndex, paymentPageData, setPaymentPageData }) => {
	const {
		register,
		handleSubmit,
		reset,
		trigger,
		formState: { errors },
	} = useForm<FormData>({
		resolver: yupResolver(cardSchema),
	});

	const onSubmit = (data: FormData) => {
		const cardType = data.cardNumber.startsWith("4") ? "Visa" : "MasterCard";
		const newCard = {
			cardNumber:
				data.cardNumber
					.slice(0, 12)
					.replace(/(\d{4})/g, "$1 ")
					.trim() + " ****",
			cvv: data.cvv,
			cardType,
			isSelected: true,
			icon: `/assets/images/${cardType === "Visa" ? "visa" : "master"}-card.svg`,
			nameOnCard: data.nameOnCard,
			expiryDate: data.expiryDate,
		};
		setIsOpen(false);

		setPaymentPageData((prev: any) => {
			const newCards = [...prev.savedCards];
			if (cardIndex !== null && cardIndex >= 0) {
				newCards[cardIndex] = newCard;
			} else {
				newCards.push(newCard);
			}
			return {
				...prev,
				savedCards: newCards,
				actionButton: {
					...prev.actionButton,
					enabled: true,
				},
			};
		});
	};

	useEffect(() => {
		if (cardIndex !== null && cardIndex >= 0) {
			const cards = paymentPageData.savedCards;
			const cardItem = cards[cardIndex];
			// Pre-fill form with existing card data when editing
			const formData = {
				nameOnCard: cardItem.nameOnCard,
				expiryDate: cardItem.expiryDate,
				cardNumber: cardItem.cardNumber.replace(/\*\*\*\*$/, "").replace(/\s/g, ""),
				cvv: cardItem.cvv,
			};
			reset(formData);
			trigger();
			// Here you would use react-hook-form's setValue to pre-fill the form
			// This is just a placeholder to show the intention
		} else {
			reset({
				nameOnCard: "",
				expiryDate: "",
				cardNumber: "",
				cvv: "",
			});
		}
	}, [isOpen]);

	return (
		<Modal
			openModal={isOpen}
			setOpenModal={() => {
				setIsOpen(false);
				reset();
				trigger();
			}}
			size={"md"}>
			<React.Fragment>
				<Dialog.Title className="text-base sm:text-2xl font-medium text-text dark:text-textDark mb-4 sm:mb-8">
					{cardIndex !== null ? "Edit Card" : "Add New Card"}
				</Dialog.Title>

				<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 sm:gap-4">
					{/* Name On Card */}
					<div className=" flex flex-col gap-2">
						<label className="text-xs sm:text-sm text-textSecondary dark:text-textDark font-medium">
							Name On Card <span className="text-red-400">*</span>
						</label>
						<Input
							{...register("nameOnCard", {
								onChange: e => {
									trigger && trigger("nameOnCard");
								},
							})}
							type="text"
							className="!bg-bgc dark:!bg-bgcDark !border !border-textSecondary/20"
							placeholder="Enter Full Name on Card"
							error={errors?.nameOnCard?.message?.toString()}
						/>
					</div>

					{/* Card Number */}
					<div className=" flex flex-col gap-2">
						<label className="text-xs sm:text-sm text-textSecondary dark:text-textDark font-medium">
							Card Number <span className="text-red-400">*</span>
						</label>
						<Input
							{...register("cardNumber", {
								onChange: e => {
									trigger && trigger("cardNumber");
								},
							})}
							className="!bg-bgc dark:!bg-bgcDark !border !border-textSecondary/20"
							type="number"
							placeholder="Enter Card Number"
							error={errors?.cardNumber?.message?.toString()}
						/>
					</div>

					{/* Expiry Date and CVV */}
					<div className="flex gap-3 sm:gap-4">
						<div className="flex-1 flex flex-col gap-2">
							<label className="text-xs sm:text-sm text-textSecondary dark:text-textDark font-medium">
								Expiry Date <span className="text-red-400">*</span>
							</label>
							<Input
								type="text"
								{...register("expiryDate", {
									onChange: e => {
										trigger && trigger("expiryDate");
									},
								})}
								className="!bg-bgc dark:!bg-bgcDark !border !border-textSecondary/20"
								placeholder="Enter Expiry Date"
								error={errors?.expiryDate?.message?.toString()}
							/>
						</div>

						<div className="flex-1 flex flex-col gap-2">
							<label className="text-xs sm:text-sm text-textSecondary dark:text-textDark font-medium">
								CVV <span className="text-red-400">*</span>
							</label>
							<Input
								{...register("cvv", {
									onChange: e => {
										trigger && trigger("cvv");
									},
								})}
								className="!bg-bgc dark:!bg-bgcDark !border !border-textSecondary/20"
								type="number"
								placeholder="Enter CVV"
								error={errors?.cvv?.message?.toString()}
							/>
						</div>
					</div>

					{/* Buttons */}
					<div className="flex justify-end gap-4 mt-3 sm:mt-6">
						<button
							type="button"
							className="text-sm sm:text-base w-full sm:w-[127px] px-6 py-3 sm:py-4 border border-text dark:border-bgc rounded-xl font-semibold text-text dark:text-textDark "
							onClick={() => setIsOpen(false)}>
							Cancel
						</button>
						<button
							type="submit"
							className="text-sm sm:text-base w-full sm:w-auto px-6 py-3 sm:py-4 bg-primary rounded-xl font-semibold text-text ">
							Save Card
						</button>
					</div>
				</form>
			</React.Fragment>
		</Modal>
	);
};

export default CardPopup2;
