"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { setCookie } from "cookies-next";
import { toast } from "react-toastify";
import * as z from "zod";

import { LoginTypes } from "utils/types/users";

import { Input } from "app/Input";
import Button from "app/Button";

const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(5, { message: "Must be 5 or more characters long" }),
});

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginTypes>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: LoginTypes) => {
    await fetch(
      "https://virtserver.swaggerhub.com/JerryBE1709/planner/1.0.0/login",
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
        toast.success("Login successful!");
        // setCookie('token', data);
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
        id="input-password"
        name="password"
        label="Password"
        placeholder="password"
        type="Password"
        error={errors.password?.message}
        disabled={isSubmitting}
      />
      <Button
        label="Login"
        id="button-login"
        type="submit"
        disabled={isSubmitting}
      />
    </form>
  );
}
