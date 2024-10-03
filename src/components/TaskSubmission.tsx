"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/button";
import SubmiteTask from "./modals/SubmitTask";
import { earnPageModalTypes } from "@/types";

export default function TaskSubmission() {
  const [openModals, setOpenModals] = useState<earnPageModalTypes>({ submit: false });
  return (
    <>
      <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }} transition={{ type: "spring", delay: 1 }} className='w-full px-1 sticky z-40 bottom-2'>
        <div className='shadow-main-lg p-4 gap-x-12 gap-y-4 flex sm:flex-row flex-col flex-none items-center border border-gray-300 rounded-xl bg-white'>
          <div className='flex flex-col'>
            <h1 className='text-sm text-gray-900 font-semibold'>Note before submitting task</h1>
            <p className='text-sm text-gray-600 font-normal'>
              You must NOT UNFOLLOW the page after you have followed the page. Your Trendit3 account will be <span className='text-warning'>suspended</span> once you UNFOLLOW the Facebook Page.
            </p>
          </div>
          <Button onPress={() => setOpenModals({ submit: true })} disableRipple className='h-11 shadow-main gap-x-[6px] !outline-none flex flex-none items-center px-[18px] py-3 sm:!min-w-fit !min-w-full w-fit border-none bg-success rounded-lg'>
            <span className='text-white atransition-colors text-base font-semibold'>Submit Task</span>
          </Button>
        </div>
      </motion.div>

      {
        //   modals...
        <SubmiteTask openModals={openModals} setOpenModals={setOpenModals} />
      }
    </>
  );
}
