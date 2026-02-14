// src/shared/environment/index.ts
import { z } from "zod";

// Agregamos un fallback solo para desarrollo si prefieres,
// pero lo mejor es asegurar el .env
const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z
    .string()
    .url({ message: "Debe ser una URL válida" })
    .default("http://localhost:3000"), // Fallback de seguridad
});

// Cambiamos a process.env completo o solo la variable específica
const parsed = envSchema.safeParse({
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
});

if (!parsed.success) {
  // Solo lanzamos error si no estamos en modo cliente cargando
  console.error("❌ Error en variables de entorno:", parsed.error.format());
  throw new Error("Variables de entorno faltantes");
}

export const NEXT_PUBLIC_API_URL = parsed.data.NEXT_PUBLIC_API_URL;
