import React, { useEffect, useState, useContext, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { User_01 } from "@/appIcons";
import { signupFormTypes, cookiesType, pathsEnum } from "@/types";
import { useSignupContext } from "@/context/SignupContext";
import { Select, SelectItem } from "@nextui-org/select";
import { DateInput } from "@nextui-org/react";
import { extractData } from "@/lib/helpers";
import { apiRequest, apiRequestAxios } from "@/lib/serverRequest";
import { useRouter } from "next/navigation";
import { getSession } from "@/cookies";
import Spinner from "@/components/loadingScreens/Spinner";
import { motion } from "framer-motion";
import { useGlobal } from "@/context/GlobalContext";
import { useDebouncedCallback } from "use-debounce";
import { Button } from "@nextui-org/button";
import { dobRegrex } from "@/lib/constants";

export default function ProfileSetupScreen() {
  const { formData, setFormData } = useSignupContext();
  const [apiData, setApiData] = useState<{ countries: any; states: any; LGA: any }>({ countries: [], states: [], LGA: [] });
  const [error, setError] = useState<{ gender: string | undefined; country: string | undefined; state: string | undefined; LGA: string | undefined; dob: string | undefined }>({
    gender: undefined,
    country: undefined,
    state: undefined,
    LGA: undefined,
    dob: undefined,
  });
  const [session, setSession] = useState<cookiesType>();
  const router = useRouter();
  const { setToast, setAppUser } = useGlobal();
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const getUserSession = async () => {
      const session = await getSession();
      //console.log(session);
      if (session) {
        setSession(session.user);
      } else {
        router.replace(pathsEnum.email);
      }
    };
    const fetchCountries = async () => {
      const result = await apiRequest("countries", "GET");
      if (result?.error) {
        setToast({ open: true, state: "error", content: "check your network connection" });
        fetchCountries();
      } else if (result?.status === "success") {
        setApiData((prev) => ({
          ...prev,
          countries: result.countries.filter((item: any) => item.iso_code !== "all"),
        }));
      } else {
        setToast({ open: true, state: "error", content: result?.message });
      }
    };
    fetchCountries();
    getUserSession();
    router.prefetch(pathsEnum.home);
    router.prefetch(pathsEnum.referal);
  }, []);

  const handleOnChange = (e?: any, value?: any) => {
    setFormData((prev: signupFormTypes) => ({
      ...prev,
      [e.target.name]: e.target.name === "dob" ? value : e.target.value,
    }));
    setError((prev) => ({
      ...prev,
      [e.target.name]: undefined,
    }));
  };

  const handlePhotoSelect = (e: any) => {
    setFormData((prev: signupFormTypes) => ({
      ...prev,
      [e.target.name]: e.target.files[0],
    }));
  };

  const profilePicPreview = useMemo(() => {
    if (formData.profilePicture) {
      return URL.createObjectURL(formData.profilePicture as File);
    }
    return "";
  }, [formData.profilePicture]);

  const validateDob = useDebouncedCallback((value) => {
    if (!dobRegrex.test(value.toString())) {
      setError((prev) => {
        return {
          ...prev,
          dob: "Please enter a valid date format",
        };
      });
    }
  }, 1000);

  useEffect(() => {
    setApiData((prev) => ({
      ...prev,
      LGA: [],
    }));
    const fetchLGA = async () => {
      const result = await apiRequest("states/lga", "POST", {
        state: formData.state?.toLowerCase(),
      });
      if (result?.error) {
        fetchLGA();
      } else if (result?.status === "success") {
        setApiData((prev) => ({
          ...prev,
          LGA: result.state_lga,
        }));
      } else {
        setToast({ open: true, state: "error", content: result?.message });
      }
    };

    formData.state && fetchLGA();
  }, [formData?.state]);

  useEffect(() => {
    setApiData((prev) => ({
      ...prev,
      states: [],
      LGA: [],
    }));
    const fetchStates = async () => {
      const result = await apiRequest("states", "POST", {
        country: formData.country?.toLowerCase(),
      });
      if (result?.error) {
        fetchStates();
      } else if (result?.status === "success") {
        setApiData((prev) => ({
          ...prev,
          states: result.states.filter((item: any) => item?.state_code !== "all"),
        }));
      } else {
        setToast({ open: true, state: "error", content: result?.message });
      }
    };

    formData.country && fetchStates();
  }, [formData?.country]);

  const handleContinue = async () => {
    const interestedObj: any = extractData(formData, ["gender", "country", "state", "LGA", "dob", "profilePicture"]);
    if (Object.values(interestedObj).every((value: any) => value === undefined)) {
      router.push(pathsEnum.referal);
      return;
    } else if (Object.values(error).every((value: any) => value === undefined)) {
      const form = new FormData();
      formData.profilePicture && form.append("profile_picture", formData.profilePicture);
      formData.gender && form.append("gender", formData.gender);
      formData.dob && form.append("birthday", formData.dob.toString());
      formData.country && form.append("country", formData.country);
      formData.state && form.append("state", formData.state);
      formData.LGA && form.append("local_government", formData.LGA);
      setIsFetching(true);
      //console.log(session);
      const result = await apiRequestAxios("profile/edit", "POST", form, {
        Authorization: `Bearer ${session?.access_token}`,
      });
      //console.log(result);
      if (result?.error) {
        setToast({ open: true, state: "error", content: result?.error });
      } else if (result?.status === "success") {
        setToast({ open: true, state: "success", content: result?.message });
        setAppUser(result?.user_data);
        const navigate = async () => {
          router.push(pathsEnum.referal);
        };
        navigate();
      } else {
        setToast({ open: true, state: "error", content: "Something went wrong" });
      }

      setIsFetching(false);
    }
  };

  return (
    <>
      {session ? (
        <motion.div layout initial={{ opacity: 0, x: 4 }} animate={{ opacity: 1, x: 0 }} transition={{ type: "spring" }} className='sm:w-[520px] w-[90vw] relative h-fit bg-white flex flex-col gap-y-8 items-center rounded-xl px-6 py-12'>
          <div className='flex flex-col relative w-full gap-y-1 items-center'>
            <h1 className='text-2xl font-bold text-gray-900'>Welcome onboard!</h1>
            <p className='text-center w-[95%] max-w-[95%] text-base text-gray-600'>{`Hi ${session.firstname}, we are excited to have you onboard! Finish up your profile set up.`}</p>
          </div>
          <>
            <label htmlFor='image' className='w-full flex cursor-pointer items-center gap-x-3 justify-center'>
              <div className=' flex items-center justify-center size-12 overflow-hidden relative rounded-full bg-gray-100 border border-gray-200'>{formData.profilePicture ? <Image src={profilePicPreview} width={500} height={500} className='absolute inset-0 w-full h-full object-cover' alt='profilePicture' /> : <User_01 className='size-7' />}</div>
              <span className='text-primary_fixed font-semibold transition-colors hover:text-brand-700  text-base'>Upload photo</span>
            </label>
            <input type='file' id='image' onChange={handlePhotoSelect} name='profilePicture' accept='image/png, image/jpeg, image/jpg' className='hidden' />
          </>
          <div className='w-full flex flex-col relative gap-y-6 items-center'>
            <div className='w-full flex relative items-center flex-col gap-y-4'>
              <div className='w-full flex relative flex-col'>
                <Select
                  selectedKeys={[formData.gender as any]}
                  onChange={(e) => handleOnChange(e)}
                  name='gender'
                  classNames={{
                    trigger: "!h-11 !px-4 !rounded-lg border border-gray-300 data-[focus=true]:border-gray-300 data-[hover=true]:border-gray-300 data-[invalid=true]:border-error data-[open=true]:!border-brand-700 data-[open=true]:!border-2  !shadow-main",
                    value: "!text-base !text-gray-500 group-data-[has-value=true]:!font-medium group-data-[has-value=true]:!text-black",
                    selectorIcon: "stroke-gray-500 size-5",
                  }}
                  variant='bordered'
                  placeholder='Gender'
                  className='w-full'
                  isInvalid={error?.gender ? true : false}
                  errorMessage={error?.gender}
                >
                  <SelectItem classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white !outline-none data-[selected=true]:!text-primary_fixed", title: "text-base" }} key='Male'>{`Male`}</SelectItem>
                  <SelectItem classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white !outline-none data-[selected=true]:!text-primary_fixed", title: "text-base" }} key='Female'>{`Female`}</SelectItem>
                </Select>
              </div>
              <div className='w-full flex  flex-col'>
                <div className='w-full flex relative'>
                  <DateInput
                    onChange={(value) => {
                      if (value) {
                        handleOnChange({ target: { name: "dob" } }, value);
                        validateDob(value);
                      }
                    }}
                    value={formData.dob}
                    name='dob'
                    variant='bordered'
                    isInvalid={error?.dob ? true : false}
                    startContent={
                      <div className='flex items-center border-r border-gray-300 px-4 text-blue-gray-500 h-11'>
                        <span className='text-gray-500 text-nowrap text-base'>Date of Birth</span>
                      </div>
                    }
                    errorMessage={error?.dob}
                    classNames={{
                      inputWrapper: "!h-11 !px-4 !pl-0 !rounded-lg border border-gray-300 hover:border-gray-300 transition-all data-[invalid=true]:border-error focus-within:!border-primary_fixed focus-within:!border-2 !shadow-main",
                      segment: "text-base data-[editable=true]:!text-black !text-gray-500  uppercase data-[placeholder=true]:!font-normal !font-medium data-[placeholder=true]:!text-gray-500 focus:!bg-gray-100",
                      input: "text-base justify-end",
                    }}
                  />
                </div>
              </div>
              <div className='w-full flex relative flex-col'>
                <Select
                  selectedKeys={[formData.country as any]}
                  onChange={(e) => handleOnChange(e)}
                  name='country'
                  isInvalid={error?.country ? true : false}
                  errorMessage={error?.country}
                  classNames={{
                    trigger: "!h-11 !px-4 !rounded-lg border border-gray-300 data-[focus=true]:border-gray-300 data-[hover=true]:border-gray-300 data-[invalid=true]:border-error data-[open=true]:!border-brand-700 data-[open=true]:!border-2  !shadow-main",
                    value: "!text-base !text-gray-500 group-data-[has-value=true]:!font-medium group-data-[has-value=true]:!text-black",
                    selectorIcon: "stroke-gray-500 size-5",
                    popoverContent: "!min-h-[200px] !max-h-[70svh] justify-start",
                  }}
                  variant='bordered'
                  placeholder='Country'
                  className='w-full'
                >
                  {apiData.countries.length > 0 ? (
                    apiData.countries.map((item: any) => {
                      return (
                        <SelectItem classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white !outline-none data-[selected=true]:!text-primary_fixed", title: "text-base" }} key={item.name}>
                          {item.name}
                        </SelectItem>
                      );
                    })
                  ) : (
                    <SelectItem isReadOnly hideSelectedIcon classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white !outline-none data-[selected=true]:!text-primary_fixed flex h-[200px] items-center justify-center", title: "text-base" }} key=''>
                      <Spinner pathClassName='!text-gray-300' className='!fill-primary_fixed' />
                    </SelectItem>
                  )}
                </Select>
              </div>
              <div className='flex relative w-full h-fit gap-x-4'>
                <div className='w-full flex relative flex-col'>
                  <Select
                    selectedKeys={[formData.state as any]}
                    onChange={(e) => handleOnChange(e)}
                    name='state'
                    isInvalid={error?.state ? true : false}
                    errorMessage={error?.state}
                    classNames={{
                      trigger: "!h-11 !px-4 !rounded-lg border border-gray-300 data-[focus=true]:border-gray-300 data-[hover=true]:border-gray-300 data-[invalid=true]:border-error data-[open=true]:!border-brand-700 data-[open=true]:!border-2  !shadow-main",
                      value: "!text-base !text-gray-500 group-data-[has-value=true]:!font-medium group-data-[has-value=true]:!text-black",
                      selectorIcon: "stroke-gray-500 size-5",
                      popoverContent: "!min-w-[250px] min-h-[200px] !max-h-[70svh] justify-start",
                    }}
                    isDisabled={formData?.country ? false : true}
                    variant='bordered'
                    placeholder='State'
                    className='w-full'
                  >
                    {apiData.states.length > 0 ? (
                      apiData.states.map((item: any) => {
                        return (
                          <SelectItem classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white !outline-none data-[selected=true]:!text-primary_fixed", title: "text-base" }} key={item.name}>
                            {item.name}
                          </SelectItem>
                        );
                      })
                    ) : (
                      <SelectItem isReadOnly hideSelectedIcon classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white !outline-none data-[selected=true]:!text-primary_fixed flex h-[200px] items-center justify-center", title: "text-base" }} key=''>
                        <Spinner pathClassName='!text-gray-300' className='!fill-primary_fixed' />
                      </SelectItem>
                    )}
                  </Select>
                </div>
                <div className='w-full flex flex-col'>
                  <Select
                    popoverProps={{
                      placement: "bottom-end",
                    }}
                    selectedKeys={[formData.LGA as any]}
                    onChange={(e) => handleOnChange(e)}
                    name='LGA'
                    isDisabled={formData.state ? false : true}
                    isInvalid={error?.LGA ? true : false}
                    errorMessage={error?.LGA}
                    classNames={{
                      trigger: "!h-11 !px-4 !rounded-lg border border-gray-300 data-[focus=true]:border-gray-300 data-[hover=true]:border-gray-300 data-[invalid=true]:border-error data-[open=true]:!border-brand-700 data-[open=true]:!border-2  !shadow-main",
                      value: "!text-base !text-gray-500 group-data-[has-value=true]:!font-medium group-data-[has-value=true]:!text-black",
                      selectorIcon: "stroke-gray-500 size-5 ",
                      popoverContent: "!min-w-[250px] relative sm:!right-0 xs:!right-[60px] xxs:!right-[100px] !right-[130px]",
                      base: "",
                    }}
                    variant='bordered'
                    placeholder='LGA'
                    className='w-full'
                  >
                    {apiData.LGA.length > 0 ? (
                      apiData.LGA.map((item: any) => {
                        return (
                          <SelectItem classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white !outline-none data-[selected=true]:!text-primary_fixed", title: "text-base" }} key={item}>
                            {item}
                          </SelectItem>
                        );
                      })
                    ) : (
                      <SelectItem isReadOnly hideSelectedIcon classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white !outline-none data-[selected=true]:!text-primary_fixed flex h-[200px] items-center justify-center", title: "text-base" }} key=''>
                        <Spinner pathClassName='!text-gray-300' className='!fill-primary_fixed' />
                      </SelectItem>
                    )}
                  </Select>
                </div>
              </div>
            </div>
          </div>
          <Button
            spinner={
              <div className='size-5'>
                <Spinner pathClassName='!text-gray-300' className='!fill-white' />
              </div>
            }
            isLoading={isFetching}
            onPress={handleContinue}
            disableRipple
            className='h-11 gap-x-[6px] w-full !outline-none shadow-main flex justify-center flex-none items-center px-[18px] py-3 !min-w-auto border-none bg-primary_fixed data-[hover=true]:!bg-brand-700 !opacity-100 transition-colors rounded-lg '
          >
            <span className='text-white  text-base font-semibold'>Continue</span>
          </Button>
          <div className='w-full flex justify-center gap-x-1 items-center'>
            <span className='text-gray-600 font-normal text-sm'>I will do this later</span>
            <Link href='/home' className='text-primary_fixed font-bold text-sm hover:text-brand-700 animate-duration-300 transition-colors cursor-pointer'>
              Skip
            </Link>
          </div>
        </motion.div>
      ) : (
        <div className='sm:w-[520px] w-[90vw] min-h-[300px] h-fit bg-white flex flex-col gap-y-8 items-center justify-center rounded-xl px-6 py-12'>
          <Spinner pathClassName='!text-gray-300' className='!fill-primary_fixed' />
        </div>
      )}
    </>
  );
}
