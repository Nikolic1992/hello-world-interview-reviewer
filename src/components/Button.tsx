type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
};

export default function Button({
  children,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-[var(--color-primary)] hover:bg-[var(--color-text)] text-white font-medium py-2 px-6 rounded cursor-pointer transition duration-200 ${className}`}
    >
      {children}
    </button>
  );
}
