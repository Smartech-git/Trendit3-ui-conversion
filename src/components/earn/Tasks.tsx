"use client";

import React, { Key, useState } from "react";
import { XClose } from "@/appIcons";
import { Button } from "@nextui-org/button";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, X, TikTok, Instagram, Youtube, Telegram, Google } from "@/svgAssets";
import { ScrollShadow } from "@nextui-org/react";
import { Wallet_02, LayersTwo_01, ChevronDown, ClockFastForward } from "@/appIcons";
import { Tabs, Tab } from "@nextui-org/tabs";

const socials = [
  { name: "Facebook", svg: <Facebook className='size-10' /> },
  { name: "X", svg: <X className='size-10' /> },
  { name: "TikTok", svg: <TikTok className='size-10' /> },
  { name: "Instagram", svg: <Instagram className='size-10' /> },
  { name: "Youtube", svg: <Youtube className='size-10' /> },
  { name: "Telegram", svg: <Telegram className='size-10' /> },
  { name: "Google", svg: <Google className='size-10' /> },
];
const tabs = ["Post advert", "Engagement task"] as const;

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
    {
      social: "Google",
    },
    {
      social: "Facebook",
    },
  ]);
  const [openBanner, setOpenBanner] = useState(true);
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number] | "history">("Post advert");

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
      <motion.section layoutScroll className='rounded-xl flex relative flex-col gap-y-[10px] border border-outline_varient bg-white w-full sm:p-6 p-3 h-fit'>
        {/* {openBanner && <BannerInfo open={openBanner} setOpen={setOpenBanner} />} */}
        <div className='w-full flex items-center py-2 justify-between'>
          <h1 className='text-base font-normal text-black'>{`Available Tasks for you`}</h1>
          <button className='text-primary_fixed  lg:flex hidden outline-none transition-colors hover:text-brand-700 text-xs font-semibold'>View all</button>
        </div>
        <div className='flex items-center relative w-full justify-between'>
          <Tabs onSelectionChange={setActiveTab as (key: Key) => void} classNames={{ tab: "p-3", tabList: "gap-0", tabContent: "group-data-[selected=true]:text-primary_fixed text-sm font-semibold text-gray-700 flex items-center gap-x-2", cursor: "bg-primary_fixed" }} size='sm' variant='underlined' aria-label='Tabs variants'>
            {tabs.map((tab: string) => {
              return <Tab key={tab} title={tab} />;
            })}
            <Tab
              className='absolute w-fit right-0'
              key={"history"}
              title={
                <>
                  <ClockFastForward className={`${activeTab === "history" && "!stroke-primary_fixed"}`} />
                  <span className="xs:flex hidden">History</span>
                </>
              }
            />
          </Tabs>
        </div>
        {activeTab === "Post advert" && (
          <ScrollShadow className='w-full min-h-[300px] h-fit overflow-y-scroll scrollbar-none flex gap-y-3 flex-col'>
            <div className='w-full grid sm:grid-cols-2 grid-cols-1 gap-3'>
              {tasks.map((item: any, index: number) => {
                return <Task key={index} data={item} />;
              })}
            </div>
          </ScrollShadow>
        )}
        {activeTab === "Engagement task" && (
          <ScrollShadow className='w-full min-h-[300px] h-fit overflow-y-scroll scrollbar-none flex gap-y-3 flex-col'>
            <div className='w-full grid sm:grid-cols-2 grid-cols-1 gap-3'>
              {tasks.map((item: any, index: number) => {
                return <Task key={index} data={item} />;
              })}
            </div>
          </ScrollShadow>
        )}
        {activeTab === "history" && <ScrollShadow className='w-full min-h-[300px] h-fit overflow-y-scroll scrollbar-none flex gap-y-3 flex-col'></ScrollShadow>}
      </motion.section>

     
    </>
  );
}
