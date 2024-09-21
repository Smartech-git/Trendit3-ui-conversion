import React from "react";
import Spinner from "@/components/loadingScreens/Spinner";

export default function loading() {
  return (
    <div className='sm:w-[520px] w-[90vw] min-h-[300px] h-fit bg-white flex flex-col gap-y-8 items-center justify-center rounded-xl px-6 py-12'>
      <Spinner />
    </div>
  );
}
