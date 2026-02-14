import type { AuthParams, UserAuth } from "../domain/models";
import type { AuthResponse, IAuthRepository } from "../repository/repository";

// Definimos qué necesita este caso de uso para funcionar
export interface RegisterUserDTO extends AuthParams {
  name: string;
  email: string;
}

export class RegisterUserUseCase {
  // Inyectamos la interfaz del repositorio (Inversión de Dependencia)
  constructor(private authRepository: IAuthRepository) {}

  async execute(data: RegisterUserDTO): Promise<AuthResponse<UserAuth>> {
    // 1. Aquí podrías añadir lógica de negocio (ej. validar formato de username)
    if (data.username.length < 3) {
      return {
        data: null,
        error: { message: "El nombre de usuario es demasiado corto" },
      };
    }

    // 2. Llamamos al repositorio
    // No sabemos si es Better Auth o Firebase, solo que cumple con IAuthRepository
    const result = await this.authRepository.signUp({
      ...data,
      // Pasamos los campos requeridos por la interfaz del repositorio
      email: data.email,
      name: data.name,
    });

    // 3. Lógica post-registro (Opcional)
    // Por ejemplo: disparar un evento de "Enviar Email de Bienvenida"
    if (!result.error && result.data) {
      console.log(`Usuario ${result.data.username} registrado con éxito.`);
    }

    return result;
  }
}
