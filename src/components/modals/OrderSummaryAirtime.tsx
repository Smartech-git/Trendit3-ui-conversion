"use client";

import React, { SetStateAction, Dispatch, useState, useRef, useEffect } from "react";
import { modalTypes } from "@/types";
import { Button } from "@nextui-org/button";
import { DotsHorizontal, User_Circle, XClose } from "@/appIcons";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";
import { RadioGroup, Radio } from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import getSymbolFromCurrency from "currency-symbol-map";
import { useGlobal } from "@/context/GlobalContext";
import { useDebouncedCallback } from "use-debounce";
const numeral = require("numeral");
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { airtimeFormSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { MTN } from "@/svgAssets";
import { motion } from "framer-motion";
import Image from "next/image";
import { getNetworkProviderIcon } from "@/lib/helpers";
import { paymentMethods } from "@/lib/constants";

interface topUp_propTypes {
  setOpenModals: Dispatch<SetStateAction<modalTypes>>;
  openModals: modalTypes;
  action?: () => void;
  orderSummary: any;
}

export default function OrderSummaryAirtime({ openModals, setOpenModals, action, orderSummary }: topUp_propTypes) {
  const [amount, setAmount] = useState<string>("");
  const { membershipApproved } = useGlobal();
  const [number, setNumber] = useState();

  const handleContinue = (data: any) => {
    setOpenModals((prev: modalTypes) => ({ ...prev, orderSummaryAirtime: false, withdrawal_OTP: true }));
  };

  return (
    <Modal
      scrollBehavior='inside'
      backdrop='opaque'
      size='xl'
      isOpen={openModals.orderSummaryAirtime}
      classNames={{
        backdrop: "!bg-gray-950/70",
        base: "rounded-xl",
        closeButton: "data-[hover=true]:!bg-gray-50 !opacity-100 !p-0 right-2 top-2 !outline-none size-fit bg-white !min-w-10 !h-10 !p-0 !rounded-md",
        footer: "shadow-none bg-white rounded-b-xl px-8 pt-8 pb-8",
        body: "px-8 flex flex-col gap-y-5",
        header: "pb-0 px-8",
      }}
      hideCloseButton
      closeButton={
        <Button disableRipple className='bg-white outline-none !min-w-11 !w-11 !h-11 rounded-md hover:bg-gray-50 transition-colors flex data-[hover=true]:!bg-gray-50 !opacity-100 items-center justify-center !p-0'>
          <XClose />
        </Button>
      }
      onClose={() => setOpenModals((prev: modalTypes) => ({ ...prev, orderSummaryAirtime: false }))}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className='flex justify-between items-center gap-4'>
              <h1 className='text-2xl text-gray-900 font-bold'>Order Summary</h1>
              {/* <Button onPress={() => setOpenModals((prev: modalTypes) => ({ ...prev, orderSummaryAirtime: false }))} disableRipple className='bg-white outline-none !min-w-11 !w-11 !h-11 rounded-md hover:bg-gray-50 transition-colors flex data-[hover=true]:!bg-gray-50 !opacity-100 items-center justify-center !p-0'>
                <XClose />
              </Button> */}
            </ModalHeader>
            <ModalBody>
              <div className='flex w-full pt-3 gap-y-3 items-center flex-col'>
                <div className='w-full flex flex-col gap-2 justify-center items-center'>
                  {getNetworkProviderIcon(orderSummary?.phone, 34)}
                  <span className='text-black text-base font-medium'>Airtime</span>

                  <h1 className='text-black text-[32px] font-bold'>{orderSummary?.phone}</h1>
                </div>
                <div className='border-t border-gray-200 pt-3 flex w-full flex-col gap-3'>
                  <div className='w-full flex items-center justify-between'>
                    <span className='text-sm font-medium text-gray-600 text-nowrap'>Bonus Earned</span>
                    <span className='text-sm font-medium text-gray-600 text-nowrap'>{`+${getSymbolFromCurrency("NGN")}${numeral("5").format("0,0.00")} cashback`}</span>
                  </div>
                  <div className='w-full flex items-center justify-between'>
                    <span className='text-base font-bold text-gray-600 text-nowrap'>Total</span>
                    <span className='text-base font-bold text-gray-600 text-nowrap'>{`${getSymbolFromCurrency("NGN")}${numeral("2000").format("0,0.00")}`}</span>
                  </div>
                </div>
                <hr className='w-full h-[1px] bg-gray-200' />
                <div className='flex w-full flex-col'>
                  <RadioGroup
                    classNames={{
                      wrapper: "!gap-y-6",
                    }}
                    value={"wallet"}
                  >
                    {paymentMethods
                      .filter((item) => item.method !== "crypto" && item.method !== "3rdParty")
                      .map((item: { label: string; desc: string; method: string }, index: number) => {
                        return (
                          <Radio
                            key={index}
                            classNames={{
                              label: "!text-gray-700 font-medium text-base",
                              wrapper: "!size-[24px] rounded-full !mt-1 !outline-none group-data-[hover-unselected=true]:!bg-gray-50 !border border-gray-300 group-data-[selected=true]:!border-brand-700 group-data-[selected=true]:!bg-brand-700 ",
                              base: "flex gap-x-3 -m-0 p-0 !items-start",
                              control: "!size-[12px] flex-none rounded-full !bg-white",
                              description: "!text-gray-600 !font-normal text-base",
                            }}
                            value={item.method}
                            description={
                              <>
                                {item.desc} {item.method === "wallet" && <span className='text-primary_fixed font-semibold'>{`${getSymbolFromCurrency("NGN")} ${numeral("5000").format("0,0.00")}`}</span>}
                              </>
                            }
                          >
                            {item.label}
                          </Radio>
                        );
                      })}
                  </RadioGroup>
                </div>
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
