// hooks/auth/useLoginAction.ts

import { useRouter } from "next/navigation";
import { useState } from "react";
import { loginUser } from "@/auth/infrastructure/dependencies";

export function useLoginAction() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const performLogin = async (identifier: string, password: string) => {
    setError(null);
    const result = await loginUser.execute({ identifier, password });

    if (result.error) {
      setError(result.error.message);
      return { success: false };
    }

    router.push("/dashboard");
    router.refresh();
    return { success: true };
  };

  return { performLogin, error, clearError: () => setError(null) };
}
