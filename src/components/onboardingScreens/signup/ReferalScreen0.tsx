import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import { RadioGroup, Radio } from "@nextui-org/react";
import { signupFormTypes } from "@/types";
import { useSignupContext } from "@/context/SignupContext";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/button";

const sociaMedia = ["Facebook", "X(Twitter)", "Instagram", "WhatsApp", "Telegram", "A friend"];

export default function ReferalScreen0() {
  const [dropDownStates, setDropDownMenuStates] = useState<{ [key: string]: boolean }>({ gender: false });
  const { formData, setFormData } = useSignupContext();

  useEffect(() => {
    //console.log(formData);
  }, [formData]);

  const handleOnSelect = (value: string) => {
    setFormData((prev: signupFormTypes) => ({
      ...prev,
      referal: value,
    }));
  };

  return (
    <motion.div layout initial={{ opacity: 0, x: 4 }} animate={{ opacity: 1, x: 0 }} transition={{ type: "spring" }} className='sm:w-[520px] w-[90vw] relative h-fit bg-white flex flex-col gap-y-8 items-center rounded-xl px-6  py-12'>
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
                  wrapper: "!size-[24px] flex flex-none !outline-none group-data-[hover-unselected=true]:!bg-gray-50 !border border-gray-300 group-data-[selected=true]:!border-brand-700 group-data-[selected=true]:!bg-brand-700",
                  base: "flex gap-x-3 -m-0 p-0",
                  control: "!size-[12px] !bg-white",
                }}
                value={item}
              >
                {item}
              </Radio>
            );
          })}
        </RadioGroup>
      </div>
      <Link href='/signup/use-case' className='w-full'>
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
