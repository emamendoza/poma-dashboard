// src/auth/schemas/registerSchema.ts
import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(50, "Nombre demasiado largo"),
  email: z.string().email("Ingrese un correo electrónico válido"),
  username: z
    .string()
    .min(3, "El usuario debe tener al menos 3 caracteres")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "El usuario solo puede contener letras, números y guiones bajos",
    ),
  password: z
    .string()
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .max(20, "La contraseña es demasiado larga"),
});

export type RegisterFormValues = z.infer<typeof registerSchema>;
