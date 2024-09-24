import React from "react";
import Image from "next/image";
import { Search, Home_line } from "@/appIcons";

export default function SideNav() {
  return (
    <div className='w-full h-full bg-white py-8'>
      <div className='flex flex-col gap-y-6'>
        <div className='w-full px-5'>
          <Image src='/logos/logo_default.svg' alt='App Logo' width={250} height={250} className='w-[132px] h-fit' />
        </div>
        <div className='w-full px-5'>
          <div className='w-full flex relative'>
            <input autoComplete='off' placeholder={`Create password`} name='password' className={`!border-gray-300 focus:!border-secondary_fixed !ring-0 w-full bg-white outline outline-0 focus:outline-0 transition-all border text-base px-9 pr-3 h-11 shadow-main rounded-lg text-black font-medium  placeholder:font-normal  placeholder:text-gray-500`} type='text' />
            <div className='grid place-items-center absolute text-blue-gray-500 top-[50%] left-3 -translate-y-2/4 size-fit'>
              <Search className='stroke-gray-500 size-5' />
            </div>
          </div>
        </div>
        <div className="w-full px-[10px] h-10">
          <div className="size-full flex items-center gap-x-3 hover:bg-gray-50 transition-colors cursor-pointer rounded-md px-[10px]">
            <Home_line className='stroke-gray-500' />
            <span className="text-gray-700 font-semibold text-base">Home</span>
          </div>
        </div>
      </div>
    </div>
  );
}
