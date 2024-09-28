"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { ScrollShadow } from "@nextui-org/react";
import { PlayCircle } from "@/appIcons";
import { Blob } from "@/svgAssets";
import { motion, useInView } from "framer-motion";

export default function Cta() {
  const iPhoneMockupRef = useRef(null);
  const isIPhoneMockupInView = useInView(iPhoneMockupRef, { amount: 0.2 });

  return (
    <section className='rounded-xl sm:px-6 px-3 flex flex-col gap-y-3 border border-outline_varient bg-white w-full py-6 h-fit'>
      <ScrollShadow className='flex flex-col lg:gap-y-[15svh] gap-y-16 min-h-[750px] max-h-[80svh] h-fit w-full overflow-y-hidden overflow-x-hidden scrollbar-none'>
        <div className='flex flex-col w-full gap-y-4'>
          <div className='w-full h-fit rounded-md overflow-hidden bg-gray-50'>
            <Image src={`/images/videoThumbnail.png`} width={1000} height={500} className='w-full h-fit' alt='video thumbnail' />
          </div>
          <div className='flex flex-col gap-y-3 w-full'>
            <div className='flex flex-col'>
              <h1 className='font-semibold text-base text-gray-900'>Earning on Trendit</h1>
              <p className='font-normal text-gray-600 text-sm'>{`Once you’re ready, learn more about advanced analytics, features and shortcuts.`}</p>
            </div>
            <button className='outline-none flex group w-fit text-brand-700 transition-colors hover:text-primary_fixed font-semibold text-sm gap-x-[6px]'>
              <PlayCircle className='group-hover:stroke-primary_fixed' /> Watch video
            </button>
          </div>
        </div>
        <div className='flex w-full flex-col gap-y-8'>
          <div className='w-full flex flex-col'>
            <h1 className='text-gray-900 font-semibold text-[30px]'>{`Trend-it on the go!`}</h1>
            <p className='text-gray-600 text-lg font-normal'>{`Download our mobile app.`}</p>
          </div>
          <div className='w-full justify-center gap-3 flex-wrap items-center flex'>
            <Image src={`/images/mobileAppStoreBadge_apple.png`} width={396} height={132} className='w-fit h-[39px] cursor-pointer' alt='mobileAppStoreBadge_apple' />
            <Image src={`/images/mobileAppStoreBadge_android.png`} width={445.5} height={132} className='w-fit h-[39px] cursor-pointer' alt='mobileAppStoreBadge_android' />
          </div>
          <div ref={iPhoneMockupRef} className='w-full flex relative items-center h-fit justify-center overflow-hidden'>
            <div className='size-fit absolute -z-10'>
              <Blob className='flex-none shrink-0 h-fit w-[300px]' />
            </div>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={isIPhoneMockupInView && { opacity: 1, y: 0 }} transition={{ type: "spring", duration: 2 }} className=''>
              <Image src={`/images/iPhoneMockup.png`} width={568} height={1157.74} className='w-full h-fit cursor-pointer' alt='mobileAppStoreBadge_apple' />
            </motion.div>
          </div>
        </div>
      </ScrollShadow>
    </section>
  );
}
