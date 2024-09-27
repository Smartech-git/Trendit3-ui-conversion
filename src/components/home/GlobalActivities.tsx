"use client";
import React, { useState } from "react";
import { ChevronDown } from "@/appIcons";
import { Facebook, X, TikTok, Instagram, Youtube, Telegram, Google } from "@/svgAssets";
import { motion } from "framer-motion";
import { ScrollShadow } from "@nextui-org/react";

const socials = [
  { name: "Facebook", svg: <Facebook className='size-8' /> },
  { name: "X", svg: <X className='size-8' /> },
  { name: "TikTok", svg: <TikTok className='size-8' /> },
  { name: "Instagram", svg: <Instagram className='size-8' /> },
  { name: "Youtube", svg: <Youtube className='size-8' /> },
  { name: "Telegram", svg: <Telegram className='size-8' /> },
  { name: "Google", svg: <Google className='size-8' /> },
];

const Activity = ({ data, index, arr }: { data: any; index: number; arr: any }) => {
  return (
    <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }} className='w-full px-3 cursor-pointer gap-x-[10px] py-1 flex items-start rounded-lg hover:bg-gray-50 transition-colors'>
      <div className='w-8 h-full gap-y-1 flex-none relative flex items-center flex-col'>
        <div className='size-fit flex-none'>{socials?.find((item: any) => item?.name === data?.social)?.svg}</div>
        <div className={`w-[2px] ${index === arr.length - 1 && "!hidden"} h-full rounded-full bg-gray-200`}></div>
      </div>
      <div className='flex flex-col pb-8 lg:max-w-[250px] w-full'>
        <div className='w-full flex items-center justify-between'>
          <h1 className='text-primary_fixed w-fit font-medium text-sm'>{`@anasahmed`}</h1>
          <span className='text-gray-600 text-nowrap text-xs'>{`2 mins ago`}</span>
        </div>
        <p className='text-gray-500 font-normal text-xs'>{`Just earned ₦3 for following a page or account on Instagram`}</p>
      </div>
    </motion.div>
  );
};

export default function GlobalActivities() {
  const [activities, setActivities] = useState<any>([
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
  const [activitiesMobile, setActivitiesMobile] = useState<any>([
    {
      social: "Google",
    },
    {
      social: "Telegram",
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
  ]);

  const onViewMore = () => {
    setActivitiesMobile((prev: any) => [
      ...prev,
      {
        social: "Youtube",
      },
      {
        social: "Instagram",
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
    ]);
  };

  return (
    <section className='rounded-xl flex-none flex flex-col border border-outline_varient bg-white w-full py-6'>
      <ScrollShadow className='flex flex-col min-h-[300px] lg:h-[500px] h-fit w-full overflow-y-scroll scrollbar-none'>
        <div className='px-6'>
          <h1 className='text-black font-normal text-sm'>{`Global Activities`}</h1>
        </div>
        <div className='flex w-full flex-col gap-y-2'>
          <div className='lg:flex hidden w-full flex-col p-3'>
            {activities.map((item: any, index: number, arr: any) => {
              return <Activity key={index} data={item} index={index} arr={arr} />;
            })}
          </div>
          {
            // Mobile view ....
            <div className='lg:hidden flex w-full flex-col p-3'>
              {activitiesMobile.map((item: any, index: number, arr: any) => {
                return <Activity key={index} data={item} index={index} arr={arr} />;
              })}
            </div>
          }
        </div>
      </ScrollShadow>
      <div className='w-full lg:hidden flex justify-center py-2 items-center'>
        <button onClick={onViewMore} className='text-primary_fixed outline-none group transition-colors hover:text-brand-700 text-xs flex items-center gap-x-2 font-semibold'>
          View all <ChevronDown className='stroke-primary_fixed group-hover:stroke-brand-700' />
        </button>
      </div>
    </section>
  );
}
