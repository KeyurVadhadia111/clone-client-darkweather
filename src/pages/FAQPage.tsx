import QuestionAnswer from "components/FAQ/QuestionAnswer";
import { Tabs, TabsList, TabsTrigger } from "components/utils/tabs";
import { useAppState } from "components/utils/useAppState";
import React, { JSX, useState } from "react";

const FAQ = (): JSX.Element => {
	const [{ questionTabs }, setAppState] = useAppState();

	const QuestionTabs = [
		"General Information",
		"Forecast & Features",
		"Location & Maps",
		"Alerts & Notifications",
		"Account & Support",
	];

	const [GeneralInformation, setGeneralInformation] = useState([
		{
			question: "What is this website for?",
			answer: "It provides accurate, real-time weather forecasts and alerts.",
		},
		{
			question: "How frequently is the weather updated?",
			answer: " Updates occur every 30–60 minutes to ensure real-time accuracy.",
		},
		{
			question: "Which regions do you cover?",
			answer: "We provide global weather forecasts for cities, towns, and rural areas.",
		},
		{
			question: "Do I need an account to use the website?",
			answer: "No, all core features are free without registration.",
		},
		{
			question: "Is this weather data reliable?",
			answer: "Yes, we use trusted providers like OpenWeather and NOAA.",
		},
		{
			question: "What units do you support?",
			answer: "You can switch between Celsius/Fahrenheit and km/h or mph.",
		},
	]);

	const [ForecastFeatures, setForecastFeatures] = useState([
		{
			question: "What’s included in the daily forecast?",
			answer: "High/low temperature, humidity, precipitation, UV index, and wind.",
		},
		{
			question: "Can I see hourly weather updates?",
			answer: "Yes, you’ll find detailed 48-hour forecasts per location.",
		},
		{
			question: "Do you provide extended (7- or 10-day) forecasts?",
			answer: "Yes, we offer forecasts up to 10 days ahead.",
		},
		{
			question: "Is air quality data included?",
			answer: "Yes, AQI data is shown where available.",
		},
		{
			question: "Do you show sunrise and sunset times?",
			answer: "Yes, it’s displayed in each day’s summary.",
		},
		{
			question: "Can I view moon phases and tides?",
			answer: "Yes, this data is available in the Astronomy section.",
		},
	]);

	const [LocationMaps, setLocationMaps] = useState([
		{
			question: "How can I search for weather in my city?",
			answer: "Use the search bar or enable location access.",
		},
		{
			question: "Can I view multiple cities?",
			answer: "Yes, save multiple locations under your account or device.",
		},
		{
			question: "Do you support GPS location tracking?",
			answer: "Yes, if enabled, we auto-detect and show your local forecast.",
		},
		{
			question: "Are radar maps live?",
			answer: "Yes, our radar updates every few minutes.",
		},
		{
			question: "Can I customize map layers?",
			answer: "Yes, toggle wind, precipitation, cloud, and temperature overlays.",
		},
		{
			question: "Do you show satellite imagery?",
			answer: "Yes, satellite and radar views are available on the map tab.",
		},
	]);

	const [AlertsNotifications, setAlertsNotifications] = useState([
		{
			question: "Will I be notified about severe weather?",
			answer: "Yes, real-time alerts show up on the site and optionally via email/SMS.",
		},
		{
			question: "What types of alerts do you send?",
			answer: "Storms, heatwaves, floods, snowfall, and air quality warnings.",
		},
		{
			question: "Can I turn off notifications?",
			answer: "Yes, customize alerts in your user settings.",
		},
		{
			question: "Are alerts available for all locations?",
			answer: "Yes, alerts are based on local government or meteorological sources.",
		},
		{
			question: "Can I choose alert severity?",
			answer: "Yes, you can filter for warnings, watches, or advisories.",
		},
		{
			question: "Will I see alerts in other languages?",
			answer: "We currently support English and are working on more language options.",
		},
	]);

	const [AccountSupport, setAccountSupport] = useState([
		{
			question: "Do I need an account to save cities?",
			answer: "Yes, saving multiple cities requires signing up.",
		},
		{
			question: "Is creating an account free?",
			answer: "Absolutely — all core features are free.",
		},
		{
			question: "How do I report incorrect weather data?",
			answer: "Use the “Report Issue” button or contact us via support.",
		},
		{
			question: "Can I access the site on mobile?",
			answer: "Yes, it’s fully responsive and mobile-friendly.",
		},
		{
			question: "Is there a mobile app?",
			answer: "Coming soon! Meanwhile, use our mobile web version.",
		},
		{
			question: "How do I contact support?",
			answer: "Visit our Contact page or email us directly at support@darkweather.com",
		},
	]);

	return (
		<div className="container my-6 sm:my-[60px]">
			<div className="flex flex-col  items-center gap-8 p-4 sm:p-8 bg-bgc dark:bg-fgcDark rounded-[20px]">
				<div className="flex flex-col items-center gap-6 sm:gap-[42px]">
					<div className=" font-medium text-text dark:text-textDark text-2xl sm:text-[40px] text-center tracking-[0] leading-10 whitespace-nowrap">
						Question? Look here.
					</div>
					{/* Tabs for Desktop */}
					<Tabs defaultValue="General Information" value={questionTabs} className="w-full hidden sm:block">
						<TabsList className="w-full bg-bgc dark:bg-fgcDark rounded-lg shadow-[0_35px_35px_rgba(0,0,0,0.05)] !p-0">
							{QuestionTabs.map(tab => (
								<TabsTrigger
									key={tab}
									value={tab}
									className="!px-8 !py-4 !w-full dark:text-textDark !text-base rounded-xl font-normal"
									onClick={() => setAppState({ questionTabs: tab })}>
									{tab}
								</TabsTrigger>
							))}
						</TabsList>
					</Tabs>

					{/* Mobile Tabs */}
					<div className="flex flex-col gap-4 w-full sm:hidden ">
						{QuestionTabs.map(tab => (
							<React.Fragment key={tab}>
								<button
									className={`w-full px-6 py-2.5 rounded-xl text-base font-normal shadow-[0_35px_35px_rgba(0,0,0,0.05)] ${
										questionTabs === tab
											? "bg-primary text-text font-semibold mb-2"
											: "bg-bgc dark:bg-fgcDark text-text dark:text-textDark"
									}`}
									onClick={() => setAppState({ questionTabs: tab })}>
									{tab}
								</button>
								{questionTabs === tab && tab === "General Information" && (
									<QuestionAnswer faqItems={GeneralInformation} startIndex={0} />
								)}
								{questionTabs === tab && tab === "Forecast & Features" && (
									<QuestionAnswer faqItems={ForecastFeatures} startIndex={6} />
								)}
								{questionTabs === tab && tab === "Location & Maps" && (
									<QuestionAnswer faqItems={LocationMaps} startIndex={12} />
								)}
								{questionTabs === tab && tab === "Alerts & Notifications" && (
									<QuestionAnswer faqItems={AlertsNotifications} startIndex={18} />
								)}
								{questionTabs === tab && tab === "Account & Support" && (
									<QuestionAnswer faqItems={AccountSupport} startIndex={24} />
								)}
							</React.Fragment>
						))}
					</div>
				</div>
				<div className="flex flex-col sm:flex-row items-center gap-[30px] ">
					{/* FAQ Items */}
					<div className="hidden sm:flex items-center gap-[30px] ">
						{questionTabs === "General Information" && (
							<QuestionAnswer faqItems={GeneralInformation} startIndex={0} />
						)}
						{questionTabs === "Forecast & Features" && (
							<QuestionAnswer faqItems={ForecastFeatures} startIndex={6} />
						)}
						{questionTabs === "Location & Maps" && (
							<QuestionAnswer faqItems={LocationMaps} startIndex={12} />
						)}
						{questionTabs === "Alerts & Notifications" && (
							<QuestionAnswer faqItems={AlertsNotifications} startIndex={18} />
						)}
						{questionTabs === "Account & Support" && (
							<QuestionAnswer faqItems={AccountSupport} startIndex={24} />
						)}
					</div>
					<div className="flex items-center justify-center shrink-0">
						<img
							src="/assets/images/faq-img.svg"
							alt="faq-img"
							className="w-[295px] sm:w-[370px] h-[318px] sm:h-[330px]"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FAQ;
