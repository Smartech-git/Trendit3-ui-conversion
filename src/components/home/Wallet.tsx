"use client";

import React, { useState } from "react";
import { Button } from "@nextui-org/button";
import { DotsHorizontal, ArrowRight, XClose } from "@/appIcons";
import { Earn, Advertise_01 } from "@/svgAssets";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const PendingRequest = ({ open, setOpen }: { open: boolean; setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (
    <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ type: "spring" }} className='w-full p-4 relative rounded-xl border border-gray-300 bg-white shadow-main-lg'>
      <div className="w-full flex flex-col">
        <h1 className="text-sm text-gray-900 font-bold">Pending Request</h1>
        <p className="text-gray-500 text-sm font-normal">You have 13 pending orders that are awaiting payment. click <span className="text-primary_fixed transition-colors cursor-pointer hover:text-brand-700">here</span> to pay</p>
      </div>
      <Button onClick={() => setOpen(false)} disableRipple className='!bg-transparent outline-none !min-w-9 !w-9 !h-9 rounded-lg absolute top-2 right-2 transition-colors flex flex-none data-[hover=true]:!bg-gray-50 !opacity-100 items-center justify-center !p-0'>
        <XClose className='stroke-gray-400 size-5' />
      </Button>
    </motion.div>
  );
};

export default function Wallet() {
  const [openPendingRequest, setOpenPendingRequest] = useState(true);
  return (
    <motion.section layout className='w-full sm:p-6 p-0 sm:rounded-xl rounded-none flex flex-col flex-none h-fit sm:border sm:gap-y-11 gap-y-0 border-none border-outline_varient sm:bg-white bg-neutral-100'>
      {openPendingRequest && <PendingRequest open={openPendingRequest} setOpen={setOpenPendingRequest} />}
      <div className='w-full flex flex-col sm:mt-0 mt-11 min-h-[200px] overflow-y-scroll scrollbar-none h-full gap-y-11'>
        <div className='w-full'>
          <div className='flex w-full items-center sm:justify-normal justify-between gap-x-12'>
            <div className='flex flex-col gap-y-3'>
              <h1 className='font-medium text-sm leading-none text-illustration'>Wallet bal:</h1>
              <p className='font-normal text-3xl leading-none text-black'>
                {`₦3,321`}
                <span className='text-gray'>{`.09`}</span>
              </p>
              <span className='text-gray-500 leading-none text-xs font-normal'>Available for payout</span>
            </div>
            <Button disableRipple className='bg-white outline-none !min-w-9 !w-9 !h-9 rounded-full border-[1.25px] border-outline hover:bg-gray-50 transition-colors flex data-[hover=true]:!bg-gray-50 !opacity-100 items-center justify-center !p-0'>
              <DotsHorizontal />
            </Button>
          </div>
        </div>
        <div className='w-full relative sm:grid sm:grid-cols-2 overflow-x-scroll scrollbar-none flex gap-3'>
          <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }} className='w-full rounded-xl border border-gray-300 flex md:flex-row flex-col-reverse gap-4 justify-between  py-4 px-3 bg-white'>
            <div className='sm:w-[210px] w-[160px] max-w-full gap-y-3 h-full justify-between flex flex-col'>
              <div className='flex flex-col'>
                <h1 className='text-gray-900 font-bold text-sm'>{`Engage a task`}</h1>
                <p className='text-gray-600 text-xs font-normal'>{`Monetize Your Influence! Earn by Posting Ads on Your Social Media.`}</p>
              </div>
              <Link href={`/earn`}>
                <button className='flex group items-center gap-x-1 w-fit outline-none'>
                  <span className='text-xs font-semibold text-primary_fixed group-hover:text-brand-700 transition-colors '>{`Get Started`}</span>
                  <ArrowRight className='stroke-primary_fixed group-hover:stroke-brand-700  group-hover:translate-x-0.5 transition-all  size-4' />
                </button>
              </Link>
            </div>
            <Earn className="sm:size-fit size-[100px]" />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", delay: 0.3 }} className='w-full rounded-xl border border-gray-300 flex md:flex-row flex-col-reverse justify-between gap-4 py-4 px-3 bg-white'>
            <div className='sm:w-[210px] w-[160px] max-w-full gap-y-3 h-full justify-between flex flex-col'>
              <div className='flex flex-col'>
                <h1 className='text-gray-900 font-bold text-sm'>{`Create an Advert`}</h1>
                <p className='text-gray-600 text-xs font-normal'>{`Get real people to post your ads on their social media account.`}</p>
              </div>
              <Link href={`/advertise`}>
                <button className='flex group items-center gap-x-1 w-fit outline-none'>
                  <span className='text-xs font-semibold text-primary_fixed group-hover:text-brand-700 transition-colors '>{`Get Started`}</span>
                  <ArrowRight className='stroke-primary_fixed group-hover:stroke-brand-700  group-hover:translate-x-0.5 transition-all  size-4' />
                </button>
              </Link>
            </div>
            <Advertise_01 className="sm:size-fit size-[100px]"/>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
