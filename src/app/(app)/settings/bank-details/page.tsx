"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { CheveronRight, CheckVerified_01, DotsHorizontal } from "@/appIcons";
import { useGlobal } from "@/context/GlobalContext";
import { modalTypes } from "@/types";
import { Facebook, SnapChat, Linkedin, TikTok, AccessBank } from "@/svgAssets";
import LinkBank from "@/components/modals/LinkBank";

export default function page() {
  const { appUser } = useGlobal();
  const [security, setSecurity] = useState<{ emailAuth: "On" | "Off"; googleAuth: "On" | "Off" }>({
    emailAuth: "Off",
    googleAuth: "On",
  });
  const [openModals, setOpenModals] = useState<modalTypes>({ linkBank:false });

  const handleOnChange = (e: any) => {
    setSecurity((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }} className='w-full h-full flex flex-col pb-[200px] gap-y-6 rounded-xl bg-white'>
        <h1 className='text-gray-900 text-lg font-semibold'>Bank details</h1>
        <div className='w-full flex gap-4 flex-wrap'>
          <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }} className='flex-1 min-w-[300px] relative p-3 cursor-pointer gap-x-2 flex justify-between items-start rounded-lg border border-neutral-100 shadow-main hover:bg-gray-50 hover:border-pink transition-colors'>
            <div className='w-full p-3 flex flex-col gap-y-2'>
              <h1 className='text-xxs text-gray-600 font-medium'>BANK ACCOUNT</h1>
              <div className='w-full flex items-center justify-between'>
                <div className='flex gap-x-4'>
                  <AccessBank />
                  <div className='flex flex-col'>
                    <h1 className='text-xs text-gray-900 font-medium'>John Doe</h1>
                    <p className='text-xs text-gray-600 font-medium'>.... 3456</p>
                  </div>
                </div>
              </div>
            </div>

            <Button disableRipple className='bg-white flex-none outline-none !min-w-9 !w-9 !h-9 rounded-full border-[1.25px] border-outline hover:bg-gray-50 transition-colors flex data-[hover=true]:!bg-gray-50 !opacity-100 items-center justify-center !p-0'>
              <DotsHorizontal />
            </Button>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }} className='flex-1 min-w-[300px] relative p-3 cursor-pointer gap-x-2 flex justify-between items-start rounded-lg border border-neutral-100 shadow-main hover:bg-gray-50 hover:border-pink transition-colors'>
            <div className='w-full p-3 flex flex-col gap-y-2'>
              <h1 className='text-xxs text-gray-600 font-medium'>BANK ACCOUNT</h1>
              <div className='w-full flex items-center justify-between'>
                <div className='flex gap-x-4'>
                  <AccessBank />
                  <div className='flex flex-col'>
                    <h1 className='text-xs text-gray-900 font-medium'>John Doe</h1>
                    <p className='text-xs text-gray-600 font-medium'>.... 3456</p>
                  </div>
                </div>
              </div>
            </div>

            <Button disableRipple className='bg-white flex-none outline-none !min-w-9 !w-9 !h-9 rounded-full border-[1.25px] border-outline hover:bg-gray-50 transition-colors flex data-[hover=true]:!bg-gray-50 !opacity-100 items-center justify-center !p-0'>
              <DotsHorizontal />
            </Button>
          </motion.div>
        </div>
        <div className='flex w-full justify-center'>
          <Button onPress={() => setOpenModals((prev: modalTypes) => ({ ...prev, linkBank: true }))} disableRipple className='h-9 gap-x-[6px] !outline-none flex items-center px-3 py-2 !min-w-auto border-none bg-white data-[hover=true]:!bg-gray-50 !opacity-100 transition-colors rounded-lg shadow-none'>
            <span className='text-primary_fixed  text-base  font-semibold'>Add new</span>
          </Button>
        </div>
      </motion.div>

      {
        // modals...

        <>
          <LinkBank openModals={openModals} setOpenModals={setOpenModals} />
        </>
      }
    </>
  );
}
