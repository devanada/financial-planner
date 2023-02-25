"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import * as z from "zod";

import type { Metadata } from "next";
import { RegisterTypes } from "utils/types/users";

import { Input } from "app/Input";
import Button from "app/Button";

export const metadata: Metadata = {
  title: "Register | Budgee",
  description: "Budgee login page",
};

const schema = z
  .object({
    email: z.string().email({ message: "Invalid email address" }),
    name: z.string().min(3, { message: "Name is required" }),
    password: z
      .string()
      .min(5, { message: "Must be 5 or more characters long" }),
    confirm: z.string().min(1, { message: "Passwords don't match" }),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"],
  });

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterTypes>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: RegisterTypes) => {
    console.log(data);
  };

  return (
    <div>
      <h1 className="text-center text-dynamic text-dark-2 dark:text-light">
        Register to Budgee
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
          id="input-name"
          name="name"
          label="Full name"
          placeholder="John Doe"
          error={errors.name?.message}
        />
        <Input
          register={register}
          id="input-password"
          name="password"
          label="Password"
          placeholder="******"
          type="password"
          error={errors.password?.message}
        />
        <Input
          register={register}
          id="input-confirm"
          name="confirm"
          label="Confirm Password"
          placeholder="******"
          type="password"
          error={errors.confirm?.message}
        />
        <Button label="Login" id="button-login" type="submit" />
      </form>
      <div>
        <p className="text-center text-dark-2 dark:text-light">
          Already have an account?{" "}
          <Link className="text-blue-400" href="/login">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
