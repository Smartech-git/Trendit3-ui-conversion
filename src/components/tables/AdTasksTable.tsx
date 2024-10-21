"use client";
import React, { useMemo, useCallback, Key, useState } from "react";
import { Button, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, SortDescriptor, Pagination } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/select";
import getSymbolFromCurrency from "currency-symbol-map";
import Spinner from "../loadingScreens/Spinner";
import { Facebook } from "@/svgAssets";
import { ArrowDown, Search, ArrowLeft, ArrowRight_02, User_01 } from "@/appIcons";
import StatusChip from "../macroComponents/StatusChip";
import { useRouter, usePathname } from "next/navigation";
import StatusIndicator from "../macroComponents/StatusIndicator";
import { statuses } from "@/lib/constants";
import { statusTypes } from "@/types";

const rows = [
  {
    key: "1",
    data: "date",
    customer: "name",
    username: "Olivia Rhye",
    proof: "View Screenshot",
    status: "Pending",
  },
  {
    key: "2",
    data: "date",
    customer: "name",
    username: "Olivia Rhye",
    proof: "View Screenshot",
    status: "Cancelled",
  },
  {
    key: "3",
    data: "date",
    customer: "name",
    username: "Olivia Rhye",
    proof: "View Screenshot",
    status: "Paid",
  },
  {
    key: "4",
    data: "date",
    customer: "name",
    username: "Olivia Rhye",
    proof: "View Screenshot",
    status: "Paid",
  },
  {
    key: "5",
    data: "date",
    customer: "name",
    username: "Olivia Rhye",
    proof: "View Screenshot",
    status: "Paid",
  },
  {
    key: "6",
    data: "date",
    customer: "name",
    username: "Olivia Rhye",
    proof: "View Screenshot",
    status: "Refunded",
  },
];

const columns = [
  {
    key: "date",
    label: "Date",
    sortable: false,
  },
  {
    key: "customer",
    label: "Customer",
    sortable: false,
  },
  {
    key: "username",
    label: "Social Media Username",
    sortable: false,
  },
  {
    key: "status",
    label: "Status",
    sortable: false,
  },
  {
    key: "proof",
    label: "Proof",
    sortable: false,
  },
  {
    key: "action",
    label: "Action",
    sortable: false,
  },
];

interface table_propsTypes {
  type?: string;
}

