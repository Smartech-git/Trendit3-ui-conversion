"use client";

import React, { useState } from "react";
import { XClose } from "@/appIcons";
import { Button } from "@nextui-org/button";
import { motion } from "framer-motion";
import { Facebook, X, TikTok, Instagram, Youtube, Telegram, Google } from "@/svgAssets";
import {ScrollShadow} from "@nextui-org/react";

const socials = [
  { name: "Facebook", svg: <Facebook className='size-12' /> },
  { name: "X", svg: <X className='size-12' /> },
  { name: "TikTok", svg: <TikTok className='size-12' /> },
  { name: "Instagram", svg: <Instagram className='size-12' /> },
  { name: "Youtube", svg: <Youtube className='size-12' /> },
  { name: "Telegram", svg: <Telegram className='size-12' /> },
  { name: "Google", svg: <Google className='size-12' /> },
];

const BannerInfo = () => {
  return (
    <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }} className='w-full p-2 gap-x-2 flex items-center bg-black'>
      <div className='w-full flex justify-center gap-x-[6px] items-center'>
        <h1 className='text-base font-bold text-white'>{`45,678 Total Task available for you to perform`}</h1>
        <span className='text-nowrap cursor-pointer text-pink hover:text-brand-200 transition-colors font-normal text-base hover:underline underline-offset-4'>Generate tasks</span>
      </div>
      <Button disableRipple className='!bg-transparent outline-none !min-w-10 !w-10 !h-10 rounded-lg transition-colors flex flex-none data-[hover=true]:!bg-white/10 !opacity-100 items-center justify-center !p-0'>
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
          <h1 className='text-gray-900 w-fit font-semibold text-[15px]'>{`Post adverts on your Facebook page`}</h1>
        </div>
        <p className='text-gray-600 font-normal text-xs'>{`Post adverts of various businesses and top brands on your Facebook Page and earn ₦110 per advert past.`}</p>
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

  return (
    <section className='rounded-xl relative flex flex-col gap-y-12 border border-outline_varient bg-white w-full p-6 h-[600px]'>
      <BannerInfo />
      <ScrollShadow className='w-full h-full overflow-y-scroll scrollbar-none flex gap-y-3 flex-col'>
        <div className='w-full flex items-center justify-between pb-2'>
          <h1 className='text-base font-normal text-black'>{`Available Tasks for you`}</h1>
          <button className='text-primary_fixed outline-none transition-colors hover:text-brand-700 text-xs font-semibold'>View all</button>
        </div>
        <div className='w-full grid grid-cols-2 gap-3'>
          {tasks.map((item: any, index: number) => {
            return <Task key={index} data={item} />;
          })}
        </div>
      </ScrollShadow>
    </section>
  );
}
