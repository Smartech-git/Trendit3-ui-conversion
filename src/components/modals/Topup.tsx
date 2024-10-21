"use client";

import React, { SetStateAction, Dispatch, useState, useRef, useEffect } from "react";
import { modalTypes } from "@/types";
import { Button } from "@nextui-org/button";
import { DotsHorizontal, XClose } from "@/appIcons";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";
import { RadioGroup, Radio } from "@nextui-org/react";
import { Input } from "@nextui-org/input";
import getSymbolFromCurrency from "currency-symbol-map";
import { useGlobal } from "@/context/GlobalContext";
import { useDebouncedCallback } from "use-debounce";
const numeral = require("numeral");
import { Dot } from "@/appIcons";
import { AccessBank } from "@/svgAssets";
import { paymentMethods } from "@/lib/constants";

interface topUp_propTypes {
  setOpenModals: Dispatch<SetStateAction<modalTypes>>;
  openModals: modalTypes;
  action?: () => void;
}

export default function Topup({ openModals, setOpenModals, action }: topUp_propTypes) {
  const [walletBal] = useState("10000.78");
  const [paymentMethod, setPaymentMethod] = useState<any>();
  const [topUpAmount, setTopUpAmount] = useState<string>("0.00");
  const inputRef = useRef<HTMLInputElement>(null);
  const spanRef = useRef<HTMLInputElement>(null);

  const handleContinue = () => {
    setOpenModals((prev: modalTypes) => ({ ...prev, topUp: false }));
  };

  useEffect(() => {
    if (spanRef.current && inputRef.current) {
      inputRef.current.style.width = `${spanRef.current.offsetWidth + 20}px`;
    }
  }, [topUpAmount]);

  const debounced = useDebouncedCallback((e) => {
    setTopUpAmount(numeral(topUpAmount).format("0,0.00"));
  }, 1000);

  return (
    <Modal
      scrollBehavior='inside'
      backdrop='opaque'
      size='xl'
      isOpen={openModals.topUp}
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
      onClose={() => setOpenModals((prev: modalTypes) => ({ ...prev, topUp: false }))}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className='flex flex-col gap-1'></ModalHeader>
            <ModalBody>
              <h1 className='text-2xl text-gray-900 font-bold'>Top Up</h1>
              <div className='flex w-full items-center flex-col'>
                <div className='py-8 flex flex-col items-center'>
                  <h1 className='text-[10px] text-gray-600 font-semibold'>AMOUNT</h1>
                  <div className='w-full overflow-hidden flex relative'>
                    <>
                      <Input
                        startContent={
                          <div className='pointer-events-none flex items-center'>
                            <span className='text-black font-bold text-[36px]'>{getSymbolFromCurrency("NGN")}</span>
                          </div>
                        }
                        ref={inputRef}
                        type='text'
                        placeholder={"0.00"}
                        variant='bordered'
                        value={topUpAmount}
                        onChange={(e: any) => {
                          if (/^[0-9.,]*$/.test(e.target.value)) {
                            setTopUpAmount(e.target.value);
                            debounced(e);
                          } else {
                            setTopUpAmount(topUpAmount);
                          }
                        }}
                        classNames={{
                          mainWrapper: "h-fit ml-4",
                          innerWrapper: "h-fit",
                          inputWrapper: "!h-fit !p-0 !w-fit !rounded-none border-none !transition-colors data-[hover=true]:border-gray-400 group-data-[focus=true]:!border-none group-data-[focus=true]:!border-2 !shadow-none",
                          input: "!text-[36px] overflow-scroll scrollbar-none placeholder:!text-black !font-bold !text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-[90px] sm:max-w-[450px] max-w-[60svw]",
                        }}
                      />
                      <div ref={spanRef} className='absolute min-w-[90px] text-[36px] invisible whitespace-pre' aria-hidden='true'>
                        {topUpAmount ? topUpAmount : "0.00"}
                      </div>
                    </>
                  </div>
                  <span className='text-xs font-normal'>Processing Fee: ₦ 50</span>
                  <div className='flex mt-2 items-center gap-x-1 bg-gray-50 rounded-lg px-2 py-1'>
                    <Dot />
                    <span className='text-xs text-gray-600 font-normal'>{`Balance: ${getSymbolFromCurrency("NGN")}${numeral(1900234).format("0,0.00")}`}</span>
                  </div>
                </div>
              </div>
              <h1 className='text-sm text-gray-700 font-medium'>Select payment method</h1>
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
                          wrapper: "!size-[24px] rounded-full !mt-1 !outline-none group-data-[hover-unselected=true]:!bg-gray-50 !border border-gray-300 group-data-[selected=true]:!border-brand-700 group-data-[selected=true]:!bg-brand-700 ",
                          base: "flex gap-x-3 -m-0 p-0 !items-start",
                          control: "!size-[12px] flex-none rounded-full !bg-white",
                          description: "!text-gray-600 !font-normal text-base",
                        }}
                        value={item.method}
                        description={
                          <>
                            {item.desc} {item.method === "wallet" && <span className='text-primary_fixed'>{`${getSymbolFromCurrency("NGN")} ${numeral(walletBal).format("0,0.00")}`}</span>}
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
