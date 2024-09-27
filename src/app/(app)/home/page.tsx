import React from "react";
import Wallet from "@/components/home/Wallet";
import WhatsUp from "@/components/home/WhatsUp";
import Tasks from "@/components/home/Tasks";
import GlobalActivities from "@/components/home/GlobalActivities";

export default function Home() {
  return (
    <div className='w-full 2xl:gap-8 sm:gap-6 gap-4 flex 2xl:px-8 sm:px-6 px-4 relative h-[100svh]'>
      <div className='h-full 2xl:pb-8 sm:pb-6 pb-4 overflow-y-scroll scrollbar-none flex flex-col sm:gap-6 gap-4 relative 2xl:pt-[112px] sm:pt-[96px] pt-[72px] w-full'>
        <Wallet />
        <Tasks />
      </div>
      <div className='h-[100svh] relative scrollbar-none 2xl:pb-8 sm:pb-6 pb-4 flex overflow-y-scroll flex-col w-[45%] 2xl:pt-[112px] sm:pt-[96px] pt-[72px] max-w-[340px] 2xl:gap-8 sm:gap-6 gap-4'>
        <WhatsUp />
        <GlobalActivities />
      </div>
    </div>
  );
}
