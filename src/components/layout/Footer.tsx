import { Button } from "components/utils/Button";
import { Link } from "react-router-dom";

export default function Footer() {
	// Navigation menu items
	const navItems = [
		{ title: "Home", href: "#" },
		{ title: "Radar & Maps", href: "#" },
		{ title: "Weather A.I.", href: "#" },
		{ title: "Go Premium", href: "#" },
		{ title: "Top Stories", href: "#" },
		{ title: "Alerts", href: "#" },
	];

	return (
		<footer className="flex flex-col w-full items-start relative">
			<div className="absolute w-full h-[470px] sm:h-[409px] bottom-0 left-0 bg-gradient-to-t from-white/0 to-white"></div>
			<img
				className="absolute w-full h-[300px] sm:h-[409px] bottom-0 left-0 "
				alt="Footer background"
				src="assets/images/footer-bg.png"
			/>

			{/* Footer Navigation */}
			<div className="z-[1] gap-4 sm:gap-[30px] px-6 sm:px-[135px] py-6 sm:py-12 border-b [border-bottom-style:solid] border-transparent shadow-[inset_0px_30px_30px_#ffffff0d] [border-image:linear-gradient(90deg,#ffffff50,#ffffff70,#ffffff)_1] flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
				<img className="relative h-8 sm:h-[60px]" alt="Dark Weather Logo" src="assets/images/logo-light.svg" />

				<nav className="w-full flex items-center justify-center flex-wrap gap-4 sm:gap-12 text-text sm:text-text text-sm sm:text-base">
					{navItems.map((item, index) => (
						<Link key={index} to={item.href} aria-label={item.title} className="tracking-[0.80px] text-text-dark hover:text-blue-50 dark:text-text">
							{item.title}
						</Link>
					))}
				</nav>

				<Button
					variant="outline"
					className="inline-flex items-center justify-center gap-4 px-6 !py-0 !bg-white/20 rounded-xl border-0 text-text !cursor-pointer !h-[42px] sm:!h-14">
					<span className="!font-semibold text-text">Light Mode</span>
					<img className="w-6 h-6" alt="Sun icon" src="assets/images/sun.png" />
				</Button>

				<img
					className="absolute w-[136px] sm:w-[214px] h-auto top-20 sm:top-[45px] -left-20 sm:-left-24"
					alt="Weather icon"
					src="assets/images/cloud.png"
				/>

				<img
					className="absolute w-[136px] sm:w-[214px] h-auto top-20 sm:top-[15px] -right-20 sm:-right-24"
					alt="Weather icon"
					src="assets/images/cloud.png"
				/>
			</div>

			{/* Copyright Section */}
			<div className="z-[1] px-6 sm:px-[135px] py-4 sm:py-6 flex flex-col items-center relative self-stretch w-full flex-[0_0_auto] text-xs sm:text-base">
				<div className="flex flex-col gap-4 sm:gap-9 sm:flex-row items-center justify-between container">
					<p className="[font-family:'Rubik',Helvetica] font-normal text-text tracking-[0.80px] leading-6">
						© 2025 Dark Weather. All rights reserved.
					</p>

					<div className="flex items-center gap-6">
						<Link to={"/"} className="text-text tracking-[0.80px]">
							Privacy Policy
						</Link>
						<Link to={"/"} className="text-text tracking-[0.80px]">
							Terms And Conditions
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
