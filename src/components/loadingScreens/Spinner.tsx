import React from "react";

export default function Spinner({ className, pathClassName, strokeWidth = "5" }: { className?: string; pathClassName?: string; strokeWidth?: string }) {
  return (
    <div className='w-full h-full flex items-center animate-spin animate-duration-[570ms] justify-center'>
      <svg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 24 24' strokeWidth='1'>
        <g fill='currentColor'>
          <path fill-rule='evenodd' d='M12 19a7 7 0 1 0 0-14a7 7 0 0 0 0 14m0 3c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10' clip-rule='evenodd' opacity='0.2' className={`text-white/50 ${pathClassName}`} strokeWidth='1' />
          <path d='M2 12C2 6.477 6.477 2 12 2v3a7 7 0 0 0-7 7z' className={`text-white ${className}`} strokeWidth='1' />
        </g>
      </svg>
    </div>
  );
}
