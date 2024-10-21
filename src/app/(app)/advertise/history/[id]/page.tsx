"use client";

import React, { useState, Key } from "react";
import { motion } from "framer-motion";
import TaskStats from "@/components/stats/TaskStats";
import OrderSummary from "@/components/advertise/OrderSummary";
import Notifications from "@/components/advertise/Notifications";
import { ScrollShadow } from "@nextui-org/react";
import AdTasksTable from "@/components/tables/AdTasksTable";
import Notice from "@/components/alert/advert/Notice";

export default function History() {
  const [openNot, setOpenNot] = useState(true);

  return (
    <div className='2xl:pt-[112px] sm:pt-[96px] flex flex-col gap-6 pt-[72px]'>
      <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }} className='w-full flex p-3 flex-col overflow-hidden rounded-xl border border-gray-200 bg-white'>
        <TaskStats />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }} className='gap-6 md:flex-row flex-col flex '>
        <div className='w-full p-8 h-[600px] rounded-xl border border-gray-200 bg-white'>
          <ScrollShadow className='overflow-y-scroll scrollbar-none h-full'>
            <OrderSummary active={true} />
          </ScrollShadow>
        </div>

        <div className='w-full h-[600px] py-8 rounded-xl border border-gray-200 bg-white'>
          <Notifications />
        </div>
      </motion.div>
      <AdTasksTable />

      {
        //

        <Notice openNot={openNot} setOpenNot={setOpenNot} />
      }
    </div>
  );
}
