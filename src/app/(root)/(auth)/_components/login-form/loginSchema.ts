import { z } from "zod";

// Definimos el esquema
export const loginSchema = z.object({
  username: z
    .string()
    .trim() // Elimina espacios en blanco accidentales
    .min(3, "El nombre de usuario debe tener al menos 3 caracteres"),

  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

// Exportamos el tipo para usarlo en el componente
export type LoginFormValues = z.infer<typeof loginSchema>;
