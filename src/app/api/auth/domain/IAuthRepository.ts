import type { Auth } from "./Auth";

export interface IAuthRepository {
  findAll(): Array<Auth>;
  findByUsername(username: string): Auth | undefined;
  findByUsernameAndPassword(
    username: string,
    password: string,
  ): Auth | undefined;
}
