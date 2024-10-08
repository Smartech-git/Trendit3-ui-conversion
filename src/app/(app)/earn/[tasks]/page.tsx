"use client";
import React, { useEffect, useContext, useState } from "react";
import Task from "@/components/earn/Task";
import { useRouter, usePathname } from "next/navigation";
import Spinner from "@/components/loadingScreens/Spinner";
import { earnPageDynamicPathTypes, earnPageDynamicPaths, modalTypes } from "@/types";
import NotificationBanner from "@/components/NotificationBanner";
import { motion } from "framer-motion";
import NoPendingTasks from "@/components/earn/NoPendingTasks";
import { useGlobal } from "@/context/GlobalContext";
import GeneratedTask from "@/components/earn/GeneratedTask";
import TaskProof from "@/components/earn/TaskProof";
import TaskSubmission from "@/components/TaskSubmission";

export default function Page({ params }: { params: { stage: string } }) {
  const pathname = usePathname() as earnPageDynamicPathTypes;
  const [socialMediaHandleVerified, setSocialMediaHandleVerified] = useState(false);
  const [openModals, setOpenModals] = useState<modalTypes>({ generate: false });
  const { activeTask, setNotificationBanner } = useGlobal();

  useEffect(() => {
    if (socialMediaHandleVerified) {
      setNotificationBanner({ open: true, mainContent: "Your social media page has been verified", description: "You can now", action: "Generate tasks", actionCallback: () => setOpenModals({ generate: true }) });
    }
    if (activeTask) {
      setNotificationBanner({ open: true, mainContent: "This task has a timedown", timer: true });
    }
  }, [socialMediaHandleVerified, activeTask]);

  return (
    <>
      {earnPageDynamicPaths.includes(pathname) ? (
        <motion.div layoutScroll className='w-full gap-y-6 flex flex-col h-fit'>
          {(socialMediaHandleVerified || activeTask) && <NotificationBanner />}
          <Task socialMediaHandleVerified={socialMediaHandleVerified} setSocialMediaHandleVerified={setSocialMediaHandleVerified} />
          {activeTask ? (
            <div className='flex md:flex-row flex-col w-full gap-6 relative'>
              <GeneratedTask />
              <TaskProof />
            </div>
          ) : (
            <NoPendingTasks openModals={openModals} setOpenModals={setOpenModals} socialMediaHandleVerified={socialMediaHandleVerified} />
          )}
          {activeTask && <TaskSubmission />}
        </motion.div>
      ) : (
        <div className='w-full sm:px-6 py-6 px-3 gap-y-6 rounded-xl flex flex-col items-center justify-center flex-none h-[80svh] border border-outline_varient bg-white'>
          <Spinner />
        </div>
      )}
    </>
  );
}
