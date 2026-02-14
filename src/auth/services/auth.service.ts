import type { RegisterUserDTO } from "../application/register-user";
import type { AuthParams } from "../domain/models";
import type { IAuthRepository } from "../repository/repository";

// application/services/auth.service.ts
export class AuthService {
  constructor(private authRepository: IAuthRepository) {}

  async register(data: RegisterUserDTO) {
    // Aquí vive la lógica de orquestación
    return await this.authRepository.signUp(data);
  }

  async login(data: AuthParams) {
    // Otra lógica de negocio para login
  }
}
