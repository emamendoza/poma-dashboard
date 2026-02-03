import { ModeToggle } from "./mode-toggle"

export function Header() {
    return (
        <header className="flex justify-around items-center">
            <h1>Pome</h1>
            <ModeToggle />
        </header>
    )
}