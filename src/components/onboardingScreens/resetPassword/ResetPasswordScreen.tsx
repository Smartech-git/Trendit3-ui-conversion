import React, { useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { resetPasswordFormTypes } from "@/types";
import { useResetPasswordContext } from "@/context/ResetPasswordContext";
import { useGlobal } from "@/context/GlobalContext";

export default function ResetPasswordScreen() {
  const { formData, setFormData } = useResetPasswordContext();
  const { setToast } = useGlobal();

  useEffect(() => {
    setToast({ open: true, state: "success", content: "OTP Sent" });
  }, []);

  const handleOnChange = (e: any) => {
    // ... functionalities yet to come
    setFormData((prev: resetPasswordFormTypes) => ({
      ...prev,
      OTP: e.target.value,
    }));
  };

  return (
    <div className='sm:w-[520px] w-[90vw] h-fit bg-white flex flex-col gap-y-8 items-center rounded-xl px-6 animate-fade-left animate-delay-300 animate-duration-300 animate-ease-in-out py-12'>
      <div className='flex flex-col relative w-full gap-y-1 items-center'>
        <h1 className='text-2xl font-bold text-gray-900'>{`Reset password`}</h1>
        <p className='text-center w-[95%] max-w-[95%] text-base text-gray-600'>We have sent an email with a code to adedamolamoses@gmail.com, please enter it below to reset your password. </p>
      </div>
      <div className='w-full flex flex-col relative gap-y-6 items-center'>
        <form action={() => {}} className='w-full flex relative items-center flex-col gap-y-4'>
          <div className='w-full flex flex-col'>
            <input
              onChange={(e) => handleOnChange(e)}
              value={formData.OTP as undefined | string}
              autoComplete='off'
              placeholder={`Past OTP`}
              name='OTP'
              className={`!border-gray-300 focus:!border-brand-700 focus:!border-2 !ring-0 w-full bg-white outline outline-0 focus:outline-0 transition-all border text-base px-4 h-11 shadow-main rounded-lg text-black font-medium placeholder:font-normal  placeholder:text-gray-500`}
              type={"text"}
            />
          </div>
        </form>
      </div>
      <Link href='/login/1' scroll={true} className='w-full transition-colors animate-duration-300 bg-primary_fixed hover:bg-brand-700 rounded-lg h-11 flex items-center justify-center'>
        <span className='text-white font-bold text-base'>Continue</span>
      </Link>
    </div>
  );
}
