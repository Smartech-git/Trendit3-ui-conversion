"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGlobal } from "@/context/GlobalContext";
import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { DotsVertical } from "@/appIcons";
import SideNavSettings from "@/components/settings/SideNavSettings";
import { usePathname } from "next/navigation";
import { settingsNav } from "@/lib/constants";
import Link from "next/link";

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  const { appUser } = useGlobal();
  const [openNav, setOpenNav] = useState(false);
  const pathname = usePathname();

  return (
    <div className='w-full 2xl:gap-8 sm:gap-6 gap-4 flex 2xl:px-8 sm:px-6 px-4 relative h-[100svh]'>
      <div className='h-full 2xl:pb-8 sm:pb-8 pb-8 overflow-y-scroll scrollbar-none flex flex-col sm:gap-6 gap-4 relative 2xl:pt-[112px] sm:pt-[96px] pt-[72px] w-full'>
        <div className='w-full flex flex-col gap-y-8'>
          <div className='w-full flex flex-col'>
            <h1 className='text-[30px] font-semibold text-gray-900'>Settings</h1>
            <p className='text-base font-normal text-gray-600'>Manage your team members and their account permissions here.</p>
          </div>
          <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }} className='w-full relative border-gray-200 sm:px-6 py-6 px-3 flex flex-col items-end gap-4 border rounded-xl bg-white'>
            <Dropdown placement="bottom-end"  backdrop='opaque' radius='md' classNames={{ content: "!border !border-white xs:!w-[370px] xxs:w-[340px] !w-[300px] !min-w-[300px] !p-0", backdrop: "!bg-gray-950/10" }}>
              <DropdownTrigger>
                <Button disableRipple className='h-fit w-fit gap-x-[6px] lg:hidden p-0 !outline-none flex items-center justify-center !min-w-fit rounded-full border-none bg-white data-[hover=true]:!bg-white !opacity-100 transition-colors shadow-none'>
                  <DotsVertical className='stroke-gray-700' />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label='Dynamic Actions' classNames={{ base: "!p-0 gap-2" }}>
                {settingsNav.map((nav: (typeof settingsNav)[number]) => {
                  return (
                    <DropdownItem className='!px-3 py-0 !w-full h-fit data-[hover=true]:!bg-white !transition-none' key={nav}>
                      <Link key={nav} href={nav === "Profile" ? "/settings" : `/settings/${nav.toLocaleLowerCase().split(" ").join("-")}`}>
                        <div className={`w-full p-3 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors ${pathname === `/settings/${nav.toLocaleLowerCase().split(" ").join("-")}` && "bg-gray-50"} ${pathname === "/settings" && nav === "Profile" && "bg-gray-50"}`}>
                          <span className='text-gray-700 font-semibold text-base'>{nav}</span>
                        </div>
                      </Link>
                    </DropdownItem>
                  );
                })}
              </DropdownMenu>
            </Dropdown>
            <div className='w-full flex sm:gap-6 gap-3 '>
              <div className='w-[20%] min-w-[200px] pr-3 h-full lg:flex hidden flex-none border-r border-gray-200'>
                <SideNavSettings />
              </div>
              <div className='w-full h-full rounded-lg overflow-hidden'>{children}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
