"use client";

import React, { SetStateAction, Dispatch, useState } from "react";
import { modalTypes } from "@/types";
import { Button } from "@nextui-org/button";
import { XClose } from "@/appIcons";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";
import { RadioGroup, Radio } from "@nextui-org/react";
import getSymbolFromCurrency from "currency-symbol-map";
import { useGlobal } from "@/context/GlobalContext";
const numeral = require("numeral");
import { paymentMethods } from "@/lib/constants";


interface selectPaymentMethod_propTypes {
  setOpenModals: Dispatch<SetStateAction<modalTypes>>;
  openModals: modalTypes;
  action?: () => void;
}

export default function SelectPaymentMethod({ openModals, setOpenModals, action }: selectPaymentMethod_propTypes) {
  const [walletBal] = useState("10000.78");
  const [paymentMethod, setPaymentMethod] = useState<any>();
  const { setMembershipApproved, setToast } = useGlobal();

  const handleContinue = () => {
    setOpenModals((prev: modalTypes) => ({ ...prev, selectPaymentMethod: false }));
    setMembershipApproved("approved");
    setToast({ open: true, state: "success", content: "Success!" });
  };
  return (
    <Modal
      scrollBehavior='inside'
      backdrop='opaque'
      size='xl'
      isOpen={openModals.selectPaymentMethod}
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
      onClose={() => setOpenModals((prev: modalTypes) => ({ ...prev, selectPaymentMethod: false }))}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className='flex flex-col gap-1'></ModalHeader>
            <ModalBody>
              <h1 className='text-2xl text-gray-900 font-bold'>Select payment method</h1>
              <div className='flex w-full flex-col'>
                <RadioGroup
                  classNames={{
                    wrapper: "!gap-y-6",
                  }}
                  value={paymentMethod}
                  onValueChange={(value) => setPaymentMethod(value)}
                >
                  {paymentMethods.map((item: { label: string; desc: string; method: string }, index: number) => {
                    return (
                      <Radio
                        key={index}
                        classNames={{
                          label: "!text-gray-700 font-medium text-base",
                          wrapper: "!size-[24px] rounded-full !mt-1 !outline-none group-data-[hover-unselected=true]:!bg-gray-50 !border border-gray-300 group-data-[selected=true]:!border-brand-700 group-data-[selected=true]:!bg-brand-700",
                          base: "flex gap-x-3 -m-0 p-0 !items-start",
                          control: "!size-[12px] flex-none rounded-full !bg-white",
                          description: "!text-gray-600 !font-normal text-base",
                        }}
                        value={item.method}
                        description={
                          <>
                            {item.desc} {item.method === "wallet" && <span className='text-primary_fixed font-semibold'>{`${getSymbolFromCurrency("NGN")} ${numeral(walletBal).format("0,0.00")}`}</span>}
                          </>
                        }
                      >
                        {item.label}
                      </Radio>
                    );
                  })}
                </RadioGroup>
              </div>
            </ModalBody>
            <ModalFooter>
              <div className='w-full flex relative'>
                <Button onPress={action} disableRipple className='h-11 gap-x-[6px] !outline-none shadow-main flex flex-none items-center px-[18px] py-3 !min-w-full border-none bg-primary_fixed data-[hover=true]:!bg-brand-700 !opacity-100 transition-colors rounded-lg'>
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
