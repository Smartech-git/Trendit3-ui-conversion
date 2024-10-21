"use client";
import React from "react";
import { Dot, Check_02, ReverseLeft, X } from "@/appIcons";
import { statusTypes } from "@/types";

interface statusChip_propTypes {
  status: statusTypes
}

export default function StatusIndicator({ status }: statusChip_propTypes) {
  return <>{status === "Completed" || status === "Paid" || status === "On-going" ? <Dot className='stroke-success-900 fill-success-900' /> : status === "Cancelled" ? <X /> : status === "Refunded" ? <ReverseLeft /> : <Dot />}</>;
}
