import PremiumOrderDetails from "components/premiumPlan/PremiumOrderDetails";
import PremiumPayment from "components/premiumPlan/PremiumPayment";
import PremiumPaymentResult from "components/premiumPlan/PremiumPaymentResult";
import PremiumPlanSelection from "components/premiumPlan/PremiumPlanSelection";
import { useAppState } from "components/utils/useAppState";
import React, { JSX, useState } from "react";

const PremiumPlanPage = (): JSX.Element => {
	const [{ premiumStep }, setAppState] = useAppState();

	const [paymentSuccess, setPaymentSuccess] = useState(true);

	return (
		<div className="flex flex-col items-center ">
			{premiumStep === 1 ? <PremiumPlanSelection /> : ""}
			{premiumStep === 2 ? <PremiumOrderDetails /> : ""}
			{premiumStep === 3 ? <PremiumPayment /> : ""}
			{premiumStep === 4 ? <PremiumPaymentResult paymentSuccess={paymentSuccess} /> : ""}
		</div>
	);
};
export default PremiumPlanPage;
