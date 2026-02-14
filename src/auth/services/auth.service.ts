// application/services/auth.service.ts
import type { RegisterUserDTO } from "../application/register-user"; // Tu DTO de registro
import type { LoginParams } from "../domain/models";
import type {
  SignInRepository,
  SignOutRepository,
  SignUpRepository,
} from "../repository/repository";

export class AuthService {
  constructor(
    private readonly signUpRepository: SignUpRepository,
    private readonly signInRepository: SignInRepository,
    private readonly signOutRepository: SignOutRepository,
  ) {}

  async register(data: RegisterUserDTO) {
    // Orquestación: podrías transformar el DTO antes de enviarlo al repo
    return await this.signUpRepository.signUp(data);
  }

  async login(data: LoginParams) {
    // El repo ya se encarga de identificar si es email o username
    return await this.signInRepository.signIn(data);
  }

  async logout() {
    // Better-Auth limpiará las cookies automáticamente
    return await this.signOutRepository.signOut();
  }
}
