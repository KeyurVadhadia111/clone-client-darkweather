import { Button } from "components/utils/Button";
import { Card, CardContent } from "components/utils/Card";
import { Input } from "components/utils/Input";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useAppState } from "components/utils/useAppState";
import { toast } from "components/utils/toast";
import { useState } from "react";
import OtpInput from "components/common/otpInput";
import CountDown from "components/common/CountDown";

function ForgotPasswordPage() {
	const [{ isDark, userDetails }, setAppState] = useAppState();
	const [step, setStep] = useState(1);
	const [countDownTimer, setCountDownTimer] = useState(Date.now() + 10);

	const schema = yup.object({
		email: yup.string().email("Invalid email").required("Email is required"),
		otp: yup
			.string()
			.optional()
			.when([], {
				is: () => step === 2,
				then: schema =>
					schema
						.required("OTP is required")
						.matches(/^\d{6}$/, "Invalid OTP. Please enter 6 digits")
						.min(6, "OTP must be 6 digits")
						.max(6, "OTP must be 6 digits"),
				otherwise: schema => schema.optional(),
			}),
		password: yup
			.string()
			.optional()
			.when([], {
				is: () => step === 3,
				then: schema =>
					schema.required("Password is required").min(8, "Password must be at least 8 characters"),
				otherwise: schema => schema.optional(),
			}),
		confirmPassword: yup
			.string()
			.optional()
			.when([], {
				is: () => step === 3,
				then: schema =>
					schema
						.required("Confirm password is required")
						.oneOf([yup.ref("password")], "Passwords must match"),
				otherwise: schema => schema.optional(),
			}),
	});

	type IForgotPasswordFormData = yup.InferType<typeof schema>;

	const {
		register,
		handleSubmit,
		reset,
		setValue,
		trigger,
		formState: { errors },
	} = useForm<any>({
		resolver: yupResolver(schema),
		defaultValues: {
			email: "",
			otp: "",
			password: "",
			confirmPassword: "",
		},
	});

	const onSubmit = (data: IForgotPasswordFormData) => {
		if (step === 1) {
			// Send OTP to email
			toast.success("OTP sent to your email!");
			setStep(2);
			setCountDownTimer(Date.now() + 60000);
			return;
		}

		if (step === 2) {
			// Verify OTP
			toast.success("OTP verified successfully!");
			setStep(3);
			return;
		}

		if (step === 3) {
			// Reset password
			toast.success("Password reset successfully!");
			setStep(4);
			reset();
			return;
		}
	};

	const resendOtp = () => {
		setCountDownTimer(Date.now() + 60000);
		toast.success("OTP resent to your email!");
	};

	return (
		<>
			<div className="container grid sm:grid-cols-2 grid-cols-1 justify-between min-h-[calc(100dvh-311px)] sm:min-h-auto">
				{/* Left Side Image */}
				<img
					className="max-w-[784px] sm:block hidden -ml-[134px]"
					alt="Person with umbrella"
					src="/assets/images/person-with-umbrella-new.svg"
				/>

				{/* ForgotPasswordPage Card */}
				<div className="w-full max-w-[570px] relative sm:mt-[54px] mt-6 justify-self-end">
					<img
						className="sm:w-[122px] sm:h-[122px] w-[60px] h-[60px] mx-auto mb-4 absolute left-1/2 transform -translate-x-1/2 sm:-top-[38px] z-0 -top-6"
						alt="Weather icon"
						src="/assets/images/sun.png"
					/>

					<Card className="w-full rounded-[20px] relative z-0">
						<CardContent className="sm:!p-8 flex flex-col sm:gap-6 gap-6 !p-4">
							{step === 4 ? (
								<div className="text-center">
									<img
										className="w-[195px] sm:w-[327px] h-auto mx-auto mb-4"
										src={`/assets/images/success-shield${isDark ? "-dark" : ""}.svg`}
										alt="Success"
									/>
									<h1 className="font-bold sm:text-5xl sm:leading-[72px] text-2xl mb-2.5">
										<span className="text-text dark:text-textDark">Successfully</span>
									</h1>
									<p className="font-normal text-textSecondary dark:text-textDark sm:text-base text-xs tracking-[0.80px] leading-6">
										Your password has been reset
									</p>
									<Link to="/login" className="block w-full mt-6">
										<Button type="button" className="w-full">
											Go to Log in
										</Button>
									</Link>
								</div>
							) : (
								<>
									{/* Card Header */}
									<div className="text-center">
										<h1 className="font-bold sm:text-5xl sm:leading-[72px] text-2xl mb-2.5">
											{step === 2 ? (
												<span className="text-text dark:text-textDark">OTP</span>
											) : (
												<>
													<span className="text-text dark:text-textDark">
														{step === 3 ? "New" : "Forgot"}{" "}
													</span>
													<span className="text-primary">Password</span>
												</>
											)}
										</h1>
										<p className="font-normal text-textSecondary dark:text-textDark sm:text-base text-xs tracking-[0.80px] leading-6">
											{step === 1
												? "Enter your email address and we'll send you instructions to reset your password."
												: step === 2
													? "We have sent a verification code to your email ID. Please check."
													: "Must be at least 8 characters."}
										</p>
									</div>

									{/* Form */}
									<form
										onSubmit={handleSubmit(onSubmit)}
										className="flex flex-col sm:gap-[32px] gap-4">
										<div className="flex flex-col sm:gap-5 gap-4">
											{step === 1 && (
												<Input
													placeholder="Email"
													{...register("email")}
													error={errors?.email?.message?.toString()}
												/>
											)}

											{step === 2 && (
												<div className="flex flex-col gap-2">
													<OtpInput
														onOtpChange={(otp: string) => {
															setValue("otp", otp);
															trigger("otp");
														}}
													/>
													{errors?.otp && (
														<span className="text-red-500 text-sm pl-4 sm:pl-9">
															{errors.otp.message?.toString()}
														</span>
													)}
												</div>
											)}

											{step === 3 && (
												<>
													<Input
														type="password"
														placeholder="Password"
														{...register("password")}
														error={errors?.password?.message?.toString()}
													/>
													<Input
														type="password"
														placeholder="Confirm Password"
														{...register("confirmPassword")}
														error={errors?.confirmPassword?.message?.toString()}
													/>
												</>
											)}
										</div>

										<Button type="submit">
											{step === 1 ? "Submit" : step === 2 ? "Submit" : "Submit"}
										</Button>
									</form>

									{step === 2 && (
										<>
											{/* Resend Link */}
											<div className="flex items-center justify-center gap-2 text-sm sm:text-base">
												<span className="font-normal text-text dark:text-textDark text-center">
													Didn’t receive the email?
												</span>
												<CountDown
													targetTime={countDownTimer}
													onCountDownComplete={() => {
														resendOtp();
													}}
												/>
											</div>
										</>
									)}
									{/* Login Link */}
									<div className="flex items-center justify-center gap-2">
										<span className="font-normal text-text dark:text-textDark text-base text-center leading-6">
											Already have an account?
										</span>
										<Link
											to="/login"
											className="!p-0 h-auto font-medium !text-primary text-base leading-6">
											Log In
										</Link>
									</div>
								</>
							)}
						</CardContent>
					</Card>
				</div>
			</div>
		</>
	);
}

export default ForgotPasswordPage;
