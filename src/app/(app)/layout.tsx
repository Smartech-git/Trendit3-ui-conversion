"use client";

import React, { useState } from "react";
import SideNav from "@/components/SideNav";
import Header from "@/components/Header";
import { Drawer, ThemeProvider } from "@material-tailwind/react";

export default function layout({ children }: { children: React.ReactNode }) {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <div className='w-full 4kScreen:pl-[26%] h-[100svh] bg-neutral-100 flex'>
        <div className='w-[20%] max-w-[280px] lg:flex hidden relative flex-none bg-white border-r border-gray-200'>
          <SideNav openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
        </div>
        <div className='flex relative h-[100svh] 4kScreen:pr-[26%] flex-col overflow-y-scroll scrollbar-thin w-full'>
          <Header openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
          {children}
        </div>
      </div>

      

      {/* Overlay components */}
      <ThemeProvider value={{ drawer: { styles: { base: { overlay: { backgroundOpacity: "bg-opacity-70", backdropBlur: "backdrop-blur-none", backgroundColor: "bg-scrim", } } } } }}>
        <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} className='p-0 !w-[280px]'>
          <div className='w-full flex h-full flex-none bg-white border-r border-gray-200'>
            <SideNav openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
          </div>
        </Drawer>
      </ThemeProvider>
    </>
  );
}
