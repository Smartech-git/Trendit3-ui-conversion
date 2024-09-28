import Hero from "@/components/earn/Hero";
import Faq from "@/components/earn/Faq";
import Cta from "@/components/earn/Cta";

export default function Earn() {
  return (
    <div className='w-full 2xl:gap-8 sm:gap-6 gap-4 flex 2xl:px-8 sm:px-6 px-4 relative h-[100svh]'>
      <div className='h-full 2xl:pb-8 sm:pb-8 pb-8 overflow-y-scroll scrollbar-none flex flex-col sm:gap-6 gap-4 relative 2xl:pt-[112px] sm:pt-[96px] pt-[72px] w-full'>
        <Hero />
        <Faq />
      </div>
      <div className='h-[100svh] relative scrollbar-none lg:flex hidden 2xl:pb-8 sm:pb-8 pb-8 overflow-y-scroll flex-col w-[45%] 2xl:pt-[112px] sm:pt-[96px] pt-[72px] max-w-[340px] 2xl:gap-8 sm:gap-6 gap-4'>
        <Cta />
      </div>
    </div>
  );
}
