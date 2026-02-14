import type { AuthParams } from "../domain/models";
import type { AuthResponse, IAuthRepository } from "../repository/repository";
import { authClient } from "./auth-client";

export class BetterAuthRepository implements IAuthRepository {
  async signUp(
    params: AuthParams & { name: string; email: string },
  ): Promise<AuthResponse> {
    const { data, error } = await authClient.signUp.email({
      email: params.email,
      name: params.name,
      username: params.username,
      password: params.password,
      callbackURL: "http://localhost:3000/",
    });

    if (error) {
      return {
        data: null,
        error: {
          message: error.message || "Error desconocido",
          // Mapeamos el status o código si es necesario
          code: error.statusText,
        },
      };
    }

    return {
      data,
      error: null,
    };
  }
}
