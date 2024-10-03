"use client";

import React, { SetStateAction, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckVerified_02 } from "@/appIcons";
import { Button } from "@nextui-org/button";
import { Earn } from "@/svgAssets";
import { earnPageModalTypes } from "@/types";
import { useGlobal } from "@/context/GlobalContext";
import NotificationBanner from "../NotificationBanner";

interface hero_propTypes {
  setOpenModals: React.Dispatch<SetStateAction<earnPageModalTypes>>;
}

export default function Hero({ setOpenModals }: hero_propTypes) {
  const [openBanner, setOpenBanner] = useState(false);
  const { membershipApproved, setNotificationBanner } = useGlobal();

  useEffect(() => {
    if (membershipApproved !== "false") {
      setOpenBanner(true);
      setNotificationBanner({ open: true, mainContent: "Your membership has been approved", description: "You can now", action: "Generate tasks" });
    }
  }, [membershipApproved]);

  return (
    <motion.section initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }} layout className='w-full sm:px-6 py-6 px-3 gap-y-6 rounded-xl flex flex-col items-center justify-center flex-none h-fit border border-outline_varient bg-white'>
      {membershipApproved !== 'false' && <NotificationBanner />}
      <div className='sm:my-10 py-0 flex flex-col mt-6 h-full w-full justify-center items-center gap-y-6'>
        <Earn className='size-[220px]' />
        <h1 className='text-black text-center font-bold text-[32px]'>{`Earn on Trendit just got easier 🎉`}</h1>
        <h3 className='text-center max-w-[90%] font-medium text-gray-600 text-sm'>{`Get people with atleast 1000 active followers to repost your adverts and perform certain social tasks for you on their social media accounts. Select the type of task you want people to perform below:`}</h3>
        {membershipApproved === "pending" || membershipApproved === "approved" ? (
          <Button onPress={() => setOpenModals((prev: earnPageModalTypes) => ({ ...prev, becomeMember: true }))} disableRipple className='h-9 gap-x-[6px] !outline-none flex items-center px-[14px] py-2 !min-w-auto bg-brand-50 !border !border-brand-300 data-[hover=true]:!bg-brand-200 !opacity-100 transition-colors rounded-lg'>
            <span className='text-brand-700 text-base font-semibold'>Learn More</span>
          </Button>
        ) : (
          <Button onPress={() => setOpenModals((prev: earnPageModalTypes) => ({ ...prev, becomeMember: true }))} disableRipple className='h-9 gap-x-[6px] !outline-none flex items-center px-[14px] py-2 !min-w-auto border-none bg-primary_fixed data-[hover=true]:!bg-brand-700 !opacity-100 transition-colors rounded-lg'>
            <span className='text-white text-base font-semibold'>Become a member</span> <CheckVerified_02 />
          </Button>
        )}
      </div>
    </motion.section>
  );
}
