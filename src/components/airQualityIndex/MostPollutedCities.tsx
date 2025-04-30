import { Tabs, TabsList, TabsTrigger } from "components/utils/tabs";
import React, { JSX, useState } from "react";
import HalfCircleProgress from "./HalfCircleProgress";

interface IItem {
	rank: number;
	city?: string;
	country: string;
	countryShortCode: string;
	aqi: number;
	status: string;
	statusColor: string;
	aboveStandard: number;
	aboveStandardColor: string;
}

const cities: IItem[] = [
	{
		rank: 1,
		city: "Aksu",
		country: "China",
		countryShortCode: "CH",
		aqi: 242,
		status: "Severe",
		statusColor: "#b33fba",
		aboveStandard: 16,
		aboveStandardColor: "#b33fba",
	},
	{
		rank: 2,
		city: "Shuangyashan",
		country: "China",
		countryShortCode: "CH",
		aqi: 210,
		status: "Severe",
		statusColor: "#b33fba",
		aboveStandard: 14,
		aboveStandardColor: "#b33fba",
	},
	{
		rank: 3,
		city: "Yulinshi",
		country: "China",
		countryShortCode: "CH",
		aqi: 197,
		status: "Unhealthy",
		statusColor: "#e95478",
		aboveStandard: 13,
		aboveStandardColor: "#e95478",
	},
	{
		rank: 4,
		city: "Harbin",
		country: "China",
		countryShortCode: "CH",
		aqi: 193,
		status: "Unhealthy",
		statusColor: "#e95478",
		aboveStandard: 13,
		aboveStandardColor: "#e95478",
	},
	{
		rank: 5,
		city: "Tlajomulco De Zuniga",
		country: "Mexico",
		countryShortCode: "MX",
		aqi: 189,
		status: "Unhealthy",
		statusColor: "#e95478",
		aboveStandard: 13,
		aboveStandardColor: "#e95478",
	},
	{
		rank: 6,
		city: "Cuernavaca",
		country: "Mexico",
		countryShortCode: "MX",
		aqi: 180,
		status: "Unhealthy",
		statusColor: "#e95478",
		aboveStandard: 12,
		aboveStandardColor: "#e95478",
	},
	{
		rank: 7,
		city: "Wuyuan",
		country: "China",
		countryShortCode: "CH",
		aqi: 178,
		status: "Unhealthy",
		statusColor: "#e95478",
		aboveStandard: 12,
		aboveStandardColor: "#e95478",
	},
	{
		rank: 8,
		city: "Ulanhot",
		country: "China",
		countryShortCode: "CH",
		aqi: 175,
		status: "Unhealthy",
		statusColor: "#e95478",
		aboveStandard: 12,
		aboveStandardColor: "#e95478",
	},
	{
		rank: 9,
		city: "Taihecun",
		country: "China",
		countryShortCode: "CH",
		aqi: 175,
		status: "Unhealthy",
		statusColor: "#e95478",
		aboveStandard: 12,
		aboveStandardColor: "#e95478",
	},
	{
		rank: 10,
		city: "Jiamusi",
		country: "China",
		countryShortCode: "CH",
		aqi: 172,
		status: "Unhealthy",
		statusColor: "#e95478",
		aboveStandard: 11,
		aboveStandardColor: "#e95478",
	},
];
const countries: IItem[] = [
	{
		rank: 1,
		country: "Pakistan",
		countryShortCode: "PK",
		aqi: 121,
		status: "Unhealthy",
		statusColor: "#E85E73",
		aboveStandard: 8,
		aboveStandardColor: "#E85E73",
	},
	{
		rank: 2,
		country: "Bahrain",
		countryShortCode: "BH",
		aqi: 101,
		status: "Unhealthy",
		statusColor: "#E85E73",
		aboveStandard: 7,
		aboveStandardColor: "#E85E73",
	},
	{
		rank: 3,
		country: "India",
		countryShortCode: "IN",
		aqi: 100,
		status: "Poor",
		statusColor: "#E0B43A",
		aboveStandard: 7,
		aboveStandardColor: "#E0B43A",
	},
	{
		rank: 4,
		country: "Kyrgyzstan",
		countryShortCode: "KG",
		aqi: 99,
		status: "Poor",
		statusColor: "#E0B43A",
		aboveStandard: 6,
		aboveStandardColor: "#E0B43A",
	},
	{
		rank: 5,
		country: "Tajikistan",
		countryShortCode: "TJ",
		aqi: 97,
		status: "Poor",
		statusColor: "#E0B43A",
		aboveStandard: 6,
		aboveStandardColor: "#E0B43A",
	},
	{
		rank: 6,
		country: "Qatar",
		countryShortCode: "QA",
		aqi: 93,
		status: "Poor",
		statusColor: "#E0B43A",
		aboveStandard: 6,
		aboveStandardColor: "#E0B43A",
	},
	{
		rank: 7,
		country: "Kuwait",
		countryShortCode: "KW",
		aqi: 91,
		status: "Poor",
		statusColor: "#E0B43A",
		aboveStandard: 6,
		aboveStandardColor: "#E0B43A",
	},
	{
		rank: 8,
		country: "Kazakhstan",
		countryShortCode: "KZ",
		aqi: 88,
		status: "Poor",
		statusColor: "#E0B43A",
		aboveStandard: 6,
		aboveStandardColor: "#E0B43A",
	},
	{
		rank: 9,
		country: "Azerbaijan",
		countryShortCode: "AZ",
		aqi: 87,
		status: "Poor",
		statusColor: "#E0B43A",
		aboveStandard: 6,
		aboveStandardColor: "#E0B43A",
	},
	{
		rank: 10,
		country: "Nepal",
		countryShortCode: "NP",
		aqi: 86,
		status: "Poor",
		statusColor: "#E0B43A",
		aboveStandard: 5,
		aboveStandardColor: "#E0B43A",
	},
];

