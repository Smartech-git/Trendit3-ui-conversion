"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { CheveronRight, CheckVerified_01, DotsHorizontal } from "@/appIcons";
import { useGlobal } from "@/context/GlobalContext";
import { modalTypes } from "@/types";
import { Checkbox } from "@nextui-org/checkbox";

export default function Notifications() {
  const { appUser } = useGlobal();
  const [security, setSecurity] = useState<{ emailAuth: "On" | "Off"; googleAuth: "On" | "Off" }>({
    emailAuth: "Off",
    googleAuth: "On",
  });
  const [openModals, setOpenModals] = useState<modalTypes>({ linkBank: false });

  const handleOnChange = (e: any) => {
    setSecurity((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }} className='w-full h-full flex flex-col pb-[200px] gap-y-6 rounded-xl bg-white'>
        <div className='w-full flex gap-3 flex-col'>
          <h1 className='text-gray-900 text-lg font-semibold'>Email Alerts</h1>
          <div className='w-full flex flex-col gap-6'>
            <Checkbox defaultSelected classNames={{ label: "text-gray-700 font-normal text-sm", wrapper: "after:bg-primary_fixed before:rounded-[6px] rounded-[6px] before:border-[1px]  before:border-gray-300 after:rounded-[6px] size-[20px]" }}>
              New features and updates
            </Checkbox>
            <Checkbox defaultSelected classNames={{ label: "text-gray-700 font-normal text-sm", wrapper: "after:bg-primary_fixed before:rounded-[6px] rounded-[6px] before:border-[1px]  before:border-gray-300 after:rounded-[6px] size-[20px]" }}>
              New task
            </Checkbox>
            <Checkbox defaultSelected classNames={{ label: "text-gray-700 font-normal text-sm", wrapper: "after:bg-primary_fixed before:rounded-[6px] rounded-[6px] before:border-[1px]  before:border-gray-300 after:rounded-[6px] after:rounded-[6px] size-[20px]" }}>
              Money earned
            </Checkbox>
          </div>
        </div>
        <div className='w-full flex gap-3 flex-col'>
          <h1 className='text-gray-900 text-lg font-semibold'>In-App Alert</h1>
          <div className='w-full flex flex-col gap-6'>
            <Checkbox defaultSelected classNames={{ label: "text-gray-700 font-normal text-sm", wrapper: "after:bg-primary_fixed before:rounded-[6px] rounded-[6px] before:border-[1px]  before:border-gray-300 after:rounded-[6px] size-[20px]" }}>
              New features and updates
            </Checkbox>
            <Checkbox  classNames={{ label: "text-gray-700 font-normal text-sm", wrapper: "after:bg-primary_fixed before:rounded-[6px] rounded-[6px] before:border-[1px]  before:border-gray-300 after:rounded-[6px] size-[20px]" }}>
              New task
            </Checkbox>
            <Checkbox defaultSelected classNames={{ label: "text-gray-700 font-normal text-sm", wrapper: "after:bg-primary_fixed before:rounded-[6px] rounded-[6px] before:border-[1px]  before:border-gray-300 after:rounded-[6px] size-[20px]" }}>
              Money earned
            </Checkbox>
          </div>
        </div>
        <div className='w-full flex gap-3 flex-col'>
          <h1 className='text-gray-900 text-lg font-semibold'>Push Notifications </h1>
          <div className='w-full flex flex-col gap-6'>
            <Checkbox defaultSelected classNames={{ label: "text-gray-700 font-normal text-sm", wrapper: "after:bg-primary_fixed before:rounded-[6px] rounded-[6px] before:border-[1px]  before:border-gray-300 after:rounded-[6px] size-[20px]" }}>
              New features and updates
            </Checkbox>
            <Checkbox  classNames={{ label: "text-gray-700 font-normal text-sm", wrapper: "after:bg-primary_fixed before:rounded-[6px] rounded-[6px] before:border-[1px]  before:border-gray-300 after:rounded-[6px] size-[20px]" }}>
              New task
            </Checkbox>
            <Checkbox defaultSelected classNames={{ label: "text-gray-700 font-normal text-sm", wrapper: "after:bg-primary_fixed before:rounded-[6px] rounded-[6px] before:border-[1px]  before:border-gray-300 after:rounded-[6px] size-[20px]" }}>
              Money earned
            </Checkbox>
          </div>
        </div>
       
      </motion.div>
    </>
  );
}
