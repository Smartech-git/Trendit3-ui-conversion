import React from "react";
import { Button, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, SortDescriptor, Pagination } from "@nextui-org/react";
import { Phone, Phone_01, LightBulb, Trophy } from "@/svgAssets";

export default function UtilityPurchases() {
  return (
    <div className='flex flex-col gap-y-3'>
      <h1 className="text-[15px] font-medium black">Bill Payment</h1>
      <div className='flex w-full items-center py-3 sm:justify-start justify-between sm:gap-x-9 gap-x-4'>
        <div className='flex flex-col gap-y-[10px] cursor-pointer group items-center justify-center'>
          <Button disableRipple className='!h-[35px] !w-[35px] !min-w-[35px] !outline-none flex items-center !p-0 !min-w-auto border border-gray-200 bg-transparent data-[hover=true]:!bg-gray-50 !opacity-100 transition-colors rounded-full shadow-main'>
            <Phone />
          </Button>
          <span className='text-sm font-medium text-gray-600'>Airtime</span>
        </div>
        <div className='flex flex-col gap-y-[10px] cursor-pointer group items-center justify-center'>
          <Button disableRipple className='!h-[35px] !w-[35px] !min-w-[35px] !outline-none flex items-center !p-0 !min-w-auto border border-gray-200 bg-transparent data-[hover=true]:!bg-gray-50 !opacity-100 transition-colors rounded-full shadow-main'>
            <Phone_01 />
          </Button>
          <span className='text-sm font-medium text-gray-600'>Data</span>
        </div>
        <div className='flex flex-col gap-y-[10px] cursor-pointer group items-center justify-center'>
          <Button disableRipple className='!h-[35px] !w-[35px] !min-w-[35px] !outline-none flex items-center !p-0 !min-w-auto border border-gray-200 bg-transparent data-[hover=true]:!bg-gray-50 !opacity-100 transition-colors rounded-full shadow-main'>
            <LightBulb />
          </Button>
          <span className='text-sm font-medium text-gray-600'>Electricity</span>
        </div>
        <div className='flex flex-col gap-y-[10px] cursor-pointer group items-center justify-center'>
          <Button disableRipple className='!h-[35px] !w-[35px] !min-w-[35px] !outline-none flex items-center !p-0 !min-w-auto border border-gray-200 bg-transparent data-[hover=true]:!bg-gray-50 !opacity-100 transition-colors rounded-full shadow-main'>
            <Trophy />
          </Button>
          <span className='text-sm font-medium text-gray-600'>Betting</span>
        </div>
      </div>
    </div>
  );
}
