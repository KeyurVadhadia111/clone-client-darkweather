import Footer from "components/layout/Footer";
import Header from "components/layout/Header";
import { Outlet, useLocation } from "react-router-dom";
import "swiper/css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastIcons } from "components/utils/toast-icons";

function App() {
	const location = useLocation();
	const isAuthPage = location.pathname === "/login" || location.pathname === "/register";

	return (
		<div className="bg-white dark:bg-bgcDark flex flex-row justify-center w-full">
			<div className="overflow-hidden w-full h-full min-h-screen">
				<div className="flex flex-col w-full items-end relative">
					<div
						className={`w-full ${isAuthPage ? "fixed bg-cover" : "absolute bg-[length:400%] sm:bg-[length:100%]"} h-full top-0 left-auto overflow-visible bg-no-repeat bg-top  bg-[url('/assets/images/footer-bg.png')]`}
					/>

					<div
						className={`absolute inset-0 bg-gradient-to-b from-white/0  ${isAuthPage ? "via-white/90 dark:via-bgcDark" : "via-white/70 dark:via-bgcDark"} to-white dark:from-bgcDark/70  sm:dark:via-bgcDark/90 dark:to-bgcDark ${!isAuthPage && "dark:h-[818px] h-[760px] sm:h-[840px]"} ${location.pathname === "/forecast" && "!h-[442px] sm:!h-[488px]"}`}
					/>

					{/* Cloud images */}
					{!isAuthPage ? (
						<>
							<img
								className="absolute w-[136px] sm:w-[214px] h-auto top-28 sm:top-48 -left-20 sm:-left-28 scale-x-[-1]"
								alt="Weather icon"
								src="assets/images/cloud.png"
							/>

							<img
								className="absolute w-[136px] sm:w-[214px] h-auto top-28 sm:top-64 -right-16 sm:-right-[120px] scale-x-[-1]"
								alt="Weather icon"
								src="assets/images/cloud.png"
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
