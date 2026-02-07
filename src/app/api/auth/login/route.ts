import { AuthController } from "../controller/AuthController"; // Ajusta la ruta

export async function POST(req: Request) {
  return AuthController.handleLogin(req);
}

export async function GET() {
  return AuthController.handleGetUsers();
}
