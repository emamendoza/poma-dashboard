import { NextResponse } from "next/server";
import { createUser, getUsers } from "@/users/services";

/**
 * Obtiene la lista de usuarios.
 * Para ver el resultado en el navegador, acceda a la URL: `http://localhost:3000/api/users`
 *
 * @returns Una respuesta JSON con la lista de usuarios.
 */
export async function GET() {
  return NextResponse.json(getUsers());
}

export async function POST(request: Request) {
  try {
    const user = await request.json();
    const newUser = createUser(user);

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Error al crear usuario" },
      { status: 400 },
    );
  }
}