export default function AdTasksTable({ type }: table_propsTypes) {
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "date",
    direction: "descending",
  });
  const router = useRouter();
  const pathname = usePathname();
  const [filter, setFilter] = useState<{
    category: "All";
    customer: "All";
    status: statusTypes;
  }>({ category: "All", customer: "All", status: "Paid" });
  const [currentPage, setCurrentPage] = useState(1);

  const renderCell = React.useCallback((task: any, columnKey: Key, type: string | undefined) => {
    const cellValue = task[columnKey.toString()];

    switch (columnKey) {
      case "date":
        return (
          <div className='flex flex-col max-w-[6svw]'>
            <span className='text-sm text-gray-900 truncate font-normal'>Jan 6, 2024</span>
            <span className='text-sm text-gray-600 truncate font-normal'>5:42pm</span>
          </div>
        );
      case "customer":
        return (
          <div className='flex items-start gap-3'>
            <div className='size-[32px] mt-1 flex items-center relative justify-center overflow-hidden rounded-full border border-black/[0.08] bg-gray-100'>
              <User_01 className='size-5' />
            </div>
            <div className='flex flex-col relative md:w-[9svw] w-[15svw]'>
              <h1 className='text-sm truncate text-gray-900 font-normal'>Phoenix Baker</h1>
              <p className='text-sm truncate text-gray-600 font-normal'>phoenix@untitledui.com</p>
            </div>
          </div>
        );
      case "username":
        return (
          <div className='flex gap-x-3 items-center'>
            <Facebook className='size-8 flex-none' />
            <p className='text-sm text-gray-600 truncate font-medium'>{cellValue}</p>
          </div>
        );
      case "proof":
        return (
          <div className='relative md:w-[8svw]'>
            <p className='text-sm text-gray-600 truncate font-medium'>{cellValue}</p>
          </div>
        );
      case "status":
        return (
          <div className='relative md:w-[5svw]'>
            <StatusChip status={cellValue} />
          </div>
        );
      default:
        return (
          <div className='flex gap-3 items-center'>
            <Button disableRipple className='h-fit gap-x-[6px] !outline-none flex items-center p-0 !min-w-fit border-none bg-transparent data-[hover=true]:!bg-transparent !opacity-100 transition-colors rounded-lg shadow-none'>
              <span className='text-gray-600 flex text-sm  font-semibold'>Reject</span>
            </Button>
            <Button disableRipple className='h-fit gap-x-[6px] !outline-none flex items-center p-0 !min-w-fit border-none bg-transparent data-[hover=true]:!bg-transparent !opacity-100 transition-colors rounded-lg shadow-none'>
              <span className='text-primary_fixed flex text-sm  font-semibold'>Approve</span>
            </Button>
          </div>
        );
    }
  }, []);

  const handleFilter = (e?: any, value?: any) => {
    setFilter((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className='flex flex-col gap-y-4 p-3 border border-gray-200 rounded-xl bg-white'>
      <div className='w-full lg:flex-row flex-col flex gap-3 items-center bg-gray-50 p-5 rounded-xl'>
        <div className='flex lg:w-fit w-full flex-col flex-none gap-y-2'>
          <h1 className='text-xs font-medium text-gray-700'>Search for order</h1>
          <div className='lg:w-fit w-full flex relative'>
            <input autoComplete='off' placeholder={`Search`} name='search' className={`!border-gray-300 focus:!border-brand-700 focus:!border-2 !ring-0 bg-white outline w-full outline-0 focus:outline-0 transition-all border text-base px-9 pr-3 h-11 shadow-main rounded-lg text-black font-medium  placeholder:font-normal  placeholder:text-gray-500`} type='text' />
            <div className='grid place-items-center absolute text-blue-gray-500 top-[50%] left-3 -translate-y-2/4 size-fit'>
              <Search className='stroke-gray-500 size-5' />
            </div>
          </div>
        </div>
        <div className='w-full flex flex-wrap items-center gap-3'>
          <div className='flex flex-col  min-w-[150px] flex-1 gap-y-2'>
            <h1 className='text-xs font-medium text-gray-700'>Status</h1>
            <Select
              selectedKeys={[filter.status]}
              onChange={(e) => handleFilter(e)}
              name='status'
              classNames={{
                trigger: "!h-11 !px-4 !rounded-lg border bg-white border-gray-300 data-[focus=true]:border-gray-300 data-[hover=true]:border-gray-300 data-[invalid=true]:border-error data-[open=true]:!border-brand-700 data-[open=true]:!border-2  !shadow-main",
                value: "!text-base !text-gray-500 group-data-[has-value=true]:!font-medium group-data-[has-value=true]:!text-black",
                selectorIcon: "stroke-gray-500 size-5",
              }}
              variant='bordered'
              value={filter.status}
              startContent={<StatusIndicator status={filter.status} />}
              placeholder='Status'
              className='w-full'
            >
              {statuses
                .filter((sta: any) => sta !== "On-going" && sta !== "Completed" && sta !== "Pending")
                .map((item) => {
                  return (
                    <SelectItem classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white !outline-none data-[selected=true]:!text-primary_fixed", title: "text-base" }} key={item}>
                      {item}
                    </SelectItem>
                  );
                })}
            </Select>
          </div>
          <div className='flex flex-col min-w-[150px] flex-1 gap-y-2'>
            <h1 className='text-xs font-medium text-gray-700'>Category</h1>
            <Select
              selectedKeys={[filter.category]}
              onChange={(e) => handleFilter(e)}
              name='category'
              classNames={{
                trigger: "!h-11 !px-4 !rounded-lg border bg-white border-gray-300 data-[focus=true]:border-gray-300 data-[hover=true]:border-gray-300 data-[invalid=true]:border-error data-[open=true]:!border-brand-700 data-[open=true]:!border-2  !shadow-main",
                value: "!text-base !text-gray-500 group-data-[has-value=true]:!font-medium group-data-[has-value=true]:!text-black",
                selectorIcon: "stroke-gray-500 size-5",
              }}
              variant='bordered'
              value={filter.category}
              placeholder='Category'
              className='w-full'
            >
              <SelectItem classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white !outline-none data-[selected=true]:!text-primary_fixed", title: "text-base" }} key='All'>{`All`}</SelectItem>
            </Select>
          </div>
          <div className='flex flex-col min-w-[150px] flex-1 gap-y-2'>
            <h1 className='text-xs font-medium text-gray-700'>Customer</h1>
            <Select
              selectedKeys={[filter.customer]}
              onChange={(e) => handleFilter(e)}
              name='customer'
              classNames={{
                trigger: "!h-11 !px-4 !rounded-lg border bg-white border-gray-300 data-[focus=true]:border-gray-300 data-[hover=true]:border-gray-300 data-[invalid=true]:border-error data-[open=true]:!border-brand-700 data-[open=true]:!border-2  !shadow-main",
                value: "!text-base !text-gray-500 group-data-[has-value=true]:!font-medium group-data-[has-value=true]:!text-black",
                selectorIcon: "stroke-gray-500 size-5",
              }}
              variant='bordered'
              value={filter.customer}
              placeholder='Customer'
              className='w-full'
            >
              <SelectItem classNames={{ base: "data-[hover=true]:!bg-gray-50 !bg-white !outline-none data-[selected=true]:!text-primary_fixed", title: "text-base" }} key='All'>{`All`}</SelectItem>
            </Select>
          </div>
        </div>
      </div>
      <Table
        classNames={{
          base: "h-fit",
          wrapper: "border-gray-200 gap-0 p-0 !shadow-main border",
          th: "!rounded-none border-b border-gray-200 h-11 text-gray-600 data-[hover=true]:text-gray-400 font-medium text-xs md:px-6 px-3 py-3 !bg-gray-50 transition-color",
          td: "py-4 md:px-6 px-3 border-b border-gray-200",
          tr: "hover:bg-gray-50  transition-colors cursor-pointer",
        }}
        sortDescriptor={sortDescriptor}
        onSortChange={setSortDescriptor}
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn allowsSorting={column.sortable} align='start' className={`${(column.key === "amount" || column.key === "date") && "md:table-cell hidden"}`} key={column.key}>
              {/* <div className='flex gap-x-1 group items-center'>
              <span>{column.label}</span>
              {column.key === "date" && (
                <div>
                  <ArrowDown />
                </div>
              )}
            </div> */}
              {column.label}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody
          loadingContent={
            <div className='size-12'>
              <Spinner className='text-white' />
            </div>
          }
          // isLoading
          items={rows}
        >
          {(item: any) => (
            <TableRow key={item?.key}>
              {(columnKey) => <TableCell className={`${(columnKey === "amount" || columnKey === "date") && "md:table-cell hidden"}`}>{renderCell(item, columnKey, type)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <div className='w-full pt-5 flex gap-x-2 items-center justify-between border-t border-gray-200'>
        <Button onPress={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))} disableRipple className='h-9 gap-x-[6px] !outline-none flex items-center px-3 py-2 !min-w-auto border-none bg-white data-[hover=true]:!bg-gray-50 !opacity-100 transition-colors rounded-lg shadow-none'>
          <ArrowLeft /> <span className='text-gray-600 flex text-sm  font-semibold'>Previous</span>
        </Button>
        <Pagination
          total={10}
          classNames={{
            item: "bg-white text-gray-600 outline-none rounded-lg shadow-none [data-active=true]:!bg-gray-100 [&[data-hover=true]:not([data-active=true])]:bg-gray-50 font-medium",
            cursor: "bg-gray-50 text-gray-800 font-medium rounded-lg",
            ellipsis: "text-gray-600 font-medium",
          }}
          page={currentPage}
          onChange={setCurrentPage}
        />
        <Button onPress={() => setCurrentPage((prev) => (prev < 10 ? prev + 1 : prev))} disableRipple className='h-9 gap-x-[6px] !outline-none flex items-center px-3 py-2 !min-w-auto border-none bg-white data-[hover=true]:!bg-gray-50 !opacity-100 transition-colors rounded-lg shadow-none'>
          <span className='text-gray-600 flex text-sm  font-semibold'>Next</span>
          <ArrowRight_02 />
        </Button>
      </div>
    </div>
  );
}
