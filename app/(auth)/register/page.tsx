import Link from "next/link";

import type { Metadata } from "next";

import Form from "./Form";

export const metadata: Metadata = {
  title: "Register | Budgee",
  description: "Register to Budgee to manage your budget",
};

export default function Page() {
  return (
    <>
      <h1 className="text-center text-dynamic">Register to Budgee</h1>
      <Form />
      <div>
        <p className="text-center">
          Already have an account?{" "}
          <Link className="text-blue-400" href="/login">
            Sign in
          </Link>
        </p>
      </div>
    </>
  );
}
