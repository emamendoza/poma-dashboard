"use client";
// biome-ignore assist/source/organizeImports: <explanation>
import { Button } from "@/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/ui/components/card";
import { Separator } from "@/ui/components/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FormFieldAuth } from "../formFieldAuth";
import { loginUser } from "./fetchData";
import { type LoginFormValues, loginSchema } from "./loginSchema";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  // success contiene el bolean del estado: true si fue exitoso el logueo, false si fracaso.
  // Se puede usar la variable global para utilizarlo en el html del componente para mostrar los errores en el login

  // Revisar la carpeta app/api/Auth/constants esta el arreglo con usuarios precargados para hacer las pruebas
  const onSubmit = async (values: any) => {
    console.log("Enviando al backend:", values);
    const { data, error, success } = await loginUser(values);
    if (error) {
      alert("Oops: " + error + " estado" + success);
      return;
    }
    console.log("Bienvenido:", data?.user.username);
    console.log("success", success);
  };

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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 sm:space-y-5"
        >
          <FormFieldAuth
            id="username"
            label="Usuario"
            type="text"
            placeholder="Usuario"
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
            className="w-full bg-white text-black hover:bg-white/90 text-base sm:text-lg font-bold"
            size="lg"
          >
            {isSubmitting ? "Cargando..." : "Ingresar"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
