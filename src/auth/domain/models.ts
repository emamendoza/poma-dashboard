export interface UserAuth {
  id: string;
  username: string;
  name: string;
  email: string;
  image?: string;
}

export interface BetterAuthError {
  message?: string;
  code?: string;
  status?: number;
}

export interface AuthResult {
  user: UserAuth;
  token: string;
}

export interface AuthParams {
  username: string;
  password: string;
}

export interface LoginParams {
  identifier: string;
  password: string;
}
