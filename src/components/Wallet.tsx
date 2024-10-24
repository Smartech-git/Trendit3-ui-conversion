"use client";
import React, { useState } from "react";
import { DotsHorizontal, TrendUp_02, Add } from "@/appIcons";
import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import { modalTypes } from "@/types";
import Wiithdraw from "./modals/Withdraw";
import WiithdrawalOTP from "./modals/WithdrawalOTP";
import Topup from "./modals/Topup";
import { useGlobal } from "@/context/GlobalContext";
import { TextLoaders } from "./loadingScreens/skeletonLoaders";
import getSymbolFromCurrency from "currency-symbol-map";
const numeral = require("numeral");

export default function Wallet() {
  const [openModals, setOpenModals] = useState<modalTypes>({ withdraw: false, withdrawal_OTP: false, topUp: false });
  const { dashBoardStats } = useGlobal();

  return (
    <>
      <div className='w-full'>
        <div className='flex w-full items-center sm:justify-normal justify-between gap-x-12'>
          <div className='flex flex-col gap-y-3'>
            <h1 className='font-medium text-sm leading-none text-illustration'>Wallet bal:</h1>
            {dashBoardStats ? (
              <p className='font-normal text-3xl leading-none text-black'>
                {getSymbolFromCurrency("NGN")}
                {numeral(dashBoardStats.wallet_balance.split(".")[0]).format("0,0")}
                <span className='text-gray'>{`.${dashBoardStats.wallet_balance.split(".")[1]}`}</span>
              </p>
            ) : (
              <TextLoaders className='h-9 w-28' />
            )}
            <span className='text-gray-500 leading-none text-xs font-normal'>Available for payout</span>
          </div>

          <Dropdown backdrop='opaque' radius='md' placement='bottom-start' classNames={{ content: "!border !border-white xs:!w-[370px] xxs:w-[340px] !w-[300px] !min-w-[300px] !p-6", backdrop: "!bg-gray-950/10" }}>
            <DropdownTrigger>
              <Button disableRipple className='bg-white outline-none !min-w-9 !w-9 !h-9 rounded-full border-[1.25px] border-outline hover:bg-gray-50 transition-colors flex data-[hover=true]:!bg-gray-50 !opacity-100 items-center justify-center !p-0'>
                <DotsHorizontal />
              </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label='Dynamic Actions' classNames={{ base: "!p-0" }}>
              <DropdownItem onPress={() => setOpenModals((prev: modalTypes) => ({ ...prev, withdraw: true }))} key='withdraw' className='data-[hover=true]:!bg-gray-50 !transition-none'>
                <div className='flex flex-row items-start gap-x-3'>
                  <div className='size-6 bg-pink mt-1 flex flex-none items-center justify-center'>
                    <TrendUp_02 />
                  </div>
                  <div className='w-full flex flex-col'>
                    <h1 className='text-black text-base font-medium'>Withdraw Funds</h1>
                    <p className='text-xs text-gray-600 font-normal'>Send to your default bank account</p>
                  </div>
                </div>
              </DropdownItem>
              <DropdownItem onPress={() => setOpenModals((prev: modalTypes) => ({ ...prev, topUp: true }))} key='topup' className='data-[hover=true]:!bg-gray-50 !transition-none'>
                <div className='flex flex-row items-start gap-x-3'>
                  <div className='size-6 bg-pink mt-1 flex flex-none items-center justify-center'>
                    <Add />
                  </div>
                  <div className='w-full flex flex-col'>
                    <h1 className='text-black text-base font-medium'>Top Up Balance</h1>
                    <p className='text-xs text-gray-600 font-normal'>Send to your default bank account</p>
                  </div>
                </div>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>

      {
        //   Modals...
        <>
          <Wiithdraw openModals={openModals} setOpenModals={setOpenModals} />
          <WiithdrawalOTP openModals={openModals} setOpenModals={setOpenModals} />
          <Topup openModals={openModals} setOpenModals={setOpenModals} />
        </>
      }
    </>
  );
}
