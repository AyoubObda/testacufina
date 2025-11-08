import React, { useMemo, useState } from "react";
import { isHttpsUrl } from "../utils";

type HeaderProps = { lucyUrl?: string };
const Header: React.FC<HeaderProps> = ({ lucyUrl = "" }) => {
  const [open, setOpen] = useState(false);
  const safeLucy = useMemo(() => (isHttpsUrl(lucyUrl) ? lucyUrl : "/portal"), [lucyUrl]);
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2" aria-label="ACUFIN Home">
          <div className="h-10 w-28 bg-[#0B1E3A] text-white flex items-center justify-center font-bold rounded">ACUFIN</div>
        </a>
        <nav className="hidden md:flex items-center gap-6 font-medium">
          <a href="#diensten" className="hover:text-[#0B1E3A]">Diensten</a>
          <a href="#team" className="hover:text-[#0B1E3A]">Team</a>
          <a href="#cases" className="hover:text-[#0B1E3A]">Cases</a>
          <a href="#blog" className="hover:text-[#0B1E3A]">Blog</a>
          <a href="#contact" className="hover:text-[#0B1E3A]">Contact</a>
          <a href={safeLucy} target="_blank" rel="noopener noreferrer"
             className="px-4 py-2 rounded-full border border-[#0B1E3A] text-[#0B1E3A] hover:bg-[#0B1E3A] hover:text-white transition">
            Dossier raadplegen
          </a>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="menu">☰</button>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-4 space-y-3">
          <a href="#diensten" className="block">Diensten</a>
          <a href="#team" className="block">Team</a>
          <a href="#cases" className="block">Cases</a>
          <a href="#blog" className="block">Blog</a>
          <a href="#contact" className="block">Contact</a>
          <a href={safeLucy} target="_blank" rel="noopener noreferrer" className="block">Dossier raadplegen</a>
        </div>
      )}
    </header>
  );
};
export default Header;
