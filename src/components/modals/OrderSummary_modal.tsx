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
const numeral = require("numeral");
import OrderSummary from "../advertise/OrderSummary";

interface becomeMember_propTypes {
  setOpenModals: Dispatch<SetStateAction<modalTypes>>;
  openModals: modalTypes;
  formData: createAdFormTypes;
}
export default function OrderSummary_modal({ openModals, setOpenModals }: becomeMember_propTypes) {
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
        header: "pb-6",
        body: '!p-0 px-8'
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
              <OrderSummary active={false} />
            </ModalBody>
            <ModalFooter>
              <Button onPress={() => setOpenModals({ orderSummary: false, selectPaymentMethod: true })} disableRipple className='h-11 gap-x-[6px] !outline-none shadow-main flex flex-none items-center px-[18px] py-3 !min-w-auto border-none bg-primary_fixed data-[hover=true]:!bg-brand-700 !opacity-100 transition-colors rounded-lg '>
                <span className='text-white  text-base font-semibold'>{`Continue to pay ${getSymbolFromCurrency("NGN")} ${numeral(10000).format("0,0")}`}</span>
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
