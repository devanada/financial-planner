import type { Metadata } from "next";

import BarChart from "./BarChart";
import DoughnutChart from "./DoughnutChart";
import formatter from "utils/currency";

export const metadata: Metadata = {
  title: "Dashboard | Budgee",
  description: "Budgee dashboard page",
};

export default function Page() {
  return (
    <div className="relative flex h-full w-full flex-col gap-4 p-6">
      <p className="text-3xl">Hi Name, welcome back!</p>
      <div className="relative flex h-1/2 w-full gap-4">
        <div className="relative flex h-full w-full flex-col gap-4">
          <DoughnutChart />
          <div className="relative flex h-full w-full gap-4">
            <div className="h-full w-full p-6">
              <p className="text-2xl font-bold">Your most spended this month</p>
              <p>{formatter(3000000)}</p>
            </div>
            <div className="h-full w-full p-6">
              <p className="text-2xl font-bold">Expense so far this month</p>
              <p>{formatter(3000000)}</p>
            </div>
          </div>
        </div>
        <div className="flex h-full w-1/3 flex-col rounded-xl border border-dark-3 bg-dark-2 p-6">
          <p className="text-2xl font-bold">Recent Transactions</p>
          <div className="w-full grow bg-dark-3"></div>
          <p className="text-right text-sm">See more →</p>
        </div>
      </div>
      <div className="relative flex w-full grow">
        <BarChart />
      </div>
    </div>
  );
}

/*
References:
1. https://dribbble.com/shots/15903085-Banking-Dashboard-Design
2. https://dribbble.com/shots/18841519-Web-Wallet-Dashboard
3. https://dribbble.com/shots/16204592-Crypto-dashboard-template
*/
