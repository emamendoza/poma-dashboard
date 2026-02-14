import { createAuthClient } from "better-auth/client";
import { usernameClient } from "better-auth/client/plugins";
import { NEXT_PUBLIC_API_URL } from "@/shared/environment";

export const authClient = createAuthClient({
  baseURL: NEXT_PUBLIC_API_URL, // No hace falta template string si ya es string

  // Centralizamos los headers aquí para que todas las llamadas
  // (signIn, signUp, etc.) los incluyan automáticamente.
  fetchOptions: {
    headers: {
      Origin: NEXT_PUBLIC_API_URL,
    },
    // Si estás teniendo problemas de credenciales/cookies en desarrollo:
    // credentials: "include",
  },

  plugins: [usernameClient()],
});
