"use client";

import React, { useState, Key } from "react";
import { motion } from "framer-motion";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, ChipProps, getKeyValue } from "@nextui-org/react";
import { Search } from "@/appIcons";
import TasksTable from "@/components/tables/TasksTable";

const tabs = ["Pending", "In Review", "Failed", "Completed", "Cancelled", "Drafts"] as const;

export default function History() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Pending");

  return (
    <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }} className='w-full flex p-3 flex-col gap-y-6 h-[500px] overflow-hidden rounded-xl border border-gray-200 bg-white'>
      <div className='flex md:flex-row flex-col md:items-center relative w-full gap-3 justify-between'>
        <Tabs onSelectionChange={setActiveTab as (key: Key) => void} classNames={{ tab: "py-3 p-2", tabList: "gap-0 p-0", tabContent: "group-data-[selected=true]:text-primary_fixed text-sm font-semibold text-gray-700 flex items-center gap-x-2", cursor: "bg-primary_fixed" }} size='sm' variant='underlined' aria-label='Tabs variants'>
          {tabs.map((tab: string) => {
            return <Tab key={tab} title={tab} />;
          })}
        </Tabs>
        <div className='md:w-fit w-full flex relative'>
          <input autoComplete='off' placeholder={`Search`} name='search' className={`!border-gray-300 focus:!border-brand-700 focus:!border-2 !ring-0 bg-white outline md:w-[320px] w-full outline-0 focus:outline-0 transition-all border text-base px-9 pr-3 h-11 shadow-main rounded-lg text-black font-medium  placeholder:font-normal  placeholder:text-gray-500`} type='text' />
          <div className='grid place-items-center absolute text-blue-gray-500 top-[50%] left-3 -translate-y-2/4 size-fit'>
            <Search className='stroke-gray-500 size-5' />
          </div>
        </div>
      </div>

      <TasksTable />
    </motion.div>
  );
}
