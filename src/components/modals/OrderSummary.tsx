"use client";

import React, { SetStateAction, Dispatch, useState } from "react";
import { modalTypes, createAdFormTypes } from "@/types";
import { Button } from "@nextui-org/button";
import { XClose } from "@/appIcons";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";
import { Input } from "@nextui-org/input";
import getSymbolFromCurrency from "currency-symbol-map";
import { useDebounce, useDebouncedCallback } from "use-debounce";
import { useGlobal } from "@/context/GlobalContext";
import GenericTask from "../GenericTask";
const numeral = require("numeral");

interface becomeMember_propTypes {
  setOpenModals: Dispatch<SetStateAction<modalTypes>>;
  openModals: modalTypes;
  formData: createAdFormTypes;
}
export default function OrderSummary({ openModals, setOpenModals }: becomeMember_propTypes) {
  const [membershipFee, setMembershipFee] = useState<string>("1000.00");
  const { membershipApproved } = useGlobal();

  const debounced = useDebouncedCallback((e) => {
    setMembershipFee(numeral(membershipFee).format("0,0.00"));
  }, 500);

  return (
    <Modal
      scrollBehavior='inside'
      backdrop='opaque'
      size='xl'
      isOpen={openModals.orderSummary}
      classNames={{
        backdrop: "!bg-gray-950/70",
        base: "rounded-xl",
        closeButton: "data-[hover=true]:!bg-gray-50 !opacity-100 !p-0 right-2 top-2 !outline-none size-fit bg-white !min-w-10 !h-10 !p-0 !rounded-md",
        footer: `shadow-none bg-whit rounded-b-xl px-8  pb-8 flex flex-col pt-3`,
        body: "px-8 !pt-0 gap-y-3",
        header: "pb-8",
      }}
      closeButton={
        <Button disableRipple className='bg-white outline-none !min-w-11 !w-11 !h-11 rounded-md hover:bg-gray-50 transition-colors flex data-[hover=true]:!bg-gray-50 !opacity-100 items-center justify-center !p-0'>
          <XClose />
        </Button>
      }
      onClose={() => setOpenModals((prev: modalTypes) => ({ ...prev, orderSummary: false }))}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className='flex flex-col gap-1'></ModalHeader>
            <ModalBody>
              <h1 className='text-lg text-gray-900 font-bold'>Order Summary</h1>
              <div className='w-full flex-col gap-y-1'>
                <div className='w-full flex flex-col py-3 gap-y-3'>
                  <h2 className='text-sm font-medium text-gray-700'>Order Type</h2>
                  <GenericTask />
                </div>
                <div className='w-full py-3 flex justify-between items-center'>
                  <h1 className='text-gray-700 font-medium w-fit text-sm'>Platform</h1>
                  <span className='text-gray-700 font-bold text-sm'>Twitter</span>
                </div>
                <div className='w-full py-3 flex justify-between items-center'>
                  <h1 className='text-gray-700 font-medium w-fit text-sm'>Location</h1>
                  <span className='text-gray-700 font-bold text-sm'>Nigeria</span>
                </div>
                <div className='w-full py-3 flex justify-between items-center'>
                  <h1 className='text-gray-700 font-medium w-fit text-sm'>State</h1>
                  <span className='text-gray-700 font-bold text-sm'>Lagos State</span>
                </div>
                <div className='w-full py-3 flex justify-between items-center'>
                  <h1 className='text-gray-700 font-medium w-fit text-sm'>No. of Twitter post you want</h1>
                  <span className='text-gray-700 font-bold text-sm'>50</span>
                </div>
                <div className='w-full py-3 flex justify-between items-center'>
                  <h1 className='text-gray-700 font-medium w-fit text-sm'>Gender</h1>
                  <span className='text-gray-700 font-bold text-sm'>Male</span>
                </div>
                <div className='w-full py-3 flex justify-between items-center'>
                  <h1 className='text-gray-700 font-medium w-fit text-sm'>Religion</h1>
                  <span className='text-gray-700 font-bold text-sm'>Christians only</span>
                </div>
                <div className='w-full py-3 gap-2 flex justify-between items-start'>
                  <h1 className='text-gray-700 font-medium w-fit text-sm'>Media</h1>
                  <div className='w-fit flex gap-x-2'>
                    <div className='bg-gray-50 border overflow-hidden relative size-10 border-gray-200 rounded'></div>
                    <div className='bg-gray-50 border overflow-hidden relative size-10 border-gray-200 rounded'></div>
                  </div>
                </div>
              </div>
              <div className='flex flex-col w-full items-center gap-y-3'>
                <div className='w-full flex flex-col gap-y-4 border-y py-3 border-gray-200'>
                  <div className='w-full flex justify-between items-center'>
                    <h1 className='text-gray-600 font-medium w-fit text-sm'>Sub Total</h1>
                    <span className='text-gray-600 font-medium text-sm'>{`${getSymbolFromCurrency("NGN")} ${numeral(500).format("0,0.00")}`}</span>
                  </div>
                  <div className='w-full flex justify-between items-center'>
                    <h1 className='text-gray-600 font-medium w-fit text-sm'>{`Tax (10%)`}</h1>
                    <span className='text-gray-600 font-medium text-sm'>{`${getSymbolFromCurrency("NGN")} ${numeral("56").format("0,0.00")}`}</span>
                  </div>
                  <div className='w-full flex justify-between items-center'>
                    <h1 className='text-gray-600 font-medium w-fit text-sm'>Shipping</h1>
                    <span className='text-gray-600 font-medium text-sm'>{`${getSymbolFromCurrency("NGN")} ${numeral(0).format("0,0.00")}`}</span>
                  </div>
                </div>
                <div className='w-full flex justify-between items-center'>
                  <h1 className='text-gray-600 font-bold w-fit text-base'>Total</h1>
                  <span className='text-gray-800 font-bold text-sm'>{`${getSymbolFromCurrency("NGN")} ${numeral(800).format("0,0.00")}`}</span>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button onPress={() => setOpenModals({orderSummary: false, selectPaymentMethod: true})} disableRipple className='h-11 gap-x-[6px] !outline-none shadow-main flex flex-none items-center px-[18px] py-3 !min-w-auto border-none bg-primary_fixed data-[hover=true]:!bg-brand-700 !opacity-100 transition-colors rounded-lg '>
                <span className='text-white  text-base font-semibold'>{`Continue to pay ${getSymbolFromCurrency("NGN")} ${numeral(10000).format("0,0")}`}</span>
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
