import { NextResponse } from "next/server";
import { signOutServerAction } from "@/auth/lib/auth";

export async function POST() {
  try {
    signOutServerAction();
    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("Sign-out error:", err);
    return NextResponse.json(
      { success: false, error: err?.message || "Sign-out failed" },
      { status: 500 },
    );
  }
}
