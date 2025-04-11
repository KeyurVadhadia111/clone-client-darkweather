import Footer from "components/layout/Footer";
import Header from "components/layout/Header";
import { Outlet } from "react-router-dom";

function App() {
	return (
		<div className="bg-white flex flex-row justify-center w-full">

			<div className="bg-white overflow-hidden w-full h-full min-h-screen">

				<div className="flex flex-col w-full items-end relative">
					{/* <img
						className="fixed w-full auto top-0 left-0 "
						alt="Footer background"
						src="assets/images/footer-bg.png"
					/> */}
					<div
						className="fixed w-full h-full top-0 left-auto overflow-visible bg-no-repeat bg-top bg-cover bg-[url('/assets/images/footer-bg.png')] "
					/>
					<div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/90 to-white dark:from-bgcDark/70 dark:via-bgcDark sm:dark:via-bgcDark/90 dark:to-bgcDark" />
					{/* Header Navigation */}
					<Header />

					{/* Main Content */}
					<main className="z-[1] container relative w-full min-h-[calc(100vh-470px)]">
						<Outlet />
					</main>

					{/* Footer Section */}
					<Footer />
				</div>
			</div>
		</div>
	);
}

export default App;
