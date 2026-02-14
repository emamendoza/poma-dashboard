import type { RegisterUserDTO } from "../application/register-user";
import type { LoginParams } from "../domain/models";
import type {
  SignInRepository,
  SignUpRepository,
} from "../repository/repository";

// application/services/auth.service.ts
export class AuthService {
  constructor(
    private signUpRepository: SignUpRepository,
    private signInRepository: SignInRepository,
  ) {}

  async register(data: RegisterUserDTO) {
    // Aquí vive la lógica de orquestación
    return await this.signUpRepository.SignUp(data);
  }

  async login(data: LoginParams) {
    return await this.signInRepository.SignIn(data);
  }
}
