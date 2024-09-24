"use client";

import LoginProvider from "@/context/LoginContext";

export default function LoginOnboardinglayout({ children }: { children: React.ReactNode }) {
 return (
    <LoginProvider>
      {children}
    </LoginProvider>
  );
}
