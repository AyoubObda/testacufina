import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="container-narrow flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="ACUFIN" className="h-7 w-auto" />
          <span className="font-semibold tracking-wide">ACUFIN BV</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/#diensten" className="hover:text-brand-700">Diensten</Link>
          <Link href="/#over" className="hover:text-brand-700">Over</Link>
          <Link href="/#contact" className="hover:text-brand-700">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
