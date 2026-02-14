// hooks/useLoginForm.ts
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { type LoginFormValues, loginSchema } from "../loginSchema";
import { useLoginAction } from "./useLoginAction";

export function useLoginForm() {
  const { performLogin, error, clearError } = useLoginAction();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { username: "", password: "" },
  });

  const onSubmit = async (data: LoginFormValues) => {
    clearError();
    return await performLogin(data.username, data.password);
  };

  return {
    register, // RETORNAR LA FUNCIÓN DIRECTAMENTE
    handleSubmit: handleSubmit(onSubmit),
    errors, // RETORNAR EL OBJETO DE ERRORES
    error, // Error de la API (Better-Auth)
    isSubmitting,
  };
}
