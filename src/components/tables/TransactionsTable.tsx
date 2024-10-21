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
import { statusTypes } from "@/types";
const numeral = require("numeral");

const rows = [
  {
    key: "1",
    type: "Credit",
    description: "name",
    ref: "ref",
    description2: "Earn",
    status: "Completed",
    amount: "Amount",
  },
  {
    key: "2",
    type: "Credit",
    description: "name",
    ref: "ref",
    description2: "Earn",
    status: "Completed",
    amount: "Amount",
  },
  {
    key: "3",
    type: "Debit",
    description: "name",
    ref: "ref",
    description2: "Advert",
    status: "Completed",
    amount: "c",
  },
  {
    key: "4",
    type: "Credit",
    description: "name",
    ref: "ref",
    description2: "Referral",
    status: "Completed",
    amount: "d",
  },
  {
    key: "5",
    type: "Credit",
    description: "name",
    ref: "ref",
    description2: "name",
    status: "Refunded",
    amount: "c",
  },
  {
    key: "6",
    type: "Credit",
    description: "name",
    ref: "ref",
    description2: "name",
    status: "Completed",
    amount: "c",
  },
];

const columns = [
  {
    key: "type",
    label: "Type",
    sortable: false,
  },
  {
    key: "description",
    label: "Description",
    sortable: false,
  },
  {
    key: "ref",
    label: "Transaction Ref",
    sortable: false,
  },
  {
    key: "description2",
    label: "Description",
    sortable: false,
  },
  {
    key: "status",
    label: "Status",
    sortable: false,
  },
  {
    key: "amount",
    label: "Amount",
    sortable: false,
  },
];

interface table_propsTypes {
  type?: string;
}

export default function TransactionsTable({ type }: table_propsTypes) {
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
      case "type":
        return (
          <div className='flex flex-col'>
            <span className='text-sm text-gray-600 truncate font-normal'>{cellValue}</span>
          </div>
        );
      case "description":
        return (
          <div className='flex items-start gap-3'>
            <div className='flex flex-col relative md:w-auto w-[50svw]'>
              <h1 className='text-sm  text-gray-900 font-normal'>Referral Bonus Payment for membership Activation of @demanuel300</h1>
              <p className='text-sm truncate text-gray-600 font-normal'>06/2024</p>
            </div>
          </div>
        );
      case "ref":
        return (
          <div className='flex gap-x-3 w-[10svw] items-center'>
            <p className='text-sm text-gray-900 truncate font-normal'>3ng7fh8493489345456lsgwfewwtjcn</p>
          </div>
        );
      case "description2":
        return (
          <div className='relative'>
            <p className='text-sm text-gray-900 truncate font-normal'>{cellValue}</p>
          </div>
        );
      case "status":
        return (
          <div className='relative'>
            <StatusChip status={cellValue} />
          </div>
        );
      case "amount":
        return <div className='relative'>{task.type === "Credit" ? <p className='text-sm text-green truncate font-medium'>{`+ ${getSymbolFromCurrency("NGN")}${numeral("4023").format("0,0.00")}`}</p> : <p className='text-sm text-error-500 truncate font-medium'>{`- ${getSymbolFromCurrency("NGN")}${numeral("4023").format("0,0.00")}`}</p>}</div>;
      default:
        return;
    }
  }, []);

  // const handleFilter = (e?: any, value?: any) => {
  //   setFilter((prev) => ({
  //     ...prev,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  return (
    <div className='flex flex-col gap-y-4 bg-white'>
      <Table
        classNames={{
          base: "h-fit",
          wrapper: "border-gray-200 gap-0 p-0 !shadow-main border",
          th: "!rounded-none border-b border-gray-200 h-11 text-gray-600 data-[hover=true]:text-gray-400 font-medium text-xs md:px-6 px-3 py-3 !bg-gray-50 transition-color",
          td: "py-4 md:px-6 px-3 align-top border-b border-gray-200",
          tr: "hover:bg-gray-50  transition-colors cursor-pointer",
        }}
        sortDescriptor={sortDescriptor}
        onSortChange={setSortDescriptor}
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn allowsSorting={column.sortable} align='start' className={`${( column.key === 'description2' || column.key === 'ref') && "md:table-cell hidden"}`} key={column.key}>
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
          {(item: any) => <TableRow key={item?.key}>{(columnKey) => <TableCell className={`${(columnKey === 'description2' || columnKey === 'ref') && "md:table-cell hidden"}`}>{renderCell(item, columnKey, type)}</TableCell>}</TableRow>}
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
