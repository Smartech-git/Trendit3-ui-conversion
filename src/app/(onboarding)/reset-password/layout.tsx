"use client";

import React from "react";
import ResetPasswordProvider from "@/context/ResetPasswordContext";

export default function ResetPasswordlayout({ children }: { children: React.ReactNode }) {

  return (
    <ResetPasswordProvider>
      {children}
    </ResetPasswordProvider>
  );
}
