import type { AuthResponse, SignOutRepository } from "../repository/repository";

export class LogoutUserUseCase {
  constructor(private readonly signOutRepository: SignOutRepository) {}

  async execute(): Promise<AuthResponse> {
    // Aquí podrías agregar lógica para limpiar cache local o estados globales si usas Zustand/Redux
    return await this.signOutRepository.signOut();
  }
}
