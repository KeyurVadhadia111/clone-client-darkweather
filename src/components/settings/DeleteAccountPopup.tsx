import { Button } from "@headlessui/react";
import Modal from "components/layout/modal";
import { toast } from "components/utils/toast";
import React from "react";

interface DeleteCardPopupProps {
	open: boolean;
	setOpen: (open: boolean) => void;
}

const DeleteAccountPopup: React.FC<DeleteCardPopupProps> = ({ open, setOpen }) => {
	return (
		<Modal openModal={open} setOpenModal={setOpen} size="md">
			<div className="text-center flex flex-col items-center gap-4 sm:gap-8">
				<h2 className="text-base sm:text-2xl font-semibold self-start text-text dark:text-textDark">
					Delete Account
				</h2>
				<img src="/assets/images/trash-2.svg" alt="" className="w-16 sm:w-[82px] h-auto" />
				<div className="flex flex-col items-center w-full gap-2 sm:gap-3">
					<p className="text-base sm:text-xl font-medium text-text dark:text-textDark ">
						Are you sure you want to delete your account?
					</p>
					<p className="text-sm sm:text-base text-textSecondary dark:text-textDark ">
						Permanently remove your Dark Weather account. This action cannot be undone.
					</p>
				</div>

				<div className="mt-2 sm:mt-0 flex justify-end w-full gap-3 sm:gap-6">
					<Button
						className="!w-full sm:!w-auto border border-text dark:border-bgc text-sm sm:text-base text-text dark:text-textDark !px-6 !py-3 sm:!px-6 sm:!py-4 !rounded-xl !font-semibold "
						onClick={() => setOpen(false)}>
						Cancel
					</Button>
					<Button
						className="!w-full sm:!w-auto bg-primary text-sm sm:text-base text-text !px-6 !py-3 sm:!px-6 sm:!py-4 !rounded-xl !font-semibold whitespace-nowrap"
						onClick={() => {
							setOpen(false);
							toast.success("Account deleted successful!");
						}}>
						Delete Account
					</Button>
				</div>
			</div>
		</Modal>
	);
};

export default DeleteAccountPopup;
