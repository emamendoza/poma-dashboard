import { AuthList } from "../constants/AuthConstant";
import type { Auth } from "../domain/Auth";
import type { IAuthRepository } from "../domain/IAuthRepository";

class AuthRepository implements IAuthRepository {
  private authList: Array<Auth> = [];
  constructor(initialData: Array<Auth> = []) {
    this.authList = initialData;
  }
  findAll(): Array<Auth> {
    return this.authList;
  }
  findByUsername(username: string): Auth | undefined {
    return this.authList.find((auth) => auth.username === username);
  }
  findByUsernameAndPassword(
    username: string,
    password: string,
  ): Auth | undefined {
    return this.authList.find(
      (auth) => auth.username === username && auth.password === password,
    );
  }
}

export const authRepository = new AuthRepository(AuthList);
