"use client";
import React, { useState, Dispatch, SetStateAction } from "react";
import { motion, useScroll } from "framer-motion";
import { BackgroundPatternDecorative } from "@/svgAssets";
import { Search, Plus } from "@/appIcons";
import { Button } from "@nextui-org/button";
import { earnPageModalTypes } from "@/types";
import GenerateTask from "../modals/GenerateTask";

interface noPendingTasks_propTypes {
  socialMediaHandleVerified: boolean;
  openModals: earnPageModalTypes;
  setOpenModals: Dispatch<SetStateAction<earnPageModalTypes>>;
}

export default function NoPendingTasks({ socialMediaHandleVerified, openModals, setOpenModals }: noPendingTasks_propTypes) {
  const handleScrollIntoView = () => {
    const scrollableDivVirtual: any = document?.getElementById("taskLayout");
    if (scrollableDivVirtual) {
      scrollableDivVirtual.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top
    }
  };

  return (
    <>
      <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }} className='w-full flex relative h-[500px] overflow-hidden rounded-xl justify-center items-center border border-gray-200 bg-gray-50'>
        <div className='size-fit -top-[62px] absolute flex justify-center'>
          <BackgroundPatternDecorative />
          <div className='absolute z-10 top-[212px] items-center flex max-w-[355px] flex-col gap-y-5'>
            <div className='size-14 shadow-main flex items-center justify-center rounded-xl bg-white border border-gray-200'>
              <Search className='stroke-gray-700 size-7' />
            </div>
            <div className='flex flex-col items-center gap-y-8'>
              <div className='flex flex-col sm:max-w-full max-w-[90%] gap-y-2 items-center'>
                <h1 className='text-gray-900 text-center font-semibold text-xl'>No pending task created</h1>
                <p className='text-gray-600 text-center text-sm font-normal'>Earn steady income by posting adverts of businesses and top brands on your social media page. To post adverts on Facebook, Instagram, Twitter or Tiktok, you MUST have atleast 1,000 Followers on your social media account.</p>
              </div>
              {socialMediaHandleVerified ? (
                <Button onPress={() => setOpenModals((prev: earnPageModalTypes) => ({ ...prev, generate: true }))} disableRipple className='h-11 gap-x-[6px] !outline-none shadow-main flex flex-none items-center px-[18px] py-3 !min-w-fit !w-fit border-none bg-primary_fixed data-[hover=true]:!bg-brand-700 !opacity-100 transition-colors rounded-lg'>
                  <Plus />
                  <span className='text-white text-base font-semibold'>Generate new task</span>
                </Button>
              ) : (
                <Button onPress={handleScrollIntoView} disableRipple className='h-11 gap-x-[6px] !outline-none shadow-main flex flex-none items-center px-[18px] py-3 !min-w-fit !w-fit border-none bg-gray-100 border border-gray-200 rounded-lg'>
                  <Plus className='stroke-gray-400' />
                  <span className='text-gray-400 text-base font-semibold'>Generate new task</span>
                </Button>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {
        // Modals
        <GenerateTask openModals={openModals} setOpenModals={setOpenModals} />
      }
    </>
  );
}
