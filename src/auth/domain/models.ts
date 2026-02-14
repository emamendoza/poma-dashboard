export interface UserAuth {
  id: string;
  username: string;
  name: string;
  email: string;
  image?: string;
}

export interface AuthResult {
  user: UserAuth;
  token: string;
}

export interface AuthParams {
  username: string;
  password: string;
}
