"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { MessageChatCircle, MessageSmileCircle, Phone } from "@/appIcons";
import { useGlobal } from "@/context/GlobalContext";
import Faq from "@/components/Faq";
import { TextLoaders } from "@/components/loadingScreens/skeletonLoaders";

export default function Support() {
  const { appUser } = useGlobal();
  return (
    <div className='w-full 2xl:gap-8 sm:gap-6 gap-4 flex 2xl:px-8 sm:px-6 px-4 relative h-[100svh]'>
      <div className='h-full 2xl:pb-8 sm:pb-8 pb-8 overflow-y-scroll scrollbar-none flex flex-col sm:gap-6 gap-4 relative 2xl:pt-[112px] sm:pt-[96px] pt-[72px] w-full'>
        <div className='w-full flex flex-col gap-y-8'>
          <div className='w-full flex flex-col'>
            <h1 className='text-[30px] font-semibold text-gray-900'>Support</h1>
            <p className='text-base font-normal text-gray-600'>Manage your team members and their account permissions here.</p>
          </div>
          <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }} className='w-full border-gray-200 sm:px-6 py-6 px-3 flex flex-col gap-y-6 border rounded-xl bg-white'>
            <div className='w-full flex flex-col gap-y-6'>
              <div className='w-full flex flex-col gap-y-6'>
                {appUser ? <h1 className='text-3xl text-gray-900 font-semibold'>{`Hi ${appUser.firstname} How can we help?`}</h1> : <TextLoaders className="h-6 w-40" />}
                <p className='text-xl text-gray-600 font-normal'>Our friendly team is always here to chat.</p>
              </div>
              <div className='w-full flex flex-wrap gap-6'>
                <div className='p-6 flex flex-1 min-w-[250px] flex-col gap-16 bg-gray-50 rounded-xl'>
                  <div className='flex items-center justify-center bg-primary_fixed rounded-xl size-12'>
                    <MessageSmileCircle />
                  </div>
                  <div className='w-full flex flex-col gap-y-5'>
                    <div className='flex flex-col gap-2'>
                      <h1 className='text-gray-900 text-xl font-semibold'>Chat to sales</h1>
                      <p className='text-gray-600 font-normal text-base'>Speak to our friendly team.</p>
                    </div>
                    <span className='text-primary_fixed font-semibold text-base'>sales@untitledui.com</span>
                  </div>
                </div>
                <div className='p-6 flex flex-1 min-w-[250px] flex-col gap-16 bg-gray-50 rounded-xl'>
                  <div className='flex items-center justify-center bg-primary_fixed rounded-xl size-12'>
                    <MessageChatCircle />
                  </div>
                  <div className='w-full flex flex-col gap-y-5'>
                    <div className='flex flex-col gap-2'>
                      <h1 className='text-gray-900 text-xl font-semibold'>Chat to support</h1>
                      <p className='text-gray-600 font-normal text-base'>We’re here to help.</p>
                    </div>
                    <span className='text-primary_fixed font-semibold text-base'>support@untitledui.com</span>
                  </div>
                </div>
                <div className='p-6 flex flex-1 min-w-[250px] flex-col gap-16 bg-gray-50 rounded-xl'>
                  <div className='flex items-center justify-center bg-primary_fixed rounded-xl size-12'>
                    <Phone />
                  </div>
                  <div className='w-full flex flex-col gap-y-5'>
                    <div className='flex flex-col gap-2'>
                      <h1 className='text-gray-900 text-xl font-semibold'>Call us</h1>
                      <p className='text-gray-600 font-normal text-base'>Mon-Fri from 8am to 5pm.</p>
                    </div>
                    <span className='text-primary_fixed font-semibold text-base'>{`+1 (555) 000-0000`}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full flex flex-col'>
              <motion.section initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }} layout className='w-full p-6 rounded-xl flex flex-col items-center justify-center flex-none h-fit gap-y-8  bg-white'>
                <Faq />
              </motion.section>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
