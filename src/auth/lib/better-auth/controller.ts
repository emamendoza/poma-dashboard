import { NextResponse } from "next/server";
import { registerUser } from "@/auth/infrastructure/dependencies";

export class AuthController {
  async register(req: Request) {
    try {
      const body = await req.json();
      const { data, error } = await registerUser.execute(body);

      if (error) {
        return NextResponse.json({ error: error.message }, { status: 400 });
      }

      return NextResponse.json({ data }, { status: 201 });
    } catch (e) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }
  }
}
