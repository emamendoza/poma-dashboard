"use client";
import { AlertCircle } from "lucide-react";
import Link from "next/link";
import { Alert, AlertDescription } from "@/ui/components/alert";
import { Button } from "@/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/components/card";
import { Input } from "@/ui/components/input"; // ← Directo de shadcn
import { Separator } from "@/ui/components/separator";
import { useRegisterForm } from "./hooks/useRegisterForm";

export const RegisterForm = () => {
  const { register, handleSubmit, errors, isSubmitting, error } =
    useRegisterForm();

  return (
    <Card className="w-full max-w-lg mx-auto shadow-xl rounded-xl font-['Poiret_One',sans-serif]">
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
          <Alert
            variant="destructive"
            className="mb-4 bg-red-500/20 border-red-500/50 text-red-300 [&>svg]:text-red-300"
          >
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          {/* Campo Name */}
          <div className="space-y-1">
            <label htmlFor="name" className="text-sm font-medium">
              Nombre Completo
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Juan Pérez"
              {...register("name")}
              className={errors.name ? "border-destructive" : ""}
            />
            {errors.name && (
              <p className="text-sm font-medium text-destructive">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Campo Email */}
          <div className="space-y-1">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="tu@email.com"
              {...register("email")}
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && (
              <p className="text-sm font-medium text-destructive">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Campo Password */}
          <div className="space-y-1">
            <label htmlFor="password" className="text-sm font-medium">
              Contraseña
            </label>
            <Input
              id="password"
              type="password"
              placeholder="*********"
              {...register("password")}
              className={errors.password ? "border-destructive" : ""}
            />
            {errors.password && (
              <p className="text-sm font-medium text-destructive">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Campo Confirm Password */}
          <div className="space-y-1">
            <label htmlFor="confirmPassword" className="text-sm font-medium">
              Confirmar Contraseña
            </label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="*********"
            />
          </div>

          <div className="relative my-5 sm:my-6">
            <Separator className="bg-white/20" />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full text-base sm:text-lg font-bold"
            size="lg"
          >
            {isSubmitting ? "Cargando..." : "Registrarse"}
          </Button>
        </form>

        <div className="text-center text-sm text-white/70 mt-4">
          ¿Ya tienes cuenta?{" "}
          <Link
            href="/login"
            className="text-white hover:text-white/80 font-medium"
          >
            Inicia sesión aquí
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};
