"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import * as z from "zod";

import { RegisterTypes } from "utils/types/users";

import { Input } from "app/Input";
import Button from "app/Button";

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

export default function Form() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterTypes>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: RegisterTypes) => {
    await fetch(
      "https://virtserver.swaggerhub.com/JerryBE1709/planner/1.0.0/users",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        toast.success("Register successful!");
        router.push("/login");
      })
      .catch((err) => toast.error(err.toString()));
    return new Promise<void>((resolve) => resolve());
  };

  return (
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
        disabled={isSubmitting}
      />
      <Input
        register={register}
        id="input-name"
        name="name"
        label="Full name"
        placeholder="John Doe"
        error={errors.name?.message}
        disabled={isSubmitting}
      />
      <Input
        register={register}
        id="input-password"
        name="password"
        label="Password"
        placeholder="******"
        type="password"
        error={errors.password?.message}
        disabled={isSubmitting}
      />
      <Input
        register={register}
        id="input-confirm"
        name="confirm"
        label="Confirm Password"
        placeholder="******"
        type="password"
        error={errors.confirm?.message}
        disabled={isSubmitting}
      />
      <Button
        label="Register"
        id="button-register"
        type="submit"
        disabled={isSubmitting}
      />
    </form>
  );
}
