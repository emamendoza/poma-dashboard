import type { IAuthRepository } from "../domain/IAuthRepository";
import type { IAuthService } from "../domain/IAuthService";
import type { UserLogin } from "../domain/user-login";
import { authRepository } from "../repository/AuthRepository";

class AuthService implements IAuthService {
  private currentUser: Omit<UserLogin, "password"> | null = null;

  constructor(private repo: IAuthRepository) {}
  getUsers(): Array<UserLogin> {
    return this.repo.findAll();
  }
  login(
    username: string,
    password: string,
  ): { success: boolean; user?: Omit<UserLogin, "password">; message: string } {
    const userExists = this.repo.findByUsername(username);
    if (!userExists) {
      return { success: false, message: "Usuario no registrado en el sistema" };
    }

    const user = this.repo.findByUsernameAndPassword(username, password);

    if (!user) {
      return { success: false, message: "Usuario o Contraseña incorrecta" };
    }

    const { id, username: loggedUsername } = user;
    this.currentUser = { id, username: loggedUsername };

    return {
      success: true,
      user: this.currentUser,
      message: "Login exitoso",
    };
  }

  getCurrentUser(): Omit<UserLogin, "password"> | null {
    return this.currentUser;
  }
  logout(): void {
    this.currentUser = null;
    console.log("Logout exitoso");
  }
}

export const authService = new AuthService(authRepository);
