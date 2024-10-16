"use client";

import React from "react";
import getSymbolFromCurrency from "currency-symbol-map";
import GenericTask from "../GenericTask";
const numeral = require("numeral");
import StatusChip from "../macroComponents/StatusChip";

export default function OrderSummary({ active }: { active: boolean }) {
  return (
    <div className='h-fit w-full flex flex-col !pt-0 gap-y-3'>
      {!active ? <h1 className='text-lg text-gray-900 font-bold'>Order Summary</h1> : <StatusChip status='On-going' />}
      <div className='w-full flex-col gap-y-1'>
        <div className='w-full flex flex-col py-3 gap-y-3'>
          <h2 className='text-sm font-medium text-gray-700'>Order Type</h2>
          <GenericTask />
        </div>
        <div className='w-full py-3 flex justify-between items-center'>
          <h1 className='text-gray-700 font-medium w-fit text-sm'>Platform</h1>
          <span className='text-gray-700 font-bold text-sm'>Twitter</span>
        </div>
        <div className='w-full py-3 flex justify-between items-center'>
          <h1 className='text-gray-700 font-medium w-fit text-sm'>Location</h1>
          <span className='text-gray-700 font-bold text-sm'>Nigeria</span>
        </div>
        <div className='w-full py-3 flex justify-between items-center'>
          <h1 className='text-gray-700 font-medium w-fit text-sm'>State</h1>
          <span className='text-gray-700 font-bold text-sm'>Lagos State</span>
        </div>
        <div className='w-full py-3 flex justify-between items-center'>
          <h1 className='text-gray-700 font-medium w-fit text-sm'>No. of Twitter post you want</h1>
          <span className='text-gray-700 font-bold text-sm'>50</span>
        </div>
        <div className='w-full py-3 flex justify-between items-center'>
          <h1 className='text-gray-700 font-medium w-fit text-sm'>Gender</h1>
          <span className='text-gray-700 font-bold text-sm'>Male</span>
        </div>
        <div className='w-full py-3 flex justify-between items-center'>
          <h1 className='text-gray-700 font-medium w-fit text-sm'>Religion</h1>
          <span className='text-gray-700 font-bold text-sm'>Christians only</span>
        </div>
        <div className='w-full py-3 gap-2 flex justify-between items-start'>
          <h1 className='text-gray-700 font-medium w-fit text-sm'>Media</h1>
          <div className='w-fit flex gap-x-2'>
            <div className='bg-gray-50 border overflow-hidden relative size-10 border-gray-200 rounded'></div>
            <div className='bg-gray-50 border overflow-hidden relative size-10 border-gray-200 rounded'></div>
          </div>
        </div>
      </div>
      <div className='flex flex-col w-full items-center gap-y-3'>
        <div className='w-full flex flex-col gap-y-4 border-y py-3 border-gray-200'>
          <div className='w-full flex justify-between items-center'>
            <h1 className='text-gray-600 font-medium w-fit text-sm'>Sub Total</h1>
            <span className='text-gray-600 font-medium text-sm'>{`${getSymbolFromCurrency("NGN")} ${numeral(500).format("0,0.00")}`}</span>
          </div>
          <div className='w-full flex justify-between items-center'>
            <h1 className='text-gray-600 font-medium w-fit text-sm'>{`Tax (10%)`}</h1>
            <span className='text-gray-600 font-medium text-sm'>{`${getSymbolFromCurrency("NGN")} ${numeral("56").format("0,0.00")}`}</span>
          </div>
          <div className='w-full flex justify-between items-center'>
            <h1 className='text-gray-600 font-medium w-fit text-sm'>Shipping</h1>
            <span className='text-gray-600 font-medium text-sm'>{`${getSymbolFromCurrency("NGN")} ${numeral(0).format("0,0.00")}`}</span>
          </div>
        </div>
        <div className='w-full flex justify-between items-center'>
          <h1 className='text-gray-600 font-bold w-fit text-base'>Total</h1>
          <span className='text-gray-800 font-bold text-sm'>{`${getSymbolFromCurrency("NGN")} ${numeral(800).format("0,0.00")}`}</span>
        </div>
      </div>
    </div>
  );
}
