"use client";

import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { earnPageDynamicPathTypes, earnPageDynamicPaths } from "@/types";
import { useGlobal } from "@/context/GlobalContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() as earnPageDynamicPathTypes;
  const router = useRouter();
  const { activeTask } = useGlobal();

  useEffect(() => {
    if (![...earnPageDynamicPaths].includes(pathname)) {
      router.back();
    }
  }, [pathname]);

  useEffect(() => {
    const scrollableDivVirtual: any = document?.getElementById("task");
    if (scrollableDivVirtual) {
      scrollableDivVirtual.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top
    }
  }, [activeTask]);

  return (
    <div className='w-full 2xl:gap-8 overflow-x-visible sm:gap-6 gap-4 flex 2xl:px-8 sm:px-6 px-4 relative h-[100svh]'>
      <div id={"taskLayout"} className='h-full 2xl:pb-6 sm:pb-4 pb-4 overflow-y-scroll overflow-x-visible scrollbar-none flex flex-col sm:gap-6 gap-4 relative 2xl:pt-[170px] sm:pt-[154px] pt-[130px] w-full'>{children}</div>
    </div>
  );
}
