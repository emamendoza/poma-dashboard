import { toNextJsHandler } from "better-auth/next-js";
import { authConfig } from "./config";

export const controller = toNextJsHandler(authConfig);
