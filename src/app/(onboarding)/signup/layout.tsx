"use client";

import React, { createContext, useState } from "react";
import { signupFormTypes } from "@/types";

export const SignupOnboardingContext = createContext<{ formData: signupFormTypes; setFormData: React.Dispatch<React.SetStateAction<signupFormTypes>> }>({
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

export default function signupOnboardinglayout({ children }: { children: React.ReactNode }) {
  const [formData, setFormData] = useState<signupFormTypes>({
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
    <SignupOnboardingContext.Provider
      value={{
        formData,
        setFormData,
      }}
    >
      {children}
    </SignupOnboardingContext.Provider>
  );
}
