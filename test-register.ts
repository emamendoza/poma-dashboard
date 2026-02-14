// test-register.ts

import { RegisterUserUseCase } from "./src/auth/application/register-user";
import type { AuthParams, UserAuth } from "./src/auth/domain/models";
import type { IAuthRepository } from "./src/auth/repository/repository";

// Mock repository para pruebas locales (evita llamadas de red a Better Auth)
class MockAuthRepository implements IAuthRepository {
  async signUp(params: AuthParams & { name: string; email: string }) {
    // Simula creación exitosa en SQLite
    const user: UserAuth = {
      id: "local-1",
      username: params.username,
      name: params.name,
      email: params.email,
    };

    return {
      data: user,
      error: null,
    };
  }
}

async function test() {
  console.log("🧪 Iniciando prueba de registro (mock)...");

  const mockRepo = new MockAuthRepository();
  const registerUser = new RegisterUserUseCase(mockRepo);

  const result = await registerUser.execute({
    username: "probadorsqlite",
    password: "Password123!",
    name: "Juan Perez",
    email: "juan@example.com",
  });

  if (result.error) {
    console.error("❌ Error en la prueba:", result.error);
    process.exitCode = 1;
  } else {
    console.log("✅ Éxito! Usuario (mock):", result.data);
  }
}

test();
