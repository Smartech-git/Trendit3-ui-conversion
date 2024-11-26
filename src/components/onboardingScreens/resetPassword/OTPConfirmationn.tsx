import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { resetPasswordFormTypes, pathsEnum } from "@/types";
import { useResetPasswordContext } from "@/context/ResetPasswordContext";
import { useGlobal } from "@/context/GlobalContext";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Spinner from "@/components/loadingScreens/Spinner";
import { apiRequest } from "@/lib/serverRequest";
import { useRouter } from "next/navigation";

export default function OTPConfirmation() {
  const { formData, setFormData } = useResetPasswordContext();
  const { setToast } = useGlobal();
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<{ email: string | undefined }>({ email: undefined });
  const router = useRouter();

  useEffect(() => {
    setToast({ open: true, state: "success", content: "OTP Sent" });
  }, []);

  const handleOnChange = (e: any) => {
    setFormData((prev: resetPasswordFormTypes) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError((prev) => ({
      ...prev,
      [e.target.name]: undefined,
    }));
  };

  const handleContinue = async () => {
    if ([formData.email].some((value) => !value?.length)) {
      setError((prev) => ({
        ...prev,
        email: "Email is required",
      }));
    } else if ([error.email].every((value) => value === undefined)) {
      setIsFetching(true);
      const result = await apiRequest("forgot-password", "POST", {
        email: formData.email,
      });
      //console.log(result)
      setIsFetching(false);
      if (result?.error) {
        setToast({ open: true, state: "error", content: "check your network connection" });
      } else if (result?.status === "success") {
        setToast({ open: true, state: "success", content: result?.message });
        const navigate = async () => {
          router.push(pathsEnum.emailConfirmation);
        };
        // navigate();
      } else {
        setToast({ open: true, state: "error", content: result?.message });
      }
    }
  };

  return (
    <motion.div layout initial={{ opacity: 0, x: 4 }} animate={{ opacity: 1, x: 0 }} transition={{ type: "spring" }} className='sm:w-[520px] w-[90vw] h-fit bg-white flex flex-col gap-y-8 items-center rounded-xl px-6 py-12'>
      <div className='flex flex-col relative w-full gap-y-1 items-center'>
        <h1 className='text-2xl font-bold text-gray-900'>{`Reset password`}</h1>
        <p className='text-center w-[95%] max-w-[95%] text-base text-gray-600'>We have sent an email with a code to adedamolamoses@gmail.com, please enter it below to reset your password. </p>
      </div>
      <div className='w-full flex flex-col relative gap-y-6 items-center'>
        <form action={() => {}} className='w-full flex relative items-center flex-col gap-y-4'>
          <div className='w-full flex flex-col'>
            <Input
              onChange={(e: any) => {
                handleOnChange(e);
              }}
              value={formData.email}
              autoComplete='off'
              placeholder={`Enter your email`}
              name='email'
              variant='bordered'
              isInvalid={error.email ? true : false}
              errorMessage={error.email}
              type='text'
              classNames={{
                inputWrapper: "!h-11 !px-4 !rounded-lg  border !transition-all data-[hover=true]:border-gray-300 group-data-[focus=true]:!border-brand-700 group-data-[invalid=true]:border-error group-data-[focus=true]:!border-2 !shadow-main",
                input: "!text-base overflow-hidden !font-medium placeholder:!font-normal placeholder:!text-gray-500  !text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
              }}
            />
          </div>
        </form>
      </div>
      <Button
        spinner={
          <div className='size-5'>
            <Spinner className='text-white' />
          </div>
        }
        isLoading={isFetching}
        onPress={handleContinue}
        disableRipple
        className='h-11 gap-x-[6px] w-full !outline-none shadow-main flex justify-center flex-none items-center px-[18px] py-3 !min-w-auto border-none bg-primary_fixed data-[hover=true]:!bg-brand-700 !opacity-100 transition-colors rounded-lg '
      >
        <span className='text-white  text-base font-semibold'>Continue</span>
      </Button>
    </motion.div>
  );
}
