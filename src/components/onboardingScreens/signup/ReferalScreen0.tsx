import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import { RadioGroup, Radio } from "@nextui-org/react";
import { signupFormTypes } from "@/types";
import { useSignupContext } from "@/context/SignupContext";
import { label } from "framer-motion/client";
const { format } = require("date-fns");

const sociaMedia = ["Facebook", "X(Twitter)", "Instagram", "WhatsApp", "Telegram", "A friend"];

export default function ReferalScreen0() {
  const [dropDownStates, setDropDownMenuStates] = useState<{ [key: string]: boolean }>({ gender: false });
  const { formData, setFormData } = useSignupContext();

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleOnSelect = (value: string) => {
    setFormData((prev: signupFormTypes) => ({
      ...prev,
      referal: value,
    }));
  };

  return (
    <div className='sm:w-[520px] w-[90vw] relative h-fit bg-white flex flex-col gap-y-8 items-center rounded-xl px-6 animate-fade-left animate-delay-300 animate-duration-300 animate-ease-in-out py-12'>
      <div className='flex flex-col relative w-full gap-y-1'>
        <span className='text-gray-600 text-base'>1/2</span>
        <h1 className='text-2xl font-bold text-gray-900'>How did you find out about Trendit?</h1>
      </div>
      <div className='flex w-full flex-col'>
        <RadioGroup
          classNames={{
            wrapper: "!gap-y-6",
          }}
          value={formData.referal}
          onValueChange={(value) => handleOnSelect(value)}
        >
          {sociaMedia.map((item: string, index: number) => {
            return (
              <Radio
                key={index}
                classNames={{
                  label: "!text-gray-700 font-medium text-base",
                  wrapper: "!size-[20px] !outline-none group-data-[hover-unselected=true]:!bg-gray-50 !border border-gray-300 group-data-[selected=true]:!border-primary_fixed",
                  base: "flex gap-x-3 -m-0 p-0",
                  control: "!size-3 !bg-primary_fixed",
                }}
                value={item}
              >
                {item}
              </Radio>
            );
          })}
        </RadioGroup>
      </div>
      <Link href='/signup/use-case' scroll={true} className='w-full transition-colors animate-duration-300 bg-primary_fixed hover:bg-brand-700 rounded-lg h-11 flex items-center justify-center'>
        <span className='text-white font-bold text-base'>Continue</span>
      </Link>
    </div>
  );
}
