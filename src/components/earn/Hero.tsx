"use client";

import React, { SetStateAction, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckVerified_02 } from "@/appIcons";
import { Button } from "@nextui-org/button";
import { Earn } from "@/svgAssets";
import { earnPageModalTypes } from "@/types";
import { useGlobal } from "@/context/GlobalContext";

interface hero_propTypes {
  setOpenModals: React.Dispatch<SetStateAction<earnPageModalTypes>>;
}

export default function Hero({ setOpenModals }: hero_propTypes) {
  const [openBecomeMember, setOpenBecomeMember] = useState(true);
  const { membershipApproved } = useGlobal();

  return (
    <motion.section initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }} layout className='w-full px-6 py-16 rounded-xl flex flex-col items-center justify-center flex-none h-fit border gap-y-6 border-outline_varient bg-white'>
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
    </motion.section>
  );
}
