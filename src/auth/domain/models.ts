export interface AuthParams {
  username: string;
  password: string;
}

export interface UserAuth {
  id: string;
  username: string;
  name?: string;
  email?: string;
}

export interface LoginResponse {
  user: {
    id: number | string;
    username: string;
    name?: string;
    email?: string;
  };
  token: string;
}
