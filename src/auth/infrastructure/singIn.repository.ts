import type { BetterAuthError, LoginParams } from "../domain/models";
import type { AuthResponse, SignInRepository } from "../repository/repository";
import { authClient } from "./auth-client";

export class SignIn implements SignInRepository {
  async signIn(params: LoginParams): Promise<AuthResponse> {
    try {
      const { identifier, password } = params;

      // 1. Detectar si es un email
      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identifier);

      // 2. Ejecutar el método correspondiente
      const { data, error } = isEmail
        ? await authClient.signIn.email({
            email: identifier,
            password: password!,
            callbackURL: this.CALLBACK_URL,
          })
        : await authClient.signIn.username({
            username: identifier,
            password: password!,
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
          message: err?.message || "Error en el proceso de login",
          code: "SIGNIN_EXCEPTION",
        },
      };
    }
  }

  private readonly CALLBACK_URL = "http://localhost:3000/";

  private mapError(error: BetterAuthError) {
    return {
      message: error.message || "Error en el servidor",
      code: error.code || error.status?.toString() || "UNKNOWN_ERROR",
    };
  }
}
