"use client";
import React, { useState } from "react";
import { motion, useScroll } from "framer-motion";
import { BackgroundPatternDecorative } from "@/svgAssets";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { LinkExternal_02 } from "@/appIcons";
import Link from "next/link";

export default function GeneratedTask() {
  return (
    <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", delay: 0.3 }} className='w-full flex relative h-fit overflow-hidden rounded-xl justify-center border border-gray-200 bg-gray-50'>
      <div className='absolute size-fit -top-[145px] '>
        <BackgroundPatternDecorative />
      </div>
      <div className='w-full relative z-20 h-fit px-[30px] pb-[20px] pt-[80px] flex flex-col gap-y-2'>
        <h1 className='text-gray-900 font-semibold text-xl text-center'>Task</h1>
        <p className='text-gray-600  text-sm font-normal'>
          Please follow the step-by-step instructions below to do your task:
          <br />
          <br />
          <span className='text-gray-700 font-semibold'>Step 1:</span> Open the Task Link above on your Facebook Mobile App or browser
          <br />
          <br />
          <span className='text-gray-700 font-semibold'>Step 2:</span> The link will direct you to a Facebook Page which you are meant to follow.
          <br />
          <br />
          <span className='text-gray-700 font-semibold'>Step 3:</span> Click on the Follow button on the Facebook Page to start following the page. You MUST NOT Unfollow the account after you have followed the account.
          <br />
          <br />
          <span className='text-gray-700 font-semibold'>Step 4:</span> Create a screenshot of the page that shows you have followed the page and upload the screenshot under the Proof of Work Form below. You are also required to enter your Facebook Username or Name which you used to perform the task
        </p>
        <div className='w-full flex flex-col gap-3'>
          <div className='w-full mt-6 items-center flex gap-x-2'>
            <hr className='h-[1px] w-full bg-gray-200 rounded-full' />
            <span className='text-sm text-nowrap text-gray-600 font-medium'>Link your task</span>
            <hr className='h-[1px] w-full bg-gray-200 rounded-full' />
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
            <Link href='https://x.com/moski____' target='_blank' rel='noopener noreferrer'>
              <Button disableRipple className='h-11 gap-x-[6px] group !outline-none flex flex-none items-center px-[18px] py-3 !min-w-auto border-none bg-white rounded-r-lg rounded-l-none'>
                <LinkExternal_02 className='group-hover:stroke-brand-700 transition-colors' />
                <span className='text-primary_fixed group-hover:text-brand-700 transition-colors text-base font-semibold'>Visit link</span>
              </Button>
            </Link>
          </div>
        </div>
        <Button disableRipple className='h-11 mt-4 shadow-main gap-x-[6px] group !outline-none flex flex-none items-center px-[18px] py-3 !min-w-fit w-fit border border-gray-300 bg-white rounded-lg'>
          <span className='text-warning transition-colors text-base font-semibold'>Cancel Task</span>
        </Button>
      </div>
    </motion.div>
  );
}
