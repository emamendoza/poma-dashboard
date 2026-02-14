import type { LoginParams } from "../domain/models";
import type { AuthResponse, SignInRepository } from "../repository/repository";

/**
 * Caso de Uso para el inicio de sesión de usuario.
 * Se encarga de orquestar la lógica de negocio para la autenticación.
 */
export class LoginUserUseCase {
  /**
   * Inyectamos el repositorio mediante su interfaz (Inversión de Dependencia).
   * Esto permite que el caso de uso sea testeable y desacoplado de la infraestructura.
   */
  constructor(private readonly authRepository: SignInRepository) {}

  /**
   * Ejecuta la acción de login.
   * @param params Contiene el identifier (email/username) y el password.
   */
  async execute(params: LoginParams): Promise<AuthResponse> {
    // 1. Validaciones de Regla de Negocio básicas
    if (!params.identifier || params.identifier.trim() === "") {
      return {
        data: null,
        error: {
          message: "El usuario o correo es obligatorio",
          code: "EMPTY_IDENTIFIER",
        },
      };
    }

    if (!params.password || params.password.length < 6) {
      return {
        data: null,
        error: {
          message: "La contraseña es inválida o demasiado corta",
          code: "INVALID_PASSWORD",
        },
      };
    }

    // 2. Llamada al repositorio
    // El caso de uso no sabe si el repo usa Better-Auth, Firebase o una API propia.
    const response = await this.authRepository.signIn(params);

    // 3. Lógica post-login (opcional)
    // Aquí podrías disparar analytics, logs de auditoría o transformar la respuesta.
    return response;
  }
}
