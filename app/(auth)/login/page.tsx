import Link from "next/link";

import type { Metadata } from "next";

import Form from "./Form";

export const metadata: Metadata = {
  title: "Login | Budgee",
  description: "Login to Budgee to manage your budget",
};

export default function Page() {
  return (
    <>
      <h1 className="text-center text-dynamic">Sign in to Budgee</h1>
      <Form />
      <div className="relative">
        <p className="text-center">
          Don't have an account?{" "}
          <Link className="text-blue-400" href="/register">
            Sign up
          </Link>
        </p>
      </div>
    </>
  );
}
