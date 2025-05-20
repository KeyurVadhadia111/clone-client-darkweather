import React, { JSX, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "components/utils/Input";
import Select from "components/utils/Select";
import { Button } from "components/utils/Button";
import Icon from "components/utils/Icon";
import { Separator } from "components/utils/Separator";
import SuccessfullyMessage from "components/common/SuccessfullyMessage";

const ContactUs = (): JSX.Element => {
	// Yup schema
	const schema = yup.object().shape({
		fullName: yup.string().required("Full Name is required"),
		email: yup.string().email("Invalid email address").required("Email is required"),
		phoneNumber: yup.string().notRequired(),
		subject: yup.string().required("Subject is required"),
		message: yup.string().required("Message is required"),
	});

	const {
		register,
		handleSubmit,
		trigger,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const Subject = [
		{
			value: "General Inquiry",
			text: "General Inquiry",
		},
		{
			value: "Technical Support",
			text: "Technical Support",
		},
		{
			value: "Feedback",
			text: "Feedback",
		},
	];

	const [contactCards, setContactCards] = useState([
		{
			icon: "call-calling",
			iconAlt: "Call calling",
			title: "Call",
			value: "(555) 123-4567",
		},
		{
			icon: "sms",
			iconAlt: "Vuesax linear sms",
			title: "Email",
			value: "support@darkweather.com",
		},
		{
			icon: "location",
			iconAlt: "Vuesax linear",
			title: "Location",
			value: "123 Maplewood Lane Springfield, IL 62704 USA",
		},
	]);

	const [Step, setStep] = useState(1);

	const onSubmit = async (data: any) => {
		setStep(2);
		toast.success("Message sent successfully!");
	};

	return (
		<div className="container relative self-stretch  my-6 sm:my-[60px] ">
			{Step === 1 && (
				<>
					<div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-[30px] bg-bgc dark:bg-fgcDark p-4 sm:p-[30px] w-full  rounded-[20px] shadow-[0px_20px_35px_#0000000d] mb-6 sm:mb-[60px]">
						<form
							onSubmit={handleSubmit(onSubmit)}
							className="flex flex-col w-full sm:w-[540px] items-start gap-4 sm:gap-[30px] relative">
							<p className="font-semibold text-text dark:text-textDark text-lg sm:text-2xl sm:leading-9">
								We'd love to hear from you! Let's get in touch
							</p>

							<Separator className="bg-textSecondary/20 dark:!bg-textSecondary/30 !bg-none" />

							<div className="flex flex-col items-start gap-4 relative self-stretch w-full">
								<div className="flex flex-col sm:flex-row items-start gap-4 w-full">
									{/* Full Name */}
									<div className="flex flex-col gap-3 w-full">
										<label className="text-sm font-medium text-textSecondary dark:text-textDark">
											Full Name <span className="text-[#e5646c]">*</span>
										</label>
										<Input
											type="text"
											{...register("fullName")}
											className="!bg-transparent !border !border-textSecondary/20"
											placeholder="Enter Your Name"
											error={errors.fullName?.message}
										/>
									</div>

									{/* Email */}
									<div className="flex flex-col gap-3 w-full">
										<label className="text-sm font-medium text-textSecondary dark:text-textDark">
											Email <span className="text-[#e5646c]">*</span>
										</label>
										<Input
											type="email"
											{...register("email")}
											className="!bg-transparent !border !border-textSecondary/20"
											placeholder="Enter Your Email"
											error={errors.email?.message}
										/>
									</div>
								</div>

								<div className="flex flex-col sm:flex-row items-start gap-4 w-full">
									{/* Phone Number */}
									<div className="flex flex-col gap-3 w-full">
										<label className="text-sm font-medium text-textSecondary dark:text-textDark">
											Phone number
										</label>
										<Input
											type="text"
											{...register("phoneNumber")}
											className="!bg-transparent !border !border-textSecondary/20"
											placeholder="Enter Your Phone number"
											error={errors.phoneNumber?.message}
										/>
									</div>

									{/* Subject */}
									<div className="flex flex-col gap-3 w-full">
										<Select
											{...register("subject")}
											label={"Choose a topic"}
											items={Subject}
											error={errors?.subject?.message?.toString()}
											register={register}
											trigger={trigger}
											required
											className="!py-2.5 sm:!py-[15px] !bg-bgc dark:!bg-fgcDark "
										/>
									</div>
								</div>

								{/* Message */}
								<div className="flex flex-col gap-3 w-full">
									<label className="text-sm font-medium text-textSecondary dark:text-textDark">
										Your Message <span className="text-[#e5646c]">*</span>
									</label>
									<textarea
										{...register("message")}
										className="h-[72px] sm:h-[102px] p-3 sm:p-4 w-full !bg-transparent rounded-xl border border-textSecondary/20 text-text dark:text-textDark"
										placeholder="Type your message here"></textarea>
									{errors.message && (
										<span className="text-red-500 text-sm">{errors.message.message}</span>
									)}
								</div>
							</div>

							<Separator className="bg-textSecondary/20 dark:!bg-textSecondary/30 !bg-none" />

							<div className="flex justify-center sm:justify-end w-full">
								<Button type="submit" className="sm:!px-6 sm:!py-[15px]">
									Send Message
								</Button>
							</div>
						</form>

						{/* Right Side Image Section */}
						<div className="relative ">
							<div className="w-full h-[330px] sm:w-[540px] sm:h-[604px] rounded-3xl ">
								<img src="/assets/images/contact-map.png" alt="" className="w-full h-full" />
								<div className="absolute top-3 left-[86%] sm:top-5 sm:left-[466px] bg-bgc rounded-[6px] sm:rounded-xl p-2 sm:p-3 flex items-center justify-center gap-4 ">
									<Icon
										icon="fullscreen"
										className="w-4 h-4 sm:w-[30px] sm:h-[30px] cursor-pointer"
									/>
								</div>

								<div className="absolute top-[79%] left-[86%] sm:top-[479px] sm:left-[466px] bg-bgc rounded-[6px] sm:rounded-xl p-1.5 sm:p-3 flex flex-col items-center justify-center gap-2 sm:gap-4 w-[30px] h-[57px] sm:w-[54px] sm:h-[105px]">
									<Icon icon="plus" className="w-5 h-5 cursor-pointer" />
									<Separator className="bg-textSecondary/20 dark:!bg-textSecondary/30 !bg-none" />
									<Icon icon="minus" className="w-5 h-5 cursor-pointer" />
								</div>
							</div>
						</div>
					</div>

					{/* Contact Cards Section */}
					<div className="flex flex-col sm:flex-row w-full items-start justify-center gap-4 sm:gap-[30px]">
						{contactCards.map((card, idx) => (
							<div
								key={idx}
								className="flex flex-col w-full sm:w-[370px] items-center gap-4 sm:gap-6 p-4 sm:px-8 sm:py-6 self-stretch bg-bgc dark:bg-fgcDark rounded-2xl sm:rounded-3xl border border-solid border-textSecondary/20 shadow-[0px_35px_35px_#0000000d]">
								<div
									className={`flex items-center justify-center w-12 h-12 sm:w-[60px] sm:h-[60px]  bg-primary rounded-full`}>
									<Icon icon={card.icon} className="w-6 h-6 sm:w-[30px] sm:h-[30px] text-bgc" />
								</div>
								<div className="flex flex-col items-center gap-4 flex-[0_0_auto] w-full">
									<div className="w-[113.97px] font-semibold text-text dark:text-textDark text-lg sm:text-xl text-center sm:leading-[30px]">
										{card.title}
									</div>
									<div className=" font-normal text-textSecondary dark:text-textDark text-base sm:text-lg text-center leading-[27px]">
										{card.value}
									</div>
								</div>
							</div>
						))}
					</div>
				</>
			)}
			{Step === 2 && <SuccessfullyMessage />}

			{/* Toast Container */}
		</div>
	);
};

export default ContactUs;
