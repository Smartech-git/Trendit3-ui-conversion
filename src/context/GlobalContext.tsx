"use client";

import React, { createContext, useContext, useState } from "react";
import { GlobalContextTypes, toastTypes, membershipApprovalTypes } from "@/types";

const GlobalContext = createContext<GlobalContextTypes>({
  appUser: undefined,
  setAppUser: () => {},
  toast: { open: false, state: undefined, content: undefined },
  setToast: () => {},
  member: false,
  setMember: () => {},
  membershipApproved: 'false',
  setMembershipApproved: () => {},
});

export default function AppProvider({ children }: any) {
  const [appUser, setAppUser] = useState(undefined);
  const [toast, setToast] = useState<toastTypes>({ open: true, state: undefined, content: undefined });
  const [member, setMember] = useState(false);
  const [membershipApproved, setMembershipApproved] = useState<membershipApprovalTypes>('false');

  return (
    <GlobalContext.Provider
      value={{
        appUser,
        setAppUser,
        toast,
        setToast,
        member,
        setMember,
        membershipApproved,
        setMembershipApproved,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
export const useGlobal = () => useContext(GlobalContext);
