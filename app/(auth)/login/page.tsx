"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import * as z from "zod";

import type { Metadata } from "next";
import { LoginTypes } from "utils/types/users";

import { Input } from "app/Input";
import Button from "app/Button";

export const metadata: Metadata = {
  title: "Login | Budgee",
  description: "Budgee login page",
};

const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(5, { message: "Must be 5 or more characters long" }),
});

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginTypes>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: LoginTypes) => {
    console.log(data);
  };

  return (
    <div>
      <h1 className="text-center text-dynamic text-dark-2 dark:text-light">
        Sign in to Budgee
      </h1>
      <form
        className="my-6 rounded-xl border border-dark-3 bg-dark-2 p-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          register={register}
          id="input-email"
          name="email"
          label="Email address"
          placeholder="name@mail.com"
          type="email"
          error={errors.email?.message}
        />
        <Input
          register={register}
          id="input-password"
          name="password"
          label="Password"
          placeholder="password"
          type="Password"
          error={errors.password?.message}
        />
        <Button label="Login" id="button-login" type="submit" />
      </form>
      <div>
        <p className="text-center text-dark-2 dark:text-light">
          Don't have an account?{" "}
          <Link className="text-blue-400" href="/register">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
