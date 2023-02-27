import { Roboto } from "next/font/google";
import "./globals.css";

import type { Metadata } from "next";

import Navbar from "./Navbar";
import ToastWrapper from "./ToastWrapper";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Budgee",
  description: "Welcome to Budgee! A simple budgeting app for everyone.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="flex h-screen w-full flex-col overflow-auto bg-dark text-light">
        <main className="flex w-full grow flex-col items-center">
          <Navbar />
          <div className="container flex h-full flex-col items-center">
            {children}
            <ToastWrapper
              position="bottom-right"
              hideProgressBar
              theme="dark"
              newestOnTop
            />
          </div>
        </main>
      </body>
    </html>
  );
}
