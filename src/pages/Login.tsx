import { Button } from "components/utils/Button";
import { Card, CardContent } from "components/utils/Card";
import { Checkbox } from "components/utils/checkbox";
import { Input } from "components/utils/Input";
import { Separator } from "components/utils/Separator";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

function Login() {
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
		console.log("Form Data", data);
		reset();
	};

	return (
		<>
			<div
				className="flex justify-between items-center sm:py-20
			py-6">
				{/* Left Side Image */}
				<img
					className="w-full max-w-[720px] sm:block hidden -ml-[150px]"
					alt="Person with umbrella"
					src="/assets/images/person-with-umbrella.svg"
				/>

				{/* Login Card */}
				<div className="w-full max-w-[570px] relative">
					<img
						className="sm:w-[122px] sm:h-[122px] w-[60px] h-[60px] mx-auto mb-4 absolute left-1/2 transform -translate-x-1/2 -sm:top-14 z-0 -top-6"
						alt="Weather icon"
						src="/assets/images/sun.png"
					/>

					<Card className="w-full rounded-[20px] relative z-0">
						<CardContent className="sm:!p-10 space-y-6 sm:space-y-10 !p-4">
							{/* Card Header */}
							<div className="text-center space-y-4">
								<h1 className="font-bold sm:text-5xl sm:leading-[72px] text-2xl">
									<span className="text-[#1c282b]">Welcome </span>
									<span className="text-[#ffa500]">Back!</span>
								</h1>
								<p className="font-normal text-[#808080] sm:text-base text-xs tracking-[0.80px] leading-6">
									Please Enter Your Details to Log In.
								</p>
							</div>

							{/* Login Form */}
							<form onSubmit={handleSubmit(onSubmit)} className="sm:space-y-[30px] space-y-4">
								<div className="sm:space-y-[30px] space-y-4">
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
												className="font-normal text-[#1b1b1b] sm:text-base text-sm">
												Remember me
											</label>
										</div>
										<Link
											to={"#"}
											className="h-auto font-medium text-[#1b1b1b] sm:text-base text-sm leading-6">
											Forgot Password?
										</Link>
									</div>
								</div>

								{/* Login Button */}
								<Button
									variant="none"
									className="w-full px-8 bg-[#FFA500] text-[#1c282b] rounded-xl hover:bg-[#ffa500]/90 font-semibold text-base">
									Log In
								</Button>
							</form>

							{/* Or Divider */}
							<div className="flex items-center justify-center gap-2">
								<Separator className="!w-[50px]" />
								<span className="font-medium text-[#808080] text-sm text-center leading-[21px]">
									Or Log In With
								</span>
								<Separator className="!w-[50px]" />
							</div>

							{/* Social Login Options */}
							<div className="flex items-start sm:gap-6 gap-4">
								<Button
									variant="outline"
									className="flex-1 justify-center sm:gap-4 px-4 bg-neutral-50 rounded-xl border-0 hover:bg-neutral-100 gap-2 py-6 sm:py-4">
									<img className="w-6 sm:w-auto" src="/assets/images/google-logo.svg" />
									<span className="font-normal text-[#868686] text-base text-center leading-6">
										Google
									</span>
								</Button>
								<Button
									variant="outline"
									className="flex-1 justify-center sm:gap-4 px-4 bg-neutral-50 rounded-xl border-0 hover:bg-neutral-100 gap-2 py-6 sm:py-4">
									<img className="w-6 sm:w-auto" src="/assets/images/apple-logo.svg" />
									<span className="font-normal text-[#868686] text-base text-center leading-6">
										Apple
									</span>
								</Button>
							</div>

							{/* Register Link */}
							<div className="flex items-center justify-center gap-2">
								<span className="font-normal text-[#1c282b] text-base text-center leading-6">
									Don&apos;t have an account?
								</span>
								<Link
									to={"/"}
									className="!p-0 h-auto font-medium !text-[#ffa500] text-base leading-6">
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
