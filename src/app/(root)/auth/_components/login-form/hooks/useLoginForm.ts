// hooks/useLoginForm.ts
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { type LoginFormValues, loginSchema } from "../loginSchema";
import { useAuth } from "./useAuth";

export function useLoginForm() {
  const { login, isLoading, error, clearError } = useAuth();

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
    return await login(data.username, data.password);
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit), // Esta es la corrección clave
    errors,
    isLoading,
    isSubmitting, // Agregar esta variable
    error,
  };
}
