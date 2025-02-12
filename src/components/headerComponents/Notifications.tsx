"use client";
import React, { useState } from "react";
import { User_01, XClose } from "@/appIcons";
import { motion } from "framer-motion";
import { ScrollShadow } from "@nextui-org/react";
import { Button } from "@nextui-org/button";

const Not = ({ data }: any) => {
  return (
    <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }} className='w-full p-2 hover:bg-gray-50 flex gap-x-3 transition-colors cursor-pointer rounded-lg relative'>
      <div className='size-8 flex-none flex items-center justify-center rounded-full border border-black/[0.08] bg-gray-50'>
        <User_01 className='size-5' />
      </div>
      <div className='w-full flex flex-col'>
        <h1 className='text-gray-700 text-sm font-medium'>{`Demi Wikinson`}</h1>
        <p className='text-gray-600 text-sm font-medium'>
          Just performed your 'Post advert on Facebook Page' task. Awaiting Approval <span className='text-primary_fixed cursor-pointer transition-colors hover:text-brand-700'>View</span>
        </p>
      </div>
      {/* <div className='size-[10px]  box-content absolute right-2 top-2 rounded-full bg-green-600 ' /> */}
    </motion.div>
  );
};

interface notifications_propTypes {
  setOpenNot?: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Notifications({ setOpenNot }: notifications_propTypes) {
  const [tab, setTab] = useState<"not" | "msg">("not");
  return (
    <div className='max-h-[600px] relative h-[80svh] pt-0 pb-6 w-full flex flex-col gap-y-6'>
      <div className='w-full relative flex items-start px-6 flex-col gap-y-1'>
        <div className='xs:!max-w-full xxs:max-w-[300px] max-w-[250px] overflow-x-scroll scrollbar-none h-[38px] relative gap-x-5 flex-none flex items-center'>
          <div className='flex gap-x-3'>
            <button onClick={() => setTab("not")} className={`outline-none text-gray-700 hover:text-black ${tab === "not" && "!text-primary_fixed hover:!text-primary_fixed"} transition-colors text-sm font-medium`}>
              Notification
            </button>
            <button onClick={() => setTab("msg")} className={`outline-none text-gray-700 hover:text-black ${tab === "msg" && "!text-primary_fixed hover:!text-primary_fixed"} transition-colors text-sm font-medium`}>
              Messages
            </button>
          </div>
          <button className={`outline-none text-nowrap text-gray hover:text-gray-400 transition-colors text-sm font-medium`}>Mark as read</button>
        </div>
      </div>

      <ScrollShadow className='w-full h-full flex flex-col overflow-y-scroll scrollbar-none'>
        <div className='flex flex-col px-4 gap-y-1'>
          <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }} className='w-full p-2 hover:bg-gray-50 flex gap-x-3 transition-colors rounded-lg relative'>
            <div className='size-8 flex-none flex items-center justify-center rounded-full border border-black/[0.08] bg-gray-50'>
              <User_01 className='size-5' />
            </div>
            <div className='w-full flex flex-col'>
              <h1 className='text-gray-700 text-sm font-medium'>{`Demi Wikinson`}</h1>
              <p className='text-gray-600 text-sm font-medium'>
                Just performed your 'Post advert on Facebook Page' task. Awaiting Approval <span className='text-primary_fixed cursor-pointer transition-colors hover:text-brand-700'>View</span>
              </p>
            </div>
            <div className='size-[10px] flex-none  box-content absolute right-2 top-2 rounded-full bg-green-600 ' />
          </motion.div>
          {new Array(5).fill("").map((item: any, index: number) => {
            return <Not key={index} />;
          })}
        </div>
      </ScrollShadow>
    </div>
  );
}
