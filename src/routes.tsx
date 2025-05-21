import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { initialState, StateProvider, useAppState } from "components/utils/useAppState";
import AccessDisabled from "pages/AccessDisabled";
import App from "pages/App";
import Login from "pages/Login";
import Register from "pages/Register";
import LandingPage from "pages/LandingPage";
import ForecastPage from "pages/ForecastPage";
import PremiumPlanPage from "pages/PremiumPlanPage";
import AlertsPage from "pages/AlertsPage";
import ForgotPasswordPage from "pages/ForgotPasswordPage";
import WeatherAiPage from "pages/WeatherAiPage";
import { AirQualityIndexPage } from "pages/AirQualityIndexPage";
import Settings from "pages/Settings";
import TopStoriesPage from "pages/TopStoriesPage";
import TopStoryPage from "pages/TopStoryPage";
import HealthActivities from "pages/HealthActivities";
import ContactUs from "pages/ContactUs";
import FAQ from "pages/FAQPage";
import AboutUs from "pages/AboutUs";

declare global {
	interface Window {
		maintenance: boolean;
	}
}
const queryClient = new QueryClient();

const reducer = (state: any, action = {}) => {
	return {
		...state,
		...action,
	};
};

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const location = useLocation();
	const [{ userDetails }, setAppState] = useAppState();
	const user = JSON.parse(localStorage.getItem("auth") || "{}");

	const isAuthPage =
		location.pathname === "/login" ||
		location.pathname === "/register" ||
		location.pathname === "/forgot-password" ||
		location.pathname === "/forecast";

	if (location.pathname === "/") {
		return <>{children}</>;
	}
	if (user?._id) {
		// User is logged in, block access to login/register
		if (isAuthPage) {
			return <Navigate to="/" replace />;
		}
		// Allow access to other routes
		return <>{children}</>;
	} else {
		// Not logged in, allow access only to login/register
		if (isAuthPage) {
			return <>{children}</>;
		}
		setAppState({ userDetails: {} });
		// Redirect to login for protected routes
		return <Navigate to="/login" replace />;
	}
};

const createRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<StateProvider initialState={initialState} reducer={reducer}>
				<QueryClientProvider client={queryClient}>
					<Routes>
						<Route path="/" element={<App />}>
							<Route
								path="/"
								element={
									<ProtectedRoute>
										<LandingPage />
									</ProtectedRoute>
								}
							/>
							<Route
								path="/login"
								element={
									<ProtectedRoute>
										<Login />
									</ProtectedRoute>
								}
							/>
							<Route
								path="/forgot-password"
								element={
									<ProtectedRoute>
										<ForgotPasswordPage />
									</ProtectedRoute>
								}
							/>
							<Route
								path="/register"
								element={
									<ProtectedRoute>
										<Register />
									</ProtectedRoute>
								}
							/>

							<Route
								path="/forecast"
								element={
									// <ProtectedRoute>
									<ForecastPage />
									// </ProtectedRoute>
								}
							/>
							<Route
								path="/premium-plan"
								element={
									<ProtectedRoute>
										<PremiumPlanPage />
									</ProtectedRoute>
								}
							/>
							<Route
								path="/alerts"
								element={
									<ProtectedRoute>
										<AlertsPage />
									</ProtectedRoute>
								}
							/>
							<Route
								path="/weather-ai"
								element={
									<ProtectedRoute>
										<WeatherAiPage />
									</ProtectedRoute>
								}
							/>
							<Route
								path="/air-quality-index"
								element={
									<ProtectedRoute>
										<AirQualityIndexPage />
									</ProtectedRoute>
								}
							/>
							<Route
								path="/settings"
								element={
									<ProtectedRoute>
										<Settings />
									</ProtectedRoute>
								}
							/>
							<Route
								path="/top-stories"
								element={
									<ProtectedRoute>
										<TopStoriesPage />
									</ProtectedRoute>
								}
							/>
							<Route
								path="/top-story/:id"
								element={
									<ProtectedRoute>
										<TopStoryPage />
									</ProtectedRoute>
								}
							/>
							<Route
								path="/health-activities"
								element={
									<ProtectedRoute>
										<HealthActivities />
									</ProtectedRoute>
								}
							/>
							<Route
								path="/contact-us"
								element={
									<ProtectedRoute>
										<ContactUs />
									</ProtectedRoute>
								}
							/>
							<Route
								path="/faq"
								element={
									<ProtectedRoute>
										<FAQ />
									</ProtectedRoute>
								}
							/>
							<Route
								path="/about-us"
								element={
									<ProtectedRoute>
										<AboutUs />
									</ProtectedRoute>
								}
							/>
							<Route path="access_disabled" element={<AccessDisabled />} />
							<Route path="*" element={<Navigate to="/" />} />
						</Route>
					</Routes>
				</QueryClientProvider>
			</StateProvider>
		</BrowserRouter>
	);
};

export default createRoutes;
