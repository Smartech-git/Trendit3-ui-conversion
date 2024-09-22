import React, { useEffect, useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { User01, ChevronDown } from "@/appIcons";
import { signupFormTypes } from "@/types";
import { SignupOnboardingContext } from "@/app/(onboarding)/signup/layout";
import { Select, SelectSection, SelectItem } from "@nextui-org/select";
import { DateInput } from "@nextui-org/react";
import { CalendarDate, parseDate } from "@internationalized/date";
const { format } = require("date-fns");

export default function ProfileSetupScreen() {
  const [dropDownStates, setDropDownMenuStates] = useState<{ [key: string]: boolean }>({ gender: false });
  const { formData, setFormData } = useContext(SignupOnboardingContext);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleOnChange = (e: any) => {
    setFormData((prev: signupFormTypes) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnDobChange = (value: any) => {
    setFormData((prev: signupFormTypes) => ({
      ...prev,
      dob: `${value.month}/${value.day}/${value.year}`,
    }));
  };
  return (
    <div className='sm:w-[520px] w-[90vw] relative h-fit bg-white flex flex-col gap-y-8 items-center rounded-xl px-6 animate-fade-left animate-delay-300 animate-duration-300 animate-ease-in-out py-12'>
      <div className='flex flex-col relative w-full gap-y-1 items-center'>
        <h1 className='text-2xl font-bold text-on_surface'>Welcome onboard!</h1>
        <p className='text-center w-[95%] max-w-[95%] text-base text-gray-600'>Hi Damola, we are excited to have you onboard! Finish up your profile set up.</p>
      </div>
      <div className='w-full flex items-center gap-x-3 justify-center'>
        <div className=' flex items-center justify-center size-12 rounded-full bg-gray-100 border border-gray-200'>
          <User01 className='size-7' />
        </div>
        <>
          <label htmlFor='image'>
            <span className='text-primary_fixed font-semibold  text-base'>Upload photo</span>
          </label>
          <input type='file' id='image' accept='image/png, image/jpeg, image/jpg' className='hidden' />
        </>
      </div>
      <div className='w-full flex flex-col relative gap-y-6 items-center'>
        <div className='w-full flex relative items-center flex-col gap-y-4'>
          <div className='w-full flex relative flex-col'>
            <Select
              selectedKeys={[formData.gender as any]}
              onChange={(e) => handleOnChange(e)}
              name='gender'
              classNames={{ trigger: "!h-11 !px-4 !rounded-lg border !border-gray-300 data-[open=true]:!border-primary_fixed !shadow-main", value: "!text-base !text-gray-500 group-data-[has-value=true]:!font-medium group-data-[has-value=true]:!text-black", selectorIcon: "stroke-gray-400 size-5" }}
              variant='bordered'
              placeholder='Gender'
              className='w-full'
            >
              <SelectItem classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white !outline-none data-[selected=true]:!text-primary_fixed", title: "text-base" }} key='Male'>{`Male`}</SelectItem>
              <SelectItem classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white !outline-none data-[selected=true]:!text-primary_fixed", title: "text-base" }} key='Female'>{`Female`}</SelectItem>
            </Select>
          </div>
          <div className='w-full flex flex-col'>
            <div className='w-full flex relative'>
              <div className='flex items-center absolute border-r border-gray-300 px-4 text-blue-gray-500 top-[50%] left-0 -translate-y-2/4 h-11'>
                <span className='text-gray-500 text-base'>Date of Birth</span>
              </div>
              <DateInput
                onChange={(value) => handleOnDobChange(value)}
                value={formData.dob ? new CalendarDate(Number(formData?.dob?.split("/")[2]), Number(formData?.dob?.split("/")[1]), Number(formData?.dob?.split("/")[0])) : null}
                name='dob'
                isInvalid={false}
                variant='bordered'
                classNames={{
                  base: "!h-11",
                  inputWrapper: "!h-11 !px-4 !pl-[138px] !rounded-lg border !border-gray-300 focus-within:!border-primary_fixed !shadow-main",
                  segment: "text-base data-[editable=true]:!text-black !text-gray-500  uppercase data-[placeholder=true]:!font-normal !font-medium data-[placeholder=true]:!text-gray-500 focus:!bg-gray-50",
                  input: "text-base justify-end",
                }}
              />
            </div>
          </div>
          <div className='w-full flex relative flex-col'>
            <Select
              selectedKeys={[formData.country as any]}
              onChange={(e) => handleOnChange(e)}
              name='country'
              classNames={{ trigger: "!h-11 !px-4 !rounded-lg border !border-gray-300 data-[open=true]:!border-primary_fixed !shadow-main", value: "!text-base !text-gray-500 group-data-[has-value=true]:!font-medium group-data-[has-value=true]:!text-black", selectorIcon: "stroke-gray-400 size-5" }}
              variant='bordered'
              placeholder='Country'
              className='w-full'
            >
              <SelectItem classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white !outline-none data-[selected=true]:!text-primary_fixed", title: "text-base" }} key='Nigeria'>{`Nigeria`}</SelectItem>
              {/* <SelectItem classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white !outline-none data-[selected=true]:!text-primary_fixed", title: "text-base" }} key='Female'>{`Female`}</SelectItem> */}
            </Select>
          </div>
          <div className='flex relative w-full h-fit gap-x-4'>
            <div className='w-full flex relative flex-col'>
              <Select
                selectedKeys={[formData.state as any]}
                onChange={(e) => handleOnChange(e)}
                name='state'
                classNames={{ trigger: "!h-11 !px-4 !rounded-lg border !border-gray-300 data-[open=true]:!border-primary_fixed !shadow-main", value: "!text-base !text-gray-500 group-data-[has-value=true]:!font-medium group-data-[has-value=true]:!text-black", selectorIcon: "stroke-gray-400 size-5", popoverContent: "!min-w-[250px]" }}
                variant='bordered'
                placeholder='State'
                className='w-full'
              >
                <SelectItem classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white !outline-none data-[selected=true]:!text-primary_fixed", title: "text-base" }} key='Lagos'>{`Lagos`}</SelectItem>
                {/* <SelectItem classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white !outline-none data-[selected=true]:!text-primary_fixed", title: "text-base" }} key='Female'>{`Female`}</SelectItem> */}
              </Select>
            </div>
            <div className='w-full flex flex-col'>
              <Select
                popoverProps={{
                  placement: "bottom-end",
                }}
                selectedKeys={[formData.LGA as any]}
                onChange={(e) => handleOnChange(e)}
                name='LGA'
                classNames={{
                  trigger: "!h-11 !px-4 !rounded-lg border !border-gray-300 data-[open=true]:!border-primary_fixed !shadow-main",
                  value: "!text-base !text-gray-500 group-data-[has-value=true]:!font-medium group-data-[has-value=true]:!text-black",
                  selectorIcon: "stroke-gray-400 size-5 ",
                  popoverContent: "!min-w-[250px] relative sm:!right-0 xs:!right-[60px] xxs:!right-[100px] !right-[130px]",
                  base: "",
                }}
                variant='bordered'
                placeholder='LGA'
                className='w-full'
              >
                <SelectItem classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white !outline-none data-[selected=true]:!text-primary_fixed", title: "text-base" }} key='Local_gov'>{`Local_gov`}</SelectItem>
                {/* <SelectItem classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white !outline-none data-[selected=true]:!text-primary_fixed", title: "text-base" }} key='Female'>{`Female`}</SelectItem> */}
              </Select>
            </div>
          </div>
        </div>
      </div>
      <Link href='/signup/referal' scroll={true} className='w-full transition-colors animate-duration-300 bg-primary_fixed hover:bg-secondary_fixed rounded-lg h-11 flex items-center justify-center'>
        <span className='text-white font-bold text-base'>Continue</span>
      </Link>
      <div className='w-full flex justify-center gap-x-1 items-center'>
        <span className='text-gray-600 font-normal text-sm'>I will do this later</span>
        <Link href='/home' className='text-primary_fixed font-bold text-sm hover:text-secondary_fixed animate-duration-300 transition-colors cursor-pointer'>
          Skip
        </Link>
      </div>
    </div>
  );
}
