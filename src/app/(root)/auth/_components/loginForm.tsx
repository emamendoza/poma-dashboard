"use client";
import { Button } from "@/ui/components/button";
import { loginSchema } from "@/ui/lib/validations/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormFieldAuth } from "./formFieldAuth";

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
        id="email"
        label="Email"
        type="email"
        {...register("email")} // Registramos el campo
        error={errors.email?.message as string} // Pasamos el error de Zod
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
