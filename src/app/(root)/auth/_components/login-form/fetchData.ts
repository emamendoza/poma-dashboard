// Definimos interfaces para tener autocompletado y seguridad
interface LoginResponse {
  user: { id: string; username: string };
  token: string;
}

export const loginUser = async (data: Record<string, any>) => {
  const urlBase = "http://localhost:3000/api/auth/login";

  try {
    const response = await fetch(urlBase, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // 1. Manejo de errores de HTTP (4xx, 5xx)
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Error en el inicio de sesión");
    }

    const result: LoginResponse = await response.json();

    return {
      data: result,
      success: true,
      error: null,
    };
  } catch (error) {
    // 2. Manejo de errores de red o excepciones
    return {
      data: null,
      success: false,
      error: error instanceof Error ? error.message : "Error desconocido",
    };
  }
};
