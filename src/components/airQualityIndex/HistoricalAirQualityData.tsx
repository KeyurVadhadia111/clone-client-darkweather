import Icon from "components/utils/Icon";
import { Separator } from "components/utils/Separator";
import React, { JSX, useRef, useState } from "react";
import { motion } from "framer-motion";

export const HistoricalAirQualityData = (): JSX.Element => {
	const [locationDropdownOpen, setLocationDropdownOpen] = useState(false);
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);
	return (
		<div className="flex flex-col items-center gap-[72px]    w-full flex-[0_0_auto]">
			<div className="flex flex-col items-start gap-4 sm:gap-12   w-full flex-[0_0_auto] rounded-3xl">
				<div className="flex flex-col sm:flex-row w-full sm:items-center justify-between gap-3 sm:gap-0 flex-[0_0_auto]">
					<div className=" font-medium text-text dark:text-textDark text-2xl sm:text-[40px] whitespace-nowrap">
						Historical Air Quality Data
					</div>

					<div className="inline-flex items-center gap-3 sm:gap-4 flex-[0_0_auto]">
						<div className="relative" ref={dropdownRef}>
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="inline-flex items-center justify-center gap-3 sm:gap-4 px-4 py-3 sm:px-6 sm:py-4  flex-[0_0_auto] bg-bgc dark:bg-fgcDark rounded-[10px] sm:rounded-xl shadow-[0px_35px_35px_#0000000d]"
								onClick={() => setDropdownOpen(!dropdownOpen)}>
								<span className="font-semibold text-text dark:text-textDark text-sm sm:text-base whitespace-nowrap">
									24 Hours
								</span>
								<Icon
									icon="chevron-down"
									className="w-3 h-3 sm:w-5 sm:h-5 text-text dark:text-textDark"
								/>
							</motion.button>

							{dropdownOpen && (
								<div className="absolute mt-2 w-full bg-bgc dark:bg-text text-bgcDark dark:text-textDark  rounded-md shadow-[0_20px_35px_rgba(0,0,0,0.05)] border border-gray-300 dark:border-gray-600 z-10">
									<div className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 text-black dark:text-textDark">
										24 Hours
									</div>
								</div>
							)}
						</div>

						<div className="relative" ref={dropdownRef}>
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="inline-flex items-center justify-center gap-3 sm:gap-4 px-4 py-3 sm:px-6 sm:py-4  flex-[0_0_auto] bg-bgc dark:bg-fgcDark rounded-[10px] sm:rounded-xl shadow-[0px_35px_35px_#0000000d]"
								onClick={() => setLocationDropdownOpen(!locationDropdownOpen)}>
								<span className="font-semibold text-text dark:text-textDark text-sm sm:text-base whitespace-nowrap">
									AQI
								</span>
								<Icon
									icon="chevron-down"
									className="w-3 h-3 sm:w-5 sm:h-5 text-text dark:text-textDark"
								/>
							</motion.button>

							{locationDropdownOpen && (
								<div className="absolute mt-2 w-full bg-bgc dark:bg-text text-bgcDark dark:text-textDark  rounded-md shadow-[0_20px_35px_rgba(0,0,0,0.05)] border border-gray-300 dark:border-gray-600 z-10">
									<div className="px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 text-black dark:text-textDark">
										AQI
									</div>
								</div>
							)}
						</div>
					</div>
				</div>

				<div className="flex flex-col w-full items-start gap-4 sm:gap-10 p-4 sm:p-[30px] flex-[0_0_auto] bg-bgc dark:bg-fgcDark rounded-[6.71px] sm:rounded-3xl overflow-hidden shadow-[0px_20px_35px_#0000000d]">
					<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-3 sm:gap-0 flex-[0_0_auto]">
						<div className="order-2 sm:order-1 flex items-center justify-center gap-1.5 sm:gap-2 p-2 sm:p-2.5 bg-bgc dark:bg-fgcDark rounded-[10px] sm:rounded-xl border border-solid border-textSecondary/20">
							<div className=" w-2 h-2 sm:w-4 sm:h-4 bg-textSecondary dark:bg-textDark rounded-full" />

							<div className="font-normal text-textSecondary dark:text-textDark text-sm sm:text-base whitespace-nowrap">
								New York
							</div>
						</div>

						<div className="order-1 sm:order-2 inline-flex items-center gap-[30px]  flex-[0_0_auto]">
							<div className="inline-flex items-center gap-1.5 sm:gap-3  flex-[0_0_auto]">
								<div className="inline-flex w-7 h-7 sm:w-14 sm:h-14 items-center justify-center gap-1.5 sm:gap-2.5 p-4  flex-[0_0_auto] bg-[#eec732] rounded-[6px] sm:rounded-xl">
									<div className="font-semibold text-text text-xs sm:text-xl  whitespace-nowrap">
										76
									</div>
								</div>

								<div className="inline-flex flex-col items-start gap-0.5  flex-[0_0_auto]">
									<div className=" font-medium text-text dark:text-textDark text-xs sm:text-base  whitespace-nowrap">
										Min.
									</div>

									<p className="font-medium text-textSecondary dark:text-textDark text-[8px] sm:text-base  whitespace-nowrap">
										at 2:09 PM on 10th Apr
									</p>
								</div>
							</div>

							<div className="inline-flex items-center gap-1.5 sm:gap-3  flex-[0_0_auto]">
								<div className="flex w-7 h-7 sm:w-14 sm:h-14 items-center justify-center gap-1.5 sm:gap-2.5 p-4  bg-[#e95478] rounded-[6px] sm:rounded-xl">
									<div className="font-semibold text-text text-xs sm:text-xl  whitespace-nowrap">
										165
									</div>
								</div>

								<div className="inline-flex flex-col items-start gap-0.5  self-stretch flex-[0_0_auto]">
									<div className="font-medium text-text dark:text-textDark text-xs sm:text-base  whitespace-nowrap">
										Max.
									</div>

									<p className="font-medium text-textSecondary dark:text-textDark text-[8px] sm:text-base  whitespace-nowrap">
										at 8:09 PM on 10th Apr
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="flex flex-col items-center justify-center gap-4 sm:gap-[30px]  self-stretch w-full flex-[0_0_auto]">
						<div className="flex items-center gap-2  w-ful self-stretch  flex-[0_0_auto]">
							<div className="flex items-center justify-around -rotate-90">
								<div className="font-medium text-xs sm:text-base  text-text dark:text-textDark whitespace-nowrap">
									AQI
								</div>
							</div>
							<div className="flex flex-col w-full  items-center gap-2  sm:gap-[30px] relative">
								<div className="flex items-center gap-3  self-stretch w-full flex-[0_0_auto]">
									<div className="font-normal text-textSecondary dark:text-textDark text-xs sm:text-base text-right  whitespace-nowrap  ">
										180
									</div>
									<Separator className="bg-textSecondary/20 dark:!bg-textSecondary/30 !bg-none flex-1 grow" />
								</div>

								<div className="flex items-center gap-3  self-stretch w-full flex-[0_0_auto]">
									<div className="font-normal text-textSecondary dark:text-textDark text-xs sm:text-base text-right  whitespace-nowrap  ">
										160
									</div>

									<Separator className="bg-textSecondary/20 dark:!bg-textSecondary/30 !bg-none flex-1 grow" />
								</div>

								<div className="flex items-center gap-3 self-stretch w-full flex-[0_0_auto]">
									<div className="font-normal text-textSecondary dark:text-textDark text-xs sm:text-base text-right  whitespace-nowrap  ">
										140
									</div>

									<Separator className="bg-textSecondary/20 dark:!bg-textSecondary/30 !bg-none flex-1 grow" />
								</div>

								<div className="flex items-center gap-3  self-stretch w-full flex-[0_0_auto]">
									<div className="font-normal text-textSecondary dark:text-textDark text-xs sm:text-base text-right  whitespace-nowrap  ">
										120
									</div>

									<Separator className="bg-textSecondary/20 dark:!bg-textSecondary/30 !bg-none flex-1 grow" />
								</div>

								<div className="flex items-center gap-3 self-stretch w-full flex-[0_0_auto]">
									<div className="font-normal text-textSecondary dark:text-textDark text-xs sm:text-base text-right  whitespace-nowrap  ">
										100
									</div>

									<Separator className="bg-textSecondary/20 dark:!bg-textSecondary/30 !bg-none flex-1 grow" />
								</div>

								<div className="flex items-center gap-3  self-stretch w-full flex-[0_0_auto]">
									<div className="font-normal text-textSecondary dark:text-textDark text-xs sm:text-base text-right  whitespace-nowrap  ">
										80
									</div>

									<Separator className="bg-textSecondary/20 dark:!bg-textSecondary/30 !bg-none flex-1 grow" />
								</div>

								<div className="flex items-center gap-3  self-stretch w-full flex-[0_0_auto]">
									<div className="font-normal text-textSecondary dark:text-textDark text-xs sm:text-base text-right  whitespace-nowrap  ">
										60
									</div>

									<Separator className="bg-textSecondary/20 dark:!bg-textSecondary/30 !bg-none flex-1 grow" />
								</div>

								<div className="flex items-center gap-3  self-stretch w-full flex-[0_0_auto]">
									<div className="font-normal text-textSecondary dark:text-textDark text-xs sm:text-base text-right  whitespace-nowrap  ">
										40
									</div>

									<Separator className="bg-textSecondary/20 dark:!bg-textSecondary/30 !bg-none flex-1 grow" />
								</div>

								<div className="flex items-center gap-3  self-stretch w-full flex-[0_0_auto]">
									<div className="font-normal text-textSecondary dark:text-textDark text-xs sm:text-base text-right  whitespace-nowrap  ">
										20
									</div>

									<Separator className="bg-textSecondary/20 dark:!bg-textSecondary/30 !bg-none flex-1 grow" />
								</div>

								<div className="flex items-center gap-3  w-full flex-[0_0_auto]">
									<div className=" font-normal text-textSecondary dark:text-textDark text-xs sm:text-base text-right  whitespace-nowrap  ">
										0
									</div>

									<Separator className="bg-textSecondary/20 dark:!bg-textSecondary/30 !bg-none flex-1 grow" />
								</div>

								<div className="inline-flex h-[440px] items-end gap-3 sm:gap-4 absolute -top-[84%] left-[16%] sm:top-[92px] sm:left-[61px]">
									<div className="inline-flex flex-col items-start justify-end gap-1 sm:gap-2.5 flex-[0_0_auto]">
										<div className="flex items-end gap-3 sm:gap-2.5 self-stretch w-full  flex-[0_0_auto]">
											<div className="w-3 h-[84px] sm:w-[30px] sm:h-[179.24px] bg-[#eec732] rounded-t-[2px] sm:rounded-t-[6px]" />

											<div className=" w-3 h-[74px] sm:w-[30px] sm:h-[148.48px] bg-[#efd531] rounded-t-[2px] sm:rounded-t-[6px]" />
										</div>

										<div className="font-normal text-textSecondary dark:text-textDark text-xs sm:text-base whitespace-nowrap">
											04 PM
										</div>
									</div>

									<div className="inline-flex flex-col items-start justify-end gap-1 sm:gap-2.5 flex-[0_0_auto]">
										<div className="flex items-end gap-3 sm:gap-2.5 self-stretch  flex-[0_0_auto]">
											<div className=" w-3 h-[59px] sm:w-[30px] sm:h-[123.49px] bg-[#f0dd31] rounded-t-[2px] sm:rounded-t-[6px]" />

											<div className=" w-3 h-[98px] sm:w-[30px] sm:h-[198.77px] bg-[#edb032] rounded-t-[2px] sm:rounded-t-[6px]" />
										</div>

										<div className="font-normal text-textSecondary dark:text-textDark text-xs sm:text-base whitespace-nowrap">
											06 PM
										</div>
									</div>

									<div className="inline-flex flex-col items-start justify-end gap-1 sm:gap-2.5 flex-[0_0_auto]">
										<div className="flex items-end gap-3 sm:gap-2.5 self-stretch w-full flex-[0_0_auto]">
											<div className=" w-3 h-[74px] sm:w-[30px] sm:h-[265.28px] bg-[#ea8434] rounded-t-[2px] sm:rounded-t-[6px]" />

											<div className=" w-3 h-[185px] sm:w-[30px] sm:h-[381.34px] bg-[#e9546d] rounded-t-[2px] sm:rounded-t-[6px]" />
										</div>

										<div className="font-normal text-textSecondary dark:text-textDark text-xs sm:text-base whitespace-nowrap">
											08 PM
										</div>
									</div>

									<div className="inline-flex flex-col items-start justify-end gap-1 sm:gap-2.5 flex-[0_0_auto]">
										<div className="flex  items-end gap-3 sm:gap-2.5 flex-[0_0_auto]">
											<div className=" w-3 h-[109px] sm:w-[30px] sm:h-[225px] bg-[#e85567] rounded-t-[2px] sm:rounded-t-[6px]" />

											<div className=" w-3 h-[150px] sm:w-[30px] sm:h-[312.29px] bg-[#e95472] rounded-t-[2px] sm:rounded-t-[6px]" />
										</div>

										<div className="font-normal text-textSecondary dark:text-textDark text-xs sm:text-base whitespace-nowrap">
											10 PM
										</div>
									</div>

									<div className="inline-flex flex-col items-start justify-end gap-1 sm:gap-2.5 flex-[0_0_auto]">
										<div className="flex items-end gap-3 sm:gap-2.5 flex-[0_0_auto]">
											<div className=" w-3 h-[103px] sm:w-[30px] sm:h-[214.7px] bg-[#e85562] rounded-t-[2px] sm:rounded-t-[6px]" />

											<div className=" w-3 h-[78px] sm:w-[30px] sm:h-[163.49px] bg-[#eca233] rounded-t-[2px] sm:rounded-t-[6px]" />
										</div>

										<div className="font-normal text-textSecondary dark:text-textDark text-xs sm:text-base whitespace-nowrap">
											12 AM
										</div>
									</div>

									<div className="inline-flex flex-col items-start justify-end gap-1 sm:gap-2.5 flex-[0_0_auto]">
										<div className="flex items-end gap-3 sm:gap-2.5 self-stretch w-full flex-[0_0_auto]">
											<div className=" w-3 h-[75px] sm:w-[30px] sm:h-[159.08px] bg-[#eca933] rounded-t-[2px] sm:rounded-t-[6px]" />

											<div className=" w-3 h-[101px] sm:w-[30px] sm:h-[203.35px] bg-[#eca933] rounded-t-[2px] sm:rounded-t-[6px]" />
										</div>

										<div className="font-normal text-textSecondary dark:text-textDark text-xs sm:text-base whitespace-nowrap">
											02 AM
										</div>
									</div>

									<div className="inline-flex flex-col items-start justify-end gap-1 sm:gap-2.5 flex-[0_0_auto]">
										<div className="flex items-end gap-3 sm:gap-2.5 self-stretch w-full flex-[0_0_auto]">
											<div className=" w-3 h-[112px] sm:w-[30px] sm:h-[235.46px] bg-[#eca933] rounded-t-[2px] sm:rounded-t-[6px]" />

											<div className=" w-3 h-[83px] sm:w-[30px] sm:h-[183.86px] bg-[#eca933] rounded-t-[2px] sm:rounded-t-[6px]" />
										</div>

										<div className="font-normal text-textSecondary dark:text-textDark text-xs sm:text-base whitespace-nowrap">
											04 AM
										</div>
									</div>

									<div className="inline-flex flex-col items-start justify-end gap-1 sm:gap-2.5 flex-[0_0_auto]">
										<div className="flex items-end gap-3 sm:gap-2.5 self-stretch w-full flex-[0_0_auto]">
											<div className="w-3 h-[73px] sm:w-[30px] sm:h-[168px] bg-[#eca933] rounded-t-[2px] sm:rounded-t-[6px]" />

											<div className=" w-3 h-[62px] sm:w-[30px] sm:h-[159px] bg-[#eca933] rounded-t-[2px] sm:rounded-t-[6px]" />
										</div>

										<div className="font-normal text-textSecondary dark:text-textDark text-xs sm:text-base whitespace-nowrap">
											06 AM
										</div>
									</div>

									<div className="inline-flex flex-col items-start justify-end gap-1 sm:gap-2.5 flex-[0_0_auto]">
										<div className="flex items-end gap-3 sm:gap-2.5 self-stretch w-full flex-[0_0_auto]">
											<div className=" w-3 h-[131px] sm:w-[30px] sm:h-[269.58px] bg-[#ea8434] rounded-t-[2px] sm:rounded-t-[6px]" />

											<div className=" w-3 h-[101px] sm:w-[30px] sm:h-[209.93px] bg-[#ea8434] rounded-t-[2px] sm:rounded-t-[6px]" />
										</div>

										<div className="font-normal text-textSecondary dark:text-textDark text-xs sm:text-base whitespace-nowrap">
											08 AM
										</div>
									</div>

									<div className="inline-flex flex-col items-start justify-end gap-1 sm:gap-2.5 flex-[0_0_auto]">
										<div className="flex items-end gap-3 sm:gap-2.5 self-stretch w-full flex-[0_0_auto]">
											<div className=" w-3 h-[85px] sm:w-[30px] sm:h-[169px] bg-[#eca933] rounded-t-[2px] sm:rounded-t-[6px]" />

											<div className=" w-3 h-[89px] sm:w-[30px] sm:h-[176.32px] bg-[#eca933] rounded-t-[2px] sm:rounded-t-[6px]" />
										</div>

										<div className="font-normal text-textSecondary dark:text-textDark text-xs sm:text-base whitespace-nowrap">
											10 AM
										</div>
									</div>

									<div className="inline-flex flex-col items-start justify-end gap-1 sm:gap-2.5 flex-[0_0_auto]">
										<div className="flex items-end gap-3 sm:gap-2.5 self-stretch w-full flex-[0_0_auto]">
											<div className=" w-3 h-[78px] sm:w-[30px] sm:h-[166px] bg-[#eca933] rounded-t-[2px] sm:rounded-t-[6px]" />

											<div className=" w-3 h-[95px] sm:w-[30px] sm:h-[198.46px] bg-[#eca933] rounded-t-[2px] sm:rounded-t-[6px]" />
										</div>

										<div className="font-normal text-textSecondary dark:text-textDark text-xs sm:text-base whitespace-nowrap">
											12 PM
										</div>
									</div>

									<div className="inline-flex flex-col items-start justify-end gap-1 sm:gap-2.5 flex-[0_0_auto]">
										<div className="flex items-end gap-3 sm:gap-2.5 self-stretch w-full flex-[0_0_auto]">
											<div className=" w-3 h-[76px] sm:w-[30px] sm:h-[163.86px] bg-[#edb032] rounded-t-[2px] sm:rounded-t-[6px]" />

											<div className=" w-3 h-[61px] sm:w-[30px] sm:h-[142.62px] bg-[#edb832] rounded-t-[2px] sm:rounded-t-[6px]" />
										</div>

										<div className="font-normal text-textSecondary dark:text-textDark text-xs sm:text-base whitespace-nowrap">
											02 PM
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="flex w-full sm:w-[1110px] items-center justify-between pl-8 pr-0 py-0 flex-[0_0_auto]">
							<div className="font-medium text-text dark:text-textDark text-xs sm:text-base whitespace-nowrap">
								10-04-2025
							</div>

							<div className="font-medium text-text dark:text-textDark text-xs sm:text-base whitespace-nowrap">
								Time
							</div>

							<div className="font-medium text-text dark:text-textDark text-xs sm:text-base whitespace-nowrap">
								11-04-2025
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
