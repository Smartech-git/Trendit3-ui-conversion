"use client";
import React, { useMemo } from "react";
import { Chip } from "@nextui-org/react";
import { base } from "framer-motion/client";
import { TrendUp } from "@/appIcons";
import { abbreviateNumber } from "js-abbreviation-number";

interface statsChartChip_propTypes {
  trend: "up" | "down";
  value: number;
}

export default function StatsChartChip({ trend, value }: statsChartChip_propTypes) {

  return (
    <>
      {trend === "up" ? (
        <Chip startContent={<TrendUp />} classNames={{ base: "border rounded-md rouded-md flex items-center gap-x-1 border-gray-300 shadow-main py-1 px-[8px] h-fit", content: "text-gray-700 font-medium text-xs p-0" }}  variant='bordered'>
          {value}%
        </Chip>
      ) : (
        <Chip startContent={<TrendUp className="stroke-error-500" />} classNames={{ base: "border rounded-md rouded-md flex items-center gap-x-1 border-gray-300 shadow-main py-1 px-[8px] h-fit", content: "text-gray-700 font-medium text-xs p-0" }} variant='bordered'>
          {value}%
        </Chip>
      )}
    </>
  );
}
