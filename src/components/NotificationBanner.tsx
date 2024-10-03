"use client";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@nextui-org/button";
import { XClose } from "@/appIcons";
import { useGlobal } from "@/context/GlobalContext";
import { default_notoficationBannerProps } from "@/types";
import Countdown from "react-countdown";

const CountDownRender = ({ hours, minutes, seconds, completed }: any) => {
  return (
    <span className='ml-1 text-nowrap text-pink font-normal sm:text-base text-xs'>
      {hours}:{minutes}:{seconds}
    </span>
  );
};

export default function NotificationBanner() {
  const { notificationBanner, setNotificationBanner, setActiveTask } = useGlobal();

  return (
    <>
      {notificationBanner.open && (
        <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ type: "spring" }} className='w-full p-3 gap-x-2 flex flex-none items-center relative bg-black'>
          <div className='w-full flex flex-wrap gap-x-[6px] sm:items-center justify-center items-start'>
            <h1 className='sm:text-base text-xxs font-bold text-white'>{notificationBanner.mainContent}</h1>
            <p className='text-nowrap text-pink font-normal sm:text-base text-xs'>
              {notificationBanner.description}
              <span onClick={notificationBanner.actionCallback} className='hover:text-brand-200 ml-1 cursor-pointer transition-colors hover:underline underline-offset-4'>
                {notificationBanner.action}
              </span>
              {notificationBanner.timer && (
                <Countdown
                  date={Date.now() + 60 * 60 * 1000}
                  renderer={CountDownRender}
                  onComplete={() => {
                    setActiveTask(false);
                    setNotificationBanner(default_notoficationBannerProps);
                  }}
                />
              )}
            </p>
          </div>
          {!notificationBanner.timer && (
            <Button onClick={() => setNotificationBanner(default_notoficationBannerProps)} disableRipple className='!bg-transparent  outline-none sm:!min-w-10 sm:!w-10 sm:!h-10 !min-w-8 !w-8 !h-8 rounded-lg transition-colors flex flex-none data-[hover=true]:!bg-white/10 !opacity-100 items-center justify-center !p-0'>
              <XClose className='stroke-white/70 sm:size-6 size-4' />
            </Button>
          )}
        </motion.div>
      )}
    </>
  );
}
