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

interface topUp_propTypes {
  setOpenModals: Dispatch<SetStateAction<modalTypes>>;
  openModals: modalTypes;
  action?: () => void;
  setOrderSummary: Dispatch<SetStateAction<any>>;
}

export default function Airtime({ openModals, setOpenModals, action, setOrderSummary }: topUp_propTypes) {
  const [amount, setAmount] = useState<string>("");
  const { membershipApproved } = useGlobal();
  const [number, setNumber] = useState();

  const { handleSubmit, register, formState, control, setValue, setError, clearErrors } = useForm<z.infer<typeof airtimeFormSchema>>({
    resolver: zodResolver(airtimeFormSchema),
  });

  const debounced = useDebouncedCallback((e) => {
    setAmount(numeral(amount).format("0,0.00"));
  }, 1000);

  const handleBuyAirtime = (data: any) => {
    setOrderSummary(data);
    setOpenModals((prev: modalTypes) => ({ ...prev, airtime: false, orderSummaryAirtime: true }));
  };

  return (
    <Modal
      scrollBehavior='inside'
      backdrop='opaque'
      size='xl'
      isOpen={openModals.airtime}
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
      onClose={() => setOpenModals((prev: modalTypes) => ({ ...prev, airtime: false }))}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className='flex justify-between items-center gap-4'>
              <h1 className='text-2xl text-gray-900 font-bold'>Airtime</h1>
              <Button onPress={() => setOpenModals((prev: modalTypes) => ({ ...prev, airtime: false }))} disableRipple className='bg-white outline-none !min-w-11 !w-11 !h-11 rounded-md hover:bg-gray-50 transition-colors flex data-[hover=true]:!bg-gray-50 !opacity-100 items-center justify-center !p-0'>
                <XClose />
              </Button>
            </ModalHeader>
            <ModalBody>
              <div className='flex w-full pt-4 gap-y-5 items-center flex-col'>
                <div className='w-full flex gap-1 flex-col'>
                  <h3 className='text-gray-700 font-medium text-sm'>
                    Phone number <span className='text-brand-700'>*</span>
                  </h3>
                  <Input
                    // value={formData.userName}
                    autoComplete='off'
                    placeholder={`+234`}
                    {...register("phone")}
                    variant='bordered'
                    isInvalid={formState.errors.phone ? true : false}
                    type='number'
                    errorMessage={formState.errors.phone?.message}
                    onChange={(e: any) => {
                      setValue("phone", e.target.value);
                      setNumber(e.target.value);
                      clearErrors("phone");
                    }}
                    classNames={{
                      inputWrapper: "!h-11 !px-4 !rounded-lg  border !transition-all data-[hover=true]:border-gray-300 group-data-[focus=true]:!border-brand-700 group-data-[invalid=true]:border-error group-data-[focus=true]:!border-2 !shadow-main",
                      input: "!text-base overflow-hidden !font-medium placeholder:!font-normal placeholder:!text-gray-500  !text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                    }}
                    endContent={<User_Circle />}
                    startContent={getNetworkProviderIcon(number || "")}
                  />
                </div>
                <div className='w-full flex gap-1 flex-col'>
                  <h3 className='text-gray-700 font-medium text-sm'>
                    Amount <span className='text-brand-700'>*</span>
                  </h3>
                  <Input
                    startContent={
                      <div className='pointer-events-none flex items-center'>
                        <span className='text-gray-600 font-normal text-base'>{getSymbolFromCurrency("NGN")}</span>
                      </div>
                    }
                    type='text'
                    placeholder={"Input amount"}
                    variant='bordered'
                    {...register("amount")}
                    value={amount}
                    isInvalid={formState.errors.amount ? true : false}
                    errorMessage={formState.errors.amount?.message}
                    onChange={(e: any) => {
                      clearErrors("amount");
                      if (/^[0-9.,]*$/.test(e.target.value)) {
                        setAmount(e.target.value);
                        debounced(e);
                      } else return;
                    }}
                    classNames={{
                      inputWrapper: "!h-11 !px-4 !rounded-lg border !border-gray-300 !transition-colors data-[hover=true]:border-gray-400 group-data-[focus=true]:!border-brand-700 group-data-[focus=true]:!border-2 !shadow-main",
                      input: "!text-base overflow-hidden placeholder:!text-grey placeholder:!font-normal !font-medium !text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                    }}
                  />
                </div>
              </div>
              <div className='w-full flex flex-col gap-5 py-8'>
                <h1 className='text-gray-700 font-bold text-sm'>Top UP</h1>
                <div className='w-full gap-4 grid sm:!grid-cols-4 [@media(min-width:350px)]:grid-cols-3 grid-cols-2'>
                  {new Array(8).fill("").map((_, idx: number) => {
                    return (
                      <div className='h-[88px] cursor-pointer w-full flex flex-col rounded-xl overflow-hidden'>
                        <div className='w-full flex-none h-3 bg-success items-center py-0.5 px-1 flex justify-center'>
                          <span className='text-[8px] font-bold text-surface-success '>NGN 100 Cashback</span>
                        </div>
                        <div className='w-full h-full bg-gray-700 px-2 flex-col flex items-center justify-center'>
                          <h1 className='text-[25px] text-white font-bold'>{`${getSymbolFromCurrency("NGN")}600`}</h1>
                          <p className='text-gray-200 font-normal text-xs'>{`Pay: ${getSymbolFromCurrency("NGN")}500`}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <div className='w-full flex relative'>
                <Button onClick={handleSubmit(handleBuyAirtime)} disableRipple className='h-11 gap-x-[6px] !outline-none shadow-main flex flex-none items-center px-[18px] py-3 !min-w-full border-none bg-primary_fixed data-[hover=true]:!bg-brand-700 !opacity-100 transition-colors rounded-lg'>
                  <span className='text-white  text-base font-semibold'>Buy Airtime</span>
                </Button>
              </div>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
