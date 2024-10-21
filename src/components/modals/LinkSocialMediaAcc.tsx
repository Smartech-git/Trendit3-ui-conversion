"use client";

import React, { SetStateAction, Dispatch, useState, useRef, useEffect } from "react";
import { modalTypes } from "@/types";
import { Button } from "@nextui-org/button";
import { DotsHorizontal, XClose } from "@/appIcons";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";
import { Input } from "@nextui-org/input";
const numeral = require("numeral");
import { Select, SelectItem } from "@nextui-org/select";
import { Facebook } from "@/svgAssets";
import { useGlobal } from "@/context/GlobalContext";

interface KYCVerification_propTypes {
  setOpenModals: Dispatch<SetStateAction<modalTypes>>;
  openModals: modalTypes;
  action?: () => void;
}

export default function LinkSocialMediaAcc({ openModals, setOpenModals, action }: KYCVerification_propTypes) {
  const { setToast } = useGlobal();

  const handleContinue = () => {
    setOpenModals((prev: modalTypes) => ({ ...prev, linkSocialMedia: false }));
    setToast({ open: true, state: "success", content: "Success" });
  };

  return (
    <Modal
      scrollBehavior='inside'
      backdrop='opaque'
      size='xl'
      isOpen={openModals.linkSocialMedia}
      classNames={{
        backdrop: "!bg-gray-950/70",
        base: "rounded-xl",
        closeButton: "data-[hover=true]:!bg-gray-50 !opacity-100 !p-0 right-2 top-2 !outline-none size-fit bg-white !min-w-10 !h-10 !p-0 !rounded-md",
        footer: "shadow-none bg-white rounded-b-xl px-8 pt-8 pb-8",
        body: "px-8 flex flex-col gap-y-8",
        header: "pb-8",
      }}
      closeButton={
        <Button disableRipple className='bg-white outline-none !min-w-11 !w-11 !h-11 rounded-md hover:bg-gray-50 transition-colors flex data-[hover=true]:!bg-gray-50 !opacity-100 items-center justify-center !p-0'>
          <XClose />
        </Button>
      }
      onClose={() => setOpenModals((prev: modalTypes) => ({ ...prev, linkSocialMedia: false }))}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className='flex flex-col gap-1'></ModalHeader>
            <ModalBody>
              <h1 className='text-2xl text-gray-900 font-bold'>Link a new account</h1>
              <div className='w-full flex flex-col gap-y-1'>
                <h1 className='text-gray-700 text-sm font-medium'>Select Platform</h1>
                <Select
                  name='account'
                  classNames={{
                    trigger: "!h-11 !px-4 !rounded-lg border border-gray-300 data-[focus=true]:border-gray-300 data-[hover=true]:border-gray-300 data-[invalid=true]:border-error data-[open=true]:!border-brand-700 data-[open=true]:!border-2  !shadow-main",
                    value: "!text-base !text-gray-500 group-data-[has-value=true]:!font-medium group-data-[has-value=true]:!text-black",
                    selectorIcon: "stroke-gray-500 size-5",
                  }}
                  startContent={<Facebook className='size-[20px]' />}
                  variant='bordered'
                  placeholder='Facebook'
                  className='w-full'
                >
                  <SelectItem classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white !outline-none data-[selected=true]:!text-primary_fixed", title: "text-base" }} key='Facebook'>{`Facebook`}</SelectItem>
                  <SelectItem classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white !outline-none data-[selected=true]:!text-primary_fixed", title: "text-base" }} key='Twitter'>{`Twitter`}</SelectItem>
                  <SelectItem classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white !outline-none data-[selected=true]:!text-primary_fixed", title: "text-base" }} key='Tiktok'>{`TikTok`}</SelectItem>
                  <SelectItem classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white !outline-none data-[selected=true]:!text-primary_fixed", title: "text-base" }} key='Snapchat'>{`Snapchat`}</SelectItem>
                  <SelectItem classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white !outline-none data-[selected=true]:!text-primary_fixed", title: "text-base" }} key='Instagram'>{`Instagram`}</SelectItem>
                </Select>
              </div>
              <p className='text-gray-600 font-bold text-base'>You must obey the following rules in order to successfully link your Facebook account to Trendit³.</p>
              <ul className='text-gray-600 text-base font-normal pl-4'>
                <li className='list-decimal'>Your account on Facebook must have at least 500 Active Followers. Note that Ghost or Bots followers are not allowed and your account on Trendit³ will be banned if you have ghost followers.</li>
                <li className='list-decimal'>You Account on Facebook must have been opened one year ago.</li>
                <li className='list-decimal'>You must have posted at least five times on your Facebookaccount within the last one year</li>
              </ul>
              <div className='w-full flex flex-col gap-y-1'>
                <h1 className='text-gray-700 text-sm font-medium'>Select Platform</h1>
                <Input
                  startContent={
                    <div className='pointer-events-none flex items-center'>
                      <span className='text-gray-500 font-normal text-base'>{"https://"}</span>
                    </div>
                  }
                  type='text'
                  variant='bordered'
                  classNames={{
                    inputWrapper: "!h-11 !px-4 !rounded-lg  border !transition-all data-[hover=true]:border-gray-300 group-data-[focus=true]:!border-brand-700 group-data-[invalid=true]:border-error group-data-[focus=true]:!border-2 !shadow-main",
                    input: "!text-base overflow-hidden capitalize !font-medium placeholder:!font-normal placeholder:!text-gray-500  !text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                  }}
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <div className='w-full flex relative'>
                <Button onPress={handleContinue} disableRipple className='h-11 gap-x-[6px] !outline-none shadow-main flex flex-none items-center px-[18px] py-3 !min-w-full border-none bg-primary_fixed data-[hover=true]:!bg-brand-700 !opacity-100 transition-colors rounded-lg'>
                  <span className='text-white  text-base font-semibold'>Continue</span>
                </Button>
              </div>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
