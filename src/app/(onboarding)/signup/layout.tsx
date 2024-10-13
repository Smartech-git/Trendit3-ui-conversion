"use client";

import React, { useEffect } from "react";
import SignupProvider from "@/context/SignupContext";
import { pathsEnum, signupPathTypes, signupPaths } from "@/types";
import { usePathname, useRouter } from "next/navigation";
import { getPathsCookies } from "@/cookies";
import { useSignupContext } from "@/context/SignupContext";

export default function SignupOnboardinglayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() as signupPathTypes;
  const router = useRouter();

  useEffect(() => {
    if (!signupPaths.includes(pathname)) {
      router.back();
    }
  }, [pathname]);

  return <SignupProvider>{children}</SignupProvider>;
}
