// infrastructure/dependencies.ts

import { RegisterUserUseCase } from "../application/register-user";
import { BetterAuthRepository } from "./better-auth.respository";

const authRepository = new BetterAuthRepository();

export const registerUser = new RegisterUserUseCase(authRepository);
