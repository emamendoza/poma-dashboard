// src/app/(root)/auth/_components/register-form/hooks/useRegisterForm.ts
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { type RegisterFormValues, registerSchema } from "../registerSchema";
import { useRegisterAction } from "./useRegisterAction";

export function useRegisterForm() {
  const { performRegister, error, clearError } = useRegisterAction();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: RegisterFormValues) => {
    clearError();
    // Enviamos el DTO completo al caso de uso a través de la acción
    return await performRegister(data);
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    error, // Error de Better-Auth o del servidor
    isSubmitting,
  };
}
