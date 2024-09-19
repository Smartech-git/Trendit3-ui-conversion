import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { User01 } from "@/appIcons";

export default function ProfileSetup() {
  return (
    <div className='sm:w-[520px] w-[90vw] h-fit bg-white flex flex-col gap-y-8 items-center rounded-xl px-6 animate-fade-left animate-delay-300 animate-duration-300 animate-ease-in-out py-12'>
      <div className='flex flex-col relative w-full gap-y-1 items-center'>
        <h1 className='text-2xl font-bold text-on_surface'>Welcome onboard!</h1>
        <p className='text-center w-[95%] max-w-[95%] text-base text-gray-600'>Hi Damola, we are excited to have you onboard! Finish up your profile set up.</p>
      </div>
      <div className='w-full flex items-center gap-x-3 justify-center'>
        <div className=' flex items-center justify-center size-12 rounded-full bg-gray-100 border border-gray-200'>
          <User01 className='size-7' />
        </div>
        <>
          <label htmlFor='image'>
            <span className='text-primary_fixed font-semibold hover:underline text-base'>Upload photo</span>
          </label>
          <input type='file' id='image' accept='image/png, image/jpeg, image/jpg' className='hidden' />
        </>
      </div>
      <div className='w-full flex flex-col relative gap-y-6 items-center'>
        <div className='w-full flex relative items-center flex-col gap-y-4'>
          <div className='w-full flex flex-col'>
            <input autoComplete='off' placeholder={`Enter your email`} name='email' className={`!border-gray-300  focus:!border-primary_fixed !ring-0 w-full bg-white outline outline-0 focus:outline-0 transition-all border text-sm px-4 h-11 shadow-main rounded-lg text-black font-medium sm:text-lg placeholder:font-normal  placeholder:text-gray-500`} type={"text"} />
          </div>
          <div className='w-full flex flex-col'>
            <input autoComplete='off' placeholder={`Referral Code (optional)`} name='refCode' className={`!border-gray-300 focus:!border-primary_fixed !ring-0 w-full bg-white outline outline-0 focus:outline-0 transition-all border text-sm px-4 h-11 shadow-main rounded-lg text-black font-medium sm:text-lg placeholder:font-normal  placeholder:text-gray-500`} type={"text"} />
          </div>
          <Link href='/signup/email-confirmation' scroll={true} className='w-full transition-shadow bg-primary_fixed hover:shadow-lg rounded-lg h-11 flex items-center justify-center'>
            <span className='text-white font-bold text-base'>Get started</span>
          </Link>
        </div>
        <div className='w-full flex gap-x-2 items-center'>
          <hr className='w-full h-[1px] bg-gray-100'></hr>
          <span className='text-gray-600 font-medium text-sm'>OR</span>
          <hr className='w-full h-[1px] bg-gray-100'></hr>
        </div>
        <div className='w-full flex flex-col gap-y-3'>
          <button className='w-full border shadow-main gap-x-4 border-gray-300 hover:bg-gray-50 transition-colors rounded-lg h-11 flex items-center justify-center'>
            <Image src='/icons/google.svg' alt='Google' width={24} height={24} className='' />
            <span className='text-gray-700 font-bold text-base'>Sign up with Google</span>
          </button>
          <button className='w-full border shadow-main gap-x-4 border-gray-300 hover:bg-gray-50 transition-colors rounded-lg h-11 flex items-center justify-center'>
            <Image src='/icons/facebook.svg' alt='Google' width={24} height={24} className='' />
            <span className='text-gray-700 font-bold text-base'>Sign up with Facebook</span>
          </button>
          <button className='w-full border shadow-main gap-x-4 border-gray-300 hover:bg-gray-50 transition-colors rounded-lg h-11 flex items-center justify-center'>
            <Image src='/icons/tiktok.svg' alt='Google' width={24} height={24} className='' />
            <span className='text-gray-700 font-bold text-base'>Sign up with Tiktok</span>
          </button>
        </div>
      </div>
      <div className='w-full flex justify-center gap-x-1 items-center'>
        <span className='text-gray-600 font-normal text-sm'>Already have an account?</span>
        <span className='text-primary_fixed font-bold text-sm hover:opacity-80 animate-duration-300 transition-colors hover:underline cursor-pointer'>Log in</span>
      </div>
    </div>
  );
}
