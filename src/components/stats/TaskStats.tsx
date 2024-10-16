"use client";

import React, { useMemo, useState } from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import StatsChartChip from "../macroComponents/StatsChartChip";

const Stat = ({ data }: { data: { type: string; number: number; trend: "up" | "down"; percentage: number } }) => {
  const abbreviatedValue = useMemo(() => abbreviateNumber(data.number, 1), [data.number]);

  return (
    <div className='min-w-fit flex flex-1 flex-col'>
      <h1 className='text-gray-600 text-sm font-medium'>{data.type}</h1>
      <div className='w-full flex sm:justify-start justify-between items-center gap-x-3'>
        <span className='text-gray-900 text-[30px] font-semibold'>{abbreviatedValue}</span>
        <StatsChartChip trend={data.trend} value={data.percentage} />
      </div>
    </div>
  );
};

export default function TaskStats() {
  const [stats, setStats] = useState<Array<{ type: string; number: number; trend: "up" | "down"; percentage: number }>>([
    {
      type: "Total Allocated",
      number: 85000,
      trend: "up",
      percentage: 8,
    },
    {
      type: "Total Viewed",
      number: 10000,
      trend: "down",
      percentage: 10,
    },

    {
      type: "Total Completed",
      number: 174000,
      trend: "up",
      percentage: 0.78,
    },
    {
      type: "Total Pending",
      number: 85000,
      trend: "down",
      percentage: 0.5,
    },
  ]);

  return (
    <div className='w-full flex flex-wrap items-center justify-between gap-2'>
      {stats.map((item, index: number) => {
        return <Stat key={index} data={item} />;
      })}
    </div>
  );
}
