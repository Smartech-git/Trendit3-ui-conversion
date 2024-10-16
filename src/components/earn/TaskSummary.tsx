"use client";
import React, { useState } from "react";
import { motion, useScroll } from "framer-motion";
import getSymbolFromCurrency from "currency-symbol-map";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import GenericTask from "../GenericTask";
import StatusChip from "../macroComponents/StatusChip";
const numeral = require("numeral");

export default function TaskSummary() {
  return (
    <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", delay: 0.3 }} className='w-full sm:p-8 py-8 px-3 gap-y-8 flex flex-col items-center text-base font-semibold relative h-fit rounded-xl justify-center border border-gray-200 bg-gray-50'>
      {/* <div className='absolute size-fit -top-[155px] '>
        <BackgroundPatternDecorative />
      </div> */}
      <div className='w-full relative z-20 h-fit flex gap-y-3 flex-col items-center'>
        <div className='flex flex-col gap-3 w-full'>
          <StatusChip status='Completed' />
          <time className='text-sm text-normal'>Jan 13, 2024. 11:47pm</time>
        </div>
        <div className='w-full flex flex-col items-center gap-y-3'>
          <h1 className='text-gray-700 text-left w-full font-medium text-sm'>Task Type</h1>
          <GenericTask />
          <div className='w-full flex sm:px-6 px-3 py-3 items-center flex-col gap-y-3'>
            <div className='w-full justify-between items-start flex gap-x-1'>
              <hr className='h-[1px] mt-2 min-w-[10px]  w-full bg-gray-200 rounded-full' />
              <span className='text-sm sm:max-w-full max-w-[200px] flex-none w-full  text-center text-gray-600 font-medium'>Link of the Facebook Profile you used to performed the task</span>
              <hr className='h-[1px] mt-2 min-w-[10px]  w-full bg-gray-200 rounded-full' />
            </div>
            <div className='w-full flex relative'>
              <Input
                type='text'
                variant='bordered'
                isDisabled
                defaultValue='https://x.com/moski____'
                classNames={{
                  base: "!opacity-[100%]",
                  inputWrapper: "!h-11 !px-4 !rounded-l-lg !rounded-r-none border !border-white !transition-colors data-[hover=true]:border-white group-data-[focus=true]:!border-white bg-white !shadow-none",
                  input: "!text-base !text-gray-500 overflow-hidden placeholder:!text-gray-500 !font-normal [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                }}
              />
            </div>
          </div>
          <div className='w-full sm:px-6 px-3 py-3 flex flex-col gap-y-3'>
            <div className='w-full items-center justify-between flex gap-x-2'>
              <hr className='h-[1px] min-w-[10px] w-full bg-gray-200 rounded-full' />
              <span className='text-sm w-full text-nowrap text-center text-gray-600 font-medium'>Link to the task you performed</span>
              <hr className='h-[1px] min-w-[10px] w-full bg-gray-200 rounded-full' />
            </div>
            <div className='w-full flex relative'>
              <Input
                type='text'
                variant='bordered'
                placeholder='https://'
                classNames={{
                  base: "!opacity-[100%]",
                  inputWrapper: "!h-11 !px-4 !rounded-l-lg !rounded-r-none border !border-white !transition-colors data-[hover=true]:border-white group-data-[focus=true]:!border-white bg-white !shadow-none",
                  input: "!text-base !text-gray-500 overflow-hidden placeholder:!text-gray-500 !font-normal [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                }}
              />
            </div>
          </div>
          <div className='w-full sm:px-6 px-3 py-3 flex flex-col gap-y-3'>
            <div className='w-full items-center flex gap-x-2'>
              <hr className='h-[1px] min-w-[10px] w-full bg-gray-200 rounded-full' />
              <span className='text-sm w-full text-nowrap text-center text-gray-600 font-medium'>Uploaded Proof</span>
              <hr className='h-[1px] min-w-[10px] w-full bg-gray-200 rounded-full' />
            </div>
            <div className='w-full flex rounded-xl items-center justify-center bg-white h-[200px] relative'>
              <div className=' bg-gray-50 border-[1.1px] border-gray-200 size-[114px] rounded-xl'></div>
            </div>
          </div>
          <div className='flex flex-col sm:px-6 px-3 justify-center gap-y-3 w-full'>
            <hr className='h-[1px] min-w-[10px] w-full bg-gray-200 rounded-full' />
            <div className='w-full sm:flex-row flex-col flex items-center gap-2 justify-between'>
              <p className='text-base font-bold text-gray-600'>Amount Earned</p>
              <p className='text-2xl font-bold text-gray-900'>{`${getSymbolFromCurrency("NGN")} ${numeral("35000000.3").format("0,0.00")}`}</p>
            </div>
          </div>
        </div>
      </div>
      <Button disableRipple className='h-11 gap-x-[6px] text-white shadow-main group !outline-none flex flex-none items-center px-[18px] py-3 w-[80%]  bg-black rounded-lg'>
        Appeal
      </Button>
    </motion.div>
  );
}
