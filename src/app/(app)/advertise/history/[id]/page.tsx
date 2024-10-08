"use client";

import React, { useState, Key } from "react";
import { motion } from "framer-motion";


export default function History() {


  return (
    <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }} className='w-full flex p-3 flex-col h-[500px] overflow-hidden rounded-xl border border-gray-200 bg-white'>
      tasks
    </motion.div>
  );
}
