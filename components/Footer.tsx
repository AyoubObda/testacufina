import React from "react";

const Footer: React.FC = () => (
  <footer className="bg-[#0B1E3A] text-gray-200 text-center py-10 mt-12">
    <div className="h-8 w-28 mx-auto mb-4 bg-white text-[#0B1E3A] flex items-center justify-center font-bold rounded">
      ACUFIN
    </div>
    <p className="mb-2">© {new Date().getFullYear()} ACUFIN BV – Alle rechten voorbehouden</p>
    <p className="text-sm">BTW: BE 1004.853.187 – ITAA: 13.342.348</p>
  </footer>
);

export default Footer;
