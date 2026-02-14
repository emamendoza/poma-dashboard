import { toNextJsHandler } from "better-auth/next-js";
import { authConfig } from "@/auth/lib/better-auth/auth";

export const { POST, GET } = toNextJsHandler(authConfig);
