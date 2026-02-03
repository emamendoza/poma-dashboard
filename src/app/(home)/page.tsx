
import { Button } from "@/ui/components/button";
import Hero from "./_components/hero";

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Hero />
      <main>
        <Button>Hola mundo</Button>
      </main>
    </div>
  );
}
