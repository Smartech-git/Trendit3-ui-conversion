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

export const TaskLoader = () => {
  return (
    <div className='w-full p-4 cursor-pointer gap-x-4 flex items-start rounded border border-outline_varient hover:bg-gray-50 transition-colors'>
      <Skeleton className='size-12 bg-gray-100 after:bg-gray-200 before:via-gray-200  rounded-full flex-none relative flex items-center flex-col'></Skeleton>
      <div className='flex gap-y-[6px] w-full flex-col'>
        <div className='w-full flex items-center justify-between'>
          <Skeleton className='w-20 h-4 bg-gray-100 after:bg-gray-200 before:via-gray-200 rounded-lg'></Skeleton>
        </div>
        <Skeleton className='w-full h-20 bg-gray-100 after:bg-gray-200 before:via-gray-200 rounded-lg'></Skeleton>
        <div className='flex w-full flex-wrap gap-1'>
          <Skeleton className='w-10 h-6 bg-gray-100 after:bg-gray-200 before:via-gray-200 rounded-lg'></Skeleton>
        </div>
      </div>
    </div>
  );
};
