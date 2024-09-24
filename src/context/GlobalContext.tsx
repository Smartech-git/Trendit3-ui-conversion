"use client";

import React, { createContext, useContext, useState } from "react";
import { GlobalContextTypes, toastTypes } from "@/types";

const GlobalContext = createContext<GlobalContextTypes>({
  appUser: undefined,
  setAppUser: () => {},
  toast: { open: false, state: undefined, content: undefined },
  setToast: () => {},
});

export default function AppProvider({ children }: any) {
  const [appUser, setAppUser] = useState(undefined);
  const [toast, setToast] = useState<toastTypes>({ open: true, state: undefined, content: undefined });

  return (
    <GlobalContext.Provider
      value={{
        appUser,
        setAppUser,
        toast,
        setToast,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
export const useGlobal = () => useContext(GlobalContext);
