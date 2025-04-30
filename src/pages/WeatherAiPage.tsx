import { Button } from "@headlessui/react";
import Icon from "components/utils/Icon";
import { Input } from "components/utils/Input";
import { useAppState } from "components/utils/useAppState";
import WeatherAiHeader from "components/weatherAi/WeatherAiHeader";
import WeatherAiSidebar from "components/weatherAi/WeatherAiSidebar";
import { JSX } from "react";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";

export const WeatherAiPage = (): JSX.Element => {
	const [{ isDark, userDetails }, setAppState] = useAppState();
	return (
		<div className="flex flex-col items-center w-full ">
			<div className="w-full flex flex-row justify-center">
				<WeatherAiSidebar />

				<div className="w-full relative flex flex-col">
					<WeatherAiHeader />

					<SimpleBar className="!h-[calc(100dvh-331px)] sm:!h-[calc(100dvh-255px)] !w-full">
						<div className="flex flex-col gap-4 sm:gap-6 w-full p-6 sm:p-[30px] items-start bg-fgc dark:bg-bgcDark">
							<div className="w-full flex items-end justify-end">
								<div className="flex flex-col sm:h-20 items-end gap-1 sm:gap-1.5">
									<div className="flex items-center px-4 py-3  sm:px-6 sm:py-4 w-full flex-[0_0_auto] bg-bgc dark:bg-fgcDark rounded-[10px_10px_0px_10px] sm:rounded-[16px_16px_0px_16px]">
										<p className="text-sm sm:text-base font-normal text-text dark:text-textDark whitespace-nowrap">
											Will It rain tomorrow in NYC?
										</p>
									</div>

									<div className="self-stretch text-primary text-xs text-right leading-[18px] relative  font-normal tracking-[0]">
										01/30
									</div>
								</div>
							</div>
							<div className="w-full flex items-start justify-start">
								<div className="inline-flex items-start gap-3 sm:gap-4">
									<div>
										<Icon
											icon={isDark ? "weather-icon-dark" : "weather-icon"}
											className="w-[42px] h-[42px] sm:w-14 sm:h-14 rounded-[9px] sm:rounded-xl"
										/>
									</div>

									<div className="flex flex-col w-full items-start gap-3 sm:gap-4 relative">
										<div className="inline-flex items-center px-4 py-3 sm:px-6 sm:py-4 relative flex-[0_0_auto] bg-bgc dark:bg-fgcDark rounded-[10px_10px_10px_0px] sm:rounded-[10px_10px_10px_0px] ">
											<div className="font-normal text-text dark:text-textDark text-sm sm:text-base whitespace-nowrap">
												Sure !
											</div>
										</div>

										<div className="flex flex-col items-end justify-center gap-2 sm:gap-3  sm:w-full flex-[0_0_auto]">
											<div className="flex flex-col items-end justify-center gap-2.5 px-4 py-3 sm:p-4   w-full flex-[0_0_auto] bg-bgc dark:bg-fgcDark rounded-[10px_10px_10px_0px] sm:rounded-[16px_16px_16px_0px]">
												<div className="flex flex-col items-start justify-center gap-2 sm:gap-2.5 w-full flex-[0_0_auto]">
													<p className=" font-normal text-text dark:text-textDark text-sm sm:text-base whitespace-nowrap">
														<span className="font-medium">Today </span>

														<span className=" font-normal text-text dark:text-textDark text-sm sm:text-base ">
															is midily for sausday,
														</span>
													</p>

													<div className="font-normal text-textSecondary text-xs sm:text-sm whitespace-nowrap">
														Sure the and for:
													</div>
												</div>

												<div className="flex items-center gap-2 sm:gap-5 p-2 sm:p-4 w-full flex-[0_0_auto] bg-bgc dark:bg-bgcDark rounded-xl shadow-[0px_10px_35px_#0000000d]">
													<img
														src="assets/images/partly-cloudy.svg"
														alt=""
														className="w-8 h-8 sm:w-[62px] sm:h-[62px]"
													/>

													<div className="inline-flex flex-col items-start  gap-1.5 ">
														<div className=" font-medium text-text dark:text-textDark text-base sm:text-xl text-center ">
															Tunnay
														</div>

														<div className="inline-flex flex-col sm:flex-row items-start flex-wrap gap-2 sm:gap-2.5 ">
															<div className=" flex gap-2 sm:gap-2.5 items-center font-normal text-text dark:text-textDark text-sm sm:text-base ">
																Tuesday 64°<span>/</span>
															</div>

															<div className="font-normal text-text dark:text-textDark text-sm sm:text-base ">
																Wind 5 mph
															</div>
														</div>
													</div>
												</div>
											</div>

											<Link to={"/"}>
												<div className="font-medium text-primary text-[10px] sm:text-base text-right">
													Regenerate response
												</div>
											</Link>
										</div>
									</div>
								</div>
							</div>

							<div className="w-full flex items-end justify-end">
								<div className="flex flex-col w-[331px] h-20 items-end gap-1.5">
									<div className="flex items-center gap-2 sm:gap-2.5 px-4 py-3 sm:px-6 sm:py-4 w-full flex-[0_0_auto] bg-bgc dark:bg-fgcDark rounded-[10px_10px_0px_10px] sm:rounded-[16px_16px_0px_16px]	">
										<img
											className=" w-5 h-5 top-0 left-0"
											alt="Rain Amount"
											src="/assets/images/rain-amount.svg"
										/>

										<p className="font-normal text-text dark:text-textDark text-sm sm:text-base  whitespace-nowrap">
											Will it snow in Chicago next week?
										</p>
									</div>

									<div className="self-stretch text-primary text-xs text-right leading-[18px] relative  font-normal tracking-[0]">
										02/30
									</div>
								</div>
							</div>

							<div className="w-full flex items-start justify-start">
								<div className="inline-flex items-center gap-3 sm:gap-4">
									<Icon
										icon={isDark ? "weather-icon-dark" : "weather-icon"}
										className="w-[42px] h-[42px] sm:w-14 sm:h-14 rounded-[9px] sm:rounded-xl"
									/>

									<div className="inline-flex items-center gap-2.5 px-4 py-3 sm:px-6 sm:py-4 flex-[0_0_auto] bg-bgc dark:bg-fgcDark rounded-[10px_10px_10px_0px] sm:rounded-[16px_16px_16px_0px]">
										<div className=" text-text dark:text-textDark text-sm sm:text-base leading-6 whitespace-nowrap font-normal ">
											...
										</div>
									</div>
								</div>
							</div>
						</div>
					</SimpleBar>

					<div className="flex flex-col w-full px-6 pb-6 sm:px-[30px] sm:pb-[28px] items-start justify-center  bg-fgc dark:bg-bgcDark">
						<div className="bg-bgc dark:bg-fgcDark w-full rounded-2xl shadow-[0px_-10px_35px_#00000008]">
							<div className="flex flex-col sm:flex-row items-center gap-4 p-4  w-full flex-[0_0_auto]">
								{/* Suggested List */}
								{[
									{
										icon: "/assets/images/partly-cloudy.svg",
										text: "What's the weather this weekend?",
									},
									{
										icon: "/assets/images/rain-amount.svg",
										text: "Will it snow in Chicago next week?",
									},
									{ icon: isDark ? "bag-dark" : "bag", text: "Is it safe to travel tomorrow?" },
								].map((item, index) => (
									<div
										key={index}
										className="flex items-center w-full sm:w-auto sm:h-[45px] gap-3 sm:gap-4 p-3 sm:p-4 flex-1 grow bg-bgc dark:bg-bgcDark rounded-[10px] border border-solid border-textSecondary/10 dark:border-textSecondary/30 cursor-pointer"
										onClick={() => {
											const input = document.querySelector(
												'input[placeholder="Ask me anything..."]',
											) as HTMLInputElement;
											if (input) input.value = item.text;
										}}>
										{item.icon.includes(".svg") ? (
											<img className="w-5 h-5" alt="" src={item.icon} />
										) : (
											<Icon icon={item.icon} className="w-5 h-5" />
										)}
										<p className="font-normal text-text dark:text-textDark text-xs sm:text-sm whitespace-nowrap">
											{item.text}
										</p>
									</div>
								))}
							</div>

							<div className="flex items-center justify-center  p-2 sm:pl-5 sm:pr-3 sm:py-3 w-full flex-[0_0_auto] bg-bgc dark:bg-fgcDark rounded-2xl shadow-[0px_-10px_35px_#00000008]">
								<div className="flex items-center gap-2 sm:gap-3 sm:w-full">
									<img
										className="sm:w-5 sm:h-5 w-4 h-4"
										alt="Subtract"
										src={`assets/images/plus-bg${isDark ? "-dark" : ""}.svg`}
									/>
									<div className="w-full">
										<Input
											className=" !p-0 !rounded-none !text-sm sm:!text-base !bg-bgc dark:!bg-fgcDark whitespace-nowrap focus:outline-none focus:ring-0 focus:border-transparent !border !ring-0 !border-transparent"
											placeholder="Ask me anything..."
										/>
									</div>
								</div>

								<Button className="inline-flex items-center gap-2 px-4 py-2.5  flex-[0_0_auto] bg-primary rounded-lg">
									<div className="inline-flex items-center gap-2  flex-[0_0_auto]">
										<div className="font-medium text-text text-sm sm:text-base  whitespace-nowrap">
											Send
										</div>
										<Icon icon="arrow-up" className="w-4 h-4 text-text" />
									</div>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default WeatherAiPage;
