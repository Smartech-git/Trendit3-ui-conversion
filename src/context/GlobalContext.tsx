"use client";

import React, { createContext, useContext, useState } from "react";
import { GlobalContextTypes, toastTypes, membershipApprovalTypes, notificationBannerTypes, default_notoficationBannerProps, taskTypes } from "@/types";
import { useSearchParams } from "next/navigation";

const GlobalContext = createContext<GlobalContextTypes>({
  appUser: undefined,
  setAppUser: () => {},
  toast: { open: false, state: undefined, content: undefined },
  setToast: () => {},
  member: false,
  setMember: () => {},
  membershipApproved: "false",
  setMembershipApproved: () => {},
  activeTask: false,
  setActiveTask: () => {},
  taskTimerActive: false,
  setTaskTimerActive: () => {},
  notificationBanner: default_notoficationBannerProps,
  setNotificationBanner: () => {},
  dashBoardStats: undefined,
  setDashBoardStats: () => {},
  earnersTask: { advert: undefined, engagement: undefined },
  setEarnersTask: () => { },
  advertTask: { advert: undefined, engagement: undefined },
  setAdvertTask: () => {},
  socialMediaPlatforms: undefined,
  setSocialMediaPlatforms: () => {},
});

export default function AppProvider({ children }: any) {
  const [appUser, setAppUser] = useState(undefined);
  const [toast, setToast] = useState<toastTypes>({ open: false, state: undefined, content: undefined });
  const [member, setMember] = useState(false);
  const [membershipApproved, setMembershipApproved] = useState<membershipApprovalTypes>("pending");
  const [activeTask, setActiveTask] = useState(false);
  const [taskTimerActive, setTaskTimerActive] = useState(false);
  const [notificationBanner, setNotificationBanner] = useState<notificationBannerTypes>(default_notoficationBannerProps);
  const [dashBoardStats, setDashBoardStats] = useState<any>(undefined);
  const [earnersTask, setEarnersTask] = useState<taskTypes>({ advert: undefined, engagement: undefined });
  const [advertTask, setAdvertTask] = useState<taskTypes>({ advert: undefined, engagement: undefined });
  const [socialMediaPlatforms, setSocialMediaPlatforms] = useState<any>(undefined);

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
        activeTask,
        setActiveTask,
        taskTimerActive,
        setTaskTimerActive,
        notificationBanner,
        setNotificationBanner,
        dashBoardStats,
        setDashBoardStats,
        earnersTask,
        setEarnersTask,
        advertTask,
        setAdvertTask,
        socialMediaPlatforms,
        setSocialMediaPlatforms,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
export const useGlobal = () => useContext(GlobalContext);
