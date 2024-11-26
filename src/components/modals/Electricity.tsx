"use client";

import React, { SetStateAction, Dispatch, useState, useRef, useEffect } from "react";
import { modalTypes } from "@/types";
import { Button } from "@nextui-org/button";
import { DotsHorizontal, User_Circle, XClose } from "@/appIcons";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";
import { RadioGroup, Radio, Select, SelectItem } from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import getSymbolFromCurrency from "currency-symbol-map";
import { useGlobal } from "@/context/GlobalContext";
import { useDebouncedCallback } from "use-debounce";
const numeral = require("numeral");
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { airtimeFormSchema, electricityFormSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { getNetworkProviderIcon } from "@/lib/helpers";

interface topUp_propTypes {
  setOpenModals: Dispatch<SetStateAction<modalTypes>>;
  openModals: modalTypes;
  action?: () => void;
  setOrderSummary: Dispatch<SetStateAction<any>>;
}

export default function Electricity({ openModals, setOpenModals, action, setOrderSummary }: topUp_propTypes) {
  const [amount, setAmount] = useState<string>("");
  const { membershipApproved } = useGlobal();
  const [number, setNumber] = useState();

  const { handleSubmit, register, formState, control, setValue, setError, clearErrors } = useForm<z.infer<typeof electricityFormSchema>>({
    resolver: zodResolver(electricityFormSchema),
  });

  const debounced = useDebouncedCallback((e) => {
    setAmount(numeral(amount).format("0,0.00"));
  }, 1000);

  const handlePayTarrif = (data: any) => {
    setOrderSummary(data);
    setOpenModals((prev: modalTypes) => ({ ...prev, electricity: false, withdrawal_OTP: true }));
  };

  return (
    <Modal
      scrollBehavior='inside'
      backdrop='opaque'
      size='xl'
      isOpen={openModals.electricity}
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
              <h1 className='text-2xl text-gray-900 font-bold'>Electricity</h1>
              <Button onPress={() => setOpenModals((prev: modalTypes) => ({ ...prev, electricity: false }))} disableRipple className='bg-white outline-none !min-w-11 !w-11 !h-11 rounded-md hover:bg-gray-50 transition-colors flex data-[hover=true]:!bg-gray-50 !opacity-100 items-center justify-center !p-0'>
                <XClose />
              </Button>
            </ModalHeader>
            <ModalBody>
              <div className='flex w-full pt-4 gap-y-5 items-center flex-col'>
                <div className='w-full flex gap-1 flex-col'>
                  <h3 className='text-gray-700 font-medium text-sm'>
                    Distribution Company <span className='text-brand-700'>*</span>
                  </h3>
                  <Select
                    // onChange={(e) => handleOnChange(e)}
                    classNames={{
                      trigger: "!h-11 !px-4 !rounded-lg border border-gray-300 data-[focus=true]:border-gray-300 data-[hover=true]:border-gray-300 data-[invalid=true]:border-error data-[open=true]:!border-brand-700 data-[open=true]:!border-2  !shadow-main",
                      value: "!text-base !text-gray-500 group-data-[has-value=true]:!font-medium group-data-[has-value=true]:!text-black",
                      selectorIcon: "stroke-gray-500 size-5",
                      popoverContent: "sm:w-full w-[90svw]",
                    }}
                    onSelectionChange={(value: any) => {
                      setValue("distributionCompany", value.key);
                    }}
                    variant='bordered'
                    placeholder='Select'
                    className='w-full'
                    renderValue={(items: any) => {
                      return <span>{items[0].key}</span>;
                    }}
                    {...register("distributionCompany")}
                    isInvalid={formState.errors.distributionCompany ? true : false}
                    errorMessage={formState.errors.distributionCompany?.message}
                  >
                    <SelectItem classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white flex gap-4 items-center !outline-none data-[selected=true]:!text-primary_fixed", title: "text-base" }} key='Ikeja Electricity Distibution Company (IKEDC)'>
                      <div className='flex gap-4 items-start'>
                        <div className='w-[40px] h-[20px] mt-1 flex-none bg-gray-200'></div>
                        <span className='text-wrap'>{`Ikeja Electricity Distibution Company (IKEDC)`}</span>
                      </div>
                    </SelectItem>
                    <SelectItem classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white flex gap-4 items-center !outline-none data-[selected=true]:!text-primary_fixed", title: "text-base" }} key='Ibadan Electricity Distribution Company (IBEDC)'>
                      <div className='flex gap-4 items-start'>
                        <div className='w-[40px] h-[20px] mt-1 flex-none bg-gray-200'></div>
                        <span className='text-wrap'>{`Ibadan Electricity Distribution Company (IBEDC)`}</span>
                      </div>
                    </SelectItem>
                  </Select>
                </div>
                <div className='w-full flex gap-1 flex-col'>
                  <h3 className='text-gray-700 font-medium text-sm'>
                    Email Address <span className='text-brand-700'>*</span>
                  </h3>
                  <Input
                    // value={formData.userName}
                    autoComplete='off'
                    placeholder={`@email.com`}
                    {...register("email")}
                    variant='bordered'
                    isInvalid={formState.errors.email ? true : false}
                    type='text'
                    errorMessage={formState.errors.email?.message}
                    onChange={(e: any) => {
                      setValue("email", e.target.value);
                      clearErrors("email");
                    }}
                    classNames={{
                      inputWrapper: "!h-11 !px-4 !rounded-lg  border !transition-all data-[hover=true]:border-gray-300 group-data-[focus=true]:!border-brand-700 group-data-[invalid=true]:border-error group-data-[focus=true]:!border-2 !shadow-main",
                      input: "!text-base overflow-hidden !font-medium placeholder:!font-normal placeholder:!text-gray-500  !text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                    }}
                  />
                </div>
                <div className='w-full flex gap-1 flex-col'>
                  <h3 className='text-gray-700 font-medium text-sm'>
                    Meter Number <span className='text-brand-700'>*</span>
                  </h3>
                  <Input
                    // value={formData.userName}
                    autoComplete='off'
                    placeholder={`Type here`}
                    {...register("meterNumber")}
                    variant='bordered'
                    isInvalid={formState.errors.meterNumber ? true : false}
                    type='number'
                    errorMessage={formState.errors.meterNumber?.message}
                    onChange={(e: any) => {
                      setValue("meterNumber", e.target.value);
                      clearErrors("meterNumber");
                    }}
                    classNames={{
                      inputWrapper: "!h-11 !px-4 !rounded-lg  border !transition-all data-[hover=true]:border-gray-300 group-data-[focus=true]:!border-brand-700 group-data-[invalid=true]:border-error group-data-[focus=true]:!border-2 !shadow-main",
                      input: "!text-base overflow-hidden !font-medium placeholder:!font-normal placeholder:!text-gray-500  !text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                    }}
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
                <div className='w-full flex gap-1 flex-col'>
                  <h3 className='text-gray-700 font-medium text-sm'>
                    Account Type <span className='text-brand-700'>*</span>
                  </h3>
                  <Select
                    // onChange={(e) => handleOnChange(e)}
                    classNames={{
                      trigger: "!h-11 !px-4 !rounded-lg border border-gray-300 data-[focus=true]:border-gray-300 data-[hover=true]:border-gray-300 data-[invalid=true]:border-error data-[open=true]:!border-brand-700 data-[open=true]:!border-2  !shadow-main",
                      value: "!text-base !text-gray-500 group-data-[has-value=true]:!font-medium group-data-[has-value=true]:!text-black",
                      selectorIcon: "stroke-gray-500 size-5",
                      popoverContent: "sm:w-full w-[90svw]",
                    }}
                    onSelectionChange={(value: any) => {
                      setValue("accountType", value.key);
                    }}
                    variant='bordered'
                    placeholder='Select'
                    className='w-full'
                    renderValue={(items: any) => {
                      return <span>{items[0].key}</span>;
                    }}
                    {...register("accountType")}
                    isInvalid={formState.errors.accountType ? true : false}
                    errorMessage={formState.errors.accountType?.message}
                  >
                    <SelectItem classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white flex gap-4 items-center !outline-none data-[selected=true]:!text-primary_fixed", title: "text-base" }} key='Prepaid'>
                      <div className='flex gap-4 items-start'>
                        <span className='text-wrap'>{`Prepaid`}</span>
                      </div>
                    </SelectItem>
                    <SelectItem classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white flex gap-4 items-center !outline-none data-[selected=true]:!text-primary_fixed", title: "text-base" }} key='Postpaid'>
                      <div className='flex gap-4 items-start'>
                        <span className='text-wrap'>{`Postpaid`}</span>
                      </div>
                    </SelectItem>
                  </Select>
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <div className='w-full flex relative'>
                <Button onClick={handleSubmit(handlePayTarrif)} disableRipple className='h-11 gap-x-[6px] !outline-none shadow-main flex flex-none items-center px-[18px] py-3 !min-w-full border-none bg-primary_fixed data-[hover=true]:!bg-brand-700 !opacity-100 transition-colors rounded-lg'>
                  <span className='text-white  text-base font-semibold'>Pay</span>
                </Button>
              </div>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
