import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export default function ButtonLink({ href, children, variant = "primary", className = "" }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2";
  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-600",
    secondary: "bg-gray-900 text-white hover:bg-black focus:ring-gray-900",
    ghost: "bg-white text-gray-900 ring-1 ring-gray-200 hover:ring-gray-300 focus:ring-gray-200",
  } as const;
  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </Link>
  );
}
