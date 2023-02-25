import { Roboto } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";

import Navbar from "./Navbar";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Budgee",
  description: "Budgeting and financial planning made easy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="flex h-screen w-full flex-col overflow-auto bg-light dark:bg-dark">
        <Navbar />
        <main className="flex w-full grow flex-col items-center">
          <div className="container flex h-full flex-col items-center">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
