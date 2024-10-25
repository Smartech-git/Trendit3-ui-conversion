"use client";

import React, { Key, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Wallet_02, LayersTwo_01 } from "@/appIcons";
import EngagementIcon from "../macroComponents/EngagementIcon";
import SocialMedia from "../macroComponents/SocialMedia";
import getSymbolFromCurrency from "currency-symbol-map";
import { getEngagementSubPath } from "@/lib/helpers";
import Link from "next/link";
import { useGlobal } from "@/context/GlobalContext";
import { TextLoaders } from "../loadingScreens/skeletonLoaders";
import { usePathname } from "next/navigation";

export default function EngagementTask({ data }: { data: any }) {
  const { socialMediaPlatforms } = useGlobal();
  const pathname = usePathname();
  const [_, root, ...segments] = pathname.split("/");

  return (
    <Link href={`/${root}/${getEngagementSubPath(data?.name)?.split(" ")?.join("-").toLocaleLowerCase()}?key=${data?.key}`}>
      <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }} className='w-full h-full p-4 cursor-pointer gap-x-4 flex items-start rounded border border-neutral-100 shadow-main hover:bg-gray-50 transition-colors'>
        <div className='w-12 h-full flex-none relative flex items-center flex-col'>
          <div className='size-12 rounded-full flex items-center justify-center bg-blue flex-none'>
            <EngagementIcon data={data?.name} />
          </div>
        </div>
        <div className='flex gap-y-[6px] flex-col'>
          <div className='w-full flex items-center justify-between'>
            <h1 className='text-gray-900 w-fit font-semibold sm:text-[15px] text-sm'>{data?.name}</h1>
          </div>
          <p className='text-gray-600 font-normal text-xs'>{data?.description}</p>
          <div className='flex items-center w-full flex-wrap gap-x-[6px]'>
            <span className='text-gray-400 font-normal text-xs'>Platforms:</span>
            {socialMediaPlatforms.length > 0 ? (
              socialMediaPlatforms.map((platform: any, idx: number) => {
                return <SocialMedia key={idx} platform={platform} className='size-[19px]' />;
              })
            ) : (
              <TextLoaders />
            )}
          </div>
          <div className='flex w-full flex-wrap gap-1'>
            <div className='py-0.5 px-1 rounded-full border border-brand-200 bg-brand-50 flex gap-x-1 items-center'>
              <Wallet_02 className='stroke-brand-500 size-3' />
              <span className='text-xs font-medium text-brand-700'>{`${getSymbolFromCurrency("NGN")}${data?.price} per post`}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
