import type { UserLogin } from "./user-login";

export interface IAuthService {
  getUsers(): Array<UserLogin>;
  login(
    username: string,
    password: string,
  ): { success: boolean; user?: Omit<UserLogin, "password">; message: string };
  getCurrentUser(): Omit<UserLogin, "password"> | null;
  logout(): void;
}
