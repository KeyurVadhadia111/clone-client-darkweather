import { Button } from "@headlessui/react";
import Modal from "components/layout/modal";
import { useAppState } from "components/utils/useAppState";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
	open: boolean;
	setOpen: (open: boolean) => void;
	onConfirm: () => void;
}

const CancelSubscriptionPopup: React.FC<Props> = ({ open, setOpen, onConfirm }) => {
	const [{ isDark, currentPremiumPlan }, setAppState] = useAppState();
	const [step, setStep] = useState(1);
	const navigate = useNavigate();

	const handleClose = () => {
		setStep(1);
		setOpen(false);
	};

	const handleConfirm = () => {
		setStep(2);
	};

	return (
		<Modal openModal={open} setOpenModal={handleClose} size="md">
			{step === 1 ? (
				<div className="flex flex-col items-start gap-4 sm:gap-8">
					<h2 className="text-base sm:text-2xl font-semibold text-text dark:text-textDark">
						Cancel Subscription
					</h2>
					<div className="flex flex-col items-start w-full gap-2 sm:gap-3">
						<p className="text-base sm:text-xl font-medium text-text dark:text-textDark">
							Are you sure you want to cancel your subscription?
						</p>
						<p className="text-sm sm:text-base text-textSecondary dark:text-textDark">
							Amount paid will not be refunded in case of cancellation of the subscription plan.
						</p>
					</div>

					<div className="mt-2 sm:mt-0 flex justify-end w-full gap-3 sm:gap-6">
						<Button
							className="!w-full sm:!w-auto border border-text dark:border-bgc text-sm sm:text-base text-text dark:text-textDark !px-6 !py-3 sm:!px-6 sm:!py-4 !rounded-xl !font-semibold"
							onClick={handleClose}>
							Cancel
						</Button>
						<Button
							className="!w-full sm:!w-auto bg-primary text-sm sm:text-base text-text !px-6 !py-3 sm:!px-6 sm:!py-4 !rounded-xl !font-semibold"
							onClick={handleConfirm}>
							Confirm
						</Button>
					</div>
				</div>
			) : (
				<div className="flex flex-col items-start gap-4 sm:gap-8">
					<h2 className="text-base sm:text-2xl font-semibold text-text dark:text-textDark">
						Subscription Canceled
					</h2>
					<div className="flex flex-col items-start w-full gap-2 sm:gap-3">
						<p className="text-base sm:text-xl font-medium text-text dark:text-textDark">
							Your Subscription has been canceled.
						</p>
						<p className="text-sm sm:text-base text-textSecondary dark:text-textDark">
							Amount will not be refunded. You can re-subscribe anytime.
						</p>
					</div>

					<div className="mt-2 sm:mt-0 flex justify-end w-full gap-3 sm:gap-6">
						<Button
							className="!w-full sm:!w-auto border border-text dark:border-bgc text-sm sm:text-base text-text dark:text-textDark !px-6 !py-3 sm:!px-6 sm:!py-4 !rounded-xl !font-semibold"
							onClick={() => {
								handleClose();
							}}>
							Cancel
						</Button>
						<Button
							className="!w-full sm:!w-auto bg-primary text-sm sm:text-base text-text !px-6 !py-3 sm:!px-6 sm:!py-4 !rounded-xl !font-semibold"
							onClick={() => {
								onConfirm();
								handleClose();
								setAppState({ currentPremiumPlan: "" });
								navigate("/premium-plan");
							}}>
							Subscribe
						</Button>
					</div>
				</div>
			)}
		</Modal>
	);
};

export default CancelSubscriptionPopup;
