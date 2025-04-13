import { DESKTOP_HEADER_HEIGHT } from "../constants";
import Button from "./Button";

export default function Header() {
  return (
    <header
      className="text-white shadow-md flex justify-between items-center w-full px-8"
      style={{
        height: DESKTOP_HEADER_HEIGHT,
        background:
          "linear-gradient(to right, rgba(72, 166, 167, 0.85), rgba(72, 166, 167, 0.1))",
      }}
    >
      {/* Left side - Logo */}
      <div className="flex items-center">
        <h1 className="text-2xl font-bold">HELLO WORLD</h1>
      </div>

      {/* Right side - Search and buttons */}
      <div className="flex items-center gap-4">
        <input
          type="search"
          placeholder="Search..."
          className="w-[200px] h-[30px] px-[10px] bg-[var(--color-background)] text-[var(--color-text)] border-none rounded-md outline-none focus:outline-none focus:ring-0"
        />
        <Button>LOG IN</Button>
        <Button>SIGN UP</Button>
      </div>
    </header>
  );
}
