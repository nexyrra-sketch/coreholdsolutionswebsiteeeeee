import Link from "next/link";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded font-body font-medium transition-colors duration-250 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const sizes = {
  default: "px-6 py-3 text-small",
  large: "px-7 py-4 text-lg",
};

const variants: Record<Variant, string> = {
  primary: "bg-brass-500 text-ink-950 hover:bg-brass-400 active:bg-brass-600",
  secondary:
    "bg-transparent text-paper-50 border border-paper-50/40 hover:border-paper-50 hover:bg-paper-50/5",
  ghost: "bg-transparent text-ink-900 border border-ink-900/20 hover:border-ink-900/50",
};

type CommonProps = {
  variant?: Variant;
  size?: keyof typeof sizes;
  className?: string;
};

export function Button({
  variant = "primary",
  size = "default",
  className = "",
  ...props
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    />
  );
}

export function LinkButton({
  variant = "primary",
  size = "default",
  className = "",
  href,
  ...props
}: CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return (
    <Link
      href={href}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
