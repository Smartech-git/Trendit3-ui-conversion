"use client";

import React, { Key, useState, Dispatch, SetStateAction } from "react";
import { XClose } from "@/appIcons";
import { Button } from "@nextui-org/button";
import { motion } from "framer-motion";
import { Facebook, X, TikTok, Instagram, Youtube, Telegram, Google } from "@/svgAssets";
import { Wallet_02, LayersTwo_01, ChevronDown, ClockFastForward } from "@/appIcons";
import { Input } from "@nextui-org/input";
import { useGlobal } from "@/context/GlobalContext";

interface task_propTypes {
  data?: any;
  socialMediaHandleVerified: boolean;
  setSocialMediaHandleVerified: Dispatch<SetStateAction<boolean>>;
}

export default function TaskDesc({ data, socialMediaHandleVerified, setSocialMediaHandleVerified }: task_propTypes) {
  const { setToast } = useGlobal();
  const handleOnPress = () => {
    setSocialMediaHandleVerified(true);
    setToast({ open: true, state: "success", content: "Success!" });
  };
  return (
    <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }} className='w-full flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white'>
      <div className='w-full px-3 py-4 gap-x-4 flex items-start'>
        <div className='w-12 h-full flex-none relative flex items-center flex-col'>
          <div className='size-fit flex-none'>
            <Facebook className='size-10' />
          </div>
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
      </div>
      <div className='w-full flex bg-gray-50 py-3 px-6 flex-col gap-y-3'>
        <div className='flex items-center w-full gap-x-2'>
          <hr className='bg-gray-200 h-[1px] w-full' />
          <span className='text-sm text-gray-600 flex-none font-medium'>Link your Facebook account</span>
          <hr className='bg-gray-200 h-[1px] w-full' />
        </div>
        <div className='w-full flex relative'>
          <div className='h-11 w-6 flex rounded-l-lg bg-blue items-center justify-center'>
            <Facebook className='size-6' />
          </div>
          <Input
            startContent={
              <div className='pointer-events-none flex items-center'>
                <span className='text-gray-500 font-normal text-base'>{"https://"}</span>
              </div>
            }
            type='text'
            variant='bordered'
            classNames={{
              inputWrapper: "!h-11 !px-4 !rounded-none border !border-white !transition-colors data-[hover=true]:border-white group-data-[focus=true]:!border-white bg-white !shadow-none",
              input: "!text-base overflow-hidden placeholder:!text-gray-500 !font-normal !text-gray-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
            }}
          />
          {socialMediaHandleVerified ? (
            <div className='h-11 bg-white px-4 py-[10px] flex items-center justify-center text-base text-success font-semibold rounded-r-lg'>Verified</div>
          ) : (
            <Button onPress={handleOnPress} disableRipple className='h-11 gap-x-[6px] !outline-none shadow-main flex flex-none items-center px-[18px] py-3 !min-w-auto border-none bg-blue rounded-r-lg rounded-l-none'>
              <span className='text-white  text-base font-semibold'>Submit</span>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
