"use client";

import React, { useState, Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/button";
import { AnimatePresence } from "framer-motion";

interface taskSubmission_propTypes {
  openNot: boolean;
  setOpenNot: Dispatch<SetStateAction<boolean>>;
}

export default function Notice({ setOpenNot, openNot }: taskSubmission_propTypes) {
  return (
    <AnimatePresence>
      {openNot && (
        <motion.div key='notice' initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }} transition={{ type: "spring", delay: 1 }} className='w-full px-1 sticky z-40 bottom-2'>
          <div className='shadow-main-lg p-4 gap-y-4 flex flex-col flex-none items-start border border-gray-300 rounded-xl bg-white'>
            <div className='flex flex-col'>
              <h1 className='text-sm text-gray-900 font-bold'>NEW UPDATE! PLEASE TAKE NOTE</h1>
              <p className='text-sm text-gray-600 font-normal'>
                Note that a team has been dedicated to verifies all the task performed by people assigned to you. However the team prioritizes large and bulk orders over smaller orders
                <br /> <br />
                Therefore, we have created a provision that gives you chances to verify what each of the person assigned to perform your task has done. If your order is much or you do not have the time, we will also verify the task for yo. However you can aid the process much faster if you want to verify the tasks yourself
                <br /> <br />
                Each person that performs your task has to upload a proof or screenshot showing that they perform the task. that will also enter other information such as their social media username, phone number or name depending on the task performed
                <br /> <br />
                You have to verify the task by crosschecking the proof or screenshot carefully and check all given information to ensure that the user has performed the task. if you are convinced that the user performed the task simply click “Accept” or click on “Reject” if the user did not perform the task.
              </p>
            </div>
            <Button
              onPress={() => {
                setOpenNot(false);
              }}
              disableRipple
              className='h-11 shadow-main gap-x-[6px] !outline-none flex flex-none items-center px-[18px] py-3 sm:!min-w-fit !min-w-full w-fit border-none bg-success rounded-lg'
            >
              <span className='text-white atransition-colors text-base font-semibold'>Ok, I Understand</span>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
