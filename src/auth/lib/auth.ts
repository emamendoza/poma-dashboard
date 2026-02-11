// lib/auth.ts
import { cookies } from "next/headers";

interface AuthParams {
  username: string;
  password: string;
}

interface User {
  id: string;
  username: string;
  name?: string;
  email?: string;
}

interface LoginResponse {
  user: {
    id: number | string;
    username: string;
    name?: string;
    email?: string;
  };
  token: string;
}

function ensureEnv() {
  if (!process.env.NEXT_PUBLIC_API_URL) {
    throw new Error("Missing NEXT_PUBLIC_APP_URL environment variable");
  }
}

const TOKEN_COOKIE = "poma_token";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

export async function signInServerAction({ username, password }: AuthParams) {
  ensureEnv();

  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/user-login`;

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

function normalizeUser(raw: LoginResponse["user"]): User {
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

export async function getCurrentUser(): Promise<User | null> {
  ensureEnv();

  const token = getTokenFromCookies();
  if (!token) return null;

  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/user-login`;
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

export async function requireUser(): Promise<User> {
  const user = await getCurrentUser();
  if (!user) throw new Error("Unauthorized");
  return user;
}
