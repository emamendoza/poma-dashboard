import type { AuthParams } from "../domain/models";

export interface IAuthRepository {
  signUp(
    params: AuthParams & { name: string; email: string },
  ): Promise<AuthResponse>;
}

export interface AuthResponse<T = any> {
  data: T | null;
  error: {
    message: string;
    code?: string;
  } | null;
}
