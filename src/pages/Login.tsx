import { Button } from "components/utils/Button";
import { Card, CardContent } from "components/utils/Card";
import { Checkbox } from "components/utils/checkbox";
import { Input } from "components/utils/Input";
import { Separator } from "components/utils/Separator";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Icon from "components/utils/Icon";
import { useAppState } from "components/utils/useAppState";
import { toast } from "components/utils/toast";

function Login() {
	const [{ userDetails }, setAppState] = useAppState();

	const schema = yup.object({
		email: yup.string().email("Invalid email").required("Email is required"),
		password: yup.string().min(8, "Password must be at least 6 characters").required("Password is required"),
		remember: yup.boolean().default(false).required(),
	});
	type ILoginFormData = yup.InferType<typeof schema>;

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ILoginFormData>({
		resolver: yupResolver(schema),
		defaultValues: {
			email: "",
			password: "",
			// remember: false,
		},
	});

	const onSubmit = (data: ILoginFormData) => {
		const userDetails = JSON.parse(JSON.stringify(data));
		userDetails._id = Math.floor(Math.random() * 10000000000).toString();
		localStorage.setItem("auth", JSON.stringify(userDetails));
		setAppState({ userDetails: userDetails });
		toast.success("Login successful!");
		reset();
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

				{/* Login Card */}
				<div className="w-full max-w-[570px] relative sm:mt-[54px] mt-6 justify-self-end">
					<img
						className="sm:w-[122px] sm:h-[122px] w-[60px] h-[60px] mx-auto mb-4 absolute left-1/2 transform -translate-x-1/2 sm:-top-[38px] z-0 -top-6"
						alt="Weather icon"
						src="/assets/images/sun.png"
					/>

					<Card className="w-full rounded-[20px] relative z-0">
						<CardContent className="sm:!p-8 flex flex-col sm:gap-6 gap-6 !p-4">
							{/* Card Header */}
							<div className="text-center">
								<h1 className="font-bold sm:text-5xl sm:leading-[72px] text-2xl mb-2.5">
									<span className="text-text dark:text-textDark">Welcome </span>
									<span className="text-primary">Back!</span>
								</h1>
								<p className="font-normal text-textSecondary dark:text-textDark sm:text-base text-xs tracking-[0.80px] leading-6">
									Please Enter Your Details to Log In.
								</p>
							</div>

							{/* Login Form */}
							<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:gap-[32px] gap-4">
								<div className="flex flex-col sm:gap-5 gap-4">
									<div className="">
										<Input
											placeholder="Email"
											{...register("email")}
											error={errors?.email?.message?.toString()}
										/>
									</div>

									<div className="">
										<Input
											type="password"
											placeholder="Password"
											{...register("password")}
											error={errors?.password?.message?.toString()}
										/>
									</div>

									<div className="flex items-center justify-between">
										<div className="flex items-center gap-2">
											<Checkbox id="remember" className="" defaultChecked />
											<label
												htmlFor="remember"
												className="font-normal text-text dark:text-textDark sm:text-base text-sm">
												Remember me
											</label>
										</div>
										<Link
											to={"/forgot-password"}
											className="h-auto font-medium text-text dark:text-textDark sm:text-base text-sm leading-6">
											Forgot Password?
										</Link>
									</div>
								</div>

								{/* Login Button */}
								<Button type="submit">Log In</Button>
							</form>

							{/* Or Divider */}
							<div className="flex items-center justify-center gap-2">
								<Separator className="!w-[50px]" />
								<span className="font-medium text-textSecondary dark:text-textDark text-sm text-center leading-[21px]">
									Or Log In With
								</span>
								<Separator className="!w-[50px] !bg-gradient-to-r" />
							</div>

							{/* Social Login Options */}
							<div className="flex items-start sm:gap-6 gap-4">
								<Button
									variant="none"
									className="flex-1 justify-center sm:gap-4 px-4 bg-fgc dark:bg-fgcDark rounded-xl border-0 hover:bg-neutral-100 dark:hover:bg-neutral-700 gap-2 py-6 sm:py-4 ">
									<img className="w-6 sm:w-auto" src="/assets/images/google-logo.svg" />
									<span className="font-semibold text-textTurnery dark:text-textDark text-base text-center leading-6">
										Google
									</span>
								</Button>
								<Button
									variant="none"
									className="flex-1 justify-center sm:gap-4 px-4 bg-fgc dark:bg-fgcDark rounded-xl border-0 hover:bg-neutral-100 dark:hover:bg-neutral-700 gap-2 py-6 sm:py-4">
									<Icon
										className="w-6 h-6 sm:w-8 sm:h-8 text-text dark:text-textDark"
										icon="apple-logo"
									/>
									<span className="font-semibold text-textTurnery dark:text-textDark text-base text-center">
										Apple
									</span>
								</Button>
							</div>

							{/* Register Link */}
							<div className="flex items-center justify-center gap-2 ">
								<span className="font-normal text-text dark:text-textDark text-base text-center leading-6">
									Don&apos;t have an account?
								</span>
								<Link
									to={"/register"}
									className="!p-0 h-auto font-medium !text-primary text-base leading-6">
									Register
								</Link>
							</div>
						</CardContent>
					</Card>
				</div>
			</div>
		</>
	);
}

export default Login;
