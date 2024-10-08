"use client";

import React, { SetStateAction, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Advertise_02 } from "@/svgAssets";
import { modalTypes } from "@/types";

interface hero_propTypes {
  setOpenModals: React.Dispatch<SetStateAction<modalTypes>>;
}

export default function Hero({ setOpenModals }: hero_propTypes) {
  return (
    <motion.section initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }} layout className='w-full sm:px-6 py-6 px-3 gap-y-6 rounded-xl flex flex-col items-center justify-center flex-none h-fit border border-outline_varient bg-white'>
      <div className='sm:my-10 py-0 flex flex-col mt-6 h-full w-full justify-center items-center gap-y-6'>
        <Advertise_02 className='w-[270px] h-fit' />
        <h1 className='text-black text-center font-bold text-[32px]'>{`Advertizing on Trendit just got easier 🎉`}</h1>
        <h3 className='text-center max-w-[90%] font-medium text-gray-600 text-sm'>{`Get people with atleast 1000 active followers to repost your adverts and perform certain social tasks for you on their social media accounts. Select the type of task you want people to perform below:`}</h3>
      </div>
    </motion.section>
  );
}
