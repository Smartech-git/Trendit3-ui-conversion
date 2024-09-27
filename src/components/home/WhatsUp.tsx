"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, UserEdit, Link_01 } from "@/appIcons";
import { motion } from "framer-motion";
import {ScrollShadow} from "@nextui-org/react";


export default function WhatsUp() {
  return (
    <section className='rounded-xl flex flex-col gap-y-3 border border-outline_varient bg-white w-full py-6 max-h-fit'>
      <div className='px-6'>
        <h1 className='text-black font-normal text-sm'>{`What’s up`}</h1>
      </div>
      <div className='flex flex-col '>
        <div className='px-6 w-full'>
          <div className=' group w-full py-1 px-3 h-[50px] cursor-pointer bg-tertiary_fixed rounded-md justify-between items-center flex'>
            <div className='flex flex-col '>
              <h1 className='text-white font-bold text-xs'>On-going tasks</h1>
              <h2 className='text-white font-normal text-xs'>Your task has a new update (2)</h2>
            </div>
            <div className='flex group items-center gap-x-1 w-fit outline-none'>
              <ArrowRight className='stroke-white group-hover:translate-x-0.5 transition-all  size-5' />
            </div>
          </div>
        </div>

        <div className='flex flex-col p-3 gap-y-2'>
          <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }} className='w-full px-3 cursor-pointer gap-x-[10px] py-2 flex items-start rounded-lg hover:bg-gray-50 transition-colors'>
            <div className='size-7 flex-none flex items-center justify-center rounded-md bg-black'>
              <UserEdit />
            </div>
            <div className='flex flex-col max-w-[250px] '>
              <h1 className='text-gray-700 w-full font-semibold text-sm'>{`Complete your profile set up`}</h1>
              <p className='text-gray-500 font-normal text-xs'>{`we encourage you to complete your profile settings.`}</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", delay: 0.3 }} className='w-full px-3 cursor-pointer gap-x-[10px] py-2 flex items-start rounded-lg hover:bg-gray-50 transition-colors'>
            <div className='size-7 flex-none flex items-center justify-center rounded-md bg-black'>
              <Link_01 />
            </div>
            <div className='flex flex-col max-w-[250px] '>
              <h1 className='text-gray-700 w-full font-semibold text-sm'>{`Link your social media accounts`}</h1>
              <p className='text-gray-500 font-normal text-xs'>{`You need to link your Instagram account to Trendit³ before you can start earning. `}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
