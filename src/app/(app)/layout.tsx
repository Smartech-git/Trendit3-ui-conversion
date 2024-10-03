"use client";

import React, { useState } from "react";
import SideNav from "@/components/SideNav";
import Header from "@/components/Header";
import { Drawer, ThemeProvider } from "@material-tailwind/react";
import Toast from "@/components/Toast";
import { useGlobal } from "@/context/GlobalContext";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [openDrawer, setOpenDrawer] = useState(false)
  return (
    <>
      <Toast />
      <div className='w-full relative 4kScreen:px-[20%] h-[100svh] bg-neutral-100 flex'>
        <div className='w-[20%] max-w-[280px] xl:flex hidden relative flex-none bg-white border-r border-gray-200'>
          <SideNav openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
        </div>
        <div className='flex h-[100svh] relative flex-col overflow-y-scroll scrollbar-none w-full'>
          <Header openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
          {children}
        </div>
      </div>

      {/* Overlay components */}
      <ThemeProvider value={{ drawer: { styles: { base: { overlay: { backgroundOpacity: "bg-opacity-70", backdropBlur: "backdrop-blur-none", backgroundColor: "bg-gray-950" } } } } }}>
        <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} className='p-0 !w-[280px]'>
          <div className='w-full flex h-full flex-none bg-white border-r border-gray-200'>
            <SideNav openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
          </div>
        </Drawer>
      </ThemeProvider>
    </>
  );
}
