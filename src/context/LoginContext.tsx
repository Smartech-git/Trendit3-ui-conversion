"use client";

import React, { createContext, useState, useContext } from "react";
import { loginFormTypes } from "@/types";

export const LoginOnboardingContext = createContext<{ formData: loginFormTypes; setFormData: React.Dispatch<React.SetStateAction<loginFormTypes>> }>({
  formData: {
    email: undefined,
    OTP: undefined,
    password: undefined,
  },
  setFormData: () => {},
});

export default function LoginProvider({ children }: { children: React.ReactNode }) {
  const [formData, setFormData] = useState<loginFormTypes>({
    email: undefined,
    OTP: undefined,
    password: undefined,
  });
  const [type, setType] = useState<"default" | "resetPassword">("default");

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

export const useLoginContext = () => useContext(LoginOnboardingContext);

