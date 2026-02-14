import type { AuthParams, BetterAuthError } from "../domain/models";
import type { AuthResponse, SignUpRepository } from "../repository/repository";
import { authClient } from "./auth-client";

export class SignUp implements SignUpRepository {
  async signUp(
    params: AuthParams & { name: string; email: string },
  ): Promise<AuthResponse> {
    try {
      const { data, error } = await authClient.signUp.email({
        email: params.email,
        name: params.name,
        username: params.username,
        password: params.password,
        callbackURL: this.CALLBACK_URL,
      });

      if (error) {
        return {
          data: null,
          error: this.mapError(error),
        };
      }

      return { data, error: null };
    } catch (err: any) {
      return {
        data: null,
        error: {
          message: err?.message || "Ocurrió un error inesperado",
          code: "UNEXPECTED_EXCEPTION",
        },
      };
    }
  }

  // Nota: Considera mover esto a tus variables de entorno si cambia en producción
  private readonly CALLBACK_URL = "http://localhost:3000/";

  private mapError(error: BetterAuthError) {
    return {
      message: error.message || "Error en el servidor",
      code: error.code || error.status?.toString() || "UNKNOWN_ERROR",
    };
  }
}
