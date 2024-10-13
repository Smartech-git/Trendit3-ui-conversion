"use client";
import React, { useEffect } from "react";
import LoginProvider from "@/context/LoginContext";
import { usePathname, useRouter } from "next/navigation";
import { loginPathTypes, loginPaths } from "@/types";

export default function LoginOnboardinglayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() as loginPathTypes;
  const router = useRouter();

  useEffect(() => {
    if (!loginPaths.includes(pathname)) {
      router.back();
    }
  }, [pathname]);

  return <LoginProvider>{children}</LoginProvider>;
}
