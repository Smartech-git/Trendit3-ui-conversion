"use client";
import React, { useEffect, useState } from "react";
import ResetPasswordScreen from "@/components/onboardingScreens/resetPassword/ResetPasswordScreen";
import OTPConfirmation from "@/components/onboardingScreens/resetPassword/OTPConfirmationn";
import { useRouter, usePathname } from "next/navigation";
import Spinner from "@/components/loadingScreens/Spinner";
import { resetpasswordPaths, resetPasswordPathTypes } from "@/types";


export default function Page({ params }: { params: { stage: string } }) {
  const pathname = usePathname() as resetPasswordPathTypes;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <div className='size-fit'>
      {resetpasswordPaths.includes(pathname) ? (
        <>{pathname === "/reset-password/0" && <ResetPasswordScreen />}</>
      ) : (
        <div className='sm:w-[520px] w-[90vw] min-h-[300px] h-fit bg-white flex flex-col gap-y-8 items-center justify-center rounded-xl px-6 py-12'>
          <Spinner pathClassName='!text-gray-300' className='!text-primary_fixed' />
        </div>
      )}
    </div>
  );
}
