import { Tabs, TabsList, TabsTrigger } from "components/utils/tabs";
import React, { JSX, useState } from "react";

export const MajorAirPollutants = (): JSX.Element => {
	const [current, setCurrent] = useState("CurrentPollutants");
	return (
		<div className="flex flex-col items-start gap-4 sm:gap-12 w-full ">
			<div className="flex  flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-3 sm:gap-0 w-full">
				<div className="font-medium text-text dark:text-textDark text-2xl sm:text-[40px] text-center whitespace-nowrap">
					{current === "CurrentPollutants" ? "Major Air Pollutants" : "Air Quality Scale"}
				</div>

				<Tabs
					defaultValue="fahrenheit"
					className="shadow-[0_35px_35px_rgba(0,0,0,0.05)] bg-bgc dark:bg-fgcDark  rounded-[10px] sm:rounded-xl ">
					<TabsList className="!p-0 bg-transparent">
						<TabsTrigger
							value="fahrenheit"
							className="font-normal text-text dark:text-textDark !text-sm sm:!text-base !px-6 !py-3 sm:!px-8 sm:!py-4  whitespace-nowrap"
							onClick={() => setCurrent("CurrentPollutants")}>
							Current Pollutants
						</TabsTrigger>
						<TabsTrigger
							value="celsius"
							className="font-normal text-text dark:text-textDark !text-sm sm:!text-base !px-6 !py-3 sm:!px-8 sm:!py-4  whitespace-nowrap"
							onClick={() => setCurrent("AirQualityScale")}>
							Air Quality Scale
						</TabsTrigger>
					</TabsList>
				</Tabs>
			</div>

			{current === "CurrentPollutants" && (
				<div className="flex flex-col items-start gap-4 sm:gap-[30px] w-full flex-[0_0_auto]">
					<div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-[30px]  w-full flex-[0_0_auto]">
						<div className="flex w-full sm:w-[370px] items-center justify-between px-3 py-4 sm:px-4 sm:py-6 bg-bgc dark:bg-fgcDark rounded-2xl border-l-2 sm:border-l-4 [border-left-style:solid] border-[#eec732] shadow-[0px_35px_35px_#0000000d]">
							<div className="relative w-8 h-8 sm:w-12 sm:h-12">
								<div className="absolute top-[14px]  sm:top-5 left-1/2 transform -translate-x-1/2 font-normal text-textSecondary dark:text-text text-[4px] sm:text-[8px]  whitespace-nowrap">
									PM2.5
								</div>
								<img
									className="w-8 h-8 sm:w-12 sm:h-12"
									alt="Cloud cover"
									src="/assets/images/cloud-cover.svg"
								/>
							</div>

							<div className="flex flex-col w-[155px] items-start gap-0.5  ">
								<div className="font-medium text-text dark:text-textDark text-sm sm:text-base whitespace-nowrap">
									Particulate Matter
								</div>

								<div className="font-medium text-textSecondary dark:text-textDark text-sm sm:text-base">
									(PM2.5)
								</div>
							</div>

							<div className="flex flex-col w-[41px] items-end gap-0.5  ">
								<div className="font-semibold text-text dark:text-textDark text-base sm:text-xl text-right ">
									36
								</div>

								<div className="font-normal text-text dark:text-textDark text-xs sm:text-sm text-center ">
									µg/m³
								</div>
							</div>
						</div>

						<div className="flex w-full sm:w-[370px] items-center justify-between px-3 py-4 sm:px-4 sm:py-6 bg-bgc dark:bg-fgcDark rounded-2xl border-l-2 sm:border-l-4 [border-left-style:solid] border-[#eec732] shadow-[0px_35px_35px_#0000000d]">
							<div className="relative w-8 h-8 sm:w-12 sm:h-12">
								<div className="absolute top-[14px]  sm:top-5 left-1/2 transform -translate-x-1/2 font-normal text-textSecondary dark:text-text text-[4px] sm:text-[8px]  whitespace-nowrap">
									PM10
								</div>
								<img
									className="w-8 h-8 sm:w-12 sm:h-12"
									alt="Cloud cover"
									src="/assets/images/cloud-cover.svg"
								/>
							</div>

							<div className="flex flex-col w-[155px] items-start gap-0.5  ">
								<div className="font-medium text-text dark:text-textDark text-sm sm:text-base whitespace-nowrap">
									Particulate Matter
								</div>

								<div className="font-medium text-textSecondary dark:text-textDark text-sm sm:text-base">
									(PM10)
								</div>
							</div>

							<div className="flex flex-col w-[41px] items-end gap-0.5  ">
								<div className="font-semibold text-text dark:text-textDark text-base sm:text-xl text-right ">
									85
								</div>

								<div className="font-normal text-text dark:text-textDark text-xs sm:text-sm text-center ">
									µg/m³
								</div>
							</div>
						</div>

						<div className="flex w-full sm:w-[370px] items-center justify-between px-3 py-4 sm:px-4 sm:py-6 bg-bgc dark:bg-fgcDark rounded-2xl border-l-2 sm:border-l-4 [border-left-style:solid] border-[#59b61f] shadow-[0px_35px_35px_#0000000d]">
							<div className="relative w-8 h-8 sm:w-12 sm:h-12">
								<div className="absolute top-[14px]  sm:top-5 left-1/2 transform -translate-x-1/2 font-normal text-textSecondary dark:text-text text-[4px] sm:text-[8px]  whitespace-nowrap">
									CO
								</div>
								<img
									className="w-8 h-8 sm:w-12 sm:h-12"
									alt="Cloud cover"
									src="/assets/images/cloud-cover.svg"
								/>
							</div>

							<div className="flex flex-col w-[155px] items-start gap-0.5 ">
								<div className="font-medium text-text dark:text-textDark text-sm sm:text-base whitespace-nowrap">
									Carbon Monoxide
								</div>

								<div className="font-medium text-textSecondary dark:text-textDark text-sm sm:text-base">
									(CO)
								</div>
							</div>

							<div className="flex flex-col w-[41px] items-end gap-0.5  ">
								<div className="font-semibold text-text dark:text-textDark text-base sm:text-xl text-right ">
									298
								</div>

								<div className="font-normal text-text dark:text-textDark text-xs sm:text-sm text-center ">
									ppb
								</div>
							</div>
						</div>
					</div>

					<div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-[30px]  w-full flex-[0_0_auto]">
						<div className="flex w-full sm:w-[370px] items-center justify-between px-3 py-4 sm:px-4 sm:py-6 bg-bgc dark:bg-fgcDark rounded-2xl border-l-2 sm:border-l-4 [border-left-style:solid] border-[#59b61f] shadow-[0px_35px_35px_#0000000d]">
							<div className="relative w-8 h-8 sm:w-12 sm:h-12">
								<div className="absolute top-[14px]  sm:top-5 left-1/2 transform -translate-x-1/2 font-normal text-textSecondary dark:text-text text-[4px] sm:text-[8px]  whitespace-nowrap">
									SO2
								</div>
								<img
									className="w-8 h-8 sm:w-12 sm:h-12"
									alt="Cloud cover"
									src="/assets/images/cloud-cover.svg"
								/>
							</div>

							<div className="flex flex-col w-[155px] items-start gap-0.5  ">
								<div className="font-medium text-text dark:text-textDark text-sm sm:text-base whitespace-nowrap">
									Sulfur Dioxide
								</div>

								<div className=" font-medium text-textSecondary dark:text-textDark text-sm sm:text-base">
									(SO2)
								</div>
							</div>

							<div className="flex flex-col w-[41px] items-end gap-0.5  ">
								<div className="font-semibold text-text dark:text-textDark text-base sm:text-xl text-right ">
									4
								</div>

								<div className="font-normal text-text dark:text-textDark text-xs sm:text-sm text-center ">
									ppb
								</div>
							</div>
						</div>

						<div className="flex w-full sm:w-[370px] items-center justify-between px-3 py-4 sm:px-4 sm:py-6 bg-bgc dark:bg-fgcDark rounded-2xl border-l-2 sm:border-l-4 [border-left-style:solid] border-[#59b61f] shadow-[0px_35px_35px_#0000000d]">
							<div className="relative w-8 h-8 sm:w-12 sm:h-12">
								<div className="absolute top-[14px]  sm:top-5 left-1/2 transform -translate-x-1/2 font-normal text-textSecondary dark:text-text text-[4px] sm:text-[8px]  whitespace-nowrap">
									NO2
								</div>
								<img
									className="w-8 h-8 sm:w-12 sm:h-12"
									alt="Cloud cover"
									src="/assets/images/cloud-cover.svg"
								/>
							</div>

							<div className="flex flex-col w-[155px] items-start gap-0.5  ">
								<div className="font-medium text-text dark:text-textDark text-sm sm:text-base whitespace-nowrap">
									Nitrogen Dioxide
								</div>

								<div className=" font-medium text-textSecondary dark:text-textDark text-sm sm:text-base">
									(NO2)
								</div>
							</div>

							<div className="flex flex-col w-[41px] items-end gap-0.5  ">
								<div className="font-semibold text-text dark:text-textDark text-base sm:text-xl text-right ">
									9
								</div>

								<div className="font-normal text-text dark:text-textDark text-xs sm:text-sm text-center ">
									ppd
								</div>
							</div>
						</div>

						<div className="flex w-full sm:w-[370px] items-center justify-between px-3 py-4 sm:px-4 sm:py-6 bg-bgc dark:bg-fgcDark rounded-2xl border-l-2 sm:border-l-4 [border-left-style:solid] border-[#59b61f] shadow-[0px_35px_35px_#0000000d]">
							<div className="relative w-8 h-8 sm:w-12 sm:h-12">
								<div className="absolute top-[14px]  sm:top-5 left-1/2 transform -translate-x-1/2 font-normal text-textSecondary dark:text-text text-[4px] sm:text-[8px]  whitespace-nowrap">
									O3
								</div>
								<img
									className="w-8 h-8 sm:w-12 sm:h-12"
									alt="Cloud cover"
									src="/assets/images/cloud-cover.svg"
								/>
							</div>

							<div className="flex flex-col w-[155px] items-start gap-0.5  ">
								<div className="font-medium text-text dark:text-textDark text-sm sm:text-base whitespace-nowrap">
									Ozone
								</div>

								<div className=" font-medium text-textSecondary dark:text-textDark text-sm sm:text-base">
									(O3)
								</div>
							</div>

							<div className="flex flex-col w-[41px] items-end gap-0.5  ">
								<div className="font-semibold text-text dark:text-textDark text-base sm:text-xl text-right ">
									18
								</div>

								<div className="font-normal text-text dark:text-textDark text-xs sm:text-sm text-center ">
									ppb
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
			{current === "AirQualityScale" && (
				<div className="flex flex-col items-start gap-4 sm:gap-[30px] w-full flex-[0_0_auto]">
					<div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-[30px]  w-full flex-[0_0_auto]">
						<div className="flex w-full sm:w-[370px] items-center justify-between p-3 sm:p-4 bg-bgc dark:bg-fgcDark rounded-2xl border-l-2 sm:border-l-4 [border-left-style:solid] border-[#59B61F] shadow-[0px_35px_35px_#0000000d]">
							<div className="flex flex-col w-[242px] items-start gap-1 sm:gap-2">
								<div className="font-medium text-text dark:text-textDark text-sm sm:text-lg whitespace-nowrap">
									Excellent
								</div>

								<p className="font-normal text-textSecondary dark:text-textDark text-[10px] sm:text-xs">
									The air quality is ideal for most individuals; enjoy your normal outdoor activities.
								</p>
							</div>

							<div className="flex flex-col w-[71px] items-end gap-0.5  ">
								<div className="font-semibold text-text dark:text-textDark text-sm sm:text-lg text-right whitespace-nowrap ">
									0 - 19
								</div>

								<div className="font-normal text-text dark:text-textDark text-[10px] sm:text-sm text-center ">
									µg/m³
								</div>
							</div>
						</div>

						<div className="flex w-full sm:w-[370px] items-center justify-between p-3 sm:p-4 bg-bgc dark:bg-fgcDark rounded-2xl border-l-2 sm:border-l-4 [border-left-style:solid] border-[#EA8434] shadow-[0px_35px_35px_#0000000d]">
							<div className="flex flex-col w-[242px] items-start gap-1 sm:gap-2">
								<div className="font-medium text-text dark:text-textDark text-sm sm:text-lg whitespace-nowrap">
									Fair
								</div>

								<p className="font-normal text-textSecondary dark:text-textDark text-[10px] sm:text-xs">
									The air quality is generally acceptable for most individuals.
								</p>
							</div>

							<div className="flex flex-col w-[71px] items-end gap-0.5  ">
								<div className="font-semibold text-text dark:text-textDark text-sm sm:text-lg text-right whitespace-nowrap ">
									20 - 49
								</div>

								<div className="font-normal text-text dark:text-textDark text-[10px] sm:text-sm text-center ">
									µg/m³
								</div>
							</div>
						</div>

						<div className="flex w-full sm:w-[370px] items-center justify-between p-3 sm:p-4 bg-bgc dark:bg-fgcDark rounded-2xl border-l-2 sm:border-l-4 [border-left-style:solid] border-[#EEC732] shadow-[0px_35px_35px_#0000000d]">
							<div className="flex flex-col w-[242px] items-start gap-1 sm:gap-2">
								<div className="font-medium text-text dark:text-textDark text-sm sm:text-lg whitespace-nowrap">
									Poor
								</div>

								<p className="font-normal text-textSecondary dark:text-textDark text-[10px] sm:text-xs">
									The air has reached a high level of pollution and is unhealthy for sensitive groups.
								</p>
							</div>

							<div className="flex flex-col w-[71px] items-end gap-0.5  ">
								<div className="font-semibold text-text dark:text-textDark text-sm sm:text-lg text-right whitespace-nowrap ">
									50 - 99
								</div>

								<div className="font-normal text-text dark:text-textDark text-[10px] sm:text-sm text-center ">
									µg/m³
								</div>
							</div>
						</div>
					</div>

					<div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-[30px]  w-full flex-[0_0_auto]">
						<div className="flex w-full sm:w-[370px] items-center justify-between p-3 sm:p-4 bg-bgc dark:bg-fgcDark rounded-2xl border-l-2 sm:border-l-4 [border-left-style:solid] border-[#E95478] shadow-[0px_35px_35px_#0000000d]">
							<div className="flex flex-col w-[242px] items-start gap-1 sm:gap-2">
								<div className="font-medium text-text dark:text-textDark text-sm sm:text-lg whitespace-nowrap">
									Unhealthy
								</div>

								<p className="font-normal text-textSecondary dark:text-textDark text-[10px] sm:text-xs">
									Health effects can be immediately felt by sensitive groups.
								</p>
							</div>

							<div className="flex flex-col w-[71px] items-end gap-0.5  ">
								<div className="font-semibold text-text dark:text-textDark text-sm sm:text-lg text-right whitespace-nowrap ">
									100 - 149
								</div>

								<div className="font-normal text-text dark:text-textDark text-[10px] sm:text-sm text-center ">
									µg/m³
								</div>
							</div>
						</div>

						<div className="flex w-full sm:w-[370px] items-center justify-between p-3 sm:p-4 bg-bgc dark:bg-fgcDark rounded-2xl border-l-2 sm:border-l-4 [border-left-style:solid] border-[#B33FBA] shadow-[0px_35px_35px_#0000000d]">
							<div className="flex flex-col w-[242px] items-start gap-1 sm:gap-2">
								<div className="font-medium text-text dark:text-textDark text-sm sm:text-lg whitespace-nowrap">
									Very Unhealthy
								</div>

								<p className="font-normal text-textSecondary dark:text-textDark text-[10px] sm:text-xs">
									The air quality is generally acceptable for most individuals.
								</p>
							</div>

							<div className="flex flex-col w-[71px] items-end gap-0.5  ">
								<div className="font-semibold text-text dark:text-textDark text-sm sm:text-lg text-right whitespace-nowrap ">
									150 - 249
								</div>

								<div className="font-normal text-text dark:text-textDark text-[10px] sm:text-sm text-center ">
									µg/m³
								</div>
							</div>
						</div>

						<div className="flex w-full sm:w-[370px] items-center justify-between p-3 sm:p-4 bg-bgc dark:bg-fgcDark rounded-2xl border-l-2 sm:border-l-4 [border-left-style:solid] border-[#6A0AFF] shadow-[0px_35px_35px_#0000000d]">
							<div className="flex flex-col w-[242px] items-start gap-1 sm:gap-2">
								<div className="font-medium text-text dark:text-textDark text-sm sm:text-lg whitespace-nowrap">
									Dangerous
								</div>

								<p className="font-normal text-textSecondary dark:text-textDark text-[10px] sm:text-xs">
									Even brief air exposure can seriously harm everyone's health.
								</p>
							</div>

							<div className="flex flex-col w-[71px] items-end gap-0.5  ">
								<div className="font-semibold text-text dark:text-textDark text-sm sm:text-lg text-right whitespace-nowrap ">
									250+
								</div>

								<div className="font-normal text-text dark:text-textDark text-[10px] sm:text-sm text-center ">
									µg/m³
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
