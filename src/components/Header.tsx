"use client";
import React, { useState } from "react";
import { User_01, LogIn_03, Settings_01, Bell_01, Menu_01, XClose } from "@/appIcons";
import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import Notification from "./header/Notification";
import Link from "next/link";

interface header_types {
  openDrawer: boolean;
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ openDrawer, setOpenDrawer }: header_types) {
  const [openNot, setOpenNot] = useState(false);
  return (
    <header className='w-full flex absolute z-20 backdrop-blur-lg backdrop-saturate-150 bg-neutral-100/70 top-0 2xl:px-8 sm:px-6 2xl:py-8 sm:py-6 px-4 py-4 justify-between items-center'>
      <div className='h-full items-center flex gap-x-4'>
        <div onClick={() => setOpenDrawer(true)} className='xl:hidden cursor-pointer flex'>
          <Menu_01 className='stroke-black' />
        </div>
        <div className='h-full cursor-pointer items-center flex gap-x-3'>
          <div className='sm:size-12 size-10 relative'>
            <div className='size-full flex items-center justify-center rounded-full border border-black/[0.08] bg-gray-100'>
              <User_01 className='sm:size-7 size-5' />
            </div>
            <div className='sm:size-3 size-[10px]  box-content absolute right-0 bottom-0 rounded-full border-1.5 bg-green-600 border-white' />
          </div>
          <div className='sm:flex hidden flex-col'>
            <h1 className='text-base font-semibold text-gray-700'>Olivia Rhye</h1>
            <h2 className='text-base font-normal text-gray-600'>olivia@trendit.ng</h2>
          </div>
        </div>
      </div>
      <div className='h-full gap-x-4 flex items-center'>
        <div className='flex gap-x-1 h-9'>
          <Button disableRipple className='bg-white !outline-none !min-w-fit w-10 rounded-md hover:bg-gray-50 transition-colors flex data-[hover=true]:!bg-gray-50 !opacity-100 items-center justify-center p-2'>
            <Settings_01 className='stroke-gray-500 size-5' />
          </Button>
          <Dropdown isOpen={openNot} onClose={() => setOpenNot(false)} backdrop='opaque' radius='md' classNames={{ content: "!border !border-white xs:!w-[370px] xxs:w-[340px] !w-[300px] !min-w-[300px] !p-0", backdrop: "!bg-gray-950/10" }}>
            <DropdownTrigger>
              <Button onClick={() => setOpenNot((prev) => !prev)} disableRipple className='bg-white !outline-none !min-w-fit w-10 rounded-md hover:bg-gray-50 transition-colors flex data-[hover=true]:!bg-gray-50 !opacity-100 items-center justify-center p-2'>
                <Bell_01 className='stroke-gray-500 size-5' />
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label='Dynamic Actions' classNames={{ base: "!p-0" }}>
              <DropdownItem
                endContent={
                  <Button onClick={() => setOpenNot(false)} disableRipple className='!bg-transparent outline-none !min-w-9 !w-9 !h-9 rounded-lg lg:hidden transition-colors flex flex-none data-[hover=true]:!bg-gray-50 !opacity-100 items-center justify-center !p-0'>
                    <XClose className='stroke-gray-400 size-5' />
                  </Button>
                }
                key='close'
                isReadOnly
                className='!px-4 pt-4 data-[hover=true]:!bg-white !cursor-default !transition-none'
              ></DropdownItem>
              <DropdownItem isReadOnly closeOnSelect={false} className='!p-0 !w-full h-fit !cursor-default data-[hover=true]:!bg-white !transition-none' key='Main'>
                <Notification setOpenNot={setOpenNot} />
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
          {/* <Popover onClose={() => setOpenNot(false)} isOpen={openNot} backdrop='opaque' radius='md' classNames={{ content: "!border !border-white xs:!w-[370px] xxs:w-[340px] !w-[300px] !min-w-[300px] !p-0", backdrop: "!bg-gray-950/10" }} placement='bottom'>
            <PopoverTrigger>
              <Button onClick={() => setOpenNot((prev) => !prev)} disableRipple className='bg-white !outline-none !min-w-fit w-10 rounded-md hover:bg-gray-50 transition-colors flex data-[hover=true]:!bg-gray-50 !opacity-100 items-center justify-center p-2'>
                <Bell_01 className='stroke-gray-500 size-5' />
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <Notification setOpenNot={setOpenNot} />
            </PopoverContent>
          </Popover> */}
        </div>
        <Button disableRipple className='h-10 gap-x-[6px] !outline-none flex items-center px-[14px] py-[10px] !min-w-auto border border-gray-300 bg-white data-[hover=true]:!bg-gray-50 !opacity-100 transition-colors rounded-lg shadow-main'>
          <LogIn_03 />
          <span className='text-gray-700 sm:flex hidden text-base font-semibold'>Logout</span>
        </Button>
      </div>
    </header>
  );
}
