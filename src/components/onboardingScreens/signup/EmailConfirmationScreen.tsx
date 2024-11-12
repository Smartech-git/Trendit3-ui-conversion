import React, { useEffect, useState } from "react";
import { signupFormTypes, cookiesType, pathsEnum } from "@/types";
import { useSignupContext } from "@/context/SignupContext";
import { useGlobal } from "@/context/GlobalContext";
import { Input } from "@nextui-org/input";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Spinner from "@/components/loadingScreens/Spinner";
import { useDebouncedCallback } from "use-debounce";
import { getSession, createSession, setPathsCookies } from "@/cookies";
import { apiRequest } from "@/lib/serverRequest";

export default function EmailConFrimationScreen() {
  const { formData, setFormData, setPathsTrack } = useSignupContext();
  const [error, setError] = useState<{ OTP: string | undefined }>({ OTP: undefined });
  const [isFetching, setIsFetching] = useState(false);
  const [isFetchingNewOTP, setIsFetchingNewOTP] = useState(false);
  const { setToast } = useGlobal();
  const [session, setSession] = useState<cookiesType>();
  const router = useRouter();

  useEffect(() => {
    const getUserSession = async () => {
      const session = await getSession();
      if (session) {
        setSession(session.user);
        setFormData((prev: signupFormTypes) => ({
          ...prev,
          email: session.user.email,
        }));
      } else {
        router.replace(pathsEnum.email);
      }
    };
    getUserSession();
    // setToast({ open: true, state: "success", content: "OTP Sent" });
  }, []);

  const handleResendOTP = async () => {
    setIsFetchingNewOTP(true);
    const result = await apiRequest("resend-code", "POST", {
      signup_token: session?.signup_token,
    });
    setIsFetchingNewOTP(false);
    if (result?.error) {
      setToast({ open: true, state: "error", content: "check your network connection" });
    } else if (result?.status === "success") {
      setToast({ open: true, state: "success", content: result?.message });
    } else {
      setToast({ open: true, state: "error", content: result?.message });
    }
  };

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

  const validateOTP = useDebouncedCallback(async (e) => {
    if (e.target.value.length === 6) {
      setIsFetching(true);
      const result = await apiRequest("verify-email", "POST", {
        entered_code: Number(e.target.value),
        signup_token: session?.signup_token,
      });
      setIsFetching(false);
      console.log(result);
      if (result?.error) {
        setToast({ open: true, state: "error", content: "check your network connection" });
      } else if (result?.status === "success") {
        setToast({ open: true, state: "success", content: result?.message });
       
        const navigate = async () => {
          await createSession(result?.user_data);
          router.push(pathsEnum.about);
        };
        navigate();
      } else {
        setError((prev) => ({
          ...prev,
          OTP: result?.message,
        }));
      }
    } else {
    }
  }, 500);

  return (
    <>
      {session ? (
        <motion.div layout initial={{ opacity: 0, x: 4 }} animate={{ opacity: 1, x: 0 }} transition={{ type: "spring" }} className='sm:w-[520px] w-[90vw] h-fit bg-white flex flex-col gap-y-8 items-center rounded-xl px-6  py-12'>
          <div className='flex flex-col relative w-full gap-y-1 items-center'>
            <h1 className='text-2xl font-bold text-gray-900'>Confirm your email</h1>
            <p className='text-center w-[95%] max-w-[95%] text-base text-gray-600'>{`We have sent an email with a code to ${session.email}, please enter it below to create your Trendit account.`}</p>
          </div>
          <div className='w-full flex flex-col relative gap-y-6 items-center'>
            <form action={() => {}} className='w-full flex relative items-center flex-col gap-y-4'>
              <div className='w-full flex flex-col'>
                <Input
                  onChange={(e) => {
                    handleOnChange(e);
                    validateOTP(e);
                  }}
                  value={formData.OTP}
                  autoComplete='off'
                  placeholder={`Paste OTP`}
                  name='OTP'
                  variant='bordered'
                  type='number'
                  endContent={
                    isFetching && (
                      <div className='size-5'>
                        <Spinner pathClassName='!text-gray-300' className='!fill-primary_fixed' />
                      </div>
                    )
                  }
                  isInvalid={error.OTP ? true : false}
                  errorMessage={error.OTP}
                  isDisabled={isFetching ? true : false}
                  classNames={{
                    base: "!opacity-[100%]",
                    inputWrapper: "!h-11 !px-4 !rounded-lg  border !transition-all data-[hover=true]:border-gray-300 group-data-[focus=true]:!border-brand-700 group-data-[invalid=true]:border-error group-data-[focus=true]:!border-2 !shadow-main",
                    input: "!text-base overflow-hidden !font-medium placeholder:!font-normal placeholder:!text-gray-500  !text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                  }}
                />
              </div>
            </form>
          </div>
          <div className='w-fit flex justify-center items-center gap-x-1'>
            <span className='text-gray-600 font-normal text-sm'>{`Didn’t receive it?`}</span>
            <span onClick={handleResendOTP} className='text-primary_fixed hover:text-brand-700 animate-duration-300 transition-colors  font-bold text-sm  cursor-pointer'>
              Resend
            </span>
            {isFetchingNewOTP && (
              <div className='size-4 ml-1'>
                <Spinner pathClassName='!text-gray-300' className='!fill-primary_fixed' />
              </div>
            )}
          </div>
        </motion.div>
      ) : (
        <div className='sm:w-[520px] w-[90vw] min-h-[300px] h-fit bg-white flex flex-col gap-y-8 items-center justify-center rounded-xl px-6 py-12'>
          <Spinner />
        </div>
      )}
    </>
  );
}
