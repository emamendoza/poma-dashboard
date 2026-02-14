// infrastructure/sign-out.repository.ts
import type { BetterAuthError } from "../domain/models";
import type { AuthResponse, SignOutRepository } from "../repository/repository";
import { authClient } from "./auth-client";

export class SignOut implements SignOutRepository {
  async signOut(): Promise<AuthResponse> {
    try {
      const { error } = await authClient.signOut();

      if (error) {
        return {
          data: null,
          error: this.mapError(error),
        };
      }

      return { data: { success: true }, error: null };
    } catch (err: any) {
      return {
        data: null,
        error: {
          message: err?.message || "Error al cerrar sesión",
          code: "SIGNOUT_EXCEPTION",
        },
      };
    }
  }

  private mapError(error: BetterAuthError) {
    return {
      message: error.message || "Error en el servidor",
      code: error.code || error.status?.toString() || "UNKNOWN_ERROR",
    };
  }
}