const citiesHead = [
	{
		key: "rank",
		label: "Rank",
		className: "inline-flex items-center gap-1 sm:gap-2.5 p-2 sm:p-6 relative",
	},
	{
		key: "city",
		label: "Most Polluted Cities",
		className: "w-auto sm:w-[400px] items-start justify-start text-left gap-1 sm:gap-2.5 p-2 sm:p-6 relative",
	},
	{
		key: "aqi",
		label: "AQI",
		className: "items-center justify-center gap-1 sm:gap-2.5 p-2 sm:p-6 relative flex-1 grow",
	},
	{
		key: "aqiStatus",
		label: "AQI Status",
		className: "items-center justify-center gap-1 sm:gap-2.5 p-2 sm:p-6 relative flex-1 grow",
	},
	{
		key: "standardValue",
		label: "Standard Value",
		className: "w-[336px] items-center justify-center gap-1 sm:gap-2.5 p-2 sm:p-6 relative",
	},
];

export const MostPollutedCities = (): JSX.Element => {
	const [activeTab, setActiveTab] = useState("cityRanking");

	return (
		<div className="text-text dark:text-textDark flex flex-col items-center relative self-stretch w-full">
			<div className="flex flex-col items-start gap-4 sm:gap-12 relative w-full">
				<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 relative self-stretch w-full">
					<div className="inline-flex flex-col items-start justify-center gap-2 relative">
						<p className="font-medium text-2xl sm:text-[40px] ">{`World Most Polluted ${activeTab === "cityRanking" ? "Cities" : "Country"} 2025`}</p>
					</div>

					<Tabs
						defaultValue="fahrenheit"
						className="bg-bgc dark:bg-fgcDark rounded-lg shadow-[0_35px_35px_rgba(0,0,0,0.05)] ">
						<TabsList className="!p-0 bg-transparent">
							<TabsTrigger
								value="fahrenheit"
								className="font-normal text-text dark:text-textDark !text-sm sm:!text-base !px-6 !py-3 sm:!px-8 sm:!py-4  whitespace-nowrap"
								onClick={() => setActiveTab("cityRanking")}>
								City Ranking
							</TabsTrigger>
							<TabsTrigger
								value="celsius"
								className="font-normal text-text dark:text-textDark !text-sm sm:!text-base !px-6 !py-3 sm:!px-8 sm:!py-4  whitespace-nowrap"
								onClick={() => setActiveTab("countryRanking")}>
								Country Ranking
							</TabsTrigger>
						</TabsList>
					</Tabs>
				</div>

				<div className="flex flex-col items-start pt-0 pb-4 px-0 relative self-stretch w-full bg-bgc dark:bg-fgcDark rounded-2xl shadow-[0px_20px_35px_#0000000d] overflow-auto">
					<table className="w-full">
						<thead className="items-center relative self-stretch w-full">
							<tr>
								{citiesHead.map(column => (
									<th
										key={column.key}
										className={
											`relative font-semibold text-text dark:text-textDark text-base sm:text-xl tracking-[0] leading-[26px] whitespace-nowrap ` +
											column.className
										}>
										{column.label}
									</th>
								))}
							</tr>
						</thead>
						<tbody className="divide-y divide-border dark:divide-borderDark">
							{(activeTab === "cityRanking" ? cities : countries).map((item, index: number) => (
								<tr key={item.rank} className="">
									{/* Rank */}
									<td className="w-[98px]  p-2 sm:p-6">{item.rank}.</td>

									{/* List + Country */}
									<td className="w-auto sm:w-[400px]  p-2 sm:p-6">
										<div className="flex items-center gap-4  ">
											<img
												className="w-8 h-auto"
												alt="Group"
												src={`http://purecatamphetamine.github.io/country-flag-icons/3x2/${item.countryShortCode}.svg`}
											/>
											<span className="text-lg whitespace-nowrap text-ellipsis overflow-hidden ">
												{activeTab === "cityRanking" ? item.city + ", " : ""}
												{item.country}
											</span>
										</div>
									</td>

									{/* AQI */}
									<td className="w-[168px] p-2 sm:p-6 text-center">
										<HalfCircleProgress key={index} value={item.aqi} color={item.statusColor} />
									</td>

									{/* Status */}
									<td className="w-[168px] p-2 sm:p-6 text-center">
										<span className="text-lg font-medium" style={{ color: item.statusColor }}>
											{item.status}
										</span>
									</td>

									{/* Above Standard */}
									<td className="w-[336px] p-2 sm:p-6 text-center">
										<p className="text-lg">
											<span className="font-medium" style={{ color: item.aboveStandardColor }}>
												{item.aboveStandard}x{" "}
											</span>
											<span className="">above standard</span>
										</p>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};
