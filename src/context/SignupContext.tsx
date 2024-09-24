"use client";

import React, { createContext, useState, useContext } from "react";
import { signupFormTypes } from "@/types";

const SignupOnboardingContext = createContext<{ formData: signupFormTypes; setFormData: React.Dispatch<React.SetStateAction<signupFormTypes>> } | never>({
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

export default function SignupProvider({ children }: { children: React.ReactNode }) {
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

export const useSignupContext = () => useContext(SignupOnboardingContext);

