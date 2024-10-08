"use client";

import React, { Key, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Wallet_02, LayersTwo_01 } from "@/appIcons";
import { Facebook, X, TikTok, Instagram, Youtube, Telegram, Google } from "@/svgAssets";
import { ThumbsUp, MessageNot, Share_06, UserPlus_02 } from "@/appIcons";
import Link from "next/link";

export default function EngagementTask({ data }: { data: any }) {
  const rendeIcon = useCallback((type: any) => {
    if (type === "like") {
      return <ThumbsUp />;
    } else if (type === "follow") {
      return <UserPlus_02 />;
    } else if (type === "comment") {
      return <MessageNot />;
    } else if (type === "share") {
      return <Share_06 />;
    }
  }, []);

  const renderSocials = useCallback((type: any) => {}, []);

  return (
    // <Link href={`/earn/create-${data?.social?.toLowerCase()}?id=123343434`}>
      <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }} className='w-full p-4 cursor-pointer gap-x-4 flex items-start rounded border border-neutral-100 shadow-main hover:bg-gray-50 transition-colors'>
        <div className='w-12 h-full flex-none relative flex items-center flex-col'>
          <div className='size-12 rounded-full flex items-center justify-center bg-blue flex-none'>{rendeIcon(data?.type)}</div>
        </div>
        <div className='flex gap-y-[6px] flex-col'>
          <div className='w-full flex items-center justify-between'>
            <h1 className='text-gray-900 w-fit font-semibold sm:text-[15px] text-sm'>{`Post adverts on your Facebook page`}</h1>
          </div>
          <p className='text-gray-600 font-normal text-xs'>{`Post adverts of various businesses and top brands on your Facebook Page and earn ₦110 per advert past.`}</p>
          <div className='flex items-center w-full flex-wrap gap-x-[6px]'>
            <span className='text-gray-400 font-normal text-xs'>Platforms:</span>
            <Facebook className='size-[19px]' />
            <X className='size-[19px]' />
            <Google className='size-[19px]' />
            <Instagram className='size-[19px]' />
            <Telegram className='size-[19px]' />
          </div>
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
    // </Link>
  );
}
