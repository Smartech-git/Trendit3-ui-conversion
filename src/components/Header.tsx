"use client";
import React, { useState } from "react";
import { User_01, LogIn_03, Settings_01, Bell_01, Menu_01, XClose, ChevronLeft, Search, FilterAlt } from "@/appIcons";
import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import Notifications from "./headerComponents/Notifications";
import { earnPageDynamicPaths, advertisePageDynamicPathTypes, advertisePageDynamicPaths, cookiesType, pathsEnum } from "@/types";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useGlobal } from "@/context/GlobalContext";
import ProfileSkeletonLoader from "./loadingScreens/skeletonLoaders";
import { apiRequest } from "@/lib/serverRequest";
import { getSession, logout } from "@/cookies";
import Image from "next/image";
import Link from "next/link";
interface header_types {
  openDrawer: boolean;
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

const subHeadingBreadCrumbRootPaths: Array<string> = [...earnPageDynamicPaths, ...advertisePageDynamicPaths];

export default function Header({ openDrawer, setOpenDrawer }: header_types) {
  const [openNot, setOpenNot] = useState(false);
  const pathname = usePathname();
  const pathnameSegments = usePathname().split("/").slice(1, 3);
  const { appUser, setToast } = useGlobal();
  const router = useRouter();

  const handleLogout = async () => {
    const session: { user: cookiesType } = await getSession();
    const result = await apiRequest("logout", "DELETE", null, {
      Authorization: `Bearer ${session.user.access_token}`,
    });
    if (result?.error) {
      setToast({ open: true, state: "error", content: "check your network connection" });
    } else if (result?.status === "success") {
      setToast({ open: true, state: "success", content: result?.message });
      const navigate = async () => {
        await logout();
        router.replace(pathsEnum.login);
      };
      navigate();
    } else {
      const navigate = async () => {
        await logout();
        router.replace(pathsEnum.login);
      };
      navigate();
    }
  };

  return (
    <header className={`${subHeadingBreadCrumbRootPaths.includes(pathname) && "!pb-0"} w-full flex flex-col gap-y-3 absolute z-50 backdrop-blur-lg backdrop-saturate-150 bg-neutral-100/70 top-0 2xl:px-8 sm:px-6 2xl:py-8 sm:py-6 px-4 py-4`}>
      <div className='w-full flex justify-between items-center'>
        <div className='h-full items-center flex gap-x-4'>
          <div onClick={() => setOpenDrawer(true)} className='xl:hidden cursor-pointer flex'>
            <Menu_01 className='stroke-black' />
          </div>
          {!appUser ? (
            <ProfileSkeletonLoader />
          ) : (
            <div className='h-full cursor-pointer items-center flex gap-x-3'>
              <div className='sm:size-12 size-10 relative'>
                <div className='size-full flex items-center relative justify-center overflow-hidden rounded-full border border-black/[0.08] bg-gray-100'>{appUser?.profile_picture ? <Image src={appUser?.profile_picture} width={500} height={500} className='absolute inset-0 w-full h-full object-cover' alt='profilePicture' /> : <User_01 className='sm:size-7 size-5' />}</div>
                <div className='sm:size-3 size-[10px]  box-content absolute right-0 bottom-0 rounded-full border-1.5 bg-green-600 border-white' />
              </div>
              <div className='sm:flex hidden flex-col'>
                <h1 className='text-base font-semibold capitalize text-gray-700'>{appUser?.full_name}</h1>
                <h2 className='text-base font-normal text-gray-600'>{appUser?.email}</h2>
              </div>
            </div>
          )}
        </div>
        <div className='h-full gap-x-4 flex items-center'>
          <div className='flex gap-x-1 h-9'>
            <Link href={`/settings`}>
              <Button disableRipple className='bg-white !outline-none !min-w-fit w-10 rounded-md hover:bg-gray-50 transition-colors flex data-[hover=true]:!bg-gray-50 !opacity-100 items-center justify-center p-2'>
                <Settings_01 className='stroke-gray-500 size-5' />
              </Button>
            </Link>
            <Dropdown isOpen={openNot} onClose={() => setOpenNot(false)} backdrop='opaque' radius='md' classNames={{ content: "!border !border-white xs:!w-[370px] xxs:w-[340px] !w-[300px] !min-w-[300px] !p-0", backdrop: "!bg-gray-950/10" }}>
              <DropdownTrigger>
                <Button onClick={() => setOpenNot((prev) => !prev)} disableRipple className='bg-white !outline-none !min-w-fit w-10 rounded-md hover:bg-gray-50 transition-colors flex data-[hover=true]:!bg-gray-50 !opacity-100 items-center justify-center p-2'>
                  <Bell_01 className='stroke-gray-500 size-5' />
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label='Dynamic Actions' classNames={{ base: "!p-0" }}>
                <DropdownItem
                  endContent={
                    <Button onClick={() => setOpenNot(false)} disableRipple className='!bg-transparent outline-none !min-w-9 !w-9 !h-9 rounded-lg lg:hidden transition-colors flex flex-none data-[hover=true]:!bg-gray-50 !opacity-100 items-center justify-center !p-0'>
                      <XClose className='stroke-gray-400 size-5' />
                    </Button>
                  }
                  key='close'
                  isReadOnly
                  className='!px-4 pt-4 pb-0 data-[hover=true]:!bg-white !cursor-default !transition-none'
                ></DropdownItem>
                <DropdownItem isReadOnly closeOnSelect={false} className='!p-0 !w-full h-fit !cursor-default data-[hover=true]:!bg-white !transition-none' key='Main'>
                  <Notifications setOpenNot={setOpenNot} />
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <Button onPress={handleLogout} disableRipple className='h-10 gap-x-[6px] !outline-none flex items-center px-[14px] py-[10px] !min-w-auto border border-gray-300 bg-white data-[hover=true]:!bg-gray-50 !opacity-100 transition-colors rounded-lg shadow-main'>
            <LogIn_03 />
            <span className='text-gray-700 sm:flex hidden text-base font-semibold'>Logout</span>
          </Button>
        </div>
      </div>
      {subHeadingBreadCrumbRootPaths.includes(pathname) && (
        <div className='w-full relative h-[46px] sm:px-9 px-0 flex items-center justify-between py-1'>
          <div className='flex h-full relative items-center gap-x-6'>
            <button onClick={() => router.back()} className='outline-none sm:flex hidden group items-center gap-x-2'>
              <ChevronLeft className='group-hover:fill-gray-700 group-hover:-translate-x-0.5 transition-all' />
              <span className='text-gray-500 font-semibold group-hover:text-gray-700 transition-colors'>Back</span>
            </button>
            <div className='w-[1px] h-[32px] sm:flex hidden bg-gray-200'></div>
            <Breadcrumbs
              separator='/'
              itemClasses={{
                separator: "px-2",
              }}
            >
              {pathnameSegments.map((segment: any, index: number) => {
                return (
                  <BreadcrumbItem onPress={() => router.push(index === 0 ? `/${segment}` : `/earn/${segment}`)} classNames={{ item: `text-gray-500 capitalize data-[current=true]:text-primary_fixed font-medium text-sm` }} key={index === 0 ? `/${segment}` : `/earn/${segment}`}>
                    {segment.split("-").join(" ")}
                  </BreadcrumbItem>
                );
              })}
            </Breadcrumbs>
          </div>
          <div className='flex w-fit flex-none gap-x-6 items-center'>
            <Button disableRipple className='bg-transparent gap-x-1 flex-none !w-fit !min-w-2 !outline-none rounded-md hover:bg-neutral-100 transition-colors flex data-[hover=true]:!bg-neutral-100 !opacity-100 items-center !justify-normal py-[2px] px-1'>
              <Search className='stroke-gray-500 size-4' />
              <span className='text-gray-500 font-medium text-sm'>Search</span>
            </Button>
            <Button disableRipple className='bg-transparent gap-x-1 flex-none !outline-none !w-fit !min-w-2 rounded-md hover:bg-neutral-100 transition-colors flex data-[hover=true]:!bg-neutral-100 !opacity-100 items-center !justify-normal py-[2px] px-1'>
              <FilterAlt className='stroke-gray-500 size-4' />
              <span className='text-gray-500 font-medium text-sm'>Filter</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
