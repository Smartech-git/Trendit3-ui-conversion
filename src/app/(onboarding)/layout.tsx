"use client";

import React, { useEffect, useRef, createContext } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { signupPaths, loginPaths, resetpasswordPaths, loginPathTypes, signupPathTypes, resetPasswordPathTypes } from "@/types";
import Toast from "@/components/Toast";

export default function onBoardingLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() as loginPathTypes | signupPathTypes | resetPasswordPathTypes;
  const router = useRouter();

  useEffect(() => {
    if (![...signupPaths, ...loginPaths, ...resetpasswordPaths].includes(pathname)) {
      router.back();
    }
  }, [pathname]);

  return (
    <>
      <Toast/>
      <div className='bg-neutral-100 4kScreen:px-[25%] sm:px-3 px-2 overflow-x-hidden overflow-y-scroll flex flex-col items-center w-full h-[100svh]'>
        <div id='onBoardingLayout' className='w-full flex flex-col items-center relative h-fit 4kScreen:py-[20svh] sm:py-[10svh] py-14 min-gap-y-12 gap-y-[10svh]'>
          <Image src='/logos/logo_default.svg' alt='App Logo' width={250} height={250} className='sm:w-[136px] xxs:w-[125px] w-[100px] h-fit' />
          {children}
        </div>
      </div>
    </>
  );
}
