import React, { useEffect, useContext } from "react";
import { signupFormTypes } from "@/types";
import { useSignupContext } from "@/context/SignupContext";
import { useGlobal } from "@/context/GlobalContext";

export default function EmailConFrimationScreen() {
  const { formData, setFormData } = useSignupContext();
  const { setToast } = useGlobal();

  useEffect(() => {
    setToast({ open: true, state: "success", content: "OTP Sent" });
  }, []);

  const handleResendOTP = () => {
    setToast({ open: true, state: "success", content: "OTP Sent" });
  };

  const handleOnChange = (e: any) => {
    // ... functionalities yet to come
    setFormData((prev: signupFormTypes) => ({
      ...prev,
      OTP: e.target.value,
    }));
  };

  return (
    <div className='sm:w-[520px] w-[90vw] h-fit bg-white flex flex-col gap-y-8 items-center rounded-xl px-6 animate-fade-left animate-delay-300 animate-duration-300 animate-ease-in-out py-12'>
      <div className='flex flex-col relative w-full gap-y-1 items-center'>
        <h1 className='text-2xl font-bold text-gray-900'>Confirm your email</h1>
        <p className='text-center w-[95%] max-w-[95%] text-base text-gray-600'>We have sent an email with a code to adedamolamoses@gmail.com, please enter it below to create your Trendit account. </p>
      </div>
      <div className='w-full flex flex-col relative gap-y-6 items-center'>
        <form action={() => {}} className='w-full flex relative items-center flex-col gap-y-4'>
          <div className='w-full flex flex-col'>
            <input
              onChange={(e) => handleOnChange(e)}
              value={formData.OTP}
              autoComplete='off'
              placeholder={`Past OTP`}
              name='OTP'
              className={`!border-gray-300 focus:!border-brand-700 focus:!border-2 !ring-0 w-full bg-white outline outline-0 focus:outline-0 transition-all border text-base px-4 h-11 shadow-main rounded-lg text-black font-medium placeholder:font-normal  placeholder:text-gray-500`}
              type={"text"}
            />
          </div>
        </form>
      </div>
      <div className='w-full flex justify-center gap-x-1 items-center'>
        <span className='text-gray-600 font-normal text-sm'>{`Didn’t receive it?`}</span>
        <span onClick={handleResendOTP} className='text-primary_fixed hover:text-brand-700 animate-duration-300 transition-colors  font-bold text-sm  cursor-pointer'>
          Resend
        </span>
      </div>
    </div>
  );
}
