// infrastructure/dependencies.ts

import { LoginUserUseCase } from "../application/login-user";
import { LogoutUserUseCase } from "../application/logout-user";
import { RegisterUserUseCase } from "../application/register-user";
import { SignOut } from "./signOut.repository";
import { SignIn } from "./singIn.repository";
import { SignUp } from "./singUp.repository";

const signUpRepository = new SignUp();

export const registerUser = new RegisterUserUseCase(signUpRepository);

const signInRepository = new SignIn();

export const loginUser = new LoginUserUseCase(signInRepository);

const signOutRepository = new SignOut();

export const logoutUser = new LogoutUserUseCase(signOutRepository);
