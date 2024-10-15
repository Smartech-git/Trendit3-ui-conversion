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
        }, 3000);
      }
    }
    return () => {
      clearTimeout(ID);
    };
  }, [toast.open, toast.state]);

  return (
    <AnimatePresence>
      {toast.state === "success" && toast.open && (
        <motion.div key={"success"} initial={{ opacity: 0, y: -12 }} exit={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }} className='sm:w-[340px] w-[300px] min-h-[43px] gap-x-[6px] py-2 px-3 bg-success flex items-start justify-center rounded-[4px] z-[9999] shadow-main-lg  overflow-hidden mx-auto left-0 right-0 fixed sm:top-8 top-8'>
          <Check className='flex-none' /> <span className='text-white font-bold mt-1 text-sm'>{toast.content}</span>
        </motion.div>
      )}

      {toast.state === "error" && toast.open && (
        <motion.div key={"error"} initial={{ opacity: 0, y: -12 }} exit={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }} className='sm:w-[340px] w-[300px] min-h-[43px] gap-x-[6px] py-2 px-3 bg-error flex items-start justify-center rounded-[4px] z-[9999] shadow-main-lg  overflow-hidden mx-auto left-0 right-0 fixed sm:top-8 top-8'>
          <InfoHexagon className='flex-none' /> <span className='text-white font-bold mt-1 text-sm'>{toast.content}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
