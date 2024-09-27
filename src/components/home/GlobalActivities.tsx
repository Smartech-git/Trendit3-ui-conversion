"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, UserEdit, Link_01 } from "@/appIcons";
import { Facebook, X, TikTok, Instagram, Youtube, Telegram, Google } from "@/svgAssets";
import { motion } from "framer-motion";
import {ScrollShadow} from "@nextui-org/react";


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
      <div className='flex flex-col pb-8 max-w-[250px]'>
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

  return (
    <section className='rounded-xl flex-none flex flex-col border border-outline_varient bg-white w-full py-6 min-h-[300px] h-[500px]'>
      <ScrollShadow className='flex flex-col h-full w-full overflow-y-scroll scrollbar-none'>
        <div className='px-6'>
          <h1 className='text-black font-normal text-sm'>{`Global Activities`}</h1>
        </div>
        <div className='flex flex-col gap-y-2'>
          <div className='flex flex-col p-3'>
            {activities.map((item: any, index: number, arr: any) => {
              return <Activity key={index} data={item} index={index} arr={arr} />;
            })}
          </div>
        </div>
      </ScrollShadow>
    </section>
  );
}
