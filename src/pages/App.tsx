import Footer from "components/layout/Footer";
import Header from "components/layout/Header";
import { Outlet } from "react-router-dom";

function App() {

	return (
		<div className="bg-white flex flex-row justify-center w-full">
			<div className="bg-white overflow-hidden [background:linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(255,255,255,1)_72%,rgba(255,255,255,1)_100%),url(/assets/images/main-bg.png)_50%_50%_/_cover] w-full h-full min-h-screen">
				<div className="flex flex-col w-full items-end relative">
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
