import { toast as toastify } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const getToastConfig = () => ({
	position: "top-right" as const,
	autoClose: 3000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	theme:
		localStorage.theme === "dark" ||
		(!localStorage.theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
			? "dark"
			: "light",
});

export const toast = {
	success: (message: string) => {
		toastify.success(message, getToastConfig());
	},
	error: (message: string) => {
		toastify.error(message, getToastConfig());
	},
	info: (message: string) => {
		toastify.info(message, getToastConfig());
	},
	warning: (message: string) => {
		toastify.warning(message, getToastConfig());
	},
};
