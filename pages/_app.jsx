import "../styles/globals.css";
import Layout from "../components/layout";

import { Transition } from "@headlessui/react";
import { useState } from "react";

import { Inter } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.variable} font-sans font-light`}>
      <Component {...pageProps} />
    </div>
  );
}
