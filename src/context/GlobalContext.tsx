"use client";

import React, { createContext, useContext, useState } from "react";
import { GlobalContextTypes, toastTypes } from "@/types";


export const GlobalContext = createContext<GlobalContextTypes>({
  appUser: null,
  setAppUser: () => { },
  toast: {open: false, state: null, content: null},
  setToast: () => {}
});

export default function AppProvider({ children }: any) {
  const [appUser, setAppUser] = useState(null);
  const [toast, setToast] = useState<toastTypes>({ open: true, state: null , content: null })

  return (
    <GlobalContext.Provider
      value={{
        appUser,
        setAppUser,
        toast, setToast
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
export const useGlobal = () => useContext(GlobalContext);
