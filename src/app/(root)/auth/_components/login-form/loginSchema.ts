import { z } from "zod";

// Definimos el esquema
const loginSchema = z.object({
  username: z
    .string()
    .min(3, "El nombre de usuario debe tener al menos 3 caracteres"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

// Extraemos el tipo automáticamente
type LoginFormValues = z.infer<typeof loginSchema>;

export { loginSchema };
