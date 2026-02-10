import { AuthList } from "../constants/AuthConstant";
import type { IAuthRepository } from "../domain/IAuthRepository";
import type { UserLogin } from "../domain/user-login";

class AuthRepository implements IAuthRepository {
  private authList: Array<UserLogin> = [];
  constructor(initialData: Array<UserLogin> = []) {
    this.authList = initialData;
  }
  findAll(): Array<UserLogin> {
    return this.authList;
  }
  findByUsername(username: string): UserLogin | undefined {
    return this.authList.find((auth) => auth.username === username);
  }
  findByUsernameAndPassword(
    username: string,
    password: string,
  ): UserLogin | undefined {
    return this.authList.find(
      (auth) => auth.username === username && auth.password === password,
    );
  }
}

export const authRepository = new AuthRepository(AuthList);
