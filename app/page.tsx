import type { Metadata } from "next";
import Link from "next/link";

import Button from "./Button";

export const metadata: Metadata = {
  title: "Budgee",
  description: "Budgeting and financial planning made easy",
};

export default function Page() {
  return (
    <>
      <div className="flex h-full w-full flex-col items-center justify-center bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.7)),url('/background.jpg')] bg-cover bg-center bg-no-repeat p-6">
        <div className=" flex w-full grow flex-col">
          <div className="my-auto ml-6">
            <p className="mb-5 text-dynamic-xxl font-bold tracking-wider md:max-w-[50%]">
              Plan, track and save expenses in one app
            </p>
            <Link
              className="flex w-fit rounded-xl border border-dark-3 bg-dark py-2 px-10 text-lg font-bold capitalize"
              href="/login"
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className="flex w-3/4 flex-col gap-4 md:flex-row">
          <div className="flex w-full flex-col items-center gap-4">
            <p className="text-2xl font-bold">Stay organized</p>
            <p className="tracking-wider">
              A financial planner app keeps your finances in one place.
            </p>
          </div>
          <div className="h-[1px] w-full border md:h-full md:w-[1px]" />
          <div className="flex w-full flex-col items-center gap-4">
            <p className="text-2xl font-bold">Track your progress</p>
            <p className="tracking-wider">
              A financial planner app helps you monitor your financial goals and
              track your progress over time.
            </p>
          </div>
          <div className="h-[1px] w-full border md:h-full md:w-[1px]" />
          <div className="flex w-full flex-col items-center gap-4">
            <p className="text-2xl font-bold">Simplify your life</p>
            <p className="tracking-wider">
              Saving you time and reducing stress so you can focus on the things
              that matter most to you.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
