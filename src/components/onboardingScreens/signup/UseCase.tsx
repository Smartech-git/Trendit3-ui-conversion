import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import { RadioGroup, Radio } from "@nextui-org/react";
import { signupFormTypes } from "@/types";
import { useSignupContext } from "@/context/SignupContext";
import { label } from "framer-motion/client";
const { format } = require("date-fns");

const useCases = [
  { label: "Earner", desc: "Engage in tasks and events that can earn me money." },
  { label: "Advertise", desc: "Create post and events to increase my reach on the internet." },
  { label: "Both", desc: "" },
];
export default function UseCase() {
  const [dropDownStates, setDropDownMenuStates] = useState<{ [key: string]: boolean }>({ gender: false });
  const { formData, setFormData } = useSignupContext();

  const handleOnSelect = (value: string) => {
    setFormData((prev: signupFormTypes) => ({
      ...prev,
      referal: value,
    }));
  };

  return (
    <div className='sm:w-[520px] w-[90vw] relative h-fit bg-white flex flex-col gap-y-8 items-center rounded-xl px-6 animate-fade-left animate-delay-300 animate-duration-300 animate-ease-in-out py-12'>
      <div className='flex flex-col relative w-full gap-y-1'>
        <span className='text-gray-600 text-base'>2/2</span>
        <h1 className='text-2xl font-bold text-gray-900'>What best describes your primary use of Trendit?</h1>
      </div>
      <div className='flex w-full flex-col'>
        <RadioGroup
          classNames={{
            wrapper: "!gap-y-6",
          }}
          value={formData.referal}
          onValueChange={(value) => handleOnSelect(value)}
        >
          {useCases.map((item: { label: string; desc: string }, index: number) => {
            return (
              <Radio
                key={index}
                classNames={{
                  label: "!text-gray-700 font-medium text-base",
                  wrapper: "!size-[20px] !mt-1 !outline-none group-data-[hover-unselected=true]:!bg-gray-50 !border border-gray-300 group-data-[selected=true]:!border-primary_fixed",
                  base: "flex gap-x-3 -m-0 p-0 !items-start",
                  control: "!size-3 !bg-primary_fixed",
                  description: "!text-gray-600 !font-normal text-base",
                }}
                value={item.label}
                description={item.desc}
              >
                {item.label}
              </Radio>
            );
          })}
        </RadioGroup>
      </div>
      <Link href='/home' scroll={true} className='w-full transition-colors animate-duration-300 bg-primary_fixed hover:bg-secondary_fixed rounded-lg h-11 flex items-center justify-center'>
        <span className='text-white font-bold text-base'>Continue</span>
      </Link>
    </div>
  );
}
