import React, { useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useSignupContext } from "@/context/SignupContext";
import { signupFormTypes } from "@/types";

export default function EmailScreen() {
  const { formData, setFormData } = useSignupContext();

  const handleOnEmailChange = (e: any) => {
    // ... functionalities yet to come
    setFormData((prev: signupFormTypes) => ({
      ...prev,
      email: e.target.value,
    }));
  };

  const handleOnRefCodeChange = (e: any) => {
    // ... functionalities yet to come
    setFormData((prev: signupFormTypes) => ({
      ...prev,
      refCode: e.target.value,
    }));
  };
  return (
    <div className='sm:w-[520px] w-[90vw] h-fit bg-white flex flex-col gap-y-8 items-center rounded-xl px-6 animate-fade-left animate-delay-300 animate-duration-300 animate-ease-in-out py-12'>
      <div className='flex flex-col relative w-full gap-y-1 items-center'>
        <h1 className='text-2xl font-bold text-gray-900'>Create an account</h1>
        <p className='text-center w-72 max-w-[95%] text-base text-gray-600'>Turn Daily Social Tasks into Paychecks! Get Paid for your Engagements.</p>
      </div>
      <div className='w-full flex flex-col relative gap-y-6 items-center'>
        <div className='w-full flex relative items-center flex-col gap-y-4'>
          <form className='w-full flex flex-col items-center gap-y-4 relative'>
            <div className='w-full flex flex-col'>
              <input
                onChange={(e: any) => handleOnEmailChange(e)}
                value={formData.email}
                autoComplete='off'
                placeholder={`Enter your email`}
                name='email'
                className={`!border-gray-300  focus:!border-brand-700 !ring-0 w-full bg-white outline outline-0 focus:outline-0 transition-all border text-base px-4 h-11 shadow-main rounded-lg text-black font-medium placeholder:font-normal  placeholder:text-gray-500`}
                type={"text"}
              />
            </div>
            <div className='w-full flex flex-col'>
              <input
                onChange={(e: any) => handleOnRefCodeChange(e)}
                value={formData.refCode}
                autoComplete='off'
                placeholder={`Referral Code (optional)`}
                name='refCode'
                className={`!border-gray-300 focus:!border-brand-700 !ring-0 w-full bg-white outline outline-0 focus:outline-0 transition-all border text-base px-4 h-11 shadow-main rounded-lg text-black font-medium placeholder:font-normal  placeholder:text-gray-500`}
                type={"text"}
              />
            </div>
          </form>
          <Link href='/signup/email-confirmation' scroll={true} className='w-full transition-colors animate-duration-300 bg-primary_fixed hover:bg-brand-700 rounded-lg h-11 flex items-center justify-center'>
            <span className='text-white font-bold text-base'>Get started</span>
          </Link>
        </div>
        <div className='w-full flex gap-x-2 items-center'>
          <hr className='w-full h-[1px] bg-gray-100'></hr>
          <span className='text-gray-600 font-medium text-sm'>OR</span>
          <hr className='w-full h-[1px] bg-gray-100'></hr>
        </div>
        <div className='w-full flex flex-col gap-y-3'>
          <button className='w-full border shadow-main gap-x-4 border-gray-300 hover:bg-gray-50 transition-colors animate-duration-300 rounded-lg h-11 flex items-center justify-center'>
            <Image src='/icons/google.svg' alt='Google' width={24} height={24} className='' />
            <span className='text-gray-700 font-bold text-base'>Sign up with Google</span>
          </button>
          <button className='w-full border shadow-main gap-x-4 border-gray-300 hover:bg-gray-50 transition-colors animate-duration-300 rounded-lg h-11 flex items-center justify-center'>
            <Image src='/icons/facebook.svg' alt='Google' width={24} height={24} className='' />
            <span className='text-gray-700 font-bold text-base'>Sign up with Facebook</span>
          </button>
          <button className='w-full border shadow-main gap-x-4 border-gray-300 hover:bg-gray-50 transition-colors animate-duration-300 rounded-lg h-11 flex items-center justify-center'>
            <Image src='/icons/tiktok.svg' alt='Google' width={24} height={24} className='' />
            <span className='text-gray-700 font-bold text-base'>Sign up with Tiktok</span>
          </button>
        </div>
      </div>
      <div className='w-full flex justify-center gap-x-1 items-center'>
        <span className='text-gray-600 font-normal text-sm'>Already have an account?</span>
        <Link href='/login/0' scroll={true} className='text-primary_fixed hover:text-brand-700 animate-duration-300 transition-colors font-bold text-sm  cursor-pointer'>
          Log in
        </Link>
      </div>
    </div>
  );
}
