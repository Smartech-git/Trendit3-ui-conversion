"use client";

import React, { SetStateAction, Dispatch, useState, useRef, useEffect } from "react";
import { modalTypes } from "@/types";
import { Button } from "@nextui-org/button";
import { DotsHorizontal, XClose } from "@/appIcons";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";
import { Input } from "@nextui-org/input";
import getSymbolFromCurrency from "currency-symbol-map";
import { useGlobal } from "@/context/GlobalContext";
const numeral = require("numeral");

interface withdrawalOTP_propTypes {
  setOpenModals: Dispatch<SetStateAction<modalTypes>>;
  openModals: modalTypes;
  action?: () => void;
}

export default function WiithdrawalOTP({ openModals, setOpenModals, action }: withdrawalOTP_propTypes) {
  const { setMembershipApproved, setToast } = useGlobal();
  const [withDrawAmount, setWithDrawAmount] = useState<string>("0.00");
  const inputRef = useRef<HTMLInputElement>(null);
  const spanRef = useRef<HTMLInputElement>(null);
  const [otp, setOtp] = useState(new Array(5).fill(""));
  const [countDown, setCountDown] = useState<number>(20);

  const handleContinue = () => {
    setOpenModals((prev: modalTypes) => ({ ...prev, withdrawal_OTP: false }));
    setToast({ open: true, state: "success", content: "Order submitted" });
  };

  useEffect(() => {
    if (spanRef.current && inputRef.current) {
      inputRef.current.style.width = `${spanRef.current.offsetWidth + 20}px`;
    }
  }, [withDrawAmount]);

  useEffect(() => {
    let id: any;
    if (openModals.withdrawal_OTP) {
      setCountDown(20);
      id = setInterval(() => {
        setCountDown((prev) => (prev <= 0 ? 0 : --prev));
      }, 1000);
    } else {
      clearInterval(id);
    }
    return () => {
      clearInterval(id);
    };
  }, [openModals.withdrawal_OTP]);

  const handleOTPInput = (element: any, index: number) => {
    if (isNaN(element.value)) return;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  return (
    <Modal
      scrollBehavior='inside'
      backdrop='opaque'
      size='xl'
      isOpen={openModals.withdrawal_OTP}
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
      onClose={() => setOpenModals((prev: modalTypes) => ({ ...prev, withdrawal_OTP: false }))}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className='flex flex-col gap-1'></ModalHeader>
            <ModalBody>
              <h1 className='text-2xl text-gray-900 font-bold'>Verify action</h1>
              <div className='flex w-full gap-y-8 items-center flex-col'>
                <h1 className='text-xs text-gray-500 font-normal'>
                  Enter the otp code that was sent to your phone number at <span className='font-semibold text-gray-600'>080738394992</span>
                </h1>
                <div className='flex items-center gap-x-3'>
                  {otp.map((data, index) => {
                    return (
                      <input
                        autoComplete='off'
                        type='text'
                        maxLength={1}
                        key={index}
                        value={data}
                        onChange={(e) => handleOTPInput(e.target, index)}
                        onFocus={(e) => e.target.select()}
                        className={`!border-gray-300 focus:!border-brand-700 focus:!border-2 !ring-0 bg-white outline w-11 outline-0 focus:outline-0 transition-all border flex text-center text-base h-11 shadow-main rounded-lg text-black font-medium  placeholder:font-normal  placeholder:text-gray-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
                      />
                    );
                  })}
                </div>
                <p className='text-gray-400 text-sm'>
                  {`Didn’t Receive a code?`} <span className={`text-gray-700 ${countDown === 0 && "!text-primary_fixed !opacity-100 hover:!text-brand-700 transition-colors"} cursor-pointer hover:opacity-70 transition-opacity underline underline-offset-2`}>{`Resend code ${countDown > 0 ? `in ${countDown}s` : ""}`} </span>
                </p>
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
