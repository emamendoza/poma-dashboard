import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

export function Header() {
  return (
    <header className="flex justify-around items-center p-6">
      <h1>
        <Link href="/" className="border border-white p-2 rounded">
          Pome
        </Link>
      </h1>
      <ModeToggle />
      <Link href="/register" className="border border-white p-2 rounded">
        Registrarse
      </Link>

      <Link href="/login" className="border border-white p-2 rounded">
        iniciar sesión
      </Link>
    </header>
  );
}
