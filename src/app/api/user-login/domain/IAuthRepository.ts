import type { UserLogin } from "./user-login";

export interface IAuthRepository {
  findAll(): Array<UserLogin>;
  findByUsername(username: string): UserLogin | undefined;
  findByUsernameAndPassword(
    username: string,
    password: string,
  ): UserLogin | undefined;
}
