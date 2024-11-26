"use client";

import React, { useState, useEffect } from "react";
import SideNav from "@/components/SideNav";
import Header from "@/components/Header";
import { Drawer, ThemeProvider } from "@material-tailwind/react";
import Toast from "@/components/alert/Toast";
import { useGlobal } from "@/context/GlobalContext";
import { apiRequest } from "@/lib/serverRequest";
import { getSession, logout } from "@/cookies";
import { cookiesType, pathsEnum, taskTypes } from "@/types";
import { useRouter } from "next/navigation";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { setAppUser, setDashBoardStats, setEarnersTask, setSocialMediaPlatforms } = useGlobal();
  const router = useRouter();
  // const handleLogin = async () => {
  //   const session = await getSession()
  //   const result = await apiRequest("login", "POST", {
  //     email_username: formData.email,
  //     password: formData.password,
  //   });
  //   if (result?.error) {
  //     setToast({ open: true, state: "error", content: "check your network connection" });
  //   } else if (result?.status === "success") {
  //     setToast({ open: true, state: "success", content: result?.message });
  //     const session: cookiesType = {
  //       access_token: result?.access_token,
  //     };
  //     setAppUser(result?.user_data);
  //     const navigate = async () => {
  //       await createSession(session);
  //       router.replace(pathsEnum.home);
  //     };
  //     navigate();
  //   } else {
  //     if (result?.message === "Password is incorrect") {
  //       setError((prev) => ({
  //         ...prev,
  //         password: "Password is incorrect",
  //       }));
  //     } else {
  //       setError((prev) => ({
  //         email: "",
  //         password: "",
  //       }));
  //       setToast({ open: true, state: "error", content: result?.message });
  //     }
  //   }
  // };

  useEffect(() => {
    const fetchUserProfile = async (user: cookiesType) => {
      const result = await apiRequest("profile", "GET", null, {
        Authorization: `Bearer ${user?.access_token}`,
      });
      // //console.log(result);
      if (result?.error) {
        fetchUserProfile(user);
        return;
      } else if (result?.status === "success") {
        setAppUser(result?.user_profile);
      } else {
        await logout();
        router.replace(pathsEnum.login);
      }
    };

    const fetchDashBoardStats = async (user: cookiesType) => {
      const result = await apiRequest("stats", "GET", null, {
        Authorization: `Bearer ${user?.access_token}`,
      });
      // //console.log(result);
      if (result?.error) {
        fetchDashBoardStats(user);
        return;
      } else if (result?.status === "success") {
        setDashBoardStats(result?.metrics);
      }
    };

    const fetchAdvertTasks = async (user: cookiesType) => {
      const result = await apiRequest("task_options?user_type=earner&task_type=advert", "GET", null, {
        Authorization: `Bearer ${user?.access_token}`,
      });
      // //console.log(result);
      if (result?.error) {
        fetchAdvertTasks(user);
        return;
      } else if (result?.status === "success") {
        setEarnersTask((prev: taskTypes) => ({
          ...prev,
          advert: result?.options,
        }));
      }
    };

    const fetchSocialMediaPlatforms = async () => {
      const result = await apiRequest("social-platforms", "GET");
      // //console.log(result);
      if (result?.error) {
        fetchSocialMediaPlatforms();
        return;
      } else if (result?.status === "success") {
        setSocialMediaPlatforms(result?.platforms);
      }
    };

    fetchSocialMediaPlatforms();
    const prep = async () => {
      const session = await getSession();
      fetchUserProfile(session?.user);
      fetchDashBoardStats(session?.user);
      fetchAdvertTasks(session?.user);
    };
    prep();
  }, []);

  return (
    <>
      <Toast />
      <div className='w-full relative 4kScreen:px-[20%] h-[100svh] bg-neutral-100 flex'>
        <div className='w-[20%] max-w-[280px] xl:flex hidden relative flex-none bg-white border-r border-gray-200'>
          <SideNav openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
        </div>
        <div className='flex h-[100svh] relative flex-col overflow-y-scroll scrollbar-none w-full'>
          <Header openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
          {children}
        </div>
      </div>

      {/* Overlay components */}
      <ThemeProvider value={{ drawer: { styles: { base: { overlay: { backgroundOpacity: "bg-opacity-70", backdropBlur: "backdrop-blur-none", backgroundColor: "bg-gray-950" } } } } }}>
        <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} className='p-0 !w-[280px]'>
          <div className='w-full flex h-[100svh] relative flex-none bg-white border-r border-gray-200'>
            <SideNav openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
          </div>
        </Drawer>
      </ThemeProvider>
    </>
  );
}
