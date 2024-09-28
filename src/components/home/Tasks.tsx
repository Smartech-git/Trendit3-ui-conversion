"use client";

import React, { useState } from "react";
import { XClose } from "@/appIcons";
import { Button } from "@nextui-org/button";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, X, TikTok, Instagram, Youtube, Telegram, Google } from "@/svgAssets";
import { ScrollShadow } from "@nextui-org/react";
import { Wallet_02, LayersTwo_01, ChevronDown } from "@/appIcons";

const socials = [
  { name: "Facebook", svg: <Facebook className='size-10' /> },
  { name: "X", svg: <X className='size-10' /> },
  { name: "TikTok", svg: <TikTok className='size-10' /> },
  { name: "Instagram", svg: <Instagram className='size-10' /> },
  { name: "Youtube", svg: <Youtube className='size-10' /> },
  { name: "Telegram", svg: <Telegram className='size-10' /> },
  { name: "Google", svg: <Google className='size-10' /> },
];

const BannerInfo = ({ open, setOpen }: { open: boolean; setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (
    <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ type: "spring" }} className='w-full p-3 gap-x-2 flex items-center relative bg-black'>
      <div className='w-full flex flex-wrap gap-x-[6px] sm:items-center items-start'>
        <h1 className='sm:text-base text-xxs font-bold text-white'>{`45,678 Total Task available for you to perform`}</h1>
        <span className='text-nowrap cursor-pointer text-pink hover:text-brand-200 transition-colors font-normal sm:text-base text-xxs hover:underline underline-offset-4'>Generate tasks</span>
      </div>
      <Button onClick={() => setOpen(false)} disableRipple className='!bg-transparent  outline-none sm:!min-w-10 sm:!w-10 sm:!h-10 !min-w-8 !w-8 !h-8 rounded-lg transition-colors flex flex-none data-[hover=true]:!bg-white/10 !opacity-100 items-center justify-center !p-0'>
        <XClose className='stroke-white/70' />
      </Button>
    </motion.div>
  );
};

const Task = ({ data }: { data: any }) => {
  return (
    <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }} className='w-full p-4 cursor-pointer gap-x-4 flex items-start rounded border border-neutral-100 shadow-main hover:bg-gray-50 transition-colors'>
      <div className='w-12 h-full flex-none relative flex items-center flex-col'>
        <div className='size-fit flex-none'>{socials?.find((item: any) => item?.name === data?.social)?.svg}</div>
      </div>
      <div className='flex gap-y-1 flex-col'>
        <div className='w-full flex items-center justify-between'>
          <h1 className='text-gray-900 w-fit font-semibold sm:text-[15px] text-sm'>{`Post adverts on your Facebook page`}</h1>
        </div>
        <p className='text-gray-600 font-normal text-xs'>{`Post adverts of various businesses and top brands on your Facebook Page and earn ₦110 per advert past.`}</p>
        <div className='flex w-full flex-wrap gap-1'>
          <div className='py-0.5 px-1 rounded-full border border-brand-200 bg-brand-50 flex gap-x-1 items-center'>
            <Wallet_02 className='stroke-brand-500 size-3' />
            <span className='text-xs font-medium text-brand-700'>₦110 per post</span>
          </div>
          <div className='py-0.5 px-1 rounded-full border border-blue-200 bg-blue-50 flex gap-x-1 items-center'>
            <LayersTwo_01 className='stroke-blue-500 size-3' />
            <span className='text-xs font-medium text-blue-700'>342 task available</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Tasks() {
  const [tasks, setTasks] = useState<any>([
    {
      social: "Google",
    },
    {
      social: "Facebook",
    },
    {
      social: "Youtube",
    },
    {
      social: "X",
    },
    {
      social: "Telegram",
    },
    {
      social: "TikTok",
    },
    {
      social: "Youtube",
    },
    {
      social: "Instagram",
    },
    {
      social: "Facebook",
    },
  ]);
  const [taskMobile, setTaskMobile] = useState([
    {
      social: "Google",
    },
    {
      social: "Facebook",
    },
  ]);
  const [openBanner, setOpenBanner] = useState(true);

  const onViewMore = () => {
    setTaskMobile((prev: any) => [
      ...prev,
      {
        social: "Facebook",
      },
      {
        social: "Youtube",
      },
      {
        social: "X",
      },
    ]);
  };

  return (
    <>
      {/* Desktop */}
      <motion.section layout className='rounded-xl lg:flex relative hidden flex-col lg:gap-y-12 gap-y-3 border border-outline_varient bg-white w-full sm:p-6 p-3 h-fit'>
        {openBanner && <BannerInfo open={openBanner} setOpen={setOpenBanner} />}
        <ScrollShadow className='w-full lg:h-[400px] h-fit overflow-y-scroll scrollbar-none flex gap-y-3 flex-col'>
          <div className='w-full flex items-center justify-between pb-2'>
            <h1 className='text-base font-normal text-black'>{`Available Tasks for you`}</h1>
            <button className='text-primary_fixed  lg:flex hidden outline-none transition-colors hover:text-brand-700 text-xs font-semibold'>View all</button>
          </div>
          <div className='w-full sm:grid hidden sm:grid-cols-2 grid-cols-1 gap-3'>
            {tasks.map((item: any, index: number) => {
              return <Task key={index} data={item} />;
            })}
          </div>
        </ScrollShadow>
      </motion.section>

      {/* Mobile */}
      <motion.section layoutScroll className='rounded-xl relative lg:hidden flex flex-col lg:gap-y-12 gap-y-3 border border-outline_varient bg-white w-full sm:p-6 p-3 h-fit'>
        {openBanner && <BannerInfo open={openBanner} setOpen={setOpenBanner} />}
        <ScrollShadow className='w-full lg:h-[400px] h-fit overflow-y-scroll scrollbar-none flex gap-y-3 flex-col'>
          <div className='w-full flex items-center justify-between pb-2'>
            <h1 className='text-base font-normal text-black'>{`Available Tasks for you`}</h1>
            <button className='text-primary_fixed  lg:flex hidden outline-none transition-colors hover:text-brand-700 text-xs font-semibold'>View all</button>
          </div>
          {
            // Test purpost.....
            <div className='w-full  grid sm:grid-cols-2 grid-cols-1 gap-3'>
              {taskMobile.map((item: any, index: number) => {
                return <Task key={index} data={item} />;
              })}
            </div>
          }
        </ScrollShadow>
        <div className='w-full lg:hidden flex justify-center py-2 items-center'>
          <button onClick={onViewMore} className='text-primary_fixed outline-none group transition-colors hover:text-brand-700 text-xs flex items-center gap-x-2 font-semibold'>
            View all <ChevronDown className='stroke-primary_fixed group-hover:stroke-brand-700' />
          </button>
        </div>
      </motion.section>
    </>
  );
}
