import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "ghost" | "light";

const variants: Record<Variant, string> = {
  primary:
    "bg-oxblood text-oyster border-oxblood hover:bg-transparent hover:text-oxblood",
  ghost:
    "bg-transparent text-ink border-ink hover:bg-ink hover:text-oyster",
  light:
    "bg-oyster text-oxblood border-oyster hover:bg-transparent hover:text-oyster",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
  type,
  disabled,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  const classes = `inline-flex items-center justify-center rounded-xl border px-7 py-4 text-[0.78rem] font-medium uppercase tracking-[0.16em] transition-all duration-300 ease-out hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
