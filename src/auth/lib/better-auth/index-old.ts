// lib/auth.ts
/** 
import { cookies } from "next/headers";
import type { AuthParams, LoginResponse, UserAuth } from "@/auth/domain/models";
import { NEXT_PUBLIC_API_URL } from "@/shared/environment";

const TOKEN_COOKIE = "poma_token";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

export async function signInServerAction({ username, password }: AuthParams) {
  const url = `${NEXT_PUBLIC_API_URL}/api/user-login`;

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Login failed: ${res.status} ${text}`);
  }

  const data = (await res.json()) as LoginResponse;

  if (!data?.token) {
    throw new Error("Invalid login response");
  }

  (await cookies()).set({
    name: TOKEN_COOKIE,
    value: data.token,
    httpOnly: true,
    path: "/",
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: COOKIE_MAX_AGE,
  });

  return { user: normalizeUser(data.user), token: data.token };
}

export async function signOutServerAction() {
  (await cookies()).delete(TOKEN_COOKIE);
}

function normalizeUser(raw: LoginResponse["user"]): UserAuth {
  return {
    id: String(raw.id),
    username: raw.username,
    name: raw.name,
    email: raw.email,
  };
}

export async function getTokenFromCookies(): Promise<string | null> {
  const c = (await cookies()).get(TOKEN_COOKIE);
  return c?.value ?? null;
}

export async function getCurrentUser(): Promise<UserAuth | null> {
  const token = getTokenFromCookies();
  if (!token) return null;

  const url = `${NEXT_PUBLIC_API_URL}/api/user-login`;
  const res = await fetch(url, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  }).catch(() => null);

  if (!res || !res.ok) return null;

  const json = (await res.json().catch(() => null)) as unknown as {
    user?: LoginResponse["user"];
  };

  if (!json?.user) return null;
  return normalizeUser(json.user);
}

export async function requireUser(): Promise<UserAuth> {
  const user = await getCurrentUser();
  if (!user) throw new Error("Unauthorized");
  return user;
}
*/
