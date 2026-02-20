// components/organisms/auth/LoginForm.tsx
"use client";

import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/ui/components/alert";
import { Button } from "@/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/components/card";
import { Separator } from "@/ui/components/separator";
import { FormFieldAuth } from "../formFieldAuth";
import { useLoginForm } from "./hooks/useLoginForm";

export const LoginForm = () => {
  const { register, handleSubmit, errors, isSubmitting, error } =
    useLoginForm();

  return (
    <Card className="w-full max-w-lg mx-auto bg-black/80 backdrop-blur-md border border-white/20 text-white shadow-xl rounded-xl font-['Poiret_One',sans-serif]">
      <CardHeader className="space-y-1 text-center pb-5 sm:pb-6">
        <CardTitle className="text-2xl sm:text-3xl font-bold uppercase">
          Login
        </CardTitle>
        <CardDescription className="text-white/70 text-sm sm:text-base">
          Ingrese tu usuario y contraseña
        </CardDescription>
      </CardHeader>

      <CardContent className="px-5 sm:px-6 pb-6">
        {/* Error del backend (usuario/contraseña incorrectos, etc.) */}
        {error && (
          <Alert
            variant="destructive"
            className="mb-4 bg-red-500/20 border-red-500/50 text-red-300 [&>svg]:text-red-300"
          >
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          <FormFieldAuth
            id="username"
            label="Usuario"
            type="text"
            placeholder="Usuario o Email"
            {...register("username")}
            error={errors.username?.message} // Error de Zod
          />

          <FormFieldAuth
            id="password"
            label="Contraseña"
            placeholder="*********"
            type="password"
            {...register("password")}
            error={errors.password?.message} // Error de Zod
          />

          <div className="relative my-5 sm:my-6">
            <Separator className="bg-white/20" />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-white text-black hover:bg-white/90 text-base sm:text-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed"
            size="lg"
          >
            {isSubmitting ? "Cargando..." : "Ingresar"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
