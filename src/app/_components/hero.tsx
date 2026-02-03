import { ModeToggle } from "./mode-toggle"

export default function Hero() {
    return (
        <header className="flex justify-around items-center">
            <h1>Pome</h1>
            <ModeToggle />
        </header>
    )
}