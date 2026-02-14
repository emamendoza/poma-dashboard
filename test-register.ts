// test-register.ts

import { registerUser } from "./src/auth/infrastructure/dependencies";

async function test() {
  console.log("🧪 Iniciando prueba de registro...");

  const result = await registerUser.execute({
    username: "probadorsqlite",
    password: "Password123!",
    name: "Juan Perez",
    email: "juan@example.com",
  });

  if (result.error) {
    console.error("❌ Error en la prueba:", result.error);
  } else {
    console.log("✅ Éxito! Usuario creado en SQLite:", result.data);
  }
}

test();
