"use client";

import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { earnPageDynamicPathTypes, earnPageDynamicPaths } from "@/types";
import { useGlobal } from "@/context/GlobalContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() as earnPageDynamicPathTypes;
  const router = useRouter();
  const { activeTask } = useGlobal();

  return (
    <div className='w-full 2xl:gap-8 overflow-x-visible sm:gap-6 gap-4 flex 2xl:px-8 sm:px-6 px-4 relative h-[100svh]'>
      <div id={"historyLayout"} className='h-full 2xl:pb-6 sm:pb-4 pb-4 overflow-y-scroll overflow-x-visible scrollbar-none flex flex-col sm:gap-6 gap-4 relative w-full'>
        {children}
      </div>
    </div>
  );
}
