"use client";

import React, { createContext, useState } from "react";
import { resetPasswordFormTypes} from "@/types";

export const ResetpasswordContext = createContext<{formData: resetPasswordFormTypes, setFormData: React.Dispatch<React.SetStateAction<resetPasswordFormTypes>> }>({
  formData: {
    email: undefined,
    refCode: undefined,
    OTP: undefined,
    firstName: undefined,
    lastName: undefined,
    userName: undefined,
    password: undefined,
    passwordConfirm: undefined,
    gender: undefined,
    dob: undefined,
    state: undefined,
    country: undefined,
    LGA: undefined,
    referal: undefined,
    useCase: undefined,
  },
  setFormData: () => {},
});

export default function resetPasswordlayout({ children }: { children: React.ReactNode }) {
  const [formData, setFormData] = useState<resetPasswordFormTypes>({
    email: undefined,
    refCode: undefined,
    OTP: undefined,
    firstName: undefined,
    lastName: undefined,
    userName: undefined,
    password: undefined,
    passwordConfirm: undefined,
    gender: undefined,
    dob: undefined,
    state: undefined,
    country: undefined,
    LGA: undefined,
    referal: undefined,
    useCase: undefined,
  });

  return (
    <ResetpasswordContext.Provider
      value={{
        formData,
        setFormData,
      }}
    >
      {children}
    </ResetpasswordContext.Provider>
  );
}
