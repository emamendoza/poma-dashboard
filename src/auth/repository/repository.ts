import type { AuthParams, LoginParams } from "../domain/models";

export interface SignUpRepository {
  signUp(
    params: AuthParams & { name: string; email: string },
  ): Promise<AuthResponse>;
}

export interface SignInRepository {
  signIn(params: LoginParams): Promise<AuthResponse>;
}

export interface SignOutRepository {
  signOut(): Promise<AuthResponse>;
}

export interface AuthResponse<T = any> {
  data: T | null;
  error: {
    message: string;
    code?: string;
  } | null;
}
