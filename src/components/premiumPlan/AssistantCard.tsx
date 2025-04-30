import { useAppState } from "components/utils/useAppState";
import React, { JSX } from "react";

export const AssistantCard = (): JSX.Element => {
	const [{ isDark, userDetails }, setAppState] = useAppState();

	return (
		<div className="flex flex-col w-full items-start gap-2.5 mb-[35px] sm:mb-[72px]  relative">
			<div className="z-[10] flex flex-col items-start justify-center gap-2.5 px-[16px] py-[16px] sm:px-[72px] sm:py-[60px] relative self-stretch w-full flex-[0_0_auto] rounded-3xl bg-[url('/assets/images/main-bg.png')] bg-no-repeat bg-[position:24%_-80px] bg-[length:340%] sm:bg-[position:-10px_-260px] sm:bg-[length:165%]">
				<div
					className={`absolute hidden dark:block  w-full h-full bottom-0 left-0 bg-gradient-to-b dark:from-bgcDark/50 dark:to-bgcDark/50 `}></div>
				<div className="z-[1] inline-flex flex-col items-start justify-center gap-6 sm:gap-12 relative flex-[0_0_auto]">
					<div className="flex flex-col w-[295px] sm:w-[541px] items-start gap-[14px] sm:gap-4 relative flex-[0_0_auto]">
						<p className="relative  mt-[-1.00px] font-medium text-white text-2xl sm:text-[40px] ">
							Still not sure what fits best?
						</p>

						<p className="relative  font-medium text-white text-base sm:text-xl ">
							Try a plan free for 7 days or message our Al Assistant for a recommendation.
						</p>
					</div>

					<div className="inline-flex items-center justify-center gap-8 px-6 py-3 sm:px-8 sm:py-4 relative flex-[0_0_auto] bg-primary rounded-[10px] sm:rounded-xl cursor-pointer">
						<div className="relative w-fit mt-[-1.00px]  font-semibold text-text dark:text-textDark text-[14px] sm:text-base whitespace-nowrap">
							Chat With Ai Assistant
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
