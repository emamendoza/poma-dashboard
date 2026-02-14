// infrastructure/dependencies.ts

import { LoginUserUseCase } from "../application/login-user";
import { RegisterUserUseCase } from "../application/register-user";
import { SignIn } from "./signIn.repository";
import { SignUp } from "./signUp.repository";

const signUpRepository = new SignUp();

export const registerUser = new RegisterUserUseCase(signUpRepository);

const signInRepository = new SignIn();

export const loginUser = new LoginUserUseCase(signInRepository);
