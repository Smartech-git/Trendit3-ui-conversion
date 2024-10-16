import React from "react";
import OnPageLoad from "@/components/loadingScreens/OnPageLoad";
import { Skeleton } from "@nextui-org/skeleton";
import Spinner from "@/components/loadingScreens/Spinner";

export default function loading() {
  return (
    <div className='w-full flex items-center justify-center relative h-[100svh]'>
      <div className='absolute z-10 animate-pulse overflow-hidden inset-0 bg-neutral-100 size-full'>
        <OnPageLoad className=' !h-[100svh] !w-fit' />
      </div>
      <Spinner className='z-20 text-neutral-100' />
    </div>
  );
}
