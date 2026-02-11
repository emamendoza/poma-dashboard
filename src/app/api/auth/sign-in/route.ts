import { signInServerAction } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, password } = body;
    if (!username || !password) {
      return NextResponse.json(
        { error: "Missing credentials" },
        { status: 400 },
      );
    }

    const result = await signInServerAction({ username, password });

    return NextResponse.json({ success: true, data: result });
  } catch (err: any) {
    console.error("Sign-in error:", err);
    return NextResponse.json(
      { success: false, error: err?.message || "Sign-in failed" },
      { status: 401 },
    );
  }
}
