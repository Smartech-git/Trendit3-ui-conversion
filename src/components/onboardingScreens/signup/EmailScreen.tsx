import React, { useEffect, useContext, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useSignupContext } from "@/context/SignupContext";
import { signupFormTypes, cookiesType, pathsEnum } from "@/types";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useDebouncedCallback } from "use-debounce";
import { apiRequest } from "@/lib/serverRequest";
import Spinner from "@/components/loadingScreens/Spinner";
import { useGlobal } from "@/context/GlobalContext";
import { createSession, setPathsCookies } from "@/cookies";
import { useRouter } from "next/navigation";
import { emailRegrex } from "@/lib/constants";

export default function EmailScreen() {
  const { formData, setFormData, setPathsTrack } = useSignupContext();
  const [error, setError] = useState<{ email: string | undefined; refCode: string | undefined }>({ email: undefined, refCode: undefined });
  const [isFetching, setIsFetching] = useState(false);
  const { setToast } = useGlobal();
  const router = useRouter();

  useEffect(() => {
    router.prefetch(pathsEnum.emailConfirmation);
  }, []);

  const handleOnChange = (e: any) => {
    setFormData((prev: signupFormTypes) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError((prev) => ({
      ...prev,
      [e.target.name]: undefined,
    }));
  };

  const validate = useDebouncedCallback(async (e) => {
    if (emailRegrex.test(e.target.value)) {
      const result = await apiRequest("check-email", "POST", {
        email: e.target.value,
      });
      if (result?.error) {
        setToast({ open: true, state: "error", content: "check your network connection" });
      } else if (result?.status === "failed") {
        setError((prev) => ({
          ...prev,
          email: result?.message,
        }));
      }
    } else {
      setError((prev) => {
        return {
          ...prev,
          [e.target.name]: "Please enter a valid email",
        };
      });
    }
  }, 2000);

  const handleGetStarted = async () => {
    if ([formData.email].some((value) => !value?.length)) {
      setError((prev) => ({
        ...prev,
        email: "Email is required",
      }));
    } else if([error.email].every((value) => value === undefined)) {
      setIsFetching(true);
      const result = await apiRequest(
        "signup",
        "POST",
        formData.refCode
          ? {
              email: formData.email,
              referrer_code: formData.refCode,
            }
          : {
              email: formData.email,
            }
      );
      setIsFetching(false);
      if (result?.error) {
        setToast({ open: true, state: "error", content: "check your network connection" });
      } else if (result?.status === "success") {
        setToast({ open: true, state: "success", content: result?.message });
        const session: cookiesType = {
          signup_token: result?.signup_token,
          email: formData?.email,
        };
        
        const navigate = async () => {
          await createSession(session);
          router.push(pathsEnum.emailConfirmation);
        };
        navigate();
      } else {
        setError((prev) => ({
          ...prev,
          email: result?.message,
        }));
      }
    }
  };

  return (
    <motion.div layout initial={{ opacity: 0, x: 4 }} animate={{ opacity: 1, x: 0 }} transition={{ type: "spring" }} className='sm:w-[520px] w-[90vw] h-fit bg-white flex flex-col gap-y-8 items-center rounded-xl px-6 py-12'>
      <div className='flex flex-col relative w-full gap-y-1 items-center'>
        <h1 className='text-2xl font-bold text-gray-900'>Create an account</h1>
        <p className='text-center w-72 max-w-[95%] text-base text-gray-600'>Turn Daily Social Tasks into Paychecks! Get Paid for your Engagements.</p>
      </div>
      <div className='w-full flex flex-col relative gap-y-6 items-center'>
        <div className='w-full flex relative items-center flex-col gap-y-4'>
          <form className='w-full flex flex-col items-center gap-y-4 relative'>
            <div className='w-full flex flex-col'>
              <Input
                onChange={(e: any) => {
                  handleOnChange(e);
                  validate(e);
                }}
                value={formData.email}
                autoComplete='off'
                placeholder={`Enter your email`}
                name='email'
                variant='bordered'
                isInvalid={error.email ? true : false}
                errorMessage={error.email}
                type='text'
                classNames={{
                  inputWrapper: "!h-11 !px-4 !rounded-lg  border !transition-all data-[hover=true]:border-gray-300 group-data-[focus=true]:!border-brand-700 group-data-[invalid=true]:border-error group-data-[focus=true]:!border-2 !shadow-main",
                  input: "!text-base overflow-hidden !font-medium placeholder:!font-normal placeholder:!text-gray-500  !text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                }}
              />
            </div>
            <div className='w-full flex flex-col'>
              <Input
                onChange={(e: any) => handleOnChange(e)}
                value={formData.refCode}
                autoComplete='off'
                placeholder={`Referral Code (optional)`}
                name='refCode'
                variant='bordered'
                classNames={{
                  inputWrapper: "!h-11 !px-4 !rounded-lg  border !transition-all data-[hover=true]:border-gray-300 group-data-[focus=true]:!border-brand-700 group-data-[invalid=true]:border-error group-data-[focus=true]:!border-2 !shadow-main",
                  input: "!text-base overflow-hidden !font-medium placeholder:!font-normal placeholder:!text-gray-500  !text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                }}
              />
            </div>
          </form>
          {/* <Link href='/signup/email-confirmation' scroll={true} className='w-full transition-colors animate-duration-300 bg-primary_fixed hover:bg-brand-700 rounded-lg h-11 flex items-center justify-center'>
            <span className='text-white font-bold text-base'>Get started</span>
          </Link> */}
          <Button
            spinner={
              <div className='size-5'>
                <Spinner className='text-white' />
              </div>
            }
            isLoading={isFetching}
            onPress={handleGetStarted}
            disableRipple
            className='h-11 gap-x-[6px] w-full !outline-none shadow-main flex justify-center flex-none items-center px-[18px] py-3 !min-w-auto border-none bg-primary_fixed data-[hover=true]:!bg-brand-700 !opacity-100 transition-colors rounded-lg '
          >
            <span className='text-white  text-base font-semibold'>Get started</span>
          </Button>
        </div>
        <div className='w-full flex gap-x-2 items-center'>
          <hr className='w-full h-[1px] bg-gray-100'></hr>
          <span className='text-gray-600 font-medium text-sm'>OR</span>
          <hr className='w-full h-[1px] bg-gray-100'></hr>
        </div>
        <div className='w-full flex flex-col gap-y-3'>
          <button className='w-full border shadow-main gap-x-4 border-gray-300 hover:bg-gray-50 transition-colors animate-duration-300 rounded-lg h-11 flex items-center justify-center'>
            <Image src='/icons/google.svg' alt='Google' width={24} height={24} className='' />
            <span className='text-gray-700 font-bold text-base'>Sign up with Google</span>
          </button>
          <button className='w-full border shadow-main gap-x-4 border-gray-300 hover:bg-gray-50 transition-colors animate-duration-300 rounded-lg h-11 flex items-center justify-center'>
            <Image src='/icons/facebook.svg' alt='Google' width={24} height={24} className='' />
            <span className='text-gray-700 font-bold text-base'>Sign up with Facebook</span>
          </button>
          <button className='w-full border shadow-main gap-x-4 border-gray-300 hover:bg-gray-50 transition-colors animate-duration-300 rounded-lg h-11 flex items-center justify-center'>
            <Image src='/icons/tiktok.svg' alt='Google' width={24} height={24} className='' />
            <span className='text-gray-700 font-bold text-base'>Sign up with Tiktok</span>
          </button>
        </div>
      </div>
      <div className='w-full flex justify-center gap-x-1 items-center'>
        <span className='text-gray-600 font-normal text-sm'>Already have an account?</span>
        <Link href='/login/0' scroll={true} className='text-primary_fixed hover:text-brand-700 animate-duration-300 transition-colors font-bold text-sm  cursor-pointer'>
          Log in
        </Link>
      </div>
    </motion.div>
  );
}
