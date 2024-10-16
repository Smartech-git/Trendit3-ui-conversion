"use client";
import React from "react";
import { Chip } from "@nextui-org/react";
import { base } from "framer-motion/client";
import { Dot, Check_02, ReverseLeft, X } from "@/appIcons";

interface statusChip_propTypes {
  status: "Pending" | "Completed" | "Paid" | "Refunded" | "Cancelled" | 'On-going';
}

export default function StatusChip({ status }: statusChip_propTypes) {
  return (
    <>
      {status === "Completed" || status === "Paid" ? (
        <Chip startContent={<Check_02 />} classNames={{ base: "border border-success-200 bg-success-50 flex items-center gap-x-1 shadow-main py-1 px-[8px] h-fit", content: "text-success-900 font-medium text-xs p-0" }} variant='bordered'>
          {status}
        </Chip>
      ) : status === "Cancelled" ? (
        <Chip startContent={<X />} classNames={{ base: "border border-error-200 bg-error-50 flex items-center gap-x-1 shadow-main py-1 px-[8px] h-fit", content: "text-error-900 font-medium text-xs p-0" }} variant='bordered'>
          {status}
        </Chip>
      ) : status === "Refunded" ? (
        <Chip startContent={<ReverseLeft />} classNames={{ base: "border flex items-center gap-x-1 border-gray-300 shadow-main py-1 px-[8px] h-fit", content: "text-gray-700 font-medium text-xs p-0" }} variant='bordered'>
          {status}
        </Chip>
      ) : status === "On-going" ? (
        <Chip startContent={<Dot className="stroke-success-900 fill-success-900" />} classNames={{ base: "border border-success-200 bg-success-50 flex items-center gap-x-1 shadow-main py-1 px-[8px] h-fit", content: "text-success-900 font-medium text-xs p-0" }} variant='bordered'>
          {status}
        </Chip>
      ) : (
        <Chip startContent={<Dot />} classNames={{ base: "border flex items-center gap-x-1 border-gray-300 shadow-main py-1 px-[8px] h-fit", content: "text-gray-700 font-medium text-xs p-0" }} variant='bordered'>
          {status}
        </Chip>
      )}
    </>
  );
}
