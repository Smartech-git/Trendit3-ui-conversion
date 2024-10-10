import React, { useEffect, useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLoginContext } from "@/context/LoginContext";
import { loginFormTypes, cookiesType, pathsEnum } from "@/types";
import { Eye, EyeOff } from "@/appIcons";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import Spinner from "@/components/loadingScreens/Spinner";
import { extractData, getRequiredErrorMessage } from "@/lib/helpers";
import { motion } from "framer-motion";
import { useGlobal } from "@/context/GlobalContext";
import { apiRequest } from "@/lib/serverRequest";
import { createSession } from "@/cookies";
import { useRouter } from "next/navigation";

export default function LoginScreen() {
  const { formData, setFormData } = useLoginContext();
  const [showPassword, setShowPassword] = useState({ main: false });
  const [error, setError] = useState<{ email: string | undefined; password: string | undefined }>({ email: undefined, password: undefined });
  const [isFetching, setIsFetching] = useState(false);
  const { setToast, setAppUser } = useGlobal();
  const router = useRouter();

  const handleOnChange = (e: any) => {
    setFormData((prev: loginFormTypes) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError((prev) => ({
      ...prev,
      [e.target.name]: undefined,
    }));
  };

  const handleLogin = async () => {
    const interestedObj: any = extractData(formData, ["email", "password"]);
    if (Object.values(interestedObj).some((value: any) => !value?.length)) {
      const undefinedValues = Object.keys(interestedObj).filter((key) => !interestedObj[key]?.length);
      undefinedValues.forEach((value: string) => {
        setError((prev) => ({
          ...prev,
          [value]: getRequiredErrorMessage(value as any),
        }));
      });
    } else {
      setIsFetching(true);
      const result = await apiRequest("login", "POST", {
        email_username: formData.email,
        password: formData.password,
      });
      console.log(result);
      setIsFetching(false);
      if (result?.error) {
        setToast({ open: true, state: "error", content: "check your network connection" });
      } else if (result?.status === "success") {
        setToast({ open: true, state: "success", content: result?.message });
        const session: cookiesType = {
          access_token: result?.access_token,
        };
        setAppUser(result?.user_data);
        const navigate = async () => {
          await createSession(session);
          router.replace(pathsEnum.home);
        };
        navigate();
      } else {
        if (result?.message === "Password is incorrect") {
          setError((prev) => ({
            ...prev,
            password: "Password is incorrect",
          }));
        } else {
          setError((prev) => ({
            email: "",
            password: "",
          }));
          setToast({ open: true, state: "error", content: result?.message });
        }
      }
    }
  };

  return (
    <motion.div layout initial={{ opacity: 0, x: 4 }} animate={{ opacity: 1, x: 0 }} transition={{ type: "spring" }} className='sm:w-[520px] w-[90vw] h-fit bg-white flex flex-col gap-y-8 items-center rounded-xl px-6 py-12'>
      <div className='flex flex-col relative w-full gap-y-1 items-center'>
        <h1 className='text-2xl font-bold text-gray-900'>Login to account</h1>
        <p className='text-center w-72 max-w-[95%] text-base text-gray-600'>Turn Daily Social Tasks into Paychecks! Get Paid for your Engagements.</p>
      </div>
      <div className='w-full flex flex-col relative gap-y-6 items-center'>
        <div className='w-full flex relative items-center flex-col gap-y-4'>
          <form className='w-full flex flex-col items-center gap-y-4 relative'>
            <div className='w-full flex flex-col'>
              <Input
                onChange={(e: any) => {
                  handleOnChange(e);
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
              <div className='w-full flex relative'>
                <Input
                  onChange={(e) => {
                    handleOnChange(e);
                  }}
                  value={formData.password}
                  autoComplete='off'
                  placeholder={`Enter password`}
                  name='password'
                  variant='bordered'
                  endContent={
                    <div className='size-fit cursor-pointer'>
                      {showPassword.main ? (
                        <div
                          onClick={() =>
                            setShowPassword((prev) => ({
                              ...prev,
                              main: false,
                            }))
                          }
                        >
                          <Eye className='stroke-gray-400 size-5' />
                        </div>
                      ) : (
                        <div
                          onClick={() =>
                            setShowPassword((prev) => ({
                              ...prev,
                              main: true,
                            }))
                          }
                        >
                          <EyeOff className='stroke-gray-400 size-5 ' />
                        </div>
                      )}
                    </div>
                  }
                  isInvalid={error?.password ? true : false}
                  errorMessage={error.password}
                  type={showPassword.main ? "text" : "password"}
                  classNames={{
                    inputWrapper: "!h-11 !px-4 !rounded-lg  border !transition-all data-[hover=true]:border-gray-300 group-data-[focus=true]:!border-brand-700 group-data-[invalid=true]:border-error group-data-[focus=true]:!border-2 !shadow-main",
                    input: "!text-base overflow-hidden !font-medium placeholder:!font-normal placeholder:!text-gray-500  !text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                  }}
                />
              </div>
            </div>
          </form>
          <div className='w-full flex justify-center gap-x-1 items-center'>
            <span className='text-gray-600 font-normal text-sm'>Forgot password?</span>
            <Link href='/reset-password/0' className='text-primary_fixed hover:text-brand-700 animate-duration-300 transition-colors font-bold text-sm  cursor-pointer'>
              Reset
            </Link>
          </div>
          <Button
            spinner={
              <div className='size-5'>
                <Spinner className='text-white' />
              </div>
            }
            isLoading={isFetching}
            onPress={handleLogin}
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
        <span className='text-gray-600 font-normal text-sm'>Don't have an account?</span>
        <Link href='/signup/email' className='text-primary_fixed hover:text-brand-700 animate-duration-300 transition-colors font-bold text-sm  cursor-pointer'>
          Sign up
        </Link>
      </div>
    </motion.div>
  );
}
