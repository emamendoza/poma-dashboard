// infrastructure/dependencies.ts

import { RegisterUserUseCase } from "../application/register-user";
import { BetterAuthRepository } from "./better-auth.respository";

// 1. Instancias el "driver" técnico (SQLite + Better Auth)
const authRepository = new BetterAuthRepository();

// 2. Instancias el caso de uso pasándole el repositorio
export const registerUser = new RegisterUserUseCase(authRepository);
