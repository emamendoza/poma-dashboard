/** biome-ignore-all lint/complexity/noStaticOnlyClass: <explanation> */
import { NextResponse } from "next/server";
import { authService } from "../service/AuthService";

export class AuthController {
  static async handleLogin(req: Request) {
    try {
      const { username, password } = await req.json();

      if (!username || !password) {
        return NextResponse.json(
          { error: "Username and password are required" },
          { status: 400 },
        );
      }

      const result = authService.login(username, password);

      if (!result.success) {
        return NextResponse.json({ error: result.message }, { status: 401 });
      }

      return NextResponse.json(
        {
          success: true,
          user: result.user,
        },
        { status: 200 },
      );
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { error: "Internal server error" },
        { status: 500 },
      );
    }
  }
  static handleGetUsers() {
    const users = authService.getUsers();
    return NextResponse.json({ users });
  }

  static handleLogout() {
    authService.logout();
    return NextResponse.json({ message: "Sesión cerrada" }, { status: 200 });
  }
}
