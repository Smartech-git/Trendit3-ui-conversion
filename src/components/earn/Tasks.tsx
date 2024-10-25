"use client";

import React, { Key, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Facebook, X, TikTok, Instagram, Youtube, Telegram, Google } from "@/svgAssets";
import { ScrollShadow } from "@nextui-org/react";
import { Wallet_02, LayersTwo_01, ChevronDown, ClockFastForward } from "@/appIcons";
import { Tabs, Tab } from "@nextui-org/tabs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useGlobal } from "@/context/GlobalContext";
import AdvertTask from "../Tasks/AdvertTask";
import EngagementTask from "../Tasks/EngagementTasks";
import { TaskLoader } from "../loadingScreens/skeletonLoaders";
import { cookiesType, taskTypes } from "@/types";
import { apiRequest } from "@/lib/serverRequest";
import { getSession } from "@/cookies";

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

export default function Tasks() {
  const { earnersTask, setEarnersTask } = useGlobal();
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Post advert");

  useEffect(() => {
    const fetchEngagementTasks = async (user: cookiesType) => {
      const result = await apiRequest("task_options?user_type=earner&task_type=engagement ", "GET", null, {
        Authorization: `Bearer ${user?.access_token}`,
      });
      console.log(result);
      if (result?.error) {
        fetchEngagementTasks(user);
        return;
      } else if (result?.status === "success") {
        setEarnersTask((prev: taskTypes) => ({
          ...prev,
          engagement: result?.options,
        }));
      }
    };

    const prep = async () => {
      const session = await getSession();
      fetchEngagementTasks(session?.user);
    };
    prep();
  }, []);

  return (
    <>
      {/* Desktop */}
      <motion.section id='earnPageTasks' layoutScroll className='rounded-xl flex relative flex-col gap-y-[10px] border border-outline_varient bg-white w-full sm:p-6 p-3 h-fit'>
        {/* {openBanner && <BannerInfo open={openBanner} setOpen={setOpenBanner} />} */}
        <div className='w-full flex items-center py-2 justify-between'>
          <h1 className='text-base font-normal text-black'>{`Available Tasks for you`}</h1>
          {/* <button className='text-primary_fixed  lg:flex hidden outline-none transition-colors hover:text-brand-700 text-xs font-semibold'>View all</button> */}
        </div>
        <div className='flex items-start relative w-full justify-between'>
          <Tabs onSelectionChange={setActiveTab as (key: Key) => void} classNames={{ tab: "p-3 pb-5", tabList: "gap-0 p-0", tabContent: "group-data-[selected=true]:text-primary_fixed text-sm font-semibold text-gray-700 flex items-center gap-x-2", cursor: "bg-primary_fixed" }} size='sm' variant='underlined' aria-label='Tabs variants'>
            {tabs.map((tab: string) => {
              return <Tab key={tab} title={tab} />;
            })}
          </Tabs>
          <Link href={"earn/history"}>
            <div className='group mt-1 flex items-center gap-x-2'>
              <ClockFastForward className={`group-hover:opacity-70 transition-opacity`} />
              <span className='xs:flex hidden transition-opacity group-hover:opacity-70 text-sm font-semibold text-gray-700'>History</span>
            </div>
          </Link>
        </div>
        {activeTab === "Post advert" && (
          <ScrollShadow className='w-full min-h-[300px] h-fit overflow-y-scroll scrollbar-none flex gap-y-3 flex-col'>
            <div className='w-full grid sm:grid-cols-2 grid-cols-1 gap-3'>
              {earnersTask?.advert?.length > 0
                ? earnersTask?.advert?.map((data: any, index: number) => {
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
              {earnersTask?.engagement?.length > 0
                ? earnersTask?.engagement?.map((data: any, index: number) => {
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
