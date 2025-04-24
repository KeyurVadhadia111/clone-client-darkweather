import { Button } from "components/utils/Button";
import Icon from "components/utils/Icon";
import { JSX } from "react";

interface Props {
	paymentSuccess: boolean;
}
const PremiumPaymentResult: React.FC<Props> = ({ paymentSuccess }): JSX.Element => {
	return (
		<div className="container">
			<div className="bg-bgc dark:bg-bgcDark text-text- dark:text-textDark mt-6 sm:mt-[60px] rounded-xl sm:rounded-2xl flex flex-col items-center justify-center p-5 sm:p-8 text-center gap-6 sm:gap-12">
				<div className="flex flex-col items-center gap-[14px] sm:gap-5">
					<h1 className="text-2xl sm:text-[40px] font-medium leading-6 sm:leading-10">
						{paymentSuccess ? "Order Placed Successfully" : "Payment Failed"}
					</h1>
					<p className="text-sm sm:text-base text-textSecondary">
						{paymentSuccess
							? "Access personalized insights, expert guidance, and advanced weather tools."
							: "Your transaction has failed due some technical error. Please try again"}
					</p>
				</div>

				<div className="w-full flex justify-center items-center">
					<img
						src={
							paymentSuccess ? "/assets/images/premium-thankyou.svg" : "/assets/images/premium-failed.svg"
						}
						alt={paymentSuccess ? "Thank you" : "Payment Failed"}
						className="w-full sm:w-[512px] h-auto"
					/>
				</div>

				<div className="w-full justify-center flex flex-col items-center gap-6 sm:gap-9">
					<h2 className="text-lg sm:text-2xl font-bold leading-7 sm:leading-9">
						{paymentSuccess
							? "Thank you for placing order"
							: "Oops! Your payment didn't go through. Please try again."}
					</h2>

					<div className="flex gap-4 flex-col justify-center sm:flex-row w-full">
						{paymentSuccess ? (
							<>
								<Button
									className="flex items-center justify-center !w-full sm:!w-auto !px-8 !bg-bgc dark:!bg-bgcDark !text-primary transition-colors"
									onClick={() => window.history.back()}>
									<Icon icon="left" className="w-5 h-5 mr-1">↓</Icon>
									{"Continue Browsing"}
								</Button>
								<Button
									className="flex items-center justify-center !w-full sm:!w-auto !px-8 transition-colors"
									onClick={() => console.log("Download invoice")}>
									<Icon icon="download" className="w-5 h-5 mr-1">↓</Icon>
									Download Invoice
								</Button>
							</>
						) : (
							<Button
								className="flex items-center justify-center !w-full sm:!w-auto !px-8 transition-colors"
								onClick={() => window.history.back()}>
								Retry Payment
							</Button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PremiumPaymentResult;
