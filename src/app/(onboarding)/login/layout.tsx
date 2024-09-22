"use client";

import React, { createContext, useState } from "react";
import { loginFormTypes } from "@/types";

interface loginContext_Types {
  formData: loginFormTypes,
  setFormData: React.Dispatch<React.SetStateAction<loginFormTypes>>
}

export const LoginOnboardingContext = createContext<loginContext_Types>({
  formData: {
    email: undefined,
    OTP: undefined,
    password: undefined,
  },
  setFormData: () => { },
});

export default function loginOnboardinglayout({ children }: { children: React.ReactNode }) {
  const [formData, setFormData] = useState<loginFormTypes>({
    email: undefined,
    OTP: undefined,
    password: undefined,
  });
  const [type, setType] = useState<'default' | 'resetPassword'>('default')

  return (
    <LoginOnboardingContext.Provider
      value={{
        formData,
        setFormData,
      }}
    >
      {children}
    </LoginOnboardingContext.Provider>
  );
}
