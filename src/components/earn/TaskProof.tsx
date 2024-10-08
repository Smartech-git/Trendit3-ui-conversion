"use client";
import React, { useState } from "react";
import { motion, useScroll } from "framer-motion";
import { BackgroundPatternDecorative } from "@/svgAssets";
import { ImagePlus, Upload_01 } from "@/appIcons";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

export default function TaskProof() {
  return (
    <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", delay: 0.3 }} className='w-full flex relative h-fit overflow-hidden rounded-xl justify-center border border-gray-200 bg-gray-50'>
      <div className='absolute size-fit -top-[155px] '>
        <BackgroundPatternDecorative />
      </div>
      <div className='w-full relative z-20 h-fit px-[30px] pb-[20px] pt-[60px] flex flex-col items-center'>
        <div className='bg-white size-14 rounded-xl border border-gray-200 shadow-main flex items-center justify-center'>
          <ImagePlus />
        </div>
        <div className='w-full mt-5 flex flex-col items-center gap-y-3'>
          <div className='w-full flex flex-col items-center gap-y-2'>
            <h1 className='text-gray-900 font-semibold leading-none text-xl text-center'>Upload proof</h1>
            <p className='text-gray-600 text-normal text-center max-w-[268px] text-sm'>Please enter the name on your Facebook account that performed this task</p>
          </div>

          <div className='w-full flex flex-col gap-y-3'>
            <div className='w-full mt-6 items-center flex gap-x-2'>
              <hr className='h-[1px] min-w-[10px] w-full bg-gray-200 rounded-full' />
              <span className='text-sm sm:max-w-full max-w-[200px] flex-none w-full  text-center text-gray-600 font-medium'>Link of the Facebook Profile you used to performed the task</span>
              <hr className='h-[1px] min-w-[10px] w-full bg-gray-200 rounded-full' />
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
          <div className='w-full flex flex-col gap-y-3'>
            <div className='w-full mt-6 items-center flex gap-x-2'>
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
          <div className='w-full flex flex-col gap-y-3'>
            <div className='w-full mt-6 items-center flex gap-x-2'>
              <hr className='h-[1px] min-w-[10px] w-full bg-gray-200 rounded-full' />
              <span className='text-sm w-full text-nowrap text-center text-gray-600 font-medium'>Uploaded Proof</span>
              <hr className='h-[1px] min-w-[10px] w-full bg-gray-200 rounded-full' />
            </div>
            <div className='w-full flex rounded-xl items-center justify-center bg-white h-[200px] relative'>
              <div className=' bg-gray-50 border-[1.1px] border-gray-200 size-[114px] rounded-xl'></div>
            </div>
          </div>
          <div className='flex justify-center w-full mt-8'>
            <Button disableRipple className='h-11 gap-x-[6px] shadow-main group !outline-none flex flex-none items-center px-[18px] py-3 !min-w-auto border border-pink-200 bg-brand-50 rounded-lg'>
              <label htmlFor='image' className='w-full flex items-center gap-x-[6px] cursor-pointer'>
                <Upload_01 />
                <span className='text-primary_fixed group-hover:text-primary_fixed transition-colors text-base font-semibold'>Upload proof</span>
              </label>
              <input type='file' id='image' accept='image/png, image/jpeg, image/jpg' className='hidden' />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
