import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import { RadioGroup, Radio } from "@nextui-org/react";
import { signupFormTypes } from "@/types";
import { useSignupContext } from "@/context/SignupContext";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/button";

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
    <motion.div layout initial={{ opacity: 0, x: 4 }} animate={{ opacity: 1, x: 0 }} transition={{ type: "spring" }} className='sm:w-[520px] w-[90vw] relative h-fit bg-white flex flex-col gap-y-8 items-center rounded-xl px-6 animate-fade-left animate-delay-300 animate-duration-300 animate-ease-in-out py-12'>
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
                  wrapper: "!size-[24px] !mt-1 !outline-none group-data-[hover-unselected=true]:!bg-gray-50 !border border-gray-300 group-data-[selected=true]:!border-brand-700",
                  base: "flex gap-x-3 -m-0 p-0 !items-start",
                  control: "!size-[12px] !bg-brand-700",
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
      <Link href='/home' className='w-full'>
        <Button
          // spinner={
          //   <div className='size-5'>
          //     <Spinner className='text-white' />
          //   </div>
          // }
          // isLoading={isFetching}
          // onPress={handleContinue}
          disableRipple
          className='h-11 gap-x-[6px] w-full !outline-none shadow-main flex justify-center flex-none items-center px-[18px] py-3 !min-w-auto border-none bg-primary_fixed data-[hover=true]:!bg-brand-700 !opacity-100 transition-colors rounded-lg '
        >
          <span className='text-white  text-base font-semibold'>Continue</span>
        </Button>
      </Link>
    </motion.div>
  );
}
