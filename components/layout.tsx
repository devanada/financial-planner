import React, { FC } from "react";
import Head from "next/head";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-auto">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex w-full grow flex-col items-center">
        <div className="container flex h-full flex-col items-center">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
