type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "outline";
  disabled?: boolean;
};

export default function Button({
  children,
  onClick,
  className = "",
  type = "button",
  variant = "primary",
  disabled = false,
}: ButtonProps) {
  const baseClasses =
    "font-medium py-2 px-6 rounded cursor-pointer transition duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed border";

  const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
    primary:
      "bg-[var(--color-primary)] text-white border-[var(--color-primary)] hover:bg-transparent hover:text-[var(--color-primary)]",
    outline:
      "bg-transparent text-[var(--color-primary)] border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
