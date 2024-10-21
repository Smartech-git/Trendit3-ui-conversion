import React from "react";
import { Skeleton } from "@nextui-org/react";

export default function ProfileSkeletonLoader() {
  return (
    <div className='h-full items-center flex gap-x-3'>
      <div className='sm:size-12 size-10 relative'>
        <Skeleton className='size-full flex items-center justify-center rounded-full after:bg-gray-200 before:via-gray-200 bg-gray-100' />
      </div>
      <div className='sm:flex hidden gap-2 flex-col'>
        <Skeleton className='h-3 w-20 bg-gray-100 after:bg-gray-200 before:via-gray-200 rounded-lg' />
        <Skeleton className='h-3 w-28 bg-gray-100 after:bg-gray-200 before:via-gray-200 rounded-lg' />
      </div>
    </div>
  );
}

export const TextLoaders = ({ className }: { className?: string }) => {
  return <Skeleton className={`h-3 w-20 bg-gray-100 after:bg-gray-200 before:via-gray-200 rounded-lg ${className}`} />;
};
