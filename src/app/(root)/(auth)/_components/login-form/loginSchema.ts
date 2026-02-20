import { z } from "zod";

export const loginSchema = z.object({
  username: z
    .string()
    .trim()
    .min(1, "El usuario es requerido") // campo vacío
    .min(3, "Mínimo 3 caracteres")
    .max(50, "Máximo 50 caracteres")
    .regex(/^\S+$/, "El usuario no puede contener espacios"),

  password: z
    .string()
    .min(1, "La contraseña es requerida") // campo vacío
    .min(6, "Mínimo 6 caracteres")
    .max(100, "Máximo 100 caracteres")
    .regex(/^\S+$/, "La contraseña no puede contener espacios"),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
