// lib/auth.ts
import { betterAuth } from "better-auth";

interface AuthParams {
  username: string;
  password: string;
}

interface LoginResponse {
  user: {
    id: number | string;
    username: string;
  };
  token: string;
}

export const auth = betterAuth({
  secret: process.env.AUTH_SECRET!,
  baseURL: process.env.NEXT_PUBLIC_APP_URL,

  username: {
    enabled: true,
    async authorize({ username, password }: AuthParams) {
      const url = `${process.env.NEXT_PUBLIC_APP_URL}/api/user-login`;

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error(`Login failed: ${response.status} - ${errorText}`);
          return null;
        }

        const result: LoginResponse = await response.json();

        if (result?.user?.id) {
          return {
            id: String(result.user.id),
            email: `${result.user.username}@app.com`,
            name: result.user.username,
            username: result.user.username,
            metadata: { apiToken: result.token },
          };
        }

        console.error("Invalid response format:", result);
        return null;
      } catch (error) {
        console.error("Network error:", error);
        return null;
      }
    },
  },

  user: {
    additionalFields: {
      username: {
        type: "string",
        required: true,
      },
    },
  },
});
