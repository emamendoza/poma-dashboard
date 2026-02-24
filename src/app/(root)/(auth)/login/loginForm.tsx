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
import { useLoginForm } from "./hooks/useLoginForm";

export const LoginForm = () => {
  const { register, handleSubmit, errors, isSubmitting, error } =
    useLoginForm();

  return (
    <Card className="w-full max-w-lg mx-auto shadow-xl rounded-xl font-['Poiret_One',sans-serif]">
      <CardHeader className="space-y-1 text-center pb-5 sm:pb-6">
        <CardTitle className="text-2xl sm:text-3xl font-bold uppercase">
          Login
        </CardTitle>
        <CardDescription className="text-white/70 text-sm sm:text-base">
          Ingrese tu usuario y contraseña
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
          {/* Campo Username */}
          <div className="space-y-1">
            <label htmlFor="username" className="text-sm font-medium">
              Usuario
            </label>
            <Input
              id="username"
              type="text"
              placeholder="Usuario o Email"
              {...register("username")}
              className={errors.username ? "border-destructive" : ""}
            />
            {errors.username && (
              <p className="text-sm font-medium text-destructive">
                {errors.username.message}
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

          <div className="relative my-5 sm:my-6">
            <Separator className="bg-white/20" />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full text-base sm:text-lg font-bold"
            size="lg"
          >
            {isSubmitting ? "Cargando..." : "Ingresar"}
          </Button>
        </form>

        <div className="text-center text-sm text-white/70 mt-4">
          ¿No tienes cuenta?{" "}
          <Link
            href="/register"
            className="text-white hover:text-white/80 font-medium"
          >
            Registrate aquí
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};
