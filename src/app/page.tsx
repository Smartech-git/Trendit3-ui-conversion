'use server'

import { getSession } from "@/cookies";

export default async function Home() {
  return (
    <div className='lg:px-[8%] md:px-[20%] 4kScreen:px-[25%] sm:px-3 px-2 overflow-y-scroll flex lg:flex-row flex-col scrollbar-none lg:items-center lg:justify-between items-center justify-center w-full'>
      <h1>Login</h1>
    </div>
  );
}
