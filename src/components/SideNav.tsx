"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@nextui-org/button";

import { Search, Home_line, Wallet_02, Announcement_03, BarChatSquare_02, Gift_02, Settings_01, LifeBuoy_01, XClose } from "@/appIcons";

interface sideNav_types {
  openDrawer: boolean;
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SideNav({ openDrawer, setOpenDrawer }: sideNav_types) {
  const pathname = usePathname();

  return (
    <div className='w-full h-full flex flex-col overflow-x-hidden scrollbar-thin overflow-y-scroll justify-between gap-y-28 bg-white 2xl:py-8 sm:py-6 py-4'>
      <div className='flex flex-col gap-y-6'>
        <div className='flex items-center justify-between px-5'>
          <div className='w-full'>
            <Image src='/logos/logo_default.svg' alt='App Logo' width={250} height={250} className='w-[132px] h-fit' />
          </div>
          <Button onClick={() => setOpenDrawer(false)} disableRipple className='bg-white outline-none !min-w-11 xl:hidden !w-11 !h-11 rounded-md hover:bg-gray-50 transition-colors flex data-[hover=true]:!bg-gray-50 !opacity-100 items-center justify-center !p-0'>
            <XClose />
          </Button>
        </div>
        <div className='w-full px-5'>
          <div className='w-full flex relative'>
            <input autoComplete='off' placeholder={`Create password`} name='password' className={`!border-gray-300 focus:!border-brand-700 !ring-0 w-full bg-white outline outline-0 focus:outline-0 transition-all border text-base px-9 pr-3 h-11 shadow-main rounded-lg text-black font-medium  placeholder:font-normal  placeholder:text-gray-500`} type='text' />
            <div className='grid place-items-center absolute text-blue-gray-500 top-[50%] left-3 -translate-y-2/4 size-fit'>
              <Search className='stroke-gray-500 size-5' />
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col px-[10px] gap-y-1'>
          <Link href={`/home`} className={`size-full flex h-10 items-center gap-x-3 hover:bg-gray-50 ${pathname === "/home" && "bg-gray-50"} transition-colors cursor-pointer rounded-md px-[10px]`}>
            <Home_line className={`stroke-gray-500 ${pathname === "/home" && "stroke-primary_fixed"}`} />
            <span className={`text-gray-700 font-semibold text-base ${pathname === "/home" && "text-primary_fixed"}`}>Home</span>
          </Link>
          <Link href={`/earn`} className={`size-full flex h-10 items-center gap-x-3 hover:bg-gray-50 ${pathname.startsWith("/earn") && "bg-gray-50"} transition-colors cursor-pointer rounded-md px-[10px]`}>
            <Wallet_02 className={`stroke-gray-500 ${pathname.startsWith("/earn") && "stroke-primary_fixed"}`} />
            <span className={`text-gray-700 font-semibold text-base ${pathname.startsWith("/earn") && "text-primary_fixed"}`}>Earn</span>
          </Link>
          <Link href={`/advertise`} className={`size-full flex h-10 items-center gap-x-3 hover:bg-gray-50 ${pathname === "/advertise" && "bg-gray-50"} transition-colors cursor-pointer rounded-md px-[10px]`}>
            <Announcement_03 className={`stroke-gray-500 ${pathname === "/advertise" && "stroke-primary_fixed"}`} />
            <span className={`text-gray-700 font-semibold text-base ${pathname === "/advertise" && "text-primary_fixed"}`}>Advertise</span>
          </Link>
          <Link href={`/transactions`} className={`size-full flex h-10 items-center gap-x-3 hover:bg-gray-50 ${pathname === "/transactions" && "bg-gray-50"} transition-colors cursor-pointer rounded-md px-[10px]`}>
            <BarChatSquare_02 className={`stroke-gray-500 ${pathname === "/transactions" && "stroke-primary_fixed"}`} />
            <span className={`text-gray-700 font-semibold text-base ${pathname === "/transactions" && "text-primary_fixed"}`}>Transactions</span>
          </Link>
          <Link href={`/refer-and-earn`} className={`size-full flex h-10 items-center gap-x-3 hover:bg-gray-50 ${pathname === "/refer-and-earn" && "bg-gray-50"} transition-colors cursor-pointer rounded-md px-[10px]`}>
            <Gift_02 className={`stroke-gray-500 ${pathname === "/refer-and-earn" && "stroke-primary_fixed"}`} />
            <span className={`text-gray-700 font-semibold text-base ${pathname === "/refer-and-earn" && "text-primary_fixed"}`}>Refer and Earn</span>
          </Link>
        </div>
      </div>
      <div className='flex flex-col gap-y-6'>
        <div className='w-full flex flex-col px-[10px] gap-y-1'>
          <Link href={`/support`} className={`size-full flex h-10 items-center gap-x-3 hover:bg-gray-50 ${pathname === "/support" && "bg-gray-50"} transition-colors cursor-pointer rounded-md px-[10px]`}>
            <LifeBuoy_01 className={`stroke-gray-500 ${pathname === "/support" && "stroke-primary_fixed"}`} />
            <span className={`text-gray-700 font-semibold text-base ${pathname === "/support" && "text-primary_fixed"}`}>Support</span>
          </Link>
          <Link href={`/settings`} className={`size-full flex h-10 items-center gap-x-3 hover:bg-gray-50 ${pathname === "/settings" && "bg-gray-50"} transition-colors cursor-pointer rounded-md px-[10px]`}>
            <Settings_01 className={`stroke-gray-500 ${pathname === "/settings" && "stroke-primary_fixed"}`} />
            <span className={`text-gray-700 font-semibold text-base ${pathname === "/settings" && "text-primary_fixed"}`}>Settings</span>
          </Link>
        </div>
        <div className='w-full px-[10px]'>
          <div className='w-full flex flex-col gap-y-4 rounded-lg px-4 py-5 bg-gray-50'>
            <div className='w-full flex flex-col'>
              <h1 className='font-semibold text-sm text-gray-900'>{`Dont’t know where to start?`}</h1>
              <p className='text-sm font-normal text-gray-600'>{`Get started using Trendit. We have put resources to assist you. Have fun! 🎉`}</p>
            </div>
            <div className='w-full flex gap-x-3'>
              <span className='text-gray-600 transition-colors hover:text-black cursor-pointer font-semibold text-sm'>FAQ</span>
              <span className='text-sm font-semibold cursor-pointer text-brand-700 hover:text-primary_fixed transition-colors'>Watch Tutorial</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
