import type { AuthParams, LoginParams } from "../domain/models";

export interface SignUpRepository {
  SignUp(
    params: AuthParams & { name: string; email: string },
  ): Promise<AuthResponse>;
}

export interface SignInRepository {
  SignIn(params: LoginParams): Promise<AuthResponse>;
}

export interface AuthResponse<T = any> {
  data: T | null;
  error: {
    message: string;
    code?: string;
  } | null;
}
