"use client";

import React, { createContext, useContext, useState } from "react";
import { GlobalContextTypes, toastTypes, membershipApprovalTypes, notificationBannerTypes, default_notoficationBannerProps } from "@/types";
import { useSearchParams } from "next/navigation";

const GlobalContext = createContext<GlobalContextTypes>({
  appUser: undefined,
  setAppUser: () => {},
  toast: { open: false, state: undefined, content: undefined },
  setToast: () => {},
  member: false,
  setMember: () => {},
  membershipApproved: 'false',
  setMembershipApproved: () => { },
  activeTask: false,
  setActiveTask: () => { },
  taskTimerActive: false, 
  setTaskTimerActive: () => { },
  notificationBanner: default_notoficationBannerProps,
  setNotificationBanner: () => { },
  dashBoardStats: undefined,
  setDashBoardStats: () => {},
});

export default function AppProvider({ children }: any) {
  const [appUser, setAppUser] = useState(undefined);
  const [toast, setToast] = useState<toastTypes>({ open: false, state: undefined, content: undefined });
  const [member, setMember] = useState(false);
  const [membershipApproved, setMembershipApproved] = useState<membershipApprovalTypes>('pending');
  const [activeTask, setActiveTask] = useState(false)
  const [taskTimerActive, setTaskTimerActive] = useState(false)
  const [notificationBanner, setNotificationBanner] = useState<notificationBannerTypes>(default_notoficationBannerProps)
  const [dashBoardStats,  setDashBoardStats] = useState<any>(undefined)

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
        activeTask, setActiveTask,
        taskTimerActive, setTaskTimerActive,
        notificationBanner, setNotificationBanner,
        dashBoardStats, setDashBoardStats
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
export const useGlobal = () => useContext(GlobalContext);
