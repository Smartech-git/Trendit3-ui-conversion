import React, { useEffect, useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff } from "@/appIcons";
import { useSignupContext } from "@/context/SignupContext";
import { signupFormTypes, cookiesType, pathsEnum } from "@/types";
import { Input } from "@nextui-org/input";
import { motion } from "framer-motion";
import { extractData, getRequiredErrorMessage } from "@/lib/helpers";
import { Button } from "@nextui-org/button";
import Spinner from "@/components/loadingScreens/Spinner";
import { useDebouncedCallback } from "use-debounce";
import { useGlobal } from "@/context/GlobalContext";
import { useRouter } from "next/navigation";
import { apiRequest } from "@/lib/serverRequest";
import { passwordRegrex } from "@/lib/constants";
import { createSession, setPathsCookies, getSession } from "@/cookies";

export default function AboutScreen() {
  const [showPassword, setShowPassword] = useState({ main: false, confirm: false });
  const { formData, setFormData, setPathsTrack } = useSignupContext();
  const [error, setError] = useState<{ firstName: string | undefined; lastName: string | undefined; userName: string | undefined; password: string | undefined; passwordConfirm: string | undefined }>({
    firstName: undefined,
    lastName: undefined,
    userName: undefined,
    password: undefined,
    passwordConfirm: undefined,
  });
  const [isFetching, setIsFetching] = useState(false);
  const { setToast, setAppUser } = useGlobal();
  const router = useRouter();
  const [session, setSession] = useState<cookiesType>();

  useEffect(() => {
    const getUserSession = async () => {
      const session = await getSession();
      if (session) {
        setSession(session.user);
      }
    };
    getUserSession();
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

  const validateUsername = useDebouncedCallback(async (e) => {
    if (e.target.value.length > 0) {
      const result = await apiRequest("check-username", "POST", {
        username: e.target.value,
      });
      console.log(result);
      if (result?.error) {
        setToast({ open: true, state: "error", content: "check your network connection" });
      } else if (result?.status === "failed") {
        setError((prev) => ({
          ...prev,
          userName: result?.message,
        }));
      }
    }
  }, 1000);

  const validatePassword = useDebouncedCallback(async (e) => {
    setError((prev) => {
      return {
        ...prev,
        [e.target.name]: !passwordRegrex.test(e.target.value) ? "Please enter a valid email" : undefined,
      };
    });
    if (typeof formData?.passwordConfirm === "string" && formData.passwordConfirm.length > 0) {
      setError((prev) => {
        return {
          ...prev,
          passwordConfirm: formData?.passwordConfirm?.length !== formData?.password?.length ? "Password does not match" : undefined,
        };
      });
    }
  }, 1000);

  const validatePasswordConfirm = useDebouncedCallback(async (e) => {
    if (typeof formData?.password === "string" && formData.password.length > 0) {
      setError((prev) => {
        return {
          ...prev,
          [e.target.name]: e.target.value.length !== formData?.password?.length ? "Password does not match" : undefined,
        };
      });
    }
  }, 1000);

  const handleContinue = async () => {
    const interestedObj: any = extractData(formData, ["firstName", "lastName", "userName", "password", "passwordConfirm"]);
    if (Object.values(interestedObj).some((value: any) => !value?.length)) {
      const undefinedValues = Object.keys(interestedObj).filter((key) => !interestedObj[key]?.length);
      undefinedValues.forEach((value: string) => {
        setError((prev) => ({
          ...prev,
          [value]: getRequiredErrorMessage(value as any),
        }));
      });
    } else if (Object.values(error).every((value: any) => value === undefined)) {
      setIsFetching(true);
      const result = await apiRequest("complete-registration", "POST", {
        user_id: session?.id,
        firstname: formData.firstName,
        lastname: formData.lastName,
        username: formData.userName,
        password: formData.password,
      });
      setIsFetching(false);
      if (result?.error) {
        setToast({ open: true, state: "error", content: "check your network connection" });
      } else if (result?.status === "success") {
        setToast({ open: true, state: "success", content: result?.message });
        const session: cookiesType = {
          access_token: result?.access_token,
          firstname: result?.user_data?.firstname,
          lastname: result?.user_data?.lastname,
        };
        setAppUser(result?.user_data);
        const navigate = async () => {
          await createSession(session);
          router.replace(pathsEnum.profileSetup);
        };
        navigate();
      } else {
        setToast({ open: true, state: "error", content: result?.message });
      }
    }
  };

  return (
    <motion.div layout initial={{ opacity: 0, x: 4 }} animate={{ opacity: 1, x: 0 }} transition={{ type: "spring" }} className='sm:w-[520px] w-[90vw] h-fit bg-white flex flex-col gap-y-8 items-center rounded-xl px-6 py-12'>
      <div className='flex flex-col relative w-full gap-y-1 items-center'>
        <h1 className='text-2xl font-bold text-gray-900'>Tell us about you</h1>
        <p className='text-center w-72 max-w-[95%] text-base text-gray-600'>We need to know a few things to set up your account.</p>
      </div>
      <div className='w-full flex flex-col relative gap-y-6 items-center'>
        <div className='w-full flex relative items-center flex-col gap-y-4'>
          <div className='flex w-full h-fit gap-x-4'>
            <div className='w-full flex flex-col'>
              <Input
                onChange={(e) => handleOnChange(e)}
                value={formData.firstName}
                autoComplete='off'
                placeholder={`First Name`}
                name='firstName'
                variant='bordered'
                isInvalid={error?.firstName ? true : false}
                type='text'
                errorMessage={error?.firstName}
                classNames={{
                  inputWrapper: "!h-11 !px-4 !rounded-lg  border !transition-all data-[hover=true]:border-gray-300 group-data-[focus=true]:!border-brand-700 group-data-[invalid=true]:border-error group-data-[focus=true]:!border-2 !shadow-main",
                  input: "!text-base overflow-hidden capitalize !font-medium placeholder:!font-normal placeholder:!text-gray-500  !text-black",
                }}
              />
            </div>
            <div className='w-full flex flex-col'>
              <Input
                onChange={(e) => handleOnChange(e)}
                value={formData.lastName}
                autoComplete='off'
                placeholder={`Last Name`}
                name='lastName'
                variant='bordered'
                isInvalid={error?.lastName ? true : false}
                type='text'
                errorMessage={error?.lastName}
                classNames={{
                  inputWrapper: "!h-11 !px-4 !rounded-lg  border !transition-all data-[hover=true]:border-gray-300 group-data-[focus=true]:!border-brand-700 group-data-[invalid=true]:border-error group-data-[focus=true]:!border-2 !shadow-main",
                  input: "!text-base overflow-hidden capitalize !font-medium placeholder:!font-normal placeholder:!text-gray-500  !text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                }}
              />
            </div>
          </div>
          <div className='w-full flex flex-col'>
            <Input
              onChange={(e) => {
                handleOnChange(e);
                validateUsername(e);
              }}
              value={formData.userName}
              autoComplete='off'
              placeholder={`Username`}
              name='userName'
              variant='bordered'
              isInvalid={error?.userName ? true : false}
              type='text'
              errorMessage={error?.userName}
              classNames={{
                inputWrapper: "!h-11 !px-4 !rounded-lg  border !transition-all data-[hover=true]:border-gray-300 group-data-[focus=true]:!border-brand-700 group-data-[invalid=true]:border-error group-data-[focus=true]:!border-2 !shadow-main",
                input: "!text-base overflow-hidden !font-medium placeholder:!font-normal placeholder:!text-gray-500  !text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
              }}
            />
          </div>
          <div className='w-full h-fit gap-y-1 flex flex-col'>
            <div className='w-full flex relative'>
              <Input
                onChange={(e) => {
                  handleOnChange(e);
                  validatePassword(e);
                }}
                value={formData.password}
                autoComplete='off'
                placeholder={`Create password`}
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
                type={showPassword.main ? "text" : "password"}
                classNames={{
                  inputWrapper: "!h-11 !px-4 !rounded-lg  border !transition-all data-[hover=true]:border-gray-300 group-data-[focus=true]:!border-brand-700 group-data-[invalid=true]:border-error group-data-[focus=true]:!border-2 !shadow-main",
                  input: "!text-base overflow-hidden !font-medium placeholder:!font-normal placeholder:!text-gray-500  !text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                }}
              />
            </div>
            <span className={`text-gray-600 ${error.password && "text-error"} ${passwordRegrex.test(formData?.password as string) && "text-success"} text-xs`}>{`(Min. 8 characters with a letter and a number)`}</span>
          </div>
          <div className='w-full h-fit gap-y-1 flex flex-col'>
            <div className='w-full flex relative'>
              <Input
                onChange={(e) => {
                  handleOnChange(e);
                  validatePasswordConfirm(e);
                }}
                value={formData.passwordConfirm}
                autoComplete='off'
                placeholder={`Confirm password`}
                name='passwordConfirm'
                variant='bordered'
                endContent={
                  <div className='size-fit cursor-pointer'>
                    {showPassword.confirm ? (
                      <div
                        onClick={() =>
                          setShowPassword((prev) => ({
                            ...prev,
                            confirm: false,
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
                            confirm: true,
                          }))
                        }
                      >
                        <EyeOff className='stroke-gray-400 size-5' />
                      </div>
                    )}
                  </div>
                }
                isInvalid={error?.passwordConfirm ? true : false}
                type={showPassword.confirm ? "text" : "password"}
                errorMessage={error?.passwordConfirm}
                classNames={{
                  inputWrapper: "!h-11 !px-4 !rounded-lg  border !transition-all data-[hover=true]:border-gray-300 group-data-[focus=true]:!border-brand-700 group-data-[invalid=true]:border-error group-data-[focus=true]:!border-2 !shadow-main",
                  input: "!text-base overflow-hidden !font-medium placeholder:!font-normal placeholder:!text-gray-500  !text-black [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <Button
        spinner={
          <div className='size-5'>
            <Spinner className='text-white' />
          </div>
        }
        isLoading={isFetching}
        onPress={handleContinue}
        disableRipple
        className='h-11 gap-x-[6px] w-full !outline-none shadow-main flex justify-center flex-none items-center px-[18px] py-3 !min-w-auto border-none bg-primary_fixed data-[hover=true]:!bg-brand-700 !opacity-100 transition-colors rounded-lg '
      >
        <span className='text-white  text-base font-semibold'>Get started</span>
      </Button>
    </motion.div>
  );
}
