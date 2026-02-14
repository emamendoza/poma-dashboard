// hooks/auth/useRegisterAction.ts

import { useRouter } from "next/navigation";
import { useState } from "react";
import { registerUser } from "@/auth/infrastructure/dependencies";

export function useRegisterAction() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const performRegister = async (data: any) => {
    setError(null);
    const result = await registerUser.execute(data);

    if (result.error) {
      setError(result.error.message);
      return { success: false };
    }

    router.push("/dashboard");
    router.refresh();
    return { success: true };
  };

  return { performRegister, error, clearError: () => setError(null) };
}
