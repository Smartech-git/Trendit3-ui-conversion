import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@nextui-org/button";
import { XClose } from "@/appIcons";

export default function NotificationBanner({ open, setOpen }: { open: boolean; setOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ type: "spring" }} className='w-full p-3 gap-x-2 flex items-center relative bg-black'>
      <div className='w-full flex flex-wrap gap-x-[6px] sm:items-center items-start'>
        <h1 className='sm:text-base text-xxs font-bold text-white'>{`45,678 Total Task available for you to perform`}</h1>
        <span className='text-nowrap cursor-pointer text-pink hover:text-brand-200 transition-colors font-normal sm:text-base text-xxs hover:underline underline-offset-4'>Generate tasks</span>
      </div>
      <Button onClick={() => setOpen(false)} disableRipple className='!bg-transparent  outline-none sm:!min-w-10 sm:!w-10 sm:!h-10 !min-w-8 !w-8 !h-8 rounded-lg transition-colors flex flex-none data-[hover=true]:!bg-white/10 !opacity-100 items-center justify-center !p-0'>
        <XClose className='stroke-white/70' />
      </Button>
    </motion.div>
  );
}
