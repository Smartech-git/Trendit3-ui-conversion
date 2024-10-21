"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { CheveronRight, CheckVerified_01 } from "@/appIcons";
import { useGlobal } from "@/context/GlobalContext";
import { modalTypes } from "@/types";
import { Select, SelectItem } from "@nextui-org/select";
import KYCVerification from "@/components/modals/KYCVerification";
import KYCVSuccessful from "@/components/modals/KYCSuccessful";

export default function page() {
  const { appUser } = useGlobal();
  const [security, setSecurity] = useState<{ emailAuth: "On" | "Off"; googleAuth: "On" | "Off" }>({
    emailAuth: "Off",
    googleAuth: "On",
  });
  const [openModals, setOpenModals] = useState<modalTypes>({ KYCVerification: false, KYCSuccessful: false });
  const [BVNLinked, setBVNLinked] = useState(false);

  const handleOnChange = (e: any) => {
    setSecurity((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }} className='w-full h-full flex flex-col gap-y-6 rounded-xl bg-white'>
        <div onClick={() => setOpenModals((prev) => ({ ...prev, KYCVerification: true }))} className={`w-full px-6 py-3 cursor-pointer group justify-between flex items-start gap-x-3 bg-gray-50 rounded-lg ${BVNLinked && "bg-brand-30"}`}>
          <span className={`font-semibold text-base text-link ${BVNLinked && "text-brand-600"}`}>Link your NIN/BVN to secure your account.</span>
          {BVNLinked ? <CheckVerified_01 /> : <CheveronRight className='group-hover:translate-x-0.5 transition-all' />}
        </div>
        <div className='w-full flex flex-col gap-y-3'>
          <h1 className='text-gray-900 text-lg font-semibold'>Password</h1>
          <div className='w-full flex flex-col'>
            <Input
              autoComplete='off'
              placeholder={`Password`}
              name='password'
              variant='bordered'
              type='text'
              classNames={{
                inputWrapper: "!h-11 !px-4 !rounded-lg  border !transition-all data-[hover=true]:border-gray-300 group-data-[focus=true]:!border-brand-700 group-data-[invalid=true]:border-error group-data-[focus=true]:!border-2 !shadow-main",
                input: "!text-base overflow-hidden capitalize !font-medium placeholder:!font-normal placeholder:!text-gray-500  !text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
              }}
            />
          </div>
          <div className='w-full flex flex-col'>
            <Input
              autoComplete='off'
              placeholder={`Change password`}
              name='ChangePassword'
              variant='bordered'
              type='text'
              classNames={{
                inputWrapper: "!h-11 !px-4 !rounded-lg  border !transition-all data-[hover=true]:border-gray-300 group-data-[focus=true]:!border-brand-700 group-data-[invalid=true]:border-error group-data-[focus=true]:!border-2 !shadow-main",
                input: "!text-base overflow-hidden capitalize !font-medium placeholder:!font-normal placeholder:!text-gray-500  !text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
              }}
            />
          </div>
          <div className='w-full flex flex-col'>
            <Input
              autoComplete='off'
              placeholder={`Confirm password`}
              name='confirmPassword'
              variant='bordered'
              type='text'
              classNames={{
                inputWrapper: "!h-11 !px-4 !rounded-lg  border !transition-all data-[hover=true]:border-gray-300 group-data-[focus=true]:!border-brand-700 group-data-[invalid=true]:border-error group-data-[focus=true]:!border-2 !shadow-main",
                input: "!text-base overflow-hidden capitalize !font-medium placeholder:!font-normal placeholder:!text-gray-500  !text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
              }}
            />
          </div>
          <Button disableRipple className='h-11 gap-x-[6px] !outline-none shadow-main flex flex-none items-center px-[18px] py-3 !w-fit border-none bg-primary_fixed data-[hover=true]:!bg-brand-700 !opacity-100 transition-colors rounded-lg'>
            <span className='text-white  text-base font-semibold'>Update</span>
          </Button>
        </div>
        <div className='w-full flex flex-col gap-y-3'>
          <h1 className='text-gray-900 text-lg font-semibold'>2 Factor Authentication</h1>
          <Select
            selectedKeys={[security.googleAuth as any]}
            onChange={(e) => handleOnChange(e)}
            name='googleAuth'
            classNames={{
              base: `${security.googleAuth === "Off" ? "opacity-60" : "opacity-100"}`,
              trigger: "!h-11 !px-4 !rounded-lg border border-gray-300 data-[focus=true]:border-gray-300 data-[hover=true]:border-gray-300 data-[invalid=true]:border-error data-[open=true]:!border-brand-700 data-[open=true]:!border-2  !shadow-main",
              value: "!text-base invisible !text-gray-500 group-data-[has-value=true]:!font-medium group-data-[has-value=true]:!text-black",
              selectorIcon: "stroke-gray-500 size-5",
            }}
            startContent={<span className='text-base text-nowrap text-gray-900 font-normal'>Google Auth</span>}
            endContent={<span className='text-base text-nowrap text-gray-700 font-normal'>{security.googleAuth}</span>}
            variant='bordered'
            className='w-full'
          >
            <SelectItem classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white !outline-none data-[selected=true]:!text-primary_fixed", title: "text-base" }} key='On'>{`On`}</SelectItem>
            <SelectItem classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white !outline-none data-[selected=true]:!text-primary_fixed", title: "text-base" }} key='Off'>{`Off`}</SelectItem>
          </Select>
          <Select
            selectedKeys={[security.emailAuth as any]}
            onChange={(e) => handleOnChange(e)}
            name='emailAuth'
            classNames={{
              base: `${security.emailAuth === "Off" ? "opacity-60" : "opacity-100"}`,
              trigger: "!h-11 !px-4 !rounded-lg border border-gray-300 data-[focus=true]:border-gray-300 data-[hover=true]:border-gray-300 data-[invalid=true]:border-error data-[open=true]:!border-brand-700 data-[open=true]:!border-2  !shadow-main",
              value: "!text-base invisible !text-gray-500 group-data-[has-value=true]:!font-medium group-data-[has-value=true]:!text-black",
              selectorIcon: "stroke-gray-500 size-5",
            }}
            startContent={<span className='text-base text-nowrap text-gray-900 font-normal'>Email Auth</span>}
            endContent={<span className='text-base text-nowrap text-gray-700 font-normal'>{security.emailAuth}</span>}
            variant='bordered'
            className='w-full'
          >
            <SelectItem classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white !outline-none data-[selected=true]:!text-primary_fixed", title: "text-base" }} key='On'>{`On`}</SelectItem>
            <SelectItem classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white !outline-none data-[selected=true]:!text-primary_fixed", title: "text-base" }} key='Off'>{`Off`}</SelectItem>
          </Select>
          <Button disableRipple className='w-full h-fit p-3 gap-x-[6px] !outline-none flex flex-col items-start !min-w-auto border border-gray-300 bg-white data-[hover=true]:!bg-gray-50 !opacity-100 transition-colors rounded-lg shadow-none'>
            <h1 className='font-semibold text-warning text-base'>Delete account</h1>
            <p className='text-gray-900 w-full text-wrap text-left font-normal text-base'>Permanently delete all the data associated with your organization and the apps you use.</p>
          </Button>
        </div>
      </motion.div>

      {
        // modals...

        <>
          <KYCVerification openModals={openModals} setOpenModals={setOpenModals} />
          <KYCVSuccessful openModals={openModals} setOpenModals={setOpenModals} action={() => setBVNLinked(true)} />
        </>
      }
    </>
  );
}
