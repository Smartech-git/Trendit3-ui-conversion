"use client";

import React, { SetStateAction, Dispatch, useState, useEffect } from "react";
import { earnPageModalTypes } from "@/types";
import { Button } from "@nextui-org/button";
import { XClose, InfoCircle } from "@/appIcons";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";
import { BackgroundPatternDecorative_02, Facebook } from "@/svgAssets";
import { useGlobal } from "@/context/GlobalContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface becomeMember_propTypes {
  setOpenModals: Dispatch<SetStateAction<earnPageModalTypes>>;
  openModals: earnPageModalTypes;
}
export default function SubmiteTask({ openModals, setOpenModals }: becomeMember_propTypes) {
  const { setActiveTask, setToast } = useGlobal();
  const router = useRouter();

  useEffect(() => {
    router.prefetch("/earn/history");
  }, []);

  const handleSubmit = () => {
    setToast({ open: true, state: "success", content: "Submitted successfully" });
    router.push("/earn/history");
  };

  return (
    <Modal
      scrollBehavior='inside'
      backdrop='opaque'
      size='lg'
      isOpen={openModals.submit}
      classNames={{
        backdrop: "!bg-gray-950/70",
        base: "rounded-xl relative overflow-hidden",
        closeButton: "data-[hover=true]:!bg-gray-50 !opacity-100 !p-0 right-2 top-2 !outline-none size-fit bg-white !min-w-10 !h-10 !p-0 !rounded-md z-30",
        footer: ` "shadow-none bg-white rounded-b-xl sm:px-6 px-4 pt-0 pb-6 flex sm:flex-row flex-col-reverse gap-3 justify-end relative z-30`,
        body: "p-0 h-fit",
        header: "p-0",
      }}
      closeButton={
        <Button disableRipple className='bg-white outline-none !min-w-11 !w-11 !h-11 rounded-md hover:bg-gray-50 transition-colors flex data-[hover=true]:!bg-gray-50 !opacity-100 items-center justify-center !p-0'>
          <XClose />
        </Button>
      }
      onClose={() => setOpenModals((prev: earnPageModalTypes) => ({ ...prev, submit: false }))}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className='flex flex-col gap-1'></ModalHeader>
            <ModalBody>
              <div className='size-fit sm:top-0 sm:left-0 -top-2 -left-2 flex items-center justify-center absolute z-[10]'>
                <BackgroundPatternDecorative_02 />
              </div>
              <div className='sm:px-6 px-4 sm:pt-6 sm:pb-8 py-4 flex sm:flex-row flex-col relative z-20 gap-4'>
                <div className='size-12 flex-none rounded-full bg-warning-50 flex items-center justify-center'>
                  <div className='flex flex-none items-center bg-warning-100 justify-center rounded-full size-9'>
                    <InfoCircle className='flex-none' />
                  </div>
                </div>
                <div className='flex flex-col max-w-[100%] sm:w-full'>
                  <h1 className='text-gray-900 font-semibold text-lg'>Submit task?</h1>
                  <p className='font-normal text-sm text-gray-600'>Do you want to save or discard changes?</p>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button onPress={() => setOpenModals((prev: earnPageModalTypes) => ({ ...prev, submit: false }))} disableRipple className='h-11 gap-x-[6px] !outline-none sm:!w-fit w-full shadow-main flex flex-none items-center px-[18px] py-3 bg-white !min-w-auto border border-gray-300   rounded-lg'>
                <span className='text-gray-700 text-base font-semibold'>Cancel</span>
              </Button>

              <Button onPress={handleSubmit} disableRipple className='h-11 gap-x-[6px] !outline-none sm:!w-fit w-full shadow-main flex flex-none items-center px-[18px] py-3 !min-w-auto border-none bg-primary_fixed data-[hover=true]:!bg-brand-700 !opacity-100 transition-colors rounded-lg '>
                <span className='text-white  text-base font-semibold'>Confirm</span>
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
