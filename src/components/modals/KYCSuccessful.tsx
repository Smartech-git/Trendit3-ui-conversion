"use client";

import React, { SetStateAction, Dispatch, useState, useRef, useEffect } from "react";
import { modalTypes } from "@/types";
import { Button } from "@nextui-org/button";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";
import { useGlobal } from "@/context/GlobalContext";
import { useDebouncedCallback } from "use-debounce";
const numeral = require("numeral");
import { CheckCircle } from "@/appIcons";
import { motion } from "framer-motion";

interface KYCSuccessful_propTypes {
  setOpenModals: Dispatch<SetStateAction<modalTypes>>;
  openModals: modalTypes;
  action?: () => void;
}

export default function KYCVSuccessful({ openModals, setOpenModals, action }: KYCSuccessful_propTypes) {
  const [withDrawAmount, setWithDrawAmount] = useState<string>("0.00");
  const inputRef = useRef<HTMLInputElement>(null);
  const spanRef = useRef<HTMLInputElement>(null);
  const { setToast } = useGlobal();

  const handleContinue = () => {
    setOpenModals((prev: modalTypes) => ({ ...prev, KYCSuccessful: false }));
    setToast({ open: true, state: "success", content: "Bank details added successfully" });
  };

  useEffect(() => {
    if (spanRef.current && inputRef.current) {
      inputRef.current.style.width = `${spanRef.current.offsetWidth + 20}px`;
    }
  }, [withDrawAmount]);

  const debounced = useDebouncedCallback((e) => {
    setWithDrawAmount(numeral(withDrawAmount).format("0,0.00"));
  }, 1000);

  return (
    <Modal
      scrollBehavior='inside'
      backdrop='opaque'
      size='xl'
      isOpen={openModals.KYCSuccessful}
      classNames={{
        backdrop: "!bg-gray-950/70",
        base: "rounded-xl",
        closeButton: "data-[hover=true]:!bg-gray-50 !opacity-100 !p-0 right-2 top-2 !outline-none size-fit bg-white !min-w-10 !h-10 !p-0 !rounded-md",
        footer: "shadow-none bg-white rounded-b-xl px-8 pt-8 pb-8",
        body: "px-8 flex flex-col gap-y-8",
        header: "pb-8",
      }}
      hideCloseButton
      // closeButton={
      //   <Button disableRipple className='bg-white outline-none !min-w-11 !w-11 !h-11 rounded-md hover:bg-gray-50 transition-colors flex data-[hover=true]:!bg-gray-50 !opacity-100 items-center justify-center !p-0'>
      //     <XClose />
      //   </Button>
      // }
      onClose={() => setOpenModals((prev: modalTypes) => ({ ...prev, KYCSuccessful: false }))}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className='flex flex-col gap-1'></ModalHeader>
            <ModalBody>
              <div className='w-full flex flex-col items-center gap-y-2'>
                <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", delay: 0.3 }}>
                  <CheckCircle />
                </motion.div>
                <h1 className='text-gray-900 font-bold text-2xl'>Verification Successful</h1>
                <p className='text-gray-600 max-w-[50%] text-center text-base font-normal'>Your identity has been confirmed. You're good to go!</p>
              </div>
            </ModalBody>
            <ModalFooter>
              <div className='w-full flex relative'>
                <Button
                  onPress={() => {
                    handleContinue();
                    action?.();
                  }}
                  disableRipple
                  className='h-11 gap-x-[6px] !outline-none shadow-main flex flex-none items-center px-[18px] py-3 !min-w-full border-none bg-primary_fixed data-[hover=true]:!bg-brand-700 !opacity-100 transition-colors rounded-lg'
                >
                  <span className='text-white  text-base font-semibold'>Done</span>
                </Button>
              </div>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
