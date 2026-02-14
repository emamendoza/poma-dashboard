import { AuthController } from "@/auth/lib/better-auth/controller";

const controller = new AuthController();

export const POST = (req: Request) => controller.login(req);
