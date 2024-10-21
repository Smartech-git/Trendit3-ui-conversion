"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { CheveronRight, CheckVerified_01, DotsHorizontal } from "@/appIcons";
import { useGlobal } from "@/context/GlobalContext";
import { modalTypes } from "@/types";
import KYCVerification from "@/components/modals/KYCVerification";
import KYCVSuccessful from "@/components/modals/KYCSuccessful";
import { Facebook, SnapChat, Linkedin, TikTok } from "@/svgAssets";
import StatusChip from "@/components/macroComponents/StatusChip";
import LinkSocialMediaAcc from "@/components/modals/LinkSocialMediaAcc";

export default function LinkedAccounts() {
  const { appUser } = useGlobal();
  const [security, setSecurity] = useState<{ emailAuth: "On" | "Off"; googleAuth: "On" | "Off" }>({
    emailAuth: "Off",
    googleAuth: "On",
  });
  const [openModals, setOpenModals] = useState<modalTypes>({ KYCVerification: false, KYCSuccessful: false });
  const [BVNLinked, setBVNLinked] = useState(false);

  const handleOnChange = (e: any) => {
    setSecurity((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }} className='w-full h-full flex flex-col pb-[200px] gap-y-6 rounded-xl bg-white'>
        <h1 className='text-gray-900 text-lg font-semibold'>Linked accouunt</h1>
        <div className='w-full flex gap-4 flex-wrap'>
          <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }} className='flex-1 min-w-[300px] relative p-4 cursor-pointer gap-x-2 flex justify-between items-start rounded border border-neutral-100 shadow-main hover:bg-gray-50 transition-colors'>
            <div className='flex relative max-w-[80%] gap-x-4 items-start'>
              <div className='w-12 h-full flex-none relative flex items-center flex-col'>
                <div className='size-fit flex-none'>
                  <Facebook className='size-10' />
                </div>
              </div>
              <div className='flex relative max-w-[70%] overflow-hidden gap-y-[6px] flex-col'>
                <div className='w-full flex items-center justify-between'>
                  <h1 className='text-gray-900 w-fit font-semibold sm:text-[15px] text-sm'>{`Stephen Oyeshola`}</h1>
                </div>
                <span className='text-gray-600 truncate font-normal text-xs'>{`http://facebook.com/stephen.oyeshola.1/?_rdr`}</span>
                <div className='w-fit gap-1'>
                  <StatusChip status='Verified' />
                </div>
              </div>
            </div>

            <Button disableRipple className='bg-white flex-none outline-none !min-w-9 !w-9 !h-9 rounded-full border-[1.25px] border-outline hover:bg-gray-50 transition-colors flex data-[hover=true]:!bg-gray-50 !opacity-100 items-center justify-center !p-0'>
              <DotsHorizontal />
            </Button>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }} className='flex-1 min-w-[300px] relative p-4 cursor-pointer gap-x-2 flex justify-between items-start rounded border border-neutral-100 shadow-main hover:bg-gray-50 transition-colors'>
            <div className='flex relative max-w-[80%] gap-x-4 items-start'>
              <div className='w-12 h-full flex-none relative flex items-center flex-col'>
                <div className='size-fit flex-none'>
                  <TikTok className='size-10' />
                </div>
              </div>
              <div className='flex relative max-w-[70%] overflow-hidden gap-y-[6px] flex-col'>
                <div className='w-full flex items-center justify-between'>
                  <h1 className='text-gray-900 w-fit font-semibold sm:text-[15px] text-sm'>{`Stephen Oyeshola`}</h1>
                </div>
                <span className='text-gray-600 truncate font-normal text-xs'>{`http://facebook.com/stephen.oyeshola.1/?_rdr`}</span>
                <div className='w-fit gap-1'>
                  <StatusChip status='Verified' />
                </div>
              </div>
            </div>

            <Button disableRipple className='bg-white flex-none outline-none !min-w-9 !w-9 !h-9 rounded-full border-[1.25px] border-outline hover:bg-gray-50 transition-colors flex data-[hover=true]:!bg-gray-50 !opacity-100 items-center justify-center !p-0'>
              <DotsHorizontal />
            </Button>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }} className='flex-1 min-w-[300px] relative p-4 cursor-pointer gap-x-2 flex justify-between items-start rounded border border-neutral-100 shadow-main hover:bg-gray-50 transition-colors'>
            <div className='flex relative max-w-[80%] gap-x-4 items-start'>
              <div className='w-12 h-full flex-none relative flex items-center flex-col'>
                <div className='size-fit flex-none'>
                  <Linkedin className='size-10' />
                </div>
              </div>
              <div className='flex relative max-w-[70%] overflow-hidden gap-y-[6px] flex-col'>
                <div className='w-full flex items-center justify-between'>
                  <h1 className='text-gray-900 w-fit font-semibold sm:text-[15px] text-sm'>{`Stephen Oyeshola`}</h1>
                </div>
                <span className='text-gray-600 truncate font-normal text-xs'>{`http://facebook.com/stephen.oyeshola.1/?_rdr`}</span>
                <div className='w-fit gap-1'>
                  <StatusChip status='Verified' />
                </div>
              </div>
            </div>

            <Button disableRipple className='bg-white flex-none outline-none !min-w-9 !w-9 !h-9 rounded-full border-[1.25px] border-outline hover:bg-gray-50 transition-colors flex data-[hover=true]:!bg-gray-50 !opacity-100 items-center justify-center !p-0'>
              <DotsHorizontal />
            </Button>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }} className='flex-1 min-w-[300px] relative p-4 cursor-pointer gap-x-2 flex justify-between items-start rounded border border-neutral-100 shadow-main hover:bg-gray-50 transition-colors'>
            <div className='flex relative max-w-[80%] gap-x-4 items-start'>
              <div className='w-12 h-full flex-none relative flex items-center flex-col'>
                <div className='size-fit flex-none'>
                  <SnapChat className='size-10' />
                </div>
              </div>
              <div className='flex relative max-w-[70%] overflow-hidden gap-y-[6px] flex-col'>
                <div className='w-full flex items-center justify-between'>
                  <h1 className='text-gray-900 w-fit font-semibold sm:text-[15px] text-sm'>{`Stephen Oyeshola`}</h1>
                </div>
                <span className='text-gray-600 truncate font-normal text-xs'>{`http://facebook.com/stephen.oyeshola.1/?_rdr`}</span>
                <div className='w-fit gap-1'>
                  <StatusChip status='Failed' />
                </div>
              </div>
            </div>

            <Button disableRipple className='bg-white flex-none outline-none !min-w-9 !w-9 !h-9 rounded-full border-[1.25px] border-outline hover:bg-gray-50 transition-colors flex data-[hover=true]:!bg-gray-50 !opacity-100 items-center justify-center !p-0'>
              <DotsHorizontal />
            </Button>
          </motion.div>
        </div>
        <div className='flex w-full justify-center'>
          <Button onPress={() => setOpenModals((prev: modalTypes) => ({ ...prev, linkSocialMedia: true }))} disableRipple className='h-9 gap-x-[6px] !outline-none flex items-center px-3 py-2 !min-w-auto border-none bg-white data-[hover=true]:!bg-gray-50 !opacity-100 transition-colors rounded-lg shadow-none'>
            <span className='text-primary_fixed  text-base  font-semibold'>Add new</span>
          </Button>
        </div>
      </motion.div>

      {
        // modals...

        <>
          <LinkSocialMediaAcc openModals={openModals} setOpenModals={setOpenModals} />
        </>
      }
    </>
  );
}
