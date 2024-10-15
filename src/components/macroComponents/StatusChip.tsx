"use client";
import React from "react";
import { Chip } from "@nextui-org/react";
import { base } from "framer-motion/client";
import { Dot, Check, ReverseLeft, X } from "@/appIcons";

interface statusChip_propTypes {
  status: "Pending" | "Completed" | "Paid" | "Refunded" | "Cancelled";
}

export default function StatusChip({ status }: statusChip_propTypes) {
  return (
    <>
      {status === "Completed" || status === "Paid" ? (
        <Chip startContent={<Check className="size-3 text-success-500" />} classNames={{ base: "border flex items-center gap-x-1 border-gray-300 shadow-main py-1 px-[8px]", content: "text-gray-700 font-medium p-0" }} variant='bordered'>
          {status}
        </Chip>
      ) : (
        <Chip startContent={<Dot />} classNames={{ base: "border flex items-center gap-x-1 border-gray-300 shadow-main py-1 px-[8px]", content: "text-gray-700 font-medium p-0" }} variant='bordered'>
          {status}
        </Chip>
      )}
    </>
  );
}
