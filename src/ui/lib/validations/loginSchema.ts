import { z } from "zod";

// Definimos el esquema
const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});

// Extraemos el tipo automáticamente
type LoginFormValues = z.infer<typeof loginSchema>;

export { loginSchema };
