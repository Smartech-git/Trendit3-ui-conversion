"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckVerified_02 } from "@/appIcons";
import { Button } from "@nextui-org/button";
import { Earn } from "@/svgAssets";

export default function Hero() {
  const [openBecomeMember, setOpenBecomeMember] = useState(true);

  return (
    <motion.section initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }} layout className='w-full px-6 py-16 sm:rounded-xl rounded-none flex flex-col items-center justify-center flex-none h-fit border gap-y-6 border-outline_varient bg-white'>
      <Earn className='size-[220px]' />
      <h1 className='text-black text-center font-bold text-[32px]'>{`Earn on Trendit just got easier 🎉`}</h1>
      <h3 className='text-center max-w-[90%] font-medium text-gray-600 text-sm'>{`Get people with atleast 1000 active followers to repost your adverts and perform certain social tasks for you on their social media accounts. Select the type of task you want people to perform below:`}</h3>
      <Button disableRipple className='h-9 gap-x-[6px] !outline-none flex items-center px-[14px] py-2 !min-w-auto border-none bg-primary_fixed data-[hover=true]:!bg-brand-700 !opacity-100 transition-colors rounded-lg'>
        <span className='text-white sm:flex hidden text-base font-semibold'>Become a member</span> <CheckVerified_02/>
      </Button>
    </motion.section>
  );
}
