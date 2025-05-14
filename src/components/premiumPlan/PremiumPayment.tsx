import React, { Fragment, JSX, useEffect, useState } from "react";
import { useAppState } from "components/utils/useAppState";
import Icon from "components/utils/Icon";
import { Separator } from "components/utils/Separator";
import { Button, Dialog, Menu, Transition } from "@headlessui/react";
import CardPopup from "./CardPopup";

const PremiumPayment = (): JSX.Element => {
	const [{ isDark, premiumStep }, setAppState] = useAppState();
	const [showPopup, setShowPopup] = useState(false);
	const [editingCardIndex, setEditingCardIndex] = useState<number | null>(null);
	const [paymentPageData, setPaymentPageData] = useState({
		paymentMethods: [
			{
				method: "Net Banking",
				selected: true,
				icon: `/assets/images/net-banking` + (isDark ? "-dark" : "") + `.svg`,
			},
			{ method: "Paypal", selected: true, icon: "/assets/images/paypal.svg" },
			{ method: "Debit/Credit card", selected: true, icon: "/assets/images/credit-card.svg" },
		],
		savedCards: [
			{
				nameOnCard: "John Doe",
				expiryDate: "12/35",
				cardNumber: "7894 5486 5478 ****",
				cvv: "124",
				cardType: "Visa",
				isSelected: true,
				icon: "/assets/images/visa-card.svg",
			},
			{
				nameOnCard: "Jane Doe",
				expiryDate: "12/34",
				cardNumber: "8785 4565 4587 ****",
				cvv: "546",
				cardType: "MasterCard",
				isSelected: true,
				icon: "/assets/images/master-card.svg",
			},
		],
		orderSummary: {
			premiumTier: { description: "Premium Tier", price: "$9.99/month" },
			serviceFees: { description: "Services Fees", price: "$0.00" },
			total: { label: "Total", amount: "$9.99" },
			billingDetails: {
				startDate: "Today",
				note: "Billing starts on April 11, 2025, and will renew automatically every month until cancelled. Renewal price will be $9.99/month starting on May 11, 2025.",
			},
		},

		actionButton: { text: "Pay $9.99", enabled: false },
	});

	const selectCard = (value: any) => {
		setAppState({
			premiumStep: 4,
		});
	};
	useEffect(() => {
		if (!showPopup) {
			setEditingCardIndex(null);
		}

		return () => {
			true;
		};
	}, [showPopup]);

	return (
		<div className="container">
			<div className="flex flex-col items-center gap-3.5  p-5 sm:p-8 sm:gap-8 w-full  bg-bgc dark:bg-bgcDark rounded-[20px] mt-6 sm:mt-[72px] sm:mb-[55px]  ">
				<div className="inline-flex flex-col items-center gap-[14px] sm:gap-5">
					<div className="font-medium text-text dark:text-textDark text-2xl sm:text-[40px] text-center">
						Payment
					</div>
					<p className="font-normal text-textSecondary dark:text-textDark text-[14px] sm:text-base text-center">
						Secure your access to premium weather alerts and insights.
					</p>
				</div>

				<div className="flex flex-col items-start gap-8 w-full ">
					<div className="flex flex-col items-start gap-4 sm:gap-8 w-full ">
						<div className="flex flex-col items-start gap-4 sm:gap-6 w-full ">
							<div
								className="flex items-center gap-2.5 sm:gap-3 cursor-pointer w-[100px]"
								onClick={() =>
									setAppState({
										premiumStep: 2,
									})
								}>
								<Icon
									icon="arrow-left"
									className="w-4 h-4 sm:w-6 sm:h-6 text-text dark:text-textDark cursor-pointer"
								/>
								<p className="text-text dark:text-textDark text-sm sm:text-base cursor-pointer">Back</p>
							</div>

							<div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 w-full ">
								<div className="w-full sm:w-auto flex items-center  bg-bgc dark:bg-fgcDark rounded-[8px] sm:rounded-[12px] shadow-[0_20px_35px_rgba(0,0,0,0.05)]">
									<div className="w-full sm:w-auto flex flex-col items-start gap-4 sm:gap-6 p-4 sm:p-6 rounded-lg ">
										<div className="font-medium text-text dark:text-textDark text-base sm:text-xl ">
											Payment Method
										</div>
										<div className="flex flex-col items-start gap-4 sm:gap-6 w-full">
											{paymentPageData.paymentMethods.map((method, index) => (
												<label
													key={index}
													className={`flex items-center gap-3 sm:gap-6 px-4 py-3 sm:px-6 sm:py-5 w-full   rounded-[12px] sm:rounded-[16px]  border border-solid border-textSecondary/20 dark:border-textSecondary/30 cursor-pointer `}>
													<div className="flex items-center gap-3 flex-1 ">
														<input
															type="radio"
															name="paymentMethod"
															className="w-[11.5px] h-[11.5px] sm:w-6 sm:h-6 cursor-pointer accent-primary"
															checked={method.selected}
															onChange={() => {
																paymentPageData.paymentMethods.forEach(
																	m => (m.selected = false),
																);
																method.selected = true;
																// Force re-render if needed (if this data is in state, update it properly)
															}}
														/>
														<div className=" font-medium text-text dark:text-textDark text-[14px] sm:text-lg  whitespace-nowrap">
															{method.method}
														</div>
													</div>
													<img
														className="w-[30px] h-[30px] sm:w-[45px] sm:h-[45px]"
														alt={method.method}
														src={method.icon}
													/>
												</label>
											))}
										</div>

										<div className="flex flex-col items-start gap-4 sm:gap-6 w-full">
											{/* Header */}
											<div className="flex items-center sm:gap-[67px] ">
												<div className="font-medium text-text dark:text-textDark text-[14px] sm:text-lg">
													Saved Debit/Credit card
												</div>
												<div
													className="hidden sm:flex  items-center justify-center gap-2.5 px-4 py-3.5 rounded-[10px] cursor-pointer"
													onClick={() => setShowPopup(true)}>
													<Icon
														icon="plus"
														className="w-[14px] h-[14px] sm:w-5 sm:h-5 text-primary"
													/>
													<div className="font-medium text-primary text-[14px] sm:text-lg text-center whitespace-nowrap">
														Add New Card
													</div>
												</div>
											</div>

											{/* Card List */}
											<div className="flex flex-col gap-3 sm:gap-6 rounded-[12px] sm:rounded-[16px] border border-solid border-textSecondary/20 dark:border-textSecondary/30 p-3 sm:px-6 sm:py-5 w-full ">
												{paymentPageData.savedCards?.length ? (
													paymentPageData.savedCards.map((card, index) => (
														<div key={index} className="relative">
															<label
																className="flex items-center justify-between sm:gap-3.5 cursor-pointer"
																onClick={() => `Selected card: ${card.cardNumber}`}>
																<div className="flex items-center gap-1.5 sm:gap-3">
																	<input
																		type="radio"
																		name="savedCard"
																		className="w-[11.5px] h-[11.5px] sm:w-6 sm:h-6 cursor-pointer accent-primary"
																		checked={card.isSelected}
																		readOnly
																	/>
																	<div className="flex items-center gap-1.5 sm:gap-4">
																		<div className="font-normal text-text dark:text-textDark text-[12px] sm:text-lg whitespace-nowrap">
																			{card.cardNumber}
																		</div>
																		<div className="font-normal text-text dark:text-textDark text-[12px] sm:text-lg whitespace-nowrap">
																			CVV: {card.cvv}
																		</div>
																	</div>
																</div>

																<img
																	className="w-5 h-5 sm:w-[45px] sm:h-[45px] shrink-0"
																	alt={card.cardType}
																	src={card.icon}
																/>

																{/* Menu button */}
																<Menu
																	as="div"
																	className="relative inline-block text-left">
																	<Menu.Button>
																		<Icon
																			icon="menu"
																			className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-textSecondary dark:text-textDark"
																		/>
																	</Menu.Button>

																	<Transition
																		enter="transition ease-out duration-100"
																		enterFrom="transform scale-95 opacity-0"
																		enterTo="transform scale-100 opacity-100"
																		leave="transition ease-in duration-75"
																		leaveFrom="transform scale-100 opacity-100"
																		leaveTo="transform scale-95 opacity-0">
																		<Menu.Items className="absolute right-0 mt-2 w-[108px] h-[78px] origin-top-right bg-bgc dark:bg-bgcDark rounded-xl shadow-[0_20px_35px_rgba(0,0,0,0.05)]  dark:shadow-[0_20px_35px_rgba(255,255,255,0.05)] focus:outline-none flex items-center justify-center z-50">
																			<div className="flex flex-col items-start px-3 py-2  sm:px-4 sm:py-2.5 gap-2.5">
																				<Menu.Item>
																					<div
																						onClick={() => {
																							setEditingCardIndex(index);
																							setShowPopup(true);
																						}}
																						className="flex items-center gap-2 text-sm sm:text-base text-textSecondary dark:text-textDark cursor-pointer">
																						<img
																							src={
																								`/assets/images/edit` +
																								(isDark
																									? "-dark"
																									: "") +
																								`.svg`
																							}
																							alt=""
																							className="w-3.5 h-3.5 sm:w-4 sm:h-4"
																						/>
																						Edit
																					</div>
																				</Menu.Item>
																				<Menu.Item>
																					<div
																						onClick={() => {
																							const updatedCards =
																								paymentPageData.savedCards.filter(
																									(_, i) =>
																										i !== index,
																								);
																							setPaymentPageData({
																								...paymentPageData,
																								savedCards:
																									updatedCards,
																							});
																						}}
																						className="flex items-center gap-2 text-sm sm:text-base cursor-pointer text-textSecondary dark:text-textDark">
																						<img
																							src={`/assets/images/trash${isDark ? "-dark" : ""}.svg`}
																							alt=""
																							className="w-3.5 h-3.5 sm:w-4 sm:h-4"
																						/>
																						Delete
																					</div>
																				</Menu.Item>
																			</div>
																		</Menu.Items>
																	</Transition>
																</Menu>
															</label>
														</div>
													))
												) : (
													<div className="text-text dark:text-textDark">No saved card.</div>
												)}
											</div>

											{/* Mobile Add New Card */}
											<div
												className="flex sm:hidden order-3 items-center justify-center gap-2.5 w-full rounded-[10px] cursor-pointer"
												onClick={() => setShowPopup(true)}>
												<Icon
													icon="plus"
													className="w-[14px] h-[14px] sm:w-5 sm:h-5 text-primary"
												/>
												<div className="font-medium text-primary text-[14px] sm:text-lg text-center whitespace-nowrap">
													Add New Card
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className="flex flex-col sm:w-[560.5px] items-start gap-4 sm:gap-6 p-6  self-stretch bg-bgc dark:bg-fgcDark rounded-[8px] sm:rounded-[12px]  shadow-[0px_20px_35px_rgba(0,0,0,0.05)]">
									<div className=" font-medium text-text dark:text-textDark text-xl ">
										Order Summary
									</div>

									<div className="flex flex-col items-start gap-4 sm:gap-6 w-full rounded-lg ">
										<div className="flex flex-col items-start gap-3 sm:gap-6 w-full ">
											<div className="flex flex-col items-start  w-full ">
												<div className="flex items-center justify-between w-full ">
													<div className="inline-flex items-center gap-2">
														<div className="font-medium text-text dark:text-textDark text-[14px] sm:text-lg whitespace-nowrap">
															{paymentPageData.orderSummary.premiumTier.description}
														</div>
													</div>
													<div className="font-semibold text-textSecondary dark:text-textDark text-xs sm:text-base text-right whitespace-nowrap">
														{paymentPageData.orderSummary.premiumTier.price}
													</div>
												</div>
											</div>
										</div>

										<div className="flex items-start justify-between gap-40 w-full">
											<div className="flex-1 h-[26px] flex items-center justify-between">
												<div className="font-medium text-text dark:text-textDark text-[14px] sm:text-lg whitespace-nowrap">
													{paymentPageData.orderSummary.serviceFees.description}
												</div>
												<div className="font-semibold text-textSecondary dark:text-textDark text-xs sm:text-base text-right whitespace-nowrap">
													{paymentPageData.orderSummary.serviceFees.price}
												</div>
											</div>
										</div>

										<Separator className="bg-textSecondary/20 dark:!bg-textSecondary/30 !bg-none" />

										<div className="flex flex-col items-start w-full">
											<div className="flex items-start justify-between gap-40 w-full">
												<div className="flex-1 h-[26px] flex items-center justify-between">
													<div className="font-semibold text-text dark:text-textDark text-base sm:text-xl tracking-[0] leading-8 whitespace-nowrap">
														{paymentPageData.orderSummary.total.label}
													</div>
													<div className="font-semibold text-text dark:text-textDark text-base sm:text-xl text-right tracking-[0] leading-8 whitespace-nowrap">
														{paymentPageData.orderSummary.total.amount}
													</div>
												</div>
											</div>
										</div>

										<div className="flex flex-col items-start gap-3 w-full">
											<div className="font-normal text-textSecondary dark:text-textDark text-[14px] sm:text-base  whitespace-nowrap">
												Start Date: {paymentPageData.orderSummary.billingDetails.startDate}
											</div>
											<p className="font-normal text-textSecondary dark:text-textDark text-[14px] sm:text-base ">
												{paymentPageData.orderSummary.billingDetails.note}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="flex sm:items-center gap-3 w-full ">
						<div className="inline-flex h-[27px] items-center justify-center gap-2.5 ">
							<input
								type="checkbox"
								className="w-[14px] h-[14px] sm:w-[18px] sm:h-[18px] cursor-pointer accent-primary bg-transparent"
							/>
						</div>
						<p className=" font-normal text-[14px] sm:text-base ">
							<span className="text-text dark:text-textDark">I Agree to </span>
							<span className="font-medium text-primary">Terms of Service</span>
							<span className="text-text dark:text-textDark"> and and Refund Policy*</span>
						</p>
					</div>
				</div>
				<div className="flex justify-center mt-6 sm:mt-10 h-[42px] sm:h-14">
					<Button
						className="text-[14px] sm:text-base bg-primary text-text !font-semibold px-6 sm:px-8 rounded-xl"
						onClick={selectCard}>
						{paymentPageData.actionButton.text}
					</Button>
				</div>
			</div>

			<CardPopup
				isOpen={showPopup}
				setIsOpen={setShowPopup}
				cardIndex={editingCardIndex}
				paymentPageData={paymentPageData}
				setPaymentPageData={setPaymentPageData}
			/>
		</div>
	);
};

export default PremiumPayment;
