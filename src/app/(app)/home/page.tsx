import React from "react";
import Wallet from "@/components/home/Wallet";
import WhatsUp from "@/components/home/WhatsUp";

export default function Home() {
  return (
    <div className='w-full 2xl:gap-8 sm:gap-6 gap-4 flex 2xl:px-8 sm:px-6 px-4 2l:pb-8  sm:pb-6 pb-4 relative h-[100svh]'>
      <div className='h-full overflow-y-scroll scrollbar-none flex flex-col sm:gap-6 gap-4 relative w-full'>
        <Wallet/>
        <div className='w-full rounded-xl border border-outline_varient flex-none h-[1000px] bg-white'></div>
      </div>
      <div className='h-full flex flex-col w-[40%] max-w-[340px] 2xl:gap-8 sm:gap-6 gap-4'>
          <WhatsUp/>
      </div>
    </div>
  );
}
