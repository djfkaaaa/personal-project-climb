import type { Metadata } from "next";
import { Inter, Margarine } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import ResponsiveAppBar from "./components/common/header";
import { getLoginMessage } from "./components/users/service/user-slice";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { parseCookies } from "nookies";
import DashHeader from "./components/common/dash-header";
import Header from "./components/common/header";

const ReduxProvider = dynamic(()=> import("@/redux/redux-provider"),{
  ssr:false
});

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={inter.className}>
        {parseCookies().message === 'Success' && <Header/>}
        {parseCookies().message === 'admin' && <DashHeader/>}
        <div className="mt-100">
        <ResponsiveAppBar/>
        <ReduxProvider>{children}</ReduxProvider>
        </div>
        </body>
    </html>
  );
}
