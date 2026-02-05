"use client";
import { Button } from "@/ui/components/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormFieldAuth } from "../formFieldAuth";
import { loginSchema } from "./loginSchema";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <FormFieldAuth
        id="username"
        label="Usuario"
        type="text"
        {...register("username")}
        error={errors.username?.message as string}
      />

      <FormFieldAuth
        id="password"
        label="Contraseña"
        type="password"
        {...register("password")}
        error={errors.password?.message as string}
      />

      <Button type="submit" className="w-full">
        Ingresar
      </Button>
    </form>
  );
};
