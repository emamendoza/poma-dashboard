import { z } from "zod";

console.log("DEBUG ENV:", process.env.NEXT_PUBLIC_API_URL);
const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z
    .string()
    .url({ message: "NEXT_PUBLIC_API_URL debe ser una URL válida" }),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  const issues = parsed.error.issues
    .map((i) => `${i.path.join(".")}: ${i.message}`)
    .join("; ");
  throw new Error(`Variables de entorno inválidas: ${issues}`);
}

export const NEXT_PUBLIC_API_URL = parsed.data.NEXT_PUBLIC_API_URL;
