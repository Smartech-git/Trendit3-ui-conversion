import React, { useEffect, useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff } from "@/appIcons";
import { SignupOnboardingContext } from "@/app/(onboarding)/signup/layout";
import { signupFormTypes } from "@/types";

export default function AboutScreen() {
  const [showPassword, setShowPassword] = useState({ main: false, confirm: false });
  const { formData, setFormData } = useContext(SignupOnboardingContext);

  const handlePasswordChange = (e: any) => {
    setFormData((prev: signupFormTypes) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnChange = (e: any) => {
    setFormData((prev: signupFormTypes) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className='sm:w-[520px] w-[90vw] h-fit bg-white flex flex-col gap-y-8 items-center rounded-xl px-6 animate-fade-left animate-delay-300 animate-duration-300 animate-ease-in-out py-12'>
      <div className='flex flex-col relative w-full gap-y-1 items-center'>
        <h1 className='text-2xl font-bold text-on_surface'>Tell us about you</h1>
        <p className='text-center w-72 max-w-[95%] text-base text-gray-600'>We need to know a few things to set up your account.</p>
      </div>
      <div className='w-full flex flex-col relative gap-y-6 items-center'>
        <div className='w-full flex relative items-center flex-col gap-y-4'>
          <div className='flex w-full h-fit gap-x-4'>
            <div className='w-full flex flex-col'>
              <input onChange={(e) => handleOnChange(e)} value={formData.firstName} autoComplete='off' placeholder={`First Name`} name='firstName' className={`!border-gray-300 capitalize !inline-block  focus:!border-primary_fixed !ring-0 w-full bg-white outline outline-0 focus:outline-0 transition-all border text-base px-4 h-11 shadow-main rounded-lg text-black font-medium placeholder:font-normal  placeholder:text-gray-500`} type={"text"} />
            </div>
            <div className='w-full flex flex-col'>
              <input onChange={(e) => handleOnChange(e)} value={formData.lastName} autoComplete='off' placeholder={`Last Name`} name='lastName' className={`!border-gray-300 capitalize !inline-block  focus:!border-primary_fixed !ring-0 w-full bg-white outline outline-0 focus:outline-0 transition-all border text-base px-4 h-11 shadow-main rounded-lg text-black font-medium placeholder:font-normal  placeholder:text-gray-500`} type={"text"} />
            </div>
          </div>
          <div className='w-full flex flex-col'>
            <input onChange={(e) => handleOnChange(e)} value={formData.userName} autoComplete='off' placeholder={`Username`} name='userName' className={`!border-gray-300 focus:!border-primary_fixed !ring-0 w-full bg-white outline outline-0 focus:outline-0 transition-all border text-base px-4 h-11 shadow-main rounded-lg text-black font-medium placeholder:font-normal placeholder:text-gray-500`} type={"text"} />
          </div>
          <div className='w-full h-fit gap-y-1 flex flex-col'>
            <div className='w-full flex relative'>
              <input
                onChange={(e) => handlePasswordChange(e)}
                value={formData.password}
                autoComplete='off'
                placeholder={`Create password`}
                name='password'
                className={`!border-gray-300 focus:!border-primary_fixed !ring-0 w-full bg-white outline outline-0 focus:outline-0 transition-all border text-base px-4 pr-6 h-11 shadow-main rounded-lg text-black font-medium  placeholder:font-normal  placeholder:text-gray-500`}
                type={showPassword.main ? "text" : "password"}
              />
              <div className='grid place-items-center absolute text-blue-gray-500 top-[50%] right-4 -translate-y-2/4 size-fit'>
                {showPassword.main ? (
                  <div
                    onClick={() =>
                      setShowPassword((prev) => ({
                        ...prev,
                        main: false,
                      }))
                    }
                  >
                    <Eye className='stroke-gray-400 size-5' />
                  </div>
                ) : (
                  <div
                    onClick={() =>
                      setShowPassword((prev) => ({
                        ...prev,
                        main: true,
                      }))
                    }
                  >
                    <EyeOff className='stroke-gray-400 size-5 ' />
                  </div>
                )}
              </div>
            </div>
            <span className='text-gray-600 text-xs'>{`(Min. 8 characters with a letter and a number)`}</span>
          </div>
          <div className='w-full h-fit gap-y-1 flex flex-col'>
            <div className='w-full flex relative'>
              <input
                onChange={(e) => handlePasswordChange(e)}
                value={formData.passwordConfirm}
                autoComplete='off'
                placeholder={`Confirm password`}
                name='passwordConfirm'
                className={`!border-gray-300 focus:!border-primary_fixed !ring-0 w-full bg-white outline outline-0 focus:outline-0 transition-all border text-base px-4 h-11 pr-6 shadow-main rounded-lg text-black font-medium  placeholder:font-normal  placeholder:text-gray-500`}
                type={showPassword.confirm ? "text" : "password"}
              />
              <div className='grid place-items-center absolute text-blue-gray-500 top-[50%] right-4 -translate-y-2/4 size-fit'>
                {showPassword.confirm ? (
                  <div
                    onClick={() =>
                      setShowPassword((prev) => ({
                        ...prev,
                        confirm: false,
                      }))
                    }
                  >
                    <Eye className='stroke-gray-400 size-5' />
                  </div>
                ) : (
                  <div
                    onClick={() =>
                      setShowPassword((prev) => ({
                        ...prev,
                        confirm: true,
                      }))
                    }
                  >
                    <EyeOff className='stroke-gray-400 size-5 ' />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Link href='/signup/profile-setup' scroll={true} className='w-full transition-shadow bg-primary_fixed hover:shadow-lg rounded-lg h-11 flex items-center justify-center'>
        <span className='text-white font-bold text-base'>Continue</span>
      </Link>
    </div>
  );
}
