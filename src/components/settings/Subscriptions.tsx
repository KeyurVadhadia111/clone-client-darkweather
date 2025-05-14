import { Menu, Transition } from "@headlessui/react";
import { Button } from "components/utils/Button";
import Icon from "components/utils/Icon";
import { Separator } from "components/utils/Separator";
import { useAppState } from "components/utils/useAppState";
import React, { useEffect, useState } from "react";
import SimpleBar from "simplebar-react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { toast } from "components/utils/toast";
import DeleteCardPopup from "./DeleteCardPopup";
import CancelSubscriptionPopup from "./CancelSubscriptionPopup";
import CardPopup2 from "./CardPopup2";

interface Props {
	setActiveSection: (section: string) => void;
}
const Subscriptions: React.FC<Props> = ({ setActiveSection }) => {
	const [{ isDark, premiumStep, currentPremiumPlan }, setAppState] = useAppState();
	const navigate = useNavigate();
	const [showPopup, setShowPopup] = useState(false);
	const [editingCardIndex, setEditingCardIndex] = useState<number | null>(null);
	const [showDeletePopup, setShowDeletePopup] = useState(false);
	const [showCancelModal, setShowCancelModal] = useState(false);

	const [paymentPageData, setPaymentPageData] = useState({
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
	});

	const [transactions] = useState([
		{
			id: "ID154512",
			planName: "Premium Tier",
			amount: "$9.99",
			date: "21 Apr, 2025",
		},
		{
			id: "ID154513",
			planName: "Premium Tier",
			amount: "$9.99",
			date: "20 Mar, 2025",
		},
		{
			id: "ID154514",
			planName: "Premium Tier",
			amount: "$9.99",
			date: "18 Feb, 2025",
		},
		{
			id: "ID154515",
			planName: "Premium Tier",
			amount: "$9.99",
			date: "18 Jan, 2025",
		},
		{
			id: "ID154516",
			planName: "Premium Tier",
			amount: "$9.99",
			date: "17 Dec, 2024",
		},
		{
			id: "ID154512",
			planName: "Premium Tier",
			amount: "$9.99",
			date: "21 Apr, 2025",
		},
		{
			id: "ID154513",
			planName: "Premium Tier",
			amount: "$9.99",
			date: "20 Mar, 2025",
		},
		{
			id: "ID154514",
			planName: "Premium Tier",
			amount: "$9.99",
			date: "18 Feb, 2025",
		},
		{
			id: "ID154515",
			planName: "Premium Tier",
			amount: "$9.99",
			date: "18 Jan, 2025",
		},
		{
			id: "ID154516",
			planName: "Premium Tier",
			amount: "$9.99",
			date: "17 Dec, 2024",
		},
	]);

	useEffect(() => {
		if (!showPopup) {
			setEditingCardIndex(null);
		}

		return () => {
			true;
		};
	}, [showPopup]);

	const handleDeleteCard = (index: number) => {
		setPaymentPageData(prev => {
			const newCards = [...prev.savedCards];
			newCards.splice(index, 1);
			return { ...prev, savedCards: newCards };
		});
		toast.success("Card deleted successfully.");
	};

	const handleCancelSubscription = () => {
		toast.success("Subscription cancelled.");
		// Add actual cancellation logic here
	};

	return (
		<div className="flex flex-col items-start gap-4 sm:gap-[30px] ">
			<div className=" font-semibold text-text dark:text-textDark text-base sm:text-xl tracking-[0] leading-[26px] flex items-center gap-3 whitespace-nowrap">
				<div className="sm:hidden flex">
					<Icon
						icon="chevron-down"
						onClick={() => setActiveSection("")}
						className="rotate-90 w-[18px] h-[18px] block sm:hidden"
					/>
				</div>
				Subscription &amp; Payments
			</div>

			<Separator className="bg-textSecondary/20 dark:!bg-textSecondary/30 !bg-none !w-full !h-px" />

			<div className="flex flex-col items-start gap-4 sm:gap-[30px]  w-full flex-[0_0_auto]">
				<div className=" font-medium text-text dark:text-textDark text-sm sm:text-lg tracking-[0] leading-[27px] whitespace-nowrap">
					Subscription
				</div>

				<div className="flex flex-col items-start justify-center gap-6 p-3.5 sm:p-4 w-full flex-[0_0_auto] rounded-2xl border border-solid border-textSecondary/20">
					{currentPremiumPlan?.name ? (
						<div className="flex flex-col sm:flex-row gap-4 sm:gap-0 items-center justify-between w-full flex-[0_0_auto]">
							<div className="flex flex-col w-full sm:w-[610px] items-start justify-center gap-3 sm:gap-4 ">
								<div className=" font-semibold text-primary text-base sm:text-xl tracking-[0] leading-[26px] ">
									{currentPremiumPlan.name}
								</div>

								<p className="  font-normal text-text dark:text-textDark text-sm sm:text-base tracking-[0] leading-6">
									{currentPremiumPlan.description}
								</p>

								<div className="  font-normal text-text dark:text-textDark text-sm sm:text-base tracking-[0] leading-6">
									Renew Date: {format(currentPremiumPlan.renewDate, "dd/MM/yyyy")}
								</div>
							</div>

							<div className="flex sm:flex-col items-center justify-end sm:items-end sm:justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
								<Button
									className="!px-4 !py-2 sm:!px-5 sm:!py-3 bg-primary !rounded-[10px] sm:!rounded-xl border border-solid cursor-pointer  font-medium text-text text-xs sm:text-sm"
									onClick={() => navigate("/premium-plan")}>
									Upgrade
								</Button>

								<Button
									className="!px-4 !py-2 sm:!px-5 sm:!py-3 !rounded-[10px] sm:!rounded-xl border border-solid dark:border-bgc border-text cursor-pointer !bg-transparent font-medium text-text dark:text-textDark text-xs sm:text-sm"
									onClick={() => setShowCancelModal(true)}>
									Cancel Subscription
								</Button>
							</div>
						</div>
					) : (
						<div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 w-full flex-[0_0_auto]">
							<div className="flex flex-col items-start justify-center gap-4 self-start sm:self-center">
								<p className="font-normal text-text dark:text-textDark  text-sm sm:text-base tracking-[0] leading-6">
									You don't have any active plan.
								</p>
							</div>
							<Button
								className="inline-flex flex-col items-center justify-center self-end sm:self-center gap-2.5 !px-4 !py-2 sm:!px-5 sm:!py-3 flex-[0_0_auto] bg-primary !rounded-[10px] border border-solid cursor-pointer hover:bg-primary font-medium text-text !text-xs sm:!text-sm"
								onClick={() => navigate("/premium-plan")}>
								Subscribe
							</Button>
						</div>
					)}
				</div>
				<div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 w-full ">
					<div className="flex flex-col items-start gap-4 sm:gap-5 w-full">
						{/* Header */}
						<div className="flex items-center justify-between sm:gap-[67px] w-full ">
							<div className="font-medium text-text dark:text-textDark text-[14px] sm:text-lg">
								Saved Debit/Credit card
							</div>
							<div
								className="flex items-center justify-center gap-2.5 rounded-[10px] cursor-pointer"
								onClick={() => setShowPopup(true)}>
								<Icon icon="plus" className="w-[14px] h-[14px] sm:w-5 sm:h-5 text-primary" />
								<div className="font-medium text-primary text-sm sm:text-base text-center whitespace-nowrap">
									Add New Card
								</div>
							</div>
						</div>

						{/* Card List */}
						<div className="flex flex-col gap-3 sm:gap-4 w-full ">
							{paymentPageData.savedCards?.length ? (
								paymentPageData.savedCards.map((card, index) => (
									<div
										key={"cards" + index}
										className="relative border border-solid border-textSecondary/20 dark:border-textSecondary/30 rounded-[12px] sm:rounded-[16px]  p-3 sm:px-5 sm:py-3">
										<label className="flex items-center justify-between sm:gap-3.5 cursor-pointer">
											<div className="flex items-center gap-1.5 sm:gap-3">
												<div className="flex items-center gap-1.5 sm:gap-4">
													<div className="font-normal text-text dark:text-textDark text-[12px] sm:text-lg whitespace-nowrap">
														{card.cardNumber}
													</div>
													<div className="font-normal text-text dark:text-textDark text-[12px] sm:text-lg whitespace-nowrap">
														CVV: {card.cvv}
													</div>
												</div>
											</div>
											<div className="flex items-center gap-3">
												<img
													className="w-5 h-5 sm:w-[45px] sm:h-[45px] shrink-0"
													alt={card.cardType}
													src={card.icon}
												/>

												{/* Menu button */}
												<Menu as="div" className="relative inline-block text-left">
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
																				(isDark ? "-dark" : "") +
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
																			setShowDeletePopup(true);
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
											</div>
										</label>
									</div>
								))
							) : (
								<div className="text-text dark:text-textDark">No saved card.</div>
							)}
						</div>
					</div>
				</div>

				<div className="flex flex-col items-start gap-4 sm:gap-5 w-full">
					<h2 className="text-sm sm:text-lg font-medium text-text dark:text-textDark">Transaction History</h2>
					<SimpleBar className="w-full !h-[289px] overflow-x-auto max-w-full">
						{/* Table Header */}
						{transactions?.length ? (
							<div className="overflow-auto rounded-2xl border border-solid border-textSecondary/20">
								<table className="min-w-max w-full text-xs sm:text-sm text-text dark:text-textDark">
									<thead className="bg-border/50 dark:bg-bgcDark font-medium">
										<tr className="text-left text-text dark:text-textDark">
											<th className="px-4 py-3 sm:px-6 sm:py-3">ID</th>
											<th className="px-4 py-3 sm:px-6 sm:py-3">Plan Name</th>
											<th className="px-4 py-3 sm:px-6 sm:py-3">Amount</th>
											<th className="px-4 py-3 sm:px-6 sm:py-3">Date</th>
											<th className="px-4 py-3 sm:px-6 sm:py-3 text-center">Invoice</th>
										</tr>
									</thead>
									<tbody>
										{transactions.map((tx, index) => (
											<tr
												key={tx.id + "-" + index}
												className="border-t border-textSecondary/20 whitespace-nowrap">
												<td className="px-4 py-3 sm:px-6 sm:py-4">{tx.id}</td>
												<td className="px-4 py-3 sm:px-6 sm:py-4">{tx.planName}</td>
												<td className="px-4 py-3 sm:px-6 sm:py-4">{tx.amount}</td>
												<td className="px-4 py-3 sm:px-6 sm:py-4">{tx.date}</td>
												<td className="px-4 py-3 sm:px-6 sm:py-4 text-center">
													<Icon icon="invoice" className="w-5 h-5" />
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						) : (
							<div className="text-text dark:text-textDark">No Records.</div>
						)}
					</SimpleBar>
				</div>
			</div>
			<CardPopup2
				isOpen={showPopup}
				setIsOpen={setShowPopup}
				cardIndex={editingCardIndex}
				paymentPageData={paymentPageData}
				setPaymentPageData={setPaymentPageData}
			/>
			<DeleteCardPopup open={showDeletePopup} setOpen={setShowDeletePopup} onDelete={() => handleDeleteCard(0)} />
			<CancelSubscriptionPopup
				open={showCancelModal}
				setOpen={setShowCancelModal}
				onConfirm={handleCancelSubscription}
			/>
		</div>
	);
};

export default Subscriptions;
