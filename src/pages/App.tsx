import Footer from "components/layout/Footer";
import Header from "components/layout/Header";
import { Outlet, useLocation } from "react-router-dom";
import "swiper/css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastIcons } from "components/utils/toast-icons";
import { useAppState } from "components/utils/useAppState";

function App() {
	const [{ premiumStep }, setAppState] = useAppState();

	const location = useLocation();
	const isAuthPage =
		location.pathname === "/login" || location.pathname === "/register" || location.pathname === "/forgot-password";

	return (
		<div className="bg-bgc dark:bg-bgcDark flex flex-row justify-center w-full">
			<div className="overflow-hidden w-full h-full min-h-screen">
				<div className="flex flex-col w-full items-end relative">
					{isAuthPage ? (
						<div
							className={`w-full fixed bg-cover h-full top-0 left-auto overflow-visible bg-no-repeat bg-top  bg-[url('/assets/images/footer-bg.png')]`}
						/>
					) : (
						<>
							{location.pathname === "/" ? (
								<div
									className={`w-full absolute bg-[length:400%] sm:bg-[length:100%] h-[818px] top-0 left-auto overflow-visible bg-no-repeat bg-top bg-[url('/assets/images/bg/home-header-bg.png')] dark:bg-[url('/assets/images/bg/home-header-bg-dark.png')]`}
								/>
							) : (
								<div
									className={`z-[1] w-full absolute bg-[length:100%_275px] sm:bg-[length:100%_735px] bg-repeat-y bg-left-top h-[275px] sm:h-[735px] top-0 left-auto overflow-visible bg-[url('/assets/images/bg/home-header-bg.png')] dark:bg-[url('/assets/images/bg/home-header-bg-dark.png')] bg-bgc dark:bg-bgcDark  ${location.pathname === "/premium-plan" && premiumStep !== 1 && "h-[275px] sm:!h-[575px]"}`}
								/>
							)}
						</>
					)}

					{isAuthPage ? (
						<div
							className={`absolute inset-0 bg-gradient-to-b from-white/0  ${isAuthPage ? "via-white/90 dark:via-bgcDark dark:h-[calc(100%-369px)]" : "via-white/70 dark:via-bgcDark"} to-white dark:from-bgcDark/70  sm:dark:via-bgcDark/90 dark:to-bgcDark ${!isAuthPage && "dark:h-[818px] h-[760px] sm:h-[840px]"} ${location.pathname === "/forecast" && "!h-[442px] sm:!h-[488px]"} ${location.pathname === "/premium-plan" && premiumStep !== 1 && "!h-[275px] sm:!h-[440px]"} ${location.pathname === "/premium-plan" && premiumStep !== 1 && "z-1 via-white/90 sm:via-white/100 sm:dark:via-bgcDark/100 !h-[275px] sm:!h-[883px]"}`}
						/>
					) : (
						<>
							{/* {location.pathname === "/" ? '' : (
								<div
									className={`z-[1] hidden dark:block absolute inset-0 bg-gradient-to-b from-white/0 via-white/70 dark:via-bgcDark to-white dark:from-bgcDark/70  sm:dark:via-bgcDark/90 dark:to-bgcDark h-[275px] sm:h-[735px] ${location.pathname === "/premium-plan" && premiumStep !== 1 && "h-[275px] sm:!h-[275px]"}`}
								/>
							)} */}
						</>
					)}

					{/* Cloud images */}
					{!isAuthPage && location.pathname !== "/premium-plan" ? (
						<>
							<img
								className="hidden sm:block absolute w-[136px] sm:w-[214px] h-auto top-28 sm:top-48 -left-20 sm:-left-28 scale-x-[-1]"
								alt="Weather icon"
								src="assets/images/cloud-cover.svg"
							/>

							<img
								className="hidden sm:block absolute w-[136px] sm:w-[214px] h-auto top-28 sm:top-64 -right-16 sm:-right-[120px] scale-x-[-1]"
								alt="Weather icon"
								src="assets/images/cloud-cover.svg"
							/>
						</>
					) : (
						""
					)}

					{/* Header Navigation */}
					<Header />

					{/* Main Content */}
					<main className="z-[1] relative w-full min-h-[calc(100vh-470px)]">
						<Outlet />
					</main>

					{/* Footer Section */}
					<Footer />
					<ToastContainer toastClassName={"!rounded-2xl"} icon={({ type }) => ToastIcons[type]?.() || null} />
				</div>
			</div>
		</div>
	);
}

export default App;
