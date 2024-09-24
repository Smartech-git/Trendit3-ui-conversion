"use client";
import React, { useEffect } from "react";
import { useGlobal } from "@/context/GlobalContext";
import { Check, InfoHexagon } from "@/appIcons";
import { motion, AnimatePresence } from "framer-motion";

export default function Toast() {
  const { toast, setToast } = useGlobal();

  useEffect(() => {
    let ID: any;

    if (toast.open) {
      if (toast.state === "success" || toast.state === "error") {
        ID = setTimeout(() => {
          setToast({ open: false, state: undefined, content: undefined });
        }, 3500);
      }
    }
    return () => {
      clearTimeout(ID);
    };
  }, [toast.open, toast.state]);

  if (toast.open) {
    return (
      <>
        {/* <AnimatePresence>
          {true && (
            <motion.div key={toast.state} className='sm:w-[340px] w-[300px] h-[43px] gap-x-[6px] py-2 px-3 bg-success flex items-center justify-center rounded-[4px]  z-[9999] shadow-main-lg  overflow-hidden mx-auto left-0 right-0 fixed sm:top-8 top-8' animate={{ opacity: 1, y: 0 }} exit={{ y: 20 }} transition={{duration: 0.3, ease: 'easeInOut',}}>
              <Check /> <span className='text-white font-bold text-sm'>{toast.content}</span>
            </motion.div>
          )}
        </AnimatePresence> */}
        {toast.state === "success" && toast.open && (
          <div className='sm:w-[340px] w-[300px] h-[43px] gap-x-[6px] py-2 px-3 bg-success flex items-center justify-center rounded-[4px] animate-fade-down animate-once animate-duration-300 z-[9999] shadow-main-lg  overflow-hidden mx-auto left-0 right-0 fixed sm:top-8 top-8'>
            <Check /> <span className='text-white font-bold text-sm'>{toast.content}</span>
          </div>

        )}

       {toast.state === "error" && toast.open && (
          <div className='sm:w-[340px] w-[300px] h-[43px] gap-x-[6px] py-2 px-3 bg-error flex items-center justify-center rounded-[4px] animate-fade-down animate-once animate-duration-300 z-[9999] shadow-main-lg  overflow-hidden mx-auto left-0 right-0 fixed sm:top-8 top-8'>
            <InfoHexagon /> <span className='text-white font-bold text-sm'>{toast.content}</span>
          </div>
        )}
      </>
    );
  }
}
