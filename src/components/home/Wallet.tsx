import React from "react";
import { Button } from "@nextui-org/button";
import { DotsHorizontal, ArrowRight } from "@/appIcons";
import { Earn, Advertise_01 } from "@/svgAssets";
import Link from "next/link";

export default function Wallet() {
  return (
    <section className='w-full p-6 overflow-x-hidden rounded-xl flex flex-col gap-y-11 flex-none h-[310px] border border-outline_varient bg-white'>
      <div className='w-full flex flex-col overflow-y-scroll scrollbar-none h-full gap-y-11'>
        <div className='w-full'>
          <div className='flex items-center gap-x-12'>
            <div className='flex flex-col gap-y-3'>
              <h1 className='font-medium text-sm leading-none text-illustration'>Wallet bal:</h1>
              <p className='font-normal text-3xl leading-none text-black'>
                {`₦3,321`}
                <span className='text-gray'>{`.09`}</span>
              </p>
              <span className='text-gray-500 leading-none text-xs font-normal'>Available for payout</span>
            </div>
            <Button disableRipple className='bg-white outline-none !min-w-9 !w-9 !h-9 rounded-full border-[1.25px] border-gray-200 hover:bg-gray-50 transition-colors flex data-[hover=true]:!bg-gray-50 !opacity-100 items-center justify-center !p-0'>
              <DotsHorizontal />
            </Button>
          </div>
        </div>
        <div className='w-full grid grid-cols-2 gap-3'>
          <div className='w-full animate-fade-up animate-once animate-duration-[200ms] animate-delay-[300ms] rounded-xl border border-gray-300 flex justify-between gap-x-4 py-4 px-3 bg-white'>
            <div className='w-[210px] gap-y-3 h-full justify-between flex flex-col'>
              <div className='flex flex-col'>
                <h1 className='text-gray-900 font-bold text-sm'>{`Engage a task`}</h1>
                <p className='text-gray-600 text-xs font-normal'>{`Monetize Your Influence! Earn by Posting Ads on Your Social Media.`}</p>
              </div>
              <Link href={`/earn`}>
                <button className='flex group items-center gap-x-1 w-fit outline-none'>
                  <span className='text-xs font-semibold text-primary_fixed group-hover:text-secondary_fixed transition-colors '>{`Get Started`}</span>
                  <ArrowRight className='stroke-primary_fixed group-hover:stroke-secondary_fixed  group-hover:translate-x-0.5 transition-all  size-4' />
                </button>
              </Link>
            </div>
            <Earn />
          </div>
          <div className='w-full animate-fade-up animate-once animate-duration-[200ms] animate-delay-[400ms]  rounded-xl border border-gray-300 flex justify-between gap-x-4 py-4 px-3 bg-white'>
            <div className='w-[210px] gap-y-3 h-full justify-between flex flex-col'>
              <div className='flex flex-col'>
                <h1 className='text-gray-900 font-bold text-sm'>{`Create an Advert`}</h1>
                <p className='text-gray-600 text-xs font-normal'>{`Get real people to post your ads on their social media account.`}</p>
              </div>
              <Link href={`/advertise`}>
                <button className='flex group items-center gap-x-1 w-fit outline-none'>
                  <span className='text-xs font-semibold text-primary_fixed group-hover:text-secondary_fixed transition-colors '>{`Get Started`}</span>
                  <ArrowRight className='stroke-primary_fixed group-hover:stroke-secondary_fixed  group-hover:translate-x-0.5 transition-all  size-4' />
                </button>
              </Link>
            </div>
            <Advertise_01 />
          </div>
        </div>
      </div>
    </section>
  );
}
