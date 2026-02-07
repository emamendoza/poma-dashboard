import type { Auth } from "./Auth";

export interface IAuthService {
  getUsers(): Array<Auth>;
  login(
    username: string,
    password: string,
  ): { success: boolean; user?: Omit<Auth, "password">; message: string };
  getCurrentUser(): Omit<Auth, "password"> | null;
  logout(): void;
}
