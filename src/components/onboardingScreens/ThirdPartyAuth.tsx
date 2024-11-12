import React from "react";
import Spinner from "../loadingScreens/Spinner";
import Image from "next/image";

interface thirdPartyAuth_propTypes {
  handleSocialsAuth: (type: "gg" | "fb" | "tt", path: "gg_login" | "facebook_login" | "tt_login") => void;
  isFetching: { gg: boolean; fb: boolean; tt: boolean; login: boolean };
  type?: "login" | "signup";
}

export default function ThirdPartyAuth({ handleSocialsAuth, isFetching, type }: thirdPartyAuth_propTypes) {
  return (
    <div className='w-full flex flex-col gap-y-3'>
      <button onClick={() => handleSocialsAuth("gg", "gg_login")} className='w-full border shadow-main gap-x-4 border-gray-300 hover:bg-gray-50 transition-colors rounded-lg h-11 flex items-center justify-center'>
        <Image src='/icons/google.svg' alt='Google' width={24} height={24} className='' />
        <span className='text-gray-700 font-bold text-base'>Sign up with Google</span>
        {isFetching.gg && (
          <div className='size-4 ml-1'>
            <Spinner pathClassName='!text-gray-300' className='!fill-primary_fixed' />
          </div>
        )}
      </button>
      <button onClick={() => handleSocialsAuth("fb", "facebook_login")} className='w-full border shadow-main gap-x-4 border-gray-300 hover:bg-gray-50 transition-colors  rounded-lg h-11 flex items-center justify-center'>
        <Image src='/icons/facebook.svg' alt='Google' width={24} height={24} className='' />
        <span className='text-gray-700 font-bold text-base'>{`Sign up with Facebook`}</span>
        {isFetching.fb && (
          <div className='size-4 ml-1'>
            <Spinner pathClassName='!text-gray-300' className='!fill-primary_fixed' />
          </div>
        )}
      </button>
      <button onClick={() => handleSocialsAuth("tt", "tt_login")} className='w-full border shadow-main gap-x-4 border-gray-300 hover:bg-gray-50 transition-colors rounded-lg h-11 flex items-center justify-center'>
        <Image src='/icons/tiktok.svg' alt='Google' width={24} height={24} className='' />
        <span className='text-gray-700 font-bold text-base'>Sign up with Tiktok</span>
        {isFetching.tt && (
          <div className='size-4 ml-1'>
            <Spinner pathClassName='!text-gray-300' className='!fill-primary_fixed' />
          </div>
        )}
      </button>
    </div>
  );
}
