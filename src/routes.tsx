import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { initialState, StateProvider } from "components/utils/useAppState";
import AccessDisabled from "pages/AccessDisabled";
import App from "pages/App";
import Login from "pages/Login";
import Register from "pages/Register";

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

const ProtectedRoute: React.FC<{ children: any }> = ({ children }) => {
	// const response = checkTelegramValidation();
	// if (!response.isAllow) {
	// 	return <Navigate to="/access_disabled" />;
	// }
	return children;
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
										<Login />
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
