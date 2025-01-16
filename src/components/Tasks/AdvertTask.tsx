"use client";

import React, { Key, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Wallet_02, LayersTwo_01 } from "@/appIcons";
import SocialMedia from "../macroComponents/SocialMedia";
import getSymbolFromCurrency from "currency-symbol-map";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function AdvertTask({ data, type }: { data?: any; type?: "createAd" | "earn" }) {
  const pathname = usePathname();
  const [_, root, ...segments] = pathname.split("/");

  return (
    <Link href={`/${root === "home" ? "earn" : root}/create-${data?.platform?.toLowerCase()}?key=${data?.key}`}>
      <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }} className='w-full h-full flex flex-col overflow-hidden rounded shadow-main border border-neutral-100 bg-white'>
        <div className='w-full px-3 py-4 gap-x-4 flex items-start'>
          <div className='w-12 h-full flex-none relative flex items-center flex-col'>
            <div className='size-fit flex-none'>
              <SocialMedia platform={data?.platform} className='size-10 flex-none' />
            </div>
          </div>
          <div className='flex gap-y-1 flex-col'>
            <div className='w-full flex items-center justify-between'>
              <h1 className='text-gray-900 w-fit font-semibold sm:text-[15px] text-sm'>{data?.name}</h1>
            </div>
            <p className='text-gray-600 font-normal text-xs'>{data?.description}</p>
            <div className='flex w-full flex-wrap gap-1'>
              <div className='py-0.5 px-1 rounded-full border border-brand-200 bg-brand-50 flex gap-x-1 items-center'>
                <Wallet_02 className='stroke-brand-500 size-3' />
                <span className='text-xs font-medium text-brand-700'>{`${getSymbolFromCurrency("NGN")}${data?.price} per post`}</span>
              </div>

              {/* <div className='py-0.5 px-1 rounded-full border border-blue-200 bg-blue-50 flex gap-x-1 items-center'>
                <LayersTwo_01 className='stroke-blue-500 size-3' />
                <span className='text-xs font-medium text-blue-700'>342 task available</span>
              </div> */}
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
