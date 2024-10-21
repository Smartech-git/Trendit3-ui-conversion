"use client";

import React, {useState, Key} from "react";
import { motion, AnimatePresence } from "framer-motion";
import Wallet from "@/components/Wallet";
import UtilityPurchases from "@/components/UtilityPurchases";
import TransactionStats from "@/components/stats/TransactionStats";
import { Tabs, Tab } from "@nextui-org/tabs";
import TransactionsTable from "@/components/tables/TransactionsTable";

const tabs = ["All Transactions", "Earner Payout", "Order Payment"] as const;

export default function Transactions() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("All Transactions");


  return (
    <div className='w-full 2xl:gap-8 sm:gap-6 gap-4 flex 2xl:px-8 sm:px-6 px-4 relative h-[100svh]'>
      <div className='h-full 2xl:pb-8 sm:pb-8 pb-8 overflow-y-scroll scrollbar-none flex flex-col sm:gap-6 gap-4 relative 2xl:pt-[112px] sm:pt-[96px] pt-[72px] w-full'>
        <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }} className='w-full h-fit sm:px-6 py-6 px-3 gap-y-6 flex flex-col relative rounded-xl  border border-gray-200 bg-white'>
          <div className='flex flex-col gap-y-6 pb-6'>
            <Wallet />
            <UtilityPurchases />
            <TransactionStats />
          </div>
          <div className='flex flex-col gap-y-[20px] pt-6'>
            <h1 className='text-lg text-gray-900 font-semibold'>Recent transactions</h1>
            <Tabs onSelectionChange={setActiveTab as (key: Key) => void} classNames={{ tab: "p-3 pb-5", tabList: "gap-0 p-0", tabContent: "group-data-[selected=true]:text-primary_fixed text-sm font-semibold text-gray-700 flex items-center gap-x-2", cursor: "bg-primary_fixed" }} size='sm' variant='underlined' aria-label='Tabs variants'>
              {tabs.map((tab: string) => {
                return <Tab key={tab} title={tab} />;
              })}
            </Tabs>
            <TransactionsTable/>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
