import { Poiret_One } from "next/font/google";
import { LoginForm } from "./_components/login-form";

// Configuración de la fuente (solo weight 400 disponible)
const poiretOne = Poiret_One({
  weight: "400", // único peso que tiene
  subsets: ["latin"], // o ["latin-ext"] si necesitás más caracteres
  display: "swap", // evita flash de texto invisible
  variable: "--font-poiret-one", // crea variable CSS (opcional pero útil)
});

export default function AuthPage() {
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-gradient-to-r from-purple-700 to-blue-600 px-4 py-8 sm:px-6 sm:py-12">
      <LoginForm />
    </main>
  );
}
