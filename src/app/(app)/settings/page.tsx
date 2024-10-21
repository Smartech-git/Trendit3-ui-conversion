"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { MessageChatCircle, MessageSmileCircle, Phone, User_01 } from "@/appIcons";
import { Select, SelectItem } from "@nextui-org/select";
import { DateInput } from "@nextui-org/react";
import { useGlobal } from "@/context/GlobalContext";

export default function Profile() {
  const { appUser } = useGlobal();
  return (
    <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }} className='w-full h-full flex flex-col gap-y-3 rounded-xl bg-white'>
      <h1 className='text-gray-900 text-lg font-semibold'>Profile details</h1>
      <div className='w-full py-8'>
        <label htmlFor='image' className='flex cursor-pointer items-center gap-x-3'>
          <div className=' flex items-center justify-center size-12 overflow-hidden relative rounded-full bg-gray-100 border border-gray-200'>
            <User_01 className='size-7' />
          </div>
          <span className='text-primary_fixed font-semibold transition-colors hover:text-brand-700  text-base'>Upload photo</span>
        </label>
        <input type='file' id='image' name='profilePicture' accept='image/png, image/jpeg, image/jpg' className='hidden' />
      </div>
      <div className='flex w-full gap-x-4'>
        <div className='w-full flex flex-col'>
          <Input
            autoComplete='off'
            placeholder={`First Name`}
            name='firstName'
            variant='bordered'
            type='text'
            classNames={{
              inputWrapper: "!h-11 !px-4 !rounded-lg  border !transition-all data-[hover=true]:border-gray-300 group-data-[focus=true]:!border-brand-700 group-data-[invalid=true]:border-error group-data-[focus=true]:!border-2 !shadow-main",
              input: "!text-base overflow-hidden capitalize !font-medium placeholder:!font-normal placeholder:!text-gray-500  !text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
            }}
          />
        </div>
        <div className='w-full flex flex-col'>
          <Input
            autoComplete='off'
            placeholder={`Last Name`}
            name='lastName'
            variant='bordered'
            type='text'
            classNames={{
              inputWrapper: "!h-11 !px-4 !rounded-lg  border !transition-all data-[hover=true]:border-gray-300 group-data-[focus=true]:!border-brand-700 group-data-[invalid=true]:border-error group-data-[focus=true]:!border-2 !shadow-main",
              input: "!text-base overflow-hidden capitalize !font-medium placeholder:!font-normal placeholder:!text-gray-500  !text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
            }}
          />
        </div>
      </div>
      <div className='w-full flex flex-col'>
        <Input
          autoComplete='off'
          placeholder={`Email`}
          name='email'
          variant='bordered'
          type='text'
          classNames={{
            inputWrapper: "!h-11 !px-4 !rounded-lg  border !transition-all data-[hover=true]:border-gray-300 group-data-[focus=true]:!border-brand-700 group-data-[invalid=true]:border-error group-data-[focus=true]:!border-2 !shadow-main",
            input: "!text-base overflow-hidden capitalize !font-medium placeholder:!font-normal placeholder:!text-gray-500  !text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
          }}
        />
      </div>
      <div className='w-full flex flex-col'>
        <Input
          autoComplete='off'
          placeholder={`Username`}
          name='userName'
          variant='bordered'
          type='text'
          classNames={{
            inputWrapper: "!h-11 !px-4 !rounded-lg  border !transition-all data-[hover=true]:border-gray-300 group-data-[focus=true]:!border-brand-700 group-data-[invalid=true]:border-error group-data-[focus=true]:!border-2 !shadow-main",
            input: "!text-base overflow-hidden capitalize !font-medium placeholder:!font-normal placeholder:!text-gray-500  !text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
          }}
        />
      </div>
      <div className='w-full flex flex-col'>
        <Input
          autoComplete='off'
          placeholder={`Phone Number`}
          name='phoneNumber'
          variant='bordered'
          type='number'
          classNames={{
            inputWrapper: "!h-11 !px-4 !rounded-lg  border !transition-all data-[hover=true]:border-gray-300 group-data-[focus=true]:!border-brand-700 group-data-[invalid=true]:border-error group-data-[focus=true]:!border-2 !shadow-main",
            input: "!text-base overflow-hidden capitalize !font-medium placeholder:!font-normal placeholder:!text-gray-500  !text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
          }}
        />
      </div>
      <h1 className='text-gray-900 text-lg mt-3 font-semibold'>Profile details</h1>
      <div className='w-full flex relative flex-col'>
        <Select
          name='gender'
          classNames={{
            trigger: "!h-11 !px-4 !rounded-lg border border-gray-300 data-[focus=true]:border-gray-300 data-[hover=true]:border-gray-300 data-[invalid=true]:border-error data-[open=true]:!border-brand-700 data-[open=true]:!border-2  !shadow-main",
            value: "!text-base !text-gray-500 group-data-[has-value=true]:!font-medium group-data-[has-value=true]:!text-black",
            selectorIcon: "stroke-gray-500 size-5",
          }}
          variant='bordered'
          placeholder='Gender'
          className='w-full'
        >
          <SelectItem classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white !outline-none data-[selected=true]:!text-primary_fixed", title: "text-base" }} key='Male'>{`Male`}</SelectItem>
          <SelectItem classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white !outline-none data-[selected=true]:!text-primary_fixed", title: "text-base" }} key='Female'>{`Female`}</SelectItem>
        </Select>
      </div>
      <div className='w-full flex relative'>
        <DateInput
          // onChange={(value) => {
          //   if (value) {
          //     handleOnChange({ target: { name: "dob" } }, value);
          //     validateDob(value);
          //   }
          // }}
          name='dob'
          variant='bordered'
          startContent={
            <div className='flex items-center border-r border-gray-300 px-4 text-blue-gray-500 h-11'>
              <span className='text-gray-500 text-nowrap text-base'>Date of Birth</span>
            </div>
          }
          classNames={{
            inputWrapper: "!h-11 !px-4 !pl-0 !rounded-lg border border-gray-300 hover:border-gray-300 transition-all data-[invalid=true]:border-error focus-within:!border-primary_fixed focus-within:!border-2 !shadow-main",
            segment: "text-base data-[editable=true]:!text-black !text-gray-500  uppercase data-[placeholder=true]:!font-normal !font-medium data-[placeholder=true]:!text-gray-500 focus:!bg-gray-100",
            input: "text-base justify-end",
          }}
        />
      </div>
      <div className='w-full flex relative flex-col'>
        <Select
          name='country'
          classNames={{
            trigger: "!h-11 !px-4 !rounded-lg border border-gray-300 data-[focus=true]:border-gray-300 data-[hover=true]:border-gray-300 data-[invalid=true]:border-error data-[open=true]:!border-brand-700 data-[open=true]:!border-2  !shadow-main",
            value: "!text-base !text-gray-500 group-data-[has-value=true]:!font-medium group-data-[has-value=true]:!text-black",
            selectorIcon: "stroke-gray-500 size-5",
          }}
          variant='bordered'
          placeholder='Country'
          className='w-full'
        >
          <SelectItem classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white !outline-none data-[selected=true]:!text-primary_fixed", title: "text-base" }} key='Nigeria'>{`Nigeria`}</SelectItem>
          <SelectItem classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white !outline-none data-[selected=true]:!text-primary_fixed", title: "text-base" }} key='Niger'>{`Niger`}</SelectItem>
        </Select>
      </div>
      <div className='w-full flex gap-x-4'>
        <div className='w-full flex relative flex-col'>
          <Select
            name='state'
            classNames={{
              trigger: "!h-11 !px-4 !rounded-lg border border-gray-300 data-[focus=true]:border-gray-300 data-[hover=true]:border-gray-300 data-[invalid=true]:border-error data-[open=true]:!border-brand-700 data-[open=true]:!border-2  !shadow-main",
              value: "!text-base !text-gray-500 group-data-[has-value=true]:!font-medium group-data-[has-value=true]:!text-black",
              selectorIcon: "stroke-gray-500 size-5",
            }}
            variant='bordered'
            placeholder='State'
            className='w-full'
          >
            <SelectItem classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white !outline-none data-[selected=true]:!text-primary_fixed", title: "text-base" }} key='Lagos'>{`Lagos`}</SelectItem>
            <SelectItem classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white !outline-none data-[selected=true]:!text-primary_fixed", title: "text-base" }} key='Imo'>{`Imo`}</SelectItem>
          </Select>
        </div>
        <div className='w-full flex relative flex-col'>
          <Select
            name='LGA'
            classNames={{
              trigger: "!h-11 !px-4 !rounded-lg border border-gray-300 data-[focus=true]:border-gray-300 data-[hover=true]:border-gray-300 data-[invalid=true]:border-error data-[open=true]:!border-brand-700 data-[open=true]:!border-2  !shadow-main",
              value: "!text-base !text-gray-500 group-data-[has-value=true]:!font-medium group-data-[has-value=true]:!text-black",
              selectorIcon: "stroke-gray-500 size-5",
            }}
            variant='bordered'
            placeholder='LGA'
            className='w-full'
          >
            <SelectItem classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white !outline-none data-[selected=true]:!text-primary_fixed", title: "text-base" }} key='Lagos'>{`Lagos`}</SelectItem>
            <SelectItem classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white !outline-none data-[selected=true]:!text-primary_fixed", title: "text-base" }} key='Imo'>{`Imo`}</SelectItem>
          </Select>
        </div>
      </div>
      <Button disableRipple className='h-11 gap-x-[6px] !outline-none shadow-main flex flex-none items-center px-[18px] py-3 !w-fit border-none bg-primary_fixed data-[hover=true]:!bg-brand-700 !opacity-100 transition-colors rounded-lg'>
        <span className='text-white  text-base font-semibold'>Continue</span>
      </Button>
    </motion.div>
  );
}
