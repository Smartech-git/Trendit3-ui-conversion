"use client";

import React, { createContext, useContext, useState } from "react";

interface IGlobalContext {
  appUser: any;
  setAppUser: any;
}

export const GlobalContext = createContext<IGlobalContext>({
  appUser: null,
  setAppUser: null,
});

export default function AppProvider({ children }: any) {
  const [appUser, setAppUser] = useState(null);

  return (
    <GlobalContext.Provider
      value={{
        appUser,
        setAppUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
export const useGlobal = () => useContext(GlobalContext);
