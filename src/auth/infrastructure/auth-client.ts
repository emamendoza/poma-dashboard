import { createAuthClient } from "better-auth/client";
import { usernameClient } from "better-auth/client/plugins";
import { NEXT_PUBLIC_API_URL } from "@/shared/environment";

export const authClient = createAuthClient({
  baseURL: `${NEXT_PUBLIC_API_URL}`,
  plugins: [usernameClient()],
});
