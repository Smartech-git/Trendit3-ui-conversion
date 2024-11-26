"use client";

import React, { useEffect, useState } from "react";
import { XClose } from "@/appIcons";
import { Button } from "@nextui-org/button";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, X, TikTok, Instagram, Youtube, Telegram, Google } from "@/svgAssets";
import { ScrollShadow } from "@nextui-org/react";
import { Wallet_02, LayersTwo_01, ChevronDown } from "@/appIcons";
import NotificationBanner from "../alert/NotificationBanner";
import Link from "next/link";
import { useGlobal } from "@/context/GlobalContext";
import { useRouter } from "next/navigation";
import { TaskLoader } from "../loadingScreens/skeletonLoaders";
import AdvertTask from "../Tasks/AdvertTask";

export default function Tasks() {
  const { earnersTask } = useGlobal();
  const [earnerTaskPrev, setEarnersTaskPrev] = useState<any>(undefined);

  useEffect(() => {
    //console.log(earnersTask);
    setEarnersTaskPrev(earnersTask?.advert?.filter((x: any, idx: number) => idx <= 2));
  }, [earnersTask]);

  const { setNotificationBanner } = useGlobal();
  const router = useRouter();

  useEffect(() => {
    setNotificationBanner({
      open: true,
      mainContent: "45,678 Total Task available for you to perform",
      action: "Generate tasks",
      actionCallback: () => router.push("/earn"),
    });
  }, []);

  const onViewMore = () => {
    setEarnersTaskPrev(earnersTask.advert);
  };

  return (
    <>
      <motion.section layout className='rounded-xl lg:flex relative hidden flex-col lg:gap-y-12 gap-y-3 border border-outline_varient bg-white w-full sm:p-6 p-3 h-fit'>
        <NotificationBanner />
        <ScrollShadow className='w-full lg:h-[400px] h-fit overflow-y-scroll scrollbar-none flex gap-y-3 flex-col'>
          <div className='w-full flex items-center justify-between pb-2'>
            <h1 className='text-base font-normal text-black'>{`Available Tasks for you`}</h1>
            <Link href='/earn'>
              <button className='text-primary_fixed  lg:flex hidden outline-none transition-colors hover:text-brand-700 text-xs font-semibold'>View all</button>
            </Link>
          </div>
          <div className='w-full sm:grid hidden sm:grid-cols-2 grid-cols-1 gap-3'>
            {earnersTask?.advert?.length > 0
              ? earnersTask?.advert?.map((data: any, index: number) => {
                  return <AdvertTask key={data?.key} data={data} />;
                })
              : new Array(4).fill("").map((item, idx: number) => {
                  return <TaskLoader key={idx} />;
                })}
          </div>
        </ScrollShadow>
      </motion.section>

      {/* Mobile */}
      <motion.section layoutScroll className='rounded-xl relative lg:hidden flex flex-col lg:gap-y-12 gap-y-3 border border-outline_varient bg-white w-full sm:p-6 p-3 h-fit'>
        <NotificationBanner />
        <ScrollShadow className='w-full lg:h-[400px] h-fit overflow-y-scroll scrollbar-none flex gap-y-3 flex-col'>
          <div className='w-full flex items-center justify-between pb-2'>
            <h1 className='text-base font-normal text-black'>{`Available Tasks for you`}</h1>
            <Link href='/earn'>
              <button className='text-primary_fixed  lg:flex hidden outline-none transition-colors hover:text-brand-700 text-xs font-semibold'>View all</button>
            </Link>
          </div>
          {earnersTask?.advert?.length > 0
            ? earnerTaskPrev?.map((data: any, index: number) => {
                return <AdvertTask key={data?.key} data={data} />;
              })
            : new Array(4).fill("").map((item, idx: number) => {
                return <TaskLoader key={idx} />;
              })}
        </ScrollShadow>
        <div className='w-full lg:hidden flex justify-center py-2 items-center'>
          {earnerTaskPrev?.length !== earnersTask?.advert?.length && (
            <button onClick={onViewMore} className='text-primary_fixed outline-none group transition-colors hover:text-brand-700 text-xs flex items-center gap-x-2 font-semibold'>
              View all <ChevronDown className='stroke-primary_fixed group-hover:stroke-brand-700' />
            </button>
          )}
        </div>
      </motion.section>
    </>
  );
}
