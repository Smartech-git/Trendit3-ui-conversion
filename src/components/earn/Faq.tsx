"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { PlusCircle, MinusCircle } from "@/appIcons";
import Image from "next/image";
import { Button } from "@nextui-org/button";

export default function Faq() {
  const [openBecomeMember, setOpenBecomeMember] = useState(true);
  const avatarGroupRef = useRef(null);
  const isAvatarGroupInView = useInView(avatarGroupRef, { amount: 1 });
  const [faqs, setFaqs] = useState<Array<{ q: string }>>([{ q: "Is there a free trial available?" }, { q: "Can I change my plan later?" }, { q: "What is your cancellation policy?" }, { q: "Can other info be added to an invoice?" }, { q: "How does billing work?" }, { q: "How do I change my account email?" }]);
  const defaultContent = "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.";

  return (
    <motion.section initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }} layout className='w-full p-6 sm:rounded-xl rounded-none flex flex-col items-center justify-center flex-none h-fit border gap-y-8 border-outline_varient bg-white'>
      <div className='w-full flex flex-col items-center gap-y-3'>
        <h1 className='text-2xl font-semibold text-gray-900 text-center'>Frequently asked questions</h1>
        <h2 className='text-gray-600 font-medium text-lg max-w-[95%] text-center'>Everything you need to know about the product and billing.</h2>
      </div>
      <div className='flex flex-col w-full px-8 gap-y-8'>
        <Accordion dividerProps={{ className: "!bg-gray-200 !my-6" }} itemClasses={{ content: "!text-gray-600 font-medium text-sm", title: "text-gray-900 text-gray-900 font-medium", base: "!py-0", trigger: "!py-0" }} selectionMode='multiple' defaultExpandedKeys={["0", "1", "2", "3", "4", "5", "6"]}>
          {faqs.map((item: { q: string }, index: number) => {
            return (
              <AccordionItem disableIndicatorAnimation indicator={({ isOpen }) => (isOpen ? <MinusCircle /> : <PlusCircle />)} key={index} aria-label={item.q} title={item.q}>
                {defaultContent}
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
      <div className='w-full px-8'>
        <div className='w-full h-fit bg-gray-50 gap-y-8 flex flex-col items-center p-8 rounded-2xl'>
          <div ref={avatarGroupRef} className='w-full justify-center flex'>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={isAvatarGroupInView && { opacity: 1, y: 0 }} transition={{ type: "spring", duration: 2 }} className='relative flex items-center size-fit'>
              <div className='rounded-full relative translate-y-1 translate-x-3 bg-white'>
                <Image alt='avatar_01' src='/images/avatar_01.png' width={200} height={200} className='size-[48px]' />
              </div>
              <div className='rounded-full relative z-20 bg-white'>
                <Image alt='avatar_02' src='/images/avatar_02.png' width={200} height={200} className='size-[56px]' />
              </div>
              <div className='rounded-full relative translate-y-1 -translate-x-3 bg-white'>
                <Image alt='avatar_03' src='/images/avatar_03.png' width={200} height={200} className='size-[48px]' />
              </div>
            </motion.div>
          </div>
          <div className='w-full items-center flex-col flex'>
            <h1 className='text-center font-semibold text-gray-900 text-xl'>Still have questions?</h1>
            <p className='text-center w-full text-gray-600 font-normal text-lg'>{`Can’t find the answer you’re looking for? Please chat to our friendly team.`}</p>
          </div>
          <Button disableRipple className='h-12 gap-x-[6px] !outline-none flex items-center px-[18px] py-3 !min-w-auto border-none bg-primary_fixed data-[hover=true]:!bg-brand-700 !opacity-100 transition-colors rounded-lg'>
            <span className='text-white sm:flex hidden text-base font-semibold'>Become a member</span>
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
