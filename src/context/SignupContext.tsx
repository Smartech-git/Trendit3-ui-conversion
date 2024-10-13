"use client";

import React, { createContext, useState, useContext } from "react";
import { signupFormTypes, signupContextTypes, pathsEnum } from "@/types";

const SignupOnboardingContext = createContext<signupContextTypes | never>({
  formData: {
    email: undefined,
    refCode: undefined,
    OTP: undefined,
    firstName: undefined,
    lastName: undefined,
    userName: undefined,
    password: undefined,
    passwordConfirm: undefined,
    profilePicture: undefined,
    gender: undefined,
    dob: undefined,
    state: undefined,
    country: undefined,
    LGA: undefined,
    referal: undefined,
    useCase: undefined,
  },
  setFormData: () => {},
  pathsTrack: [pathsEnum.email],
  setPathsTrack: () => {},
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
    profilePicture: undefined,
    gender: undefined,
    dob: undefined,
    state: undefined,
    country: undefined,
    LGA: undefined,
    referal: undefined,
    useCase: undefined,
  });
  const [pathsTrack, setPathsTrack] = useState<Array<string>>([pathsEnum.email]);

  return (
    <SignupOnboardingContext.Provider
      value={{
        formData,
        setFormData,
        pathsTrack,
        setPathsTrack,
      }}
    >
      {children}
    </SignupOnboardingContext.Provider>
  );
}

export const useSignupContext = () => useContext(SignupOnboardingContext);
