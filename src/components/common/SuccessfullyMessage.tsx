import { Button } from "components/utils/Button";
import Icon from "components/utils/Icon";
import { JSX } from "react";
import { useNavigate } from "react-router-dom";

const SuccessfullyMessage: React.FC = (): JSX.Element => {
	const navigate = useNavigate();

	return (
		<div className="container">
			<div className="bg-bgc dark:bg-bgcDark text-text- dark:text-textDark mt-6 sm:mt-[60px] rounded-xl sm:rounded-2xl flex flex-col items-center justify-center p-5 sm:p-8 text-center gap-6 sm:gap-12">
				<div className="flex flex-col items-center gap-[14px] sm:gap-5">
					<h1 className="text-2xl sm:text-[40px] font-medium leading-6 sm:leading-10">
						Your message successfully received
					</h1>
					<p className="text-sm sm:text-base text-textSecondary">
						Our team will get back to you as soon as possible — usually within 24 to 48 hours.
					</p>
				</div>

				<div className="w-full flex justify-center items-center">
					<img
						src="/assets/images/premium-thankyou.svg"
						alt="Thank you"
						className="w-full sm:w-[512px] h-auto"
					/>
				</div>

				<div className="flex gap-4 flex-col justify-center sm:flex-row w-full">
					<>
						<Button
							className="flex items-center justify-center !w-full sm:!w-auto !px-8 !bg-bgc dark:!bg-bgcDark !text-primary transition-colors"
							onClick={() => navigate("/")}>
							{"Go Back to Homepage"}
						</Button>
						<Button
							className="flex items-center justify-center !w-full sm:!w-auto !px-8 transition-colors"
							onClick={() => console.log("Download invoice")}>
							Submit Another Message
						</Button>
					</>
				</div>
			</div>
		</div>
	);
};

export default SuccessfullyMessage;
