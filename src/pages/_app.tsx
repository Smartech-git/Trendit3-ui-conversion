import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { NextUIProvider } from "@nextui-org/react";

export default function App({ Component, pageProps }: AppProps) {
  return ( <>
  <Head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <title>Trendit³</title>
          <meta charSet="UTF-8" />
          <link rel="icon" type="image/png" sizes="32x32" href="/android-chrome-512x512 .png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/android-chrome-512x512 .png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  </Head>
  <NextUIProvider>
  <Component {...pageProps} />
  </NextUIProvider>
  </>
  )
}
