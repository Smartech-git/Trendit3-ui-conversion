import React from "react";
import SideNav from "@/components/SideNav";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='w-full h-[100svh] bg-neutral-100 flex'>
      <div className='w-[20%] min-w-[280px] relative flex-none bg-white border-r border-gray-200'>
        <SideNav />
      </div>
      <div className="flex flex-col items-center justify-center p-8 gap-y-8  w-full">
        {children}
       </div>
    </div>
  );
}
