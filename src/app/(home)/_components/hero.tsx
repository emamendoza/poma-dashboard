import { ModeToggle } from "./mode-toggle"

export default function Hero() {
    return (
        <header className="flex justify-between items-center">
            <h1>Hero</h1>
            <ModeToggle />
        </header>
    )
}