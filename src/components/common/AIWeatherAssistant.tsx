"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "components/utils/Button";
import Icon from "components/utils/Icon";
import { useAppState } from "components/utils/useAppState";

export default function AIWeatherAssistant() {
	const [message, setMessage] = useState("");
	const [{ isDark, userDetails }, setAppState] = useAppState();

	return (
		<motion.section
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.5 }}
			className={`mb-12 container mx-auto py-6`}>
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
				<div className="col-span-5 bg-[transparent] rounded-xl items-center">
					<h2 className="text-2xl sm:text-[40px] font-medium text-text dark:text-white mb-6">
						AI Weather Assistant
					</h2>
					<div className="flex items-start mb-6 sm:mb-[72px]">
						<div>
							<p className="text-textSecondary text-base sm:text-xl dark:text-white">
								Lorem Ipsum is simply dummy text of the printing and typesetting industry.
							</p>
						</div>
					</div>

					<motion.div
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="rounded-xl hover:shadow-[0_20px_35px_rgba(0,0,0,0.05)] transition-all w-fit">
						<Button size="lg" className="">
							Ask the AI
						</Button>
					</motion.div>
				</div>

				<div className="p-4 col-span-7 bg-bgc dark:bg-fgcDark rounded-xl  flex flex-col shadow-[0_20px_35px_rgba(0,0,0,0.05)] relative h-auto sm:h-[500px] gap-8">
					<img
						className="absolute w-[136px] sm:w-[240px] h-auto -top-14 sm:top-64 right-20 sm:-left-[140px] scale-x-[-1] z-[-1]"
						alt="Weather icon"
						src="assets/images/cloud.png"
					/>
					<div className="flex items-center align-center text-center justify-between">
						<div className="flex items-center gap-4">
							<img src="/assets/images/ai-cloud.png" alt="Droplet Icon" className="w-auto h-8 sm:h-10" />
							<h3 className="font-semibold text-base sm:text-2xl text-text dark:text-white">
								Weather AI
							</h3>
						</div>
						<Icon icon="zoom" className="w-6 h-6 dark:text-textDark" />
					</div>

					<div className="flex-1 p-0 sm:p-10 overflow-y-auto  bg-bgc dark:bg-fgcDark">
						<div className="flex flex-col gap-6 sm:gap-10 justify-center items-center">
							<img
								src="/assets/images/ai-cloud.png"
								alt="Droplet Icon"
								className="w-auto h-[42px] sm:h-[72px]"
							/>

							<div className="flex items-center justify-center flex-col gap-0 sm:gap-3">
								<p className="text-2xl sm:text-3xl font-medium text-text dark:text-white">
									Hi, there👋
								</p>
								<p className="text-sm sm:text-xl text-textSecondary dark:text-textDark">
									How to best use this expert?
								</p>
							</div>
						</div>
					</div>

					<div className="flex items-center bg-fgc dark:bg-bgcDark p-2.5 sm:p-3 rounded-2xl">
						<img src="/assets/images/magic-wand.png" alt="Droplet Icon" className="w-auto h-full p-1.5" />
						<input
							type="text"
							placeholder="Ask me anything..."
							className="border-0 py-1.5 bg-fgc dark:bg-bgcDark text-text dark:text-white text-md focus:ring-0 focus:outline-none w-full"
							value={message}
							onChange={e => setMessage(e.target.value)}
						/>
						<Button size="sm" className="!px-3 sm:!px-4 !py-1.5 sm:!py-2.5 !flex !gap-2 !text-sm">
							Send
							<Icon icon="arrow-up" className="w-4 h-4" />
						</Button>
					</div>
				</div>
			</div>
			{userDetails?._id && (
				<>
					<div className="flex flex-col sm:flex-row items-center mt-8 gap-4 sm:gap-[30px]">
						<div className="bg-fgc dark:bg-fgcDark w-full text-text dark:text-textDark rounded-2xl sm:rounded-[20px] p-4 sm:p-6 relative shadow-[0_20px_35px_rgba(0,0,0,0.05)]">
							<div className="flex items-center justify-between mb-4">
								<p className="font-medium text-base sm:text-xl">Air Quality Index</p>
								<a href="#" className="text-sm underline text-text dark:text-textDark">
									View Details
								</a>
							</div>
							<div className="flex items-center gap-4 sm:gap-6">
								<div className="relative w-16 h-16">
									<svg className="rotate-[-90deg]" viewBox="0 0 36 36">
										<path
											className="text-gray-700"
											d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
											fill="none"
											stroke="currentColor"
											stroke-width="3.8"
										/>
										{/* <path
											className="text-yellow-500"
											d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 29"
											fill="none"
											stroke="currentColor"
											stroke-width="3.8"
											stroke-dasharray="93, 100"
										/> */}
									</svg>
									<span className="absolute inset-0 flex items-center justify-center font-bold -top-4 sm:top-0 text-xs sm:text-lg">
										00
									</span>
								</div>

								<div>
									<p className="text-base sm:text-xl font-medium">Satisfactory</p>
									<p className="text-xs sm:text-sm text-textSecondary">
										May cause minor breathing discomfort to sensitive people.
									</p>
								</div>
							</div>
						</div>

						<div className="bg-fgc dark:bg-fgcDark w-full text-text dark:text-textDark rounded-2xl sm:rounded-[20px] p-4 sm:p-6 relative shadow-[0_20px_35px_rgba(0,0,0,0.05)]">
							<div className="flex items-center justify-between mb-4">
								<p className="font-medium text-base sm:text-xl">Health & Activities</p>
								<a href="#" className="text-sm underline text-text dark:text-textDark">
									View Details
								</a>
							</div>
							<div className="flex items-center gap-4 sm:gap-6">
								<div className="relative w-16 h-16">
									<svg className="rotate-[-90deg]" viewBox="0 0 36 36">
										<path
											className="text-gray-700"
											d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
											fill="none"
											stroke="currentColor"
											stroke-width="3.8"
										/>
										{/* <path
											className="text-yellow-500"
											d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 29"
											fill="none"
											stroke="currentColor"
											stroke-width="3.8"
											stroke-dasharray="93, 100"
										/> */}
									</svg>
									<div className="absolute inset-0 flex items-center justify-center text-white -top-4 sm:top-0 text-xs sm:text-lg">
										🏃‍♂️
									</div>
								</div>

								<div>
									<p className="text-base sm:text-xl font-medium">
										Seasonal Allergies and Pollen Count Forecast
									</p>
									<p className="text-xs sm:text-sm text-textSecondary">
										Grass pollen is moderate in your area
									</p>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</motion.section>
	);
}
