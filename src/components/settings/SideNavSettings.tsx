import React from "react";
import { settingsNav } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideNavSettings() {
  const pathname = usePathname();

  return (
    <div className='w-full flex flex-col gap-y-1'>
      {settingsNav.map((nav: (typeof settingsNav)[number]) => {
        return (
          <Link key={nav} href={nav === "Profile" ? "/settings" : `/settings/${nav.toLocaleLowerCase().split(" ").join("-")}`}>
            <div className={`w-full p-3 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors ${pathname === `/settings/${nav.toLocaleLowerCase().split(" ").join("-")}` && "bg-gray-50"} ${pathname === "/settings" && nav === "Profile" && "bg-gray-50"}`}>
              <span className='text-gray-700 font-semibold text-base'>{nav}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
