import { DESKTOP_HEADER_HEIGHT } from "../constants";
import Button from "./Button";

export default function Header() {
  return (
    <header
      className="w-full flex justify-between items-center px-8 shadow-md text-[var(--color-primary)]"
      style={{
        height: DESKTOP_HEADER_HEIGHT,
        background: "var(--color-background)",
        position: "sticky",
        top: 0,
      }}
    >
      <div className="text-2xl font-extrabold tracking-tight">HELLO WORLD</div>

      <nav className="flex items-center gap-6">
        <Button variant="outline">LOG IN</Button>
        <Button variant="primary">SIGN UP</Button>
      </nav>
    </header>
  );
}
