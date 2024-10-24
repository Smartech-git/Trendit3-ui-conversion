"use client";

import React from "react";
import OnPageLoad from "@/components/loadingScreens/OnPageLoad";
import { Skeleton } from "@nextui-org/skeleton";
import Spinner from "@/components/loadingScreens/Spinner";
import { motion, AnimatePresence } from "framer-motion";
import { Earn, TikTok, Facebook, Telegram, Whatsapp } from "@/svgAssets";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Copy_01 } from "@/appIcons";
import ReferalTable from "@/components/tables/ReferalTable";
import getSymbolFromCurrency from "currency-symbol-map";

export default function ReferAndEarn() {
  return (
    <div className='w-full 2xl:gap-8 sm:gap-6 gap-4 flex 2xl:px-8 sm:px-6 px-4 relative h-[100svh]'>
      <div className='h-full 2xl:pb-8 sm:pb-8 pb-8 overflow-y-scroll scrollbar-none flex flex-col sm:gap-6 gap-4 relative 2xl:pt-[112px] sm:pt-[96px] pt-[72px] w-full'>
        <div className='w-full flex flex-col gap-y-3'>
          <div className='w-full flex flex-col'>
            <h1 className='text-[30px] font-semibold text-gray-900'>Invite and Earn</h1>
            <p className='text-base font-normal text-gray-600'>Manage your team members and their account permissions here.</p>
          </div>
          <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }} className='w-full border-gray-200 sm:px-6 py-6 px-3 flex flex-col gap-y-3 border rounded-xl bg-white'>
            <div className='w-full sm:flex-row flex-col flex relative gap-3 items-center justify-between'>
              <h1 className='text-gray-900 md:text-5xl sm:!text-left text-center text-3xl font-bold'>{`Invite and Get ${getSymbolFromCurrency("NGN")}500`}</h1>
              <Earn className='w-[197px] h-fit' />
            </div>
            <div className='w-full flex flex-col gap-y-[6px]'>
              <h1 className='text-grat-700 text-sm font-medium'>Share link</h1>

              <div className='flex md:flex-row flex-col gap-2'>
                <div className='w-full gap-2 flex relative'>
                  <Input
                    autoComplete='off'
                    placeholder={`Enter password`}
                    name='password'
                    variant='bordered'
                    value={"join.yourcompany.io/project"}
                    isDisabled
                    type='text'
                    classNames={{
                      base: "!opacity-[100%]",
                      inputWrapper: "!h-11 !px-4 !rounded-lg  border !transition-all data-[hover=true]:border-gray-300 group-data-[focus=true]:!border-brand-700 group-data-[invalid=true]:border-error group-data-[focus=true]:!border-2 !shadow-main",
                      input: "!text-base overflow-hidden !font-medium placeholder:!font-normal placeholder:!text-gray-500  !text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                    }}
                  />
                  <Button disableRipple className='!h-[44px] !w-[44px] !min-w-[44px] !outline-none flex items-center !p-0 !min-w-auto border border-gray-200 bg-transparent data-[hover=true]:!bg-gray-50 !opacity-100 transition-colors rounded-lg shadow-main'>
                    <Copy_01 />
                  </Button>
                </div>
                <div className='flex items-center gap-x-6'>
                  <TikTok className='size-[32px] cursor-pointer' />
                  <Facebook className='size-[32px] cursor-pointer' />
                  <Whatsapp className='cursor-pointer' />
                  <Telegram className='size-[32px] cursor-pointer' />
                </div>
              </div>
            </div>
          </motion.div>
          <ReferalTable />
        </div>
      </div>
    </div>
  );
}
