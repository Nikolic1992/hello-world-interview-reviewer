export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white py-6 px-8 flex justify-between items-center text-sm">
      <p>© 2025 Hello World. All rights reserved.</p>
      <nav className="flex gap-6">
        <a href="/about" className="hover:underline">
          About
        </a>
        <a href="/contact" className="hover:underline">
          Contact
        </a>
        <a href="/privacy" className="hover:underline">
          Privacy Policy
        </a>
      </nav>
    </footer>
  );
}
