"use client";
import React, { useEffect, useState } from "react";
import EmailScreen from "@/components/onboardingScreens/signup/EmailScreen";
import EmailConFrimationScreen from "@/components/onboardingScreens/signup/EmailConfirmationScreen";
import AboutScreen from "@/components/onboardingScreens/signup/AboutScreen";
import ProfileSetupScreen from "@/components/onboardingScreens/signup/ProfileSetupScreen";
import ReferalScreen0 from "@/components/onboardingScreens/signup/ReferalScreen0";
import UseCase from "@/components/onboardingScreens/signup/UseCase";
import { useRouter, usePathname } from "next/navigation";
import Spinner from "@/components/loadingScreens/Spinner";
import { signupPaths, signupPathTypes } from "@/types";

export default function Page({ params }: { params: { stage: string } }) {
  const router = useRouter();
  const pathname = usePathname() as signupPathTypes;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <div className='size-fit'>
      {signupPaths.includes(pathname) ? (
        <>
          {pathname === "/signup/email" && <EmailScreen />}
          {pathname === "/signup/email-confirmation" && <EmailConFrimationScreen />}
          {pathname === "/signup/about" && <AboutScreen />}
          {pathname === "/signup/profile-setup" && <ProfileSetupScreen />}
          {pathname === "/signup/referal" && <ReferalScreen0 />}
          {pathname === "/signup/use-case" && <UseCase />}
        </>
      ) : (
        <div className='sm:w-[520px] w-[90vw] min-h-[300px] h-fit bg-white flex flex-col gap-y-8 items-center justify-center rounded-xl px-6 py-12'>
          <Spinner />
        </div>
      )}
    </div>
  );
}
