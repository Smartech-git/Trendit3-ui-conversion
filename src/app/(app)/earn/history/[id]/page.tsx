"use client";

import React, { useState, Key } from "react";
import { motion } from "framer-motion";
import TaskSummary from "@/components/earn/TaskSummary";
import GeneratedTask from "@/components/earn/GeneratedTask";
export default function History() {
  return (
    <div className='2xl:pt-[112px] sm:pt-[96px] pt-[72px] flex md:flex-row flex-col w-full gap-6 relative'>
      <TaskSummary />
      <GeneratedTask />
    </div>
  );
}
