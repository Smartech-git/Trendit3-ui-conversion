"use client";
import React, { useMemo, useCallback, Key, useState } from "react";
import { Button, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, ChipProps, getKeyValue, SortDescriptor } from "@nextui-org/react";
import getSymbolFromCurrency from "currency-symbol-map";
import Spinner from "../loadingScreens/Spinner";
import { Facebook } from "@/svgAssets";
import { ArrowDown } from "@/appIcons";
import StatusChip from "../macroComponents/StatusChip";
import { useRouter, usePathname } from "next/navigation";

const rows = [
  {
    key: "1",
    task: "Post adverts on your Facebook page",
    type: "engagement",
    amount: `${getSymbolFromCurrency("NGN")} 100`,
    date: "Jan 13, 2024",
    status: "Pending",
  },
  {
    key: "2",
    task: "Post adverts on your Facebook page",
    type: "engagement",
    amount: `${getSymbolFromCurrency("NGN")} 100`,
    date: "Jan 13, 2024",
    status: "Cancelled",
  },
  {
    key: "3",
    task: "Post adverts on your Facebook page",
    type: "engagement",
    amount: `${getSymbolFromCurrency("NGN")} 100`,
    date: "Jan 13, 2024",
    status: "Completed",
  },
  {
    key: "4",
    task: "William Howard",
    type: "engagement",
    amount: `${getSymbolFromCurrency("NGN")} 100`,
    date: "Jan 13, 2024",
    status: "Refunded",
  },
];

const columns = [
  {
    key: "task",
    label: "Tasks",
    sortable: false,
  },
  {
    key: "type",
    label: "Type",
    sortable: false,
  },
  {
    key: "amount",
    label: "Amount to earn",
    sortable: false,
  },
  {
    key: "date",
    label: "Date created",
    sortable: true,
  },
  {
    key: "status",
    label: "Status",
    sortable: false,
  },
];

interface table_propsTypes {
  type?: string;
}

export default function TasksTable({ type }: table_propsTypes) {
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "date",
    direction: "descending",
  });
  const router = useRouter();
  const pathname = usePathname();

  const BottomContent = useMemo(() => {
    return (
      <div className='h-16 py-4 md:px-6 px-3 w-full flex items-center justify-between'>
        <p className='text-gray-700 font-medium text-sm'>{`Page 1 of 10`}</p>
        <div className='w-fit flex gap-x-3'>
          <Button disableRipple className='h-9 gap-x-[6px] !outline-none flex items-center px-3 py-2 !min-w-auto border border-gray-300 bg-white data-[hover=true]:!bg-gray-50 !opacity-100 transition-colors rounded-lg shadow-main'>
            <span className='text-gray-700 flex text-sm  font-semibold'>Previous</span>
          </Button>
          <Button disableRipple className='h-9 gap-x-[6px] !outline-none flex items-center px-3 py-2 !min-w-auto border border-gray-300 bg-white data-[hover=true]:!bg-gray-50 !opacity-100 transition-colors rounded-lg shadow-main'>
            <span className='text-gray-700 flex text-sm font-semibold'>Next</span>
          </Button>
        </div>
      </div>
    );
  }, []);

  const renderCell = React.useCallback((task: any, columnKey: Key, type: string | undefined) => {
    const cellValue = task[columnKey.toString()];

    switch (columnKey) {
      case "task":
        return (
          <div className='flex items-start gap-3'>
            <Facebook className='size-[20px] mt-1 flex-none' />
            <div className='flex flex-col w-[15svw]'>
              <h1 className='text-sm truncate text-gray-900 font-medium'>{cellValue}</h1>
              <p className='text-sm truncate text-gray-600 font-normal'>Post adverts of various businesses and top brands on your Facebook Page and earn ₦110 per advert past.</p>
            </div>
          </div>
        );
      case "type":
        return (
          <div className='flex flex-col w-[15svw]'>
            <span className='text-sm text-gray-600 truncate font-medium'>{cellValue}</span>
          </div>
        );
      case "amount":
        return (
          <div className=''>
            <span className='text-sm text-gray-600 font-medium'>{cellValue}</span>
          </div>
        );
      case "date":
        return (
          <div>
            <span className='text-sm text-gray-600 font-medium'>{cellValue}</span>
          </div>
        );
      case "status":
        return <StatusChip status={cellValue} />;
      default:
        return;
    }
  }, []);

  return (
    <Table
      classNames={{
        wrapper: "border-gray-200 gap-0 p-0 border",
        th: "!rounded-none border-b border-gray-200 h-11 text-gray-600 data-[hover=true]:text-gray-400 font-medium text-xs md:px-6 px-3 py-3 !bg-gray-50 transition-color",
        td: "py-4 md:px-6 px-3 border-b border-gray-200",
        base: "h-fit",
        tr: "hover:bg-gray-50 transition-colors cursor-pointer",
      }}
      sortDescriptor={sortDescriptor}
      onSortChange={setSortDescriptor}
      shadow='none'
      bottomContent={BottomContent}
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
          <TableRow onClick={() => router.push(`${pathname}/12324fsdgsgsfh`)} key={item?.key}>
            {(columnKey) => <TableCell className={`${(columnKey === "amount" || columnKey === "date") && "md:table-cell hidden"}`}>{renderCell(item, columnKey, type)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
