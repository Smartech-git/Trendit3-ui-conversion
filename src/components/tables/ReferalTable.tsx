"use client";
import React, { useState } from "react";
import { Button, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, SortDescriptor, Pagination } from "@nextui-org/react";
import { ArrowLeft, ArrowRight_02, User_01 } from "@/appIcons";
import getSymbolFromCurrency from "currency-symbol-map";
const numeral = require("numeral");

export default function ReferalTable() {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <div className='w-full border-gray-200 sm:px-6 py-6 px-3 flex flex-col gap-y-8 border rounded-xl bg-white'>
      <h1 className='text-gray-900 font-semibold text-lg'>Referral Activities</h1>
      <div className='w-full flex flex-col'>
        {new Array(8).fill("").map((item, idx, arr) => {
          return (
            <div key={idx} className={`w-full border-b border-gray-200 ${idx === arr.length - 1 && "border-none"} flex items-center justify-between py-4`}>
              <div className='w-fit flex items-center gap-x-3'>
                <div className='size-[40px] mt-1 flex items-center relative justify-center overflow-hidden rounded-full border border-black/[0.08] bg-gray-100'>
                  <User_01 className='size-5' />
                </div>
                <div className='flex flex-col relative md:w-[9svw] w-[15svw]'>
                  <h1 className='text-sm truncate text-gray-900 font-medium'>@justinkyle</h1>
                </div>
              </div>
              <p className='text-sm text-success-600 truncate font-normal'>{`+ ${getSymbolFromCurrency("NGN")}${numeral("4023").format("0,0.00")}`}</p>
            </div>
          );
        })}
      </div>
      <div className='w-full pt-5 flex gap-x-2 items-center justify-between border-t border-gray-200'>
        <Button onPress={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))} disableRipple className='h-9 gap-x-[6px] !outline-none flex items-center px-3 py-2 !min-w-auto border-none bg-white data-[hover=true]:!bg-gray-50 !opacity-100 transition-colors rounded-lg shadow-none'>
          <ArrowLeft /> <span className='text-gray-600 flex text-sm  font-semibold'>Previous</span>
        </Button>
        <Pagination
          total={10}
          classNames={{
            item: "bg-white text-gray-600 outline-none rounded-lg shadow-none [data-active=true]:!bg-gray-100 [&[data-hover=true]:not([data-active=true])]:bg-gray-50 font-medium",
            cursor: "bg-gray-50 text-gray-800 font-medium rounded-lg",
            ellipsis: "text-gray-600 font-medium",
          }}
          page={currentPage}
          onChange={setCurrentPage}
        />
        <Button onPress={() => setCurrentPage((prev) => (prev < 10 ? prev + 1 : prev))} disableRipple className='h-9 gap-x-[6px] !outline-none flex items-center px-3 py-2 !min-w-auto border-none bg-white data-[hover=true]:!bg-gray-50 !opacity-100 transition-colors rounded-lg shadow-none'>
          <span className='text-gray-600 flex text-sm  font-semibold'>Next</span>
          <ArrowRight_02 />
        </Button>
      </div>
    </div>
  );
}
