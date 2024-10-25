"use client";
import React, { useEffect, useCallback, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Facebook } from "@/svgAssets";
import { Wallet_02, LayersTwo_01, UploadCloud_02, Trash_01 } from "@/appIcons";
import Spinner from "@/components/loadingScreens/Spinner";
import { advertisePageDynamicPathTypes, advertisePageDynamicPaths, modalTypes, createAdFormTypes } from "@/types";
import { motion, AnimatePresence } from "framer-motion";
import { Select, SelectSection, SelectItem } from "@nextui-org/select";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import getSymbolFromCurrency from "currency-symbol-map";
import { useDebounce, useDebouncedCallback } from "use-debounce";
import { Input } from "@nextui-org/input";
import OrderSummary_modal from "@/components/modals/OrderSummary_modal";
import SelectPaymentMethod from "@/components/modals/SelectPaymentMethod";
import GenericTask from "@/components/GenericTask";
const numeral = require("numeral");

export default function Page({ params }: { params: { stage: string } }) {
  const pathname = usePathname() as advertisePageDynamicPathTypes;
  const [formData, setFormData] = useState<createAdFormTypes>({ platform: "Facebook", location: undefined, state: undefined, noOfPosts: undefined, gender: undefined, religion: undefined, images: [] });
  const [fee, setFee] = useState<string>("10000.00");
  const [openModals, setOpenModals] = useState<modalTypes>({ orderSummary: false, selectPaymentMethod: false });
  const router = useRouter();

  const onDrop = useCallback((acceptedFiles: any) => {
    console.log(acceptedFiles);
    setFormData((prev: createAdFormTypes) => ({
      ...prev,
      images: [...prev.images, URL.createObjectURL(acceptedFiles[0])],
    }));
  }, []);

  const { acceptedFiles, getRootProps, getInputProps, isFocused, isDragAccept, isDragReject, isDragActive } = useDropzone({
    maxFiles: 1,
    multiple: false,
    onDrop,
    accept: {
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
      "image/gif": [],
    },
  });

  const handleOnSelect = (e: any) => {
    setFormData((prev: createAdFormTypes) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRemoveImage = (image: any) => {
    setFormData((prev: createAdFormTypes) => ({
      ...prev,
      images: prev.images.filter((item: any) => item !== image),
    }));
  };

  const debounced = useDebouncedCallback((e) => {
    setFee(numeral(fee).format("0,0.00"));
  }, 500);

  const handleContinue = useCallback(() => {
    setOpenModals((prev: modalTypes) => ({ ...prev, selectPaymentMethod: false }));
    router.push("/advertise/history");
  }, []);

  return (
    <>
      {/* {advertisePageDynamicPaths.includes(pathname) ? ( */}
        <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring" }} layout className='w-full flex sm:p-8 p-4 flex-col h-fit items-center rounded-xl border border-gray-200 bg-white'>
          <div className='flex flex-col h-fit items-center max-w-[510px] gap-y-6'>
            <GenericTask />
            <div className='w-full flex relative flex-col'>
              <Select
                selectedKeys={[formData?.platform as any]}
                onChange={(e) => handleOnSelect(e)}
                isDisabled
                name='plaform'
                label={
                  <>
                    Select Platform <span className='text-primary_fixed'>*</span>
                  </>
                }
                labelPlacement='outside'
                classNames={{
                  trigger: "!h-11 !px-4 !rounded-lg border !border-gray-300 data-[open=true]:!border-2 data-[open=true]:!border-primary_fixed !shadow-main data-[disabled=true]:!bg-gray-50",
                  value: "!text-base !text-gray-500  group-data-[has-value=true]:!font-medium group-data-[has-value=true]:!text-black",
                  selectorIcon: "stroke-gray-400 size-5",
                  popoverContent: "!max-w-[300px]",
                  label: "text-gray-700 text-sm font-medium ",
                  base: "!opacity-100",
                }}
                variant='bordered'
                placeholder='platform'
                className='w-full'
              >
                <SelectItem classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white !outline-none data-[selected=true]:!text-primary_fixed", title: "text-base" }} key='Facebook'>{`Facebook`}</SelectItem>
              </Select>
            </div>
            <div className='w-full flex relative flex-col'>
              <Select
                selectedKeys={[formData?.location as any]}
                onChange={(e) => handleOnSelect(e)}
                name='location'
                label={
                  <>
                    Select Location <span className='text-primary_fixed'>*</span>
                  </>
                }
                labelPlacement='outside'
                classNames={{
                  trigger: "!h-11 !px-4 !rounded-lg border !border-gray-300 data-[open=true]:!border-2 data-[open=true]:!border-primary_fixed !shadow-main",
                  value: "!text-base !text-gray-500 group-data-[has-value=true]:!font-medium group-data-[has-value=true]:!text-black",
                  selectorIcon: "stroke-gray-400 size-5",
                  popoverContent: "!max-w-[300px]",
                  label: "text-gray-700 text-sm font-medium",
                }}
                variant='bordered'
                placeholder='Select'
                className='w-full'
              >
                <SelectItem classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white !outline-none data-[selected=true]:!text-primary_fixed", title: "text-base" }} key='Nigeria'>{`Nigeria`}</SelectItem>
              </Select>
            </div>
            <div className='w-full flex gap-y-[6px] relative flex-col'>
              <Select
                selectedKeys={[formData?.state as any]}
                onChange={(e) => handleOnSelect(e)}
                name='state'
                label={
                  <>
                    State <span className='text-primary_fixed'>*</span>
                  </>
                }
                labelPlacement='outside'
                classNames={{
                  trigger: "!h-11 !px-4 !rounded-lg border !border-gray-300 data-[open=true]:!border-2 data-[open=true]:!border-primary_fixed !shadow-main",
                  value: "!text-base !text-gray-500 group-data-[has-value=true]:!font-medium group-data-[has-value=true]:!text-black",
                  selectorIcon: "stroke-gray-400 size-5",
                  popoverContent: "!max-w-[300px]",
                  label: "text-gray-700 text-sm font-medium",
                }}
                variant='bordered'
                placeholder='Select'
                className='w-full'
              >
                <SelectItem classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white !outline-none data-[selected=true]:!text-primary_fixed", title: "text-base" }} key='Abia'>{`Abia`}</SelectItem>
                <SelectItem classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white !outline-none data-[selected=true]:!text-primary_fixed", title: "text-base" }} key='Imo'>{`Imo`}</SelectItem>
                <SelectItem classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white !outline-none data-[selected=true]:!text-primary_fixed", title: "text-base" }} key='Lagos'>{`Lagos`}</SelectItem>
                <SelectItem classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white !outline-none data-[selected=true]:!text-primary_fixed", title: "text-base" }} key='Abuja'>{`Abuja`}</SelectItem>
              </Select>
              <span className='text-sm text-gray-600 from-normal'>Enter the desired Number of Instagram Advert Post you want Us to get for you.</span>
            </div>
            <div className='w-full h-fit flex relative flex-col'>
              <Select
                selectedKeys={[formData?.noOfPosts as any]}
                onChange={(e) => handleOnSelect(e)}
                name='noOfPosts'
                label={
                  <>
                    Number of Twitter Advert Post you want <span className='text-primary_fixed'>*</span>
                  </>
                }
                labelPlacement='outside'
                classNames={{
                  trigger: "!h-11 !px-4 !rounded-lg border !border-gray-300 data-[open=true]:!border-2 data-[open=true]:!border-primary_fixed !shadow-main",
                  value: "!text-base !text-gray-500 group-data-[has-value=true]:!font-medium group-data-[has-value=true]:!text-black",
                  selectorIcon: "stroke-gray-400 size-5",
                  popoverContent: "!max-w-[300px]",
                  label: "text-gray-700 text-sm text-start font-medium",
                }}
                variant='bordered'
                placeholder='0'
                className='w-full'
              >
                <SelectItem classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white !outline-none data-[selected=true]:!text-primary_fixed", title: "text-base" }} key='0'>{`0`}</SelectItem>
                <SelectItem classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white !outline-none data-[selected=true]:!text-primary_fixed", title: "text-base" }} key='1'>{`1`}</SelectItem>
                <SelectItem classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white !outline-none data-[selected=true]:!text-primary_fixed", title: "text-base" }} key='2'>{`2`}</SelectItem>
                <SelectItem classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white !outline-none data-[selected=true]:!text-primary_fixed", title: "text-base" }} key='3'>{`3`}</SelectItem>
              </Select>
            </div>
            <div className='w-full flex relative flex-col'>
              <Select
                selectedKeys={[formData?.gender as string]}
                onChange={(e) => handleOnSelect(e)}
                name='gender'
                label={
                  <>
                    Select Gender <span className='text-primary_fixed'>*</span>
                  </>
                }
                labelPlacement='outside'
                classNames={{
                  trigger: "!h-11 !px-4 !rounded-lg border !border-gray-300 data-[open=true]:!border-2 data-[open=true]:!border-primary_fixed !shadow-main",
                  value: "!text-base !text-gray-500 group-data-[has-value=true]:!font-medium group-data-[has-value=true]:!text-black",
                  selectorIcon: "stroke-gray-400 size-5",
                  popoverContent: "!max-w-[300px]",
                  label: "text-gray-700 text-sm font-medium",
                }}
                variant='bordered'
                placeholder='Select'
                className='w-full'
              >
                <SelectItem classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white !outline-none data-[selected=true]:!text-primary_fixed", title: "text-base" }} key='Male'>{`Male`}</SelectItem>
                <SelectItem classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white !outline-none data-[selected=true]:!text-primary_fixed", title: "text-base" }} key='Female'>{`Female`}</SelectItem>
              </Select>
            </div>
            <div className='w-full flex relative flex-col'>
              <Select
                selectedKeys={[formData?.religion as string]}
                onChange={(e) => handleOnSelect(e)}
                name='religion'
                label={
                  <>
                    Select Religion <span className='text-primary_fixed'>*</span>
                  </>
                }
                labelPlacement='outside'
                classNames={{
                  trigger: "!h-11 !px-4 !rounded-lg border !border-gray-300 data-[open=true]:!border-2 data-[open=true]:!border-primary_fixed !shadow-main",
                  value: "!text-base !text-gray-500 group-data-[has-value=true]:!font-medium group-data-[has-value=true]:!text-black",
                  selectorIcon: "stroke-gray-400 size-5",
                  popoverContent: "!max-w-[300px]",
                  label: "text-gray-700 text-sm font-medium",
                }}
                variant='bordered'
                placeholder='Select'
                className='w-full'
              >
                <SelectItem classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white !outline-none data-[selected=true]:!text-primary_fixed", title: "text-base" }} key='Christian'>{`Christian`}</SelectItem>
                <SelectItem classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white !outline-none data-[selected=true]:!text-primary_fixed", title: "text-base" }} key='Muslim'>{`Muslim`}</SelectItem>
              </Select>
            </div>
            <h1 className='text-gray-700 text-sm font-medium'>Upload a Photo of the Advert You want people to post on their social media post accounts like Whatsapp, Facebook, Instagram, Twitter etc</h1>
            <div {...getRootProps()} className={`flex-col ${isDragActive && "!border-primary_fixed !bg-gray-50"} gap-y-4 py-4 px-6 flex items-center justify-center w-full rounded-xl h-[126px] border border-gray-200 bg-white hover:bg-gray-50 transition-colors cursor-pointer`}>
              <input {...getInputProps()} />
              <div className='size-10 border shadow-main flex-none border-gray-200 bg-white rounded-lg flex items-center justify-center'>
                <UploadCloud_02 />
              </div>
              <div className='w-full flex gap-y-1 flex-col items-center'>
                <h1 className='text-sm text-gray-600 font-semibold'>
                  <span className='text-primary_fixed'>Click to upload</span> or drag and drop
                </h1>
                <p className='text-gray-600 text-center text-xs font-normal'>{`JPG, MPEG4 or GIF (max. 800x400px)`}</p>
              </div>
            </div>
            <div className='w-full flex gap-6 flex-wrap'>
              <AnimatePresence>
                {formData?.images?.map((image: any, index: number) => {
                  return (
                    <motion.div key={index} initial={{ opacity: 0, x: 4 }} exit={{ opacity: 0, x: 4 }} animate={{ opacity: 1, x: 0 }} transition={{ type: "spring" }} className='flex rounded-xl relative border overflow-hidden border-gray-200 bg-gray-50 size-[104px]'>
                      <Button onPress={() => handleRemoveImage(image)} disableRipple className='bg-black/20 absolute z-20 top-3 right-3 !outline-none !min-w-fit w-10 rounded-md hover:bg-black/30 transition-colors flex data-[hover=true]:!bg-black/30 !opacity-100 items-center justify-center p-0'>
                        <Trash_01 />
                      </Button>
                      <Image src={image} width={500} height={500} className='absolute inset-0 w-full h-full object-cover' alt='advert image' />
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
            <div className='w-full flex gap-y-3 py-6 bg-gray-50 flex-col'>
              <div className='w-full mt-6 items-center flex gap-x-2'>
                <hr className='h-[1px] w-full bg-gray-200 rounded-full' />
                <span className='text-sm text-nowrap text-gray-600 font-medium'>Total Pay</span>
                <hr className='h-[1px] w-full bg-gray-200 rounded-full' />
              </div>
              <div className='w-full flex  items-center sm:px-8 px-4'>
                <div className='w-full flex relative'>
                  <Input
                    startContent={
                      <div className='pointer-events-none flex items-center'>
                        <span className='text-gray-500 font-bold text-base'>{getSymbolFromCurrency("NGN")}</span>
                      </div>
                    }
                    type='text'
                    placeholder={"0.00"}
                    isDisabled
                    variant='bordered'
                    value={fee}
                    onChange={(e: any) => {
                      if (/^[0-9.,]*$/.test(e.target.value)) {
                        setFee(e.target.value);
                        debounced(e);
                      } else return;
                    }}
                    classNames={{
                      base: "data-[disabled=true]:!opacity-100",
                      inputWrapper: "!h-11 !px-4 !rounded-l-lg !rounded-r-none border !border-gray-300 !transition-colors data-[hover=true]:border-gray-400 group-data-[focus=true]:!border-brand-700 group-data-[focus=true]:!border-2 !shadow-main",
                      input: "!text-base overflow-hidden placeholder:!text-gray-500 !font-bold !text-gray-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",
                    }}
                  />
                  <Button onPress={() => setOpenModals((prev: modalTypes) => ({ ...prev, orderSummary: true }))} disableRipple className='h-11 gap-x-[6px] !outline-none shadow-main flex flex-none items-center px-[18px] py-3 !min-w-auto border-none bg-primary_fixed data-[hover=true]:!bg-brand-700 !opacity-100 transition-colors rounded-r-lg rounded-l-none'>
                    <span className='text-white  text-base font-semibold'>Continue</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      {/* ) : (
        <div className='w-full sm:px-6 py-6 px-3 gap-y-6 rounded-xl flex flex-col items-center justify-center flex-none h-[80svh] border border-outline_varient bg-white'>
          <Spinner />
        </div>
      )} */}

      {
        // modals...
        <>
          <OrderSummary_modal openModals={openModals} formData={formData} setOpenModals={setOpenModals} />
          <SelectPaymentMethod openModals={openModals} setOpenModals={setOpenModals} action={handleContinue} />
        </>
      }
    </>
  );
}
