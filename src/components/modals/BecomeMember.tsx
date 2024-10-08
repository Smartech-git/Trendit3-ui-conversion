"use client";

import React, { SetStateAction, Dispatch, useState } from "react";
import { modalTypes } from "@/types";
import { Button } from "@nextui-org/button";
import { XClose } from "@/appIcons";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@nextui-org/modal";
import { Input } from "@nextui-org/input";
import getSymbolFromCurrency from "currency-symbol-map";
import { useDebounce, useDebouncedCallback } from "use-debounce";
import { useGlobal } from "@/context/GlobalContext";
const numeral = require("numeral");

interface becomeMember_propTypes {
  setOpenModals: Dispatch<SetStateAction<modalTypes>>;
  openModals: modalTypes;
}
export default function BecomeMember({ openModals, setOpenModals }: becomeMember_propTypes) {
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
      isOpen={openModals.becomeMember}
      classNames={{
        backdrop: "!bg-gray-950/70",
        base: "rounded-xl",
        closeButton: "data-[hover=true]:!bg-gray-50 !opacity-100 !p-0 right-2 top-2 !outline-none size-fit bg-white !min-w-10 !h-10 !p-0 !rounded-md",
        footer: ` ${membershipApproved === "false" ? "bg-gray-50 shadow-main-lg-reversed" : "shadow-none bg-white"} rounded-b-xl px-8 !pt-0 pb-6 flex flex-col gap-y-3`,
        body: "pb-4 px-8 !pt-0",
        header: "pb-9",
      }}
      closeButton={
        <Button disableRipple className='bg-white outline-none !min-w-11 !w-11 !h-11 rounded-md hover:bg-gray-50 transition-colors flex data-[hover=true]:!bg-gray-50 !opacity-100 items-center justify-center !p-0'>
          <XClose />
        </Button>
      }
      onClose={() => setOpenModals((prev: modalTypes) => ({ ...prev, becomeMember: false }))}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className='flex flex-col gap-1'></ModalHeader>
            <ModalBody>
              <h1 className='text-lg text-gray-900 font-bold'>Turn your social media accounts into a daily source of income</h1>
              <p className='text-gray-600 font-medium text-xs leading-5'>Do you know you can earn daily income by performing social media task such as likes, follows, comments, subscribe, share, retweet and others. that is one of the so many benefit of becoming a member of Trendit</p>
              <p className='text-gray-600 font-medium text-xs leading-5'>When you activate your account with a one-time membership fee of N1000, you get an access to enjoy the benefits listed below:</p>
              <h3 className='text-gray-600 text-xs font-bold ml-2'>Earn on Your Terms:</h3>
              <ul className='text-gray-600 text-xs pl-8'>
                <li className='list-disc'>Short & Simple Tasks: Unlike time-consuming gigs, our tasks are quick and easy to complete – perfect for fitting into your busy schedule. Like posts, follow accounts, share content – it's that simple!</li>
                <li className='list-disc'> Earn real money for your completed tasks. Redeem your earnings through convenient payment methods.</li>
              </ul>
              <h3 className='text-gray-600 text-xs font-bold ml-2'>Boost Your Social Media Presence:</h3>
              <ul className='text-gray-600 text-xs pl-8'>
                <li className='list-disc'>Expand your social circle and explore engaging content by following recommended accounts.</li>
                <li className='list-disc'>Increase Brand Awareness: By completing tasks like liking posts, you can subtly promote your own social media profiles or favorite brands.</li>
                <li className='list-disc'>Stay Current with Trends: Engaging with the latest viral content keeps you in the loop and helps you build a more relevant online presence.</li>
              </ul>
              <h3 className='text-gray-600 text-xs font-bold ml-2'>More than Just Earnings:</h3>
              <ul className='text-gray-600 text-xs pl-8'>
                <li className='list-disc'>Interactive Community: Connect with other app users, share experiences, and learn from each other.</li>
                <li className='list-disc'>Safe & Secure Environment: We prioritize user safety and security. All tasks comply with social media platform guidelines.</li>
                <li className='list-disc'>Fun & Rewarding: Make money while enjoying the social media experience – it's a win-win!</li>
              </ul>
            </ModalBody>
            <ModalFooter>
              {membershipApproved === "false" && (
                <>
                  <div className='w-full mt-6 items-center flex gap-x-2'>
                    <hr className='h-[1px] w-full bg-gray-200 rounded-full' />
                    <span className='text-sm text-nowrap text-gray-600 font-medium'>Membership Fee</span>
                    <hr className='h-[1px] w-full bg-gray-200 rounded-full' />
                  </div>
                  <div className='w-full flex relative'>
                    <Input
                      startContent={
                        <div className='pointer-events-none flex items-center'>
                          <span className='text-black font-bold text-base'>{getSymbolFromCurrency("NGN")}</span>
                        </div>
                      }
                      type='text'
                      placeholder={"0.00"}
                      variant='bordered'
                      value={membershipFee}
                      onChange={(e: any) => {
                        if (/^[0-9.,]*$/.test(e.target.value)) {
                          setMembershipFee(e.target.value);
                          debounced(e);
                        } else return;
                      }}
                      classNames={{
                        inputWrapper: "!h-11 !px-4 !rounded-l-lg !rounded-r-none border !border-gray-300 !transition-colors data-[hover=true]:border-gray-400 group-data-[focus=true]:!border-brand-700 group-data-[focus=true]:!border-2 !shadow-main",
                        input: "!text-base overflow-hidden placeholder:!text-gray-500 !font-bold !text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                      }}
                    />
                    <Button onPress={() => setOpenModals((prev: modalTypes) => ({ becomeMember: false, selectPaymentMethod: true }))} disableRipple className='h-11 gap-x-[6px] !outline-none shadow-main flex flex-none items-center px-[18px] py-3 !min-w-auto border-none bg-primary_fixed data-[hover=true]:!bg-brand-700 !opacity-100 transition-colors rounded-r-lg rounded-l-none'>
                      <span className='text-white  text-base font-semibold'>Continue</span>
                    </Button>
                  </div>
                </>
              )}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
