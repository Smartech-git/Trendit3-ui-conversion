"use client";
import React, { useEffect, useContext } from "react";
import LoginScreen from "@/components/onboardingScreens/login/LoginScreen";
import LoginScreen1 from "@/components/onboardingScreens/login/loginScreen1";
import VerificationScreen from "@/components/onboardingScreens/login/VerficationScreen";
import { useRouter, usePathname } from "next/navigation";
import Spinner from "@/components/loadingScreens/Spinner";
import { loginPaths, loginPathTypes } from "@/types";

export default function Page({ params }: { params: { stage: string } }) {
  const pathname = usePathname() as loginPathTypes;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <div className='size-fit'>
      {loginPaths.includes(pathname) ? (
        <>
          {pathname === "/login/0" && <LoginScreen />}
          {pathname === "/login/1" && <LoginScreen1 />}
          {pathname === "/login/verification" && <VerificationScreen />}
        </>
      ) : (
        <div className='sm:w-[520px] w-[90vw] min-h-[300px] h-fit bg-white flex flex-col gap-y-8 items-center justify-center rounded-xl px-6 py-12'>
          <Spinner pathClassName='!text-gray-300' className='!fill-primary_fixed' />
        </div>
      )}
    </div>
  );
}
