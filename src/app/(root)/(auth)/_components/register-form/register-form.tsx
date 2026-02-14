// src/app/(root)/auth/_components/register-form/RegisterForm.tsx
"use client";

import { Button } from "@/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/components/card";
import { Separator } from "@/ui/components/separator";
import { FormFieldAuth } from "../formFieldAuth"; // Usamos tu componente reutilizable
import { useRegisterForm } from "./hooks/useRegisterForm";

export const RegisterForm = () => {
  const { register, handleSubmit, errors, isSubmitting, error } =
    useRegisterForm();

  return (
    <Card className="w-full max-w-lg mx-auto bg-black/80 backdrop-blur-md border border-white/20 text-white shadow-xl rounded-xl font-['Poiret_One',sans-serif]">
      <CardHeader className="space-y-1 text-center pb-5 sm:pb-6">
        <CardTitle className="text-2xl sm:text-3xl font-bold uppercase">
          Crear Cuenta
        </CardTitle>
        <CardDescription className="text-white/70 text-sm sm:text-base">
          Complete los datos para registrarse
        </CardDescription>
      </CardHeader>

      <CardContent className="px-5 sm:px-6 pb-6">
        {error && (
          <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          <FormFieldAuth
            id="name"
            label="Nombre Completo"
            type="text"
            placeholder="Ej: Nahuel..."
            {...register("name")}
            error={errors.name?.message}
          />

          <FormFieldAuth
            id="email"
            label="Correo Electrónico"
            type="email"
            placeholder="correo@ejemplo.com"
            {...register("email")}
            error={errors.email?.message}
          />

          <FormFieldAuth
            id="username"
            label="Nombre de Usuario"
            type="text"
            placeholder="usuario123"
            {...register("username")}
            error={errors.username?.message}
          />

          <FormFieldAuth
            id="password"
            label="Contraseña"
            placeholder="*********"
            type="password"
            {...register("password")}
            error={errors.password?.message}
          />

          <div className="relative my-5 sm:my-6">
            <Separator className="bg-white/20" />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-white text-black hover:bg-white/90 text-base sm:text-lg font-bold disabled:opacity-50"
            size="lg"
          >
            {isSubmitting ? "Registrando..." : "Registrarse"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
