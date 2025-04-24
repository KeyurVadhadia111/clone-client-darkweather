import Icon from "components/utils/Icon";
import { Separator } from "components/utils/Separator";
import { useAppState } from "components/utils/useAppState";
import { JSX } from "react";

const orderDetails = [
	{
		section: "Selected Plan",
		title: "Premium Tier",
		description: "For power users who want more control & live insights",
		price: 9.99,
		billingCycle: "month",
	},
	{
		section: "Order Summary",
		items: [
			{
				label: "Premium Tier",
				price: 9.99,
				billingCycle: "month",
			},
			{
				label: "Services Fees",
				price: 0.0,
			},
		],
		total: 9.99,
	},
];

const PremiumOrderDetails: React.FC = (): JSX.Element => {
	const [plan, summary] = orderDetails;
	const [{ premiumStep }, setAppState] = useAppState();

	const selectCard = (value: any) => {
		setAppState({
			premiumStep: 3,
		});
	};

	return (
		<>
			<div className="container">
				<div className="bg-bgc dark:bg-bgcDark rounded-[14px] sm:rounded-2xl p-6 sm:p-8 mt-6 sm:mt-[72px] mb-5 w-full gap-6 sm:gap-8 flex flex-col items-center">
					<div className="text-center">
						<h2 className="text-2xl sm:text-[40px] font-medium text-text dark:text-textDark mb-[14px] sm:mb-5">
							Order Details
						</h2>
						<p className="text-textSecondary dark:text-textDark text-[14px] sm:text-base">
							Here’s a summary of your weather subscription.
						</p>
					</div>

					<div className="w-full flex flex-col">
						<div
							className="flex items-center gap-2.5 sm:gap-3 cursor-pointer mb-4 sm:mb-6 w-[100px]"
							onClick={() =>
								setAppState({
									premiumStep: 1,
								})
							}>
							<Icon
								icon="arrow-left"
								className="w-4 h-4 sm:w-6 sm:h-6 text-text dark:text-textDark cursor-pointer"
							/>
							<p className="text-text dark:text-textDark text-[14px] sm:text-base font-medium cursor-pointer">
								Back
							</p>
						</div>

						<div className="flex flex-col lg:flex-row gap-[20px] sm:gap-6">
							{/* Selected Plan */}
							<div className="flex-1 bg-bgc dark:bg-fgcDark rounded-[6px] sm:rounded-lg p-4 sm:p-6 shadow-[0_35px_35px_rgba(0,0,0,0.05)]">
								<h3 className="text-base sm:text-xl font-medium text-text dark:text-textDark mb-4 sm:mb-6">
									{plan.section}
								</h3>
								<div className="flex flex-col gap-1.5 sm:gap-3">
									<h4 className="text-xl sm:text-2xl font-semibold text-text dark:text-textDark">
										{plan.title}
									</h4>
									<p className="text-[14px] sm:text-base text-textSecondary dark:text-textDark">
										{plan.description}
									</p>
									<p className="text-[28px] sm:text-[42px] font-bold text-text dark:text-textDark leading-tight">
										${(plan.price ?? 0).toFixed(2)}
										<span className="text-lg sm:text-xl font-normal">/{plan.billingCycle}</span>
									</p>
								</div>
							</div>

							{/* Order Summary */}
							<div className="flex-1 bg-bgc dark:bg-fgcDark rounded-[6px] sm:rounded-lg p-4 sm:p-6 shadow-[0_35px_35px_rgba(0,0,0,0.05)]">
								<h3 className="text-base sm:text-xl font-medium text-text dark:text-textDark mb-4 sm:mb-6">
									{summary.section}
								</h3>
								<div className="flex flex-col gap-3 sm:gap-4 text-lg text-text dark:text-textDark">
									{summary.items?.map((item, idx) => (
										<div key={idx} className="flex items-center justify-between">
											<span className="font-medium sm:text-lg text-[14px]">{item.label}</span>
											<span className="text-textSecondary dark:text-textDark ">
												<span className="font-semibold text-[14px] text-base">
													${item.price.toFixed(2)}
												</span>
												{item.billingCycle && (
													<span className="text-[10px] sm:text-xs">/{item.billingCycle}</span>
												)}
											</span>
										</div>
									))}
									<Separator className="bg-textSecondary/20 dark:!bg-textSecondary/30 !bg-none" />
									<div className="flex justify-between text-base sm:text-xl font-semibold">
										<span>Total</span>
										<span>${(summary.total ?? 0).toFixed(2)}</span>
									</div>
								</div>
							</div>
						</div>

						{/* Continue to Payment Button */}
						<div className="flex justify-center mt-6 sm:mt-10 h-[42px] sm:h-14">
							<button
								className="text-[14px] sm:text-base bg-primary text-text font-semibold px-6 sm:px-8 rounded-xl"
								onClick={selectCard}>
								Continue to Payment
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default PremiumOrderDetails;
