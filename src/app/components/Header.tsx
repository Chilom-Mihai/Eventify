"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-blue-700 text-white py-4 px-6 flex justify-between items-center relative z-50">
      <Link href={"/"} className="text-xl font-bold">
        Eventify
      </Link>

      <nav className="flex gap-6 items-center relative justify-center w-[100%]">
        <div
          className="relative"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          {/* Trigger */}
          <button className="text-white hover:text-blue-300 relative flex items-center gap-1">
            Organizează eveniment
            <span className="transition-transform duration-200">
              {open ? "▴" : "▾"}
            </span>
          </button>

          {/* Dropdown fără spațiu între el și buton */}
          <div
            className={`absolute left-0 top-full w-44 rounded-md shadow-lg bg-white text-black p-3 z-40 transition-all duration-150 ${
              open ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <ul className="flex flex-col space-y-2 p-2">
              <li>
                <Link
                  href="/organizeaza/privat"
                  className="block hover:text-sky-500"
                >
                  Privat
                </Link>
              </li>
              <li>
                <Link
                  href="/organizeaza/business"
                  className="block hover:text-sky-500"
                >
                  Business
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Alte linkuri */}
        <Link href="/despre-noi" className="hover:text-blue-300">
          Despre noi
        </Link>
        <Link href="/invitatii" className="hover:text-blue-300">
          Invitații
        </Link>
        <Link href="/preturi" className="hover:text-blue-300">
          Prețuri
        </Link>
        <Link href="/contact" className="hover:text-blue-300">
          Contact
        </Link>
        <Link href="/login" className="hover:text-blue-300">
          Login
        </Link>
        <Link href="/inregistrare" className="hover:text-blue-300">
          Înregistrare
        </Link>
      </nav>
    </header>
  );
}
