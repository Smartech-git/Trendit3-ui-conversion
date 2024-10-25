"use client";

import React, { Key, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Facebook, X, TikTok, Instagram, Youtube, Telegram, Google } from "@/svgAssets";
import { ScrollShadow } from "@nextui-org/react";
import { Wallet_02, LayersTwo_01, ChevronDown, ClockFastForward } from "@/appIcons";
import AdvertTask from "../Tasks/AdvertTask";
import EngagementTask from "../Tasks/EngagementTasks";
import { Tabs, Tab } from "@nextui-org/tabs";
import Link from "next/link";
import { cookiesType, taskTypes } from "@/types";
import { apiRequest } from "@/lib/serverRequest";
import { useGlobal } from "@/context/GlobalContext";
import { getSession } from "@/cookies";
import { TaskLoader } from "../loadingScreens/skeletonLoaders";

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

const Task = ({ data }: { data: any }) => {
  return (
    <Link href={`/advertise/create-${data.social.toLowerCase()}?id=123343434`}>
      <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }} className='w-full p-4 cursor-pointer gap-x-4 flex items-start rounded border border-neutral-100 shadow-main hover:bg-gray-50 transition-colors'>
        <div className='w-12 h-full flex-none relative flex items-center flex-col'>
          <div className='size-fit flex-none'>{socials?.find((item: any) => item?.name === data?.social)?.svg}</div>
        </div>
        <div className='flex gap-y-[6px] flex-col'>
          <div className='w-full flex items-center justify-between'>
            <h1 className='text-gray-900 w-fit font-semibold sm:text-[15px] text-sm'>{`Post adverts on your Facebook page`}</h1>
          </div>
          <p className='text-gray-600 font-normal text-xs'>{`Post adverts of various businesses and top brands on your Facebook Page and earn ₦110 per advert past.`}</p>
          <div className='flex w-full flex-wrap gap-1'>
            <div className='py-0.5 px-1 rounded-full border border-brand-200 bg-brand-50 flex gap-x-1 items-center'>
              <Wallet_02 className='stroke-brand-500 size-3' />
              <span className='text-xs font-medium text-brand-700'>₦110 per post</span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default function Tasks() {
  const [tasks, setTasks] = useState<any>([
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
  const [engagementTask, setEngegementTask] = useState<any>([
    {
      type: "like",
    },
    {
      type: "follow",
    },
    {
      type: "comment",
    },
    {
      type: "share",
    },
  ]);
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Post advert");
  const { setAdvertTask, advertTask } = useGlobal();

  useEffect(() => {
    const fetchEngagementTasks = async (user: cookiesType) => {
      const result = await apiRequest("task_options?user_type=advertiser&task_type=engagement ", "GET", null, {
        Authorization: `Bearer ${user?.access_token}`,
      });
      console.log(result);
      if (result?.error) {
        fetchEngagementTasks(user);
        return;
      } else if (result?.status === "success") {
        setAdvertTask((prev: taskTypes) => ({
          ...prev,
          engagement: result?.options,
        }));
      }
    };

    const fetchAdvertTasks = async (user: cookiesType) => {
      const result = await apiRequest("task_options?user_type=advertiser&task_type=advert", "GET", null, {
        Authorization: `Bearer ${user?.access_token}`,
      });
      console.log(result);
      if (result?.error) {
        fetchEngagementTasks(user);
        return;
      } else if (result?.status === "success") {
        setAdvertTask((prev: taskTypes) => ({
          ...prev,
          advert: result?.options,
        }));
      }
    };

    const prep = async () => {
      const session = await getSession();
      fetchEngagementTasks(session?.user);
      fetchAdvertTasks(session?.user);
    };
    prep();
  }, []);

  return (
    <>
      {/* Desktop */}
      <motion.section id='earnPageTasks' layoutScroll className='rounded-xl flex relative flex-col gap-y-[10px] border border-outline_varient bg-white w-full sm:p-6 p-3 h-fit'>
        {/* {openBanner && <BannerInfo open={openBanner} setOpen={setOpenBanner} />} */}
        <div className='w-full flex items-center py-2 justify-between'>
          <h1 className='text-base font-normal text-black'>{`Create an Advert`}</h1>
        </div>
        <div className='flex items-center relative w-full justify-between'>
          <Tabs onSelectionChange={setActiveTab as (key: Key) => void} classNames={{ tab: "p-3", tabList: "gap-0 p-0", tabContent: "group-data-[selected=true]:text-primary_fixed text-sm font-semibold text-gray-700 flex items-center gap-x-2", cursor: "bg-primary_fixed" }} size='sm' variant='underlined' aria-label='Tabs variants'>
            {tabs.map((tab: string) => {
              return <Tab key={tab} title={tab} />;
            })}
          </Tabs>
          <Link href={"advertise/history"} className='group flex items-center gap-x-2'>
            <ClockFastForward className={`group-hover:opacity-70 transition-opacity`} />
            <span className='xs:flex hidden transition-opacity group-hover:opacity-70 text-sm font-semibold text-gray-700'>History</span>
          </Link>
        </div>
        {activeTab === "Post advert" && (
          <ScrollShadow className='w-full min-h-[300px] h-fit overflow-y-scroll scrollbar-none flex gap-y-3 flex-col'>
            <div className='w-full grid sm:grid-cols-2 grid-cols-1 gap-3'>
              {advertTask?.advert?.length > 0
                ? advertTask?.advert?.map((data: any, index: number) => {
                    return <AdvertTask key={data?.key} data={data} />;
                  })
                : new Array(4).fill("").map((item, idx: number) => {
                    return <TaskLoader key={idx} />;
                  })}
            </div>
          </ScrollShadow>
        )}
        {activeTab === "Engagement task" && (
          <ScrollShadow className='w-full min-h-[300px] h-fit overflow-y-scroll scrollbar-none flex gap-y-3 flex-col'>
            <div className='w-full grid sm:grid-cols-2 grid-cols-1 gap-3'>
              {advertTask?.engagement?.length > 0
                ? advertTask?.engagement?.map((data: any, index: number) => {
                    return <EngagementTask key={data?.key} data={data} />;
                  })
                : new Array(4).fill("").map((item, idx: number) => {
                    return <TaskLoader key={idx} />;
                  })}
            </div>
          </ScrollShadow>
        )}
      </motion.section>
    </>
  );
}
