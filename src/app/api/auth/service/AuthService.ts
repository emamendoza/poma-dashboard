import type { Auth } from "../domain/Auth";
import type { IAuthRepository } from "../domain/IAuthRepository";
import type { IAuthService } from "../domain/IAuthService";
import { authRepository } from "../repository/AuthRepository";

class AuthService implements IAuthService {
  private currentUser: Omit<Auth, "password"> | null = null;

  constructor(private repo: IAuthRepository) {}
  getUsers(): Array<Auth> {
    return this.repo.findAll();
  }
  login(
    username: string,
    password: string,
  ): { success: boolean; user?: Omit<Auth, "password">; message: string } {
    const userExists = this.repo.findByUsername(username);
    if (!userExists) {
      return { success: false, message: "Usuario no registrado en el sistema" };
    }

    const user = this.repo.findByUsernameAndPassword(username, password);

    if (!user) {
      return { success: false, message: "Contraseña incorrecta" };
    }

    const { id, username: loggedUsername } = user;
    this.currentUser = { id, username: loggedUsername };

    return {
      success: true,
      user: this.currentUser,
      message: "Login exitoso",
    };
  }

  getCurrentUser(): Omit<Auth, "password"> | null {
    return this.currentUser;
  }
  logout(): void {
    this.currentUser = null;
    console.log("Logout exitoso");
  }
}

export const authService = new AuthService(authRepository);
