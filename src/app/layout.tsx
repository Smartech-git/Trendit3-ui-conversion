import "./globals.css";
import AppProvider from "@/context/GlobalContext";
import { Red_Hat_Display } from "next/font/google";
import type { Metadata } from "next";
const red_Hat_Display = Red_Hat_Display({ weight: ["300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Trendit³",
  description: "www.trendit3.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${red_Hat_Display.className} h-[100svh]`}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
