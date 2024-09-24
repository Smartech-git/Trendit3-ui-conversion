"use client";

import React, { createContext, useState , useContext} from "react";
import { resetPasswordFormTypes } from "@/types";

const ResetpasswordContext = createContext<{ formData: resetPasswordFormTypes; setFormData: React.Dispatch<React.SetStateAction<resetPasswordFormTypes>> } | never>({
  formData: {
    OTP: undefined,
  },
  setFormData: () => {},
});

export default function ResetPasswordProvider({ children }: { children: React.ReactNode }) {
  const [formData, setFormData] = useState<resetPasswordFormTypes>({
    OTP: undefined,
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

export const useResetPasswordContext = () => useContext(ResetpasswordContext);
