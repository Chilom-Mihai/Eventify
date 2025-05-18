"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [openOrganizeaza, setOpenOrganizeaza] = useState(false);
  const [openPreturi, setOpenPreturi] = useState(false);

  return (
    <header className="bg-blue-700 text-white py-4 px-6 flex justify-between items-center relative z-50">
      <Link href="/" className="block w-[150px] h-auto relative">
        <Image
          src="/Images/Logo.png"
          alt="Eventify logo"
          width={75}
          height={75}
          className="object-contain"
          priority
        />
      </Link>

      <nav className="flex gap-6 items-center relative justify-center w-full">
        <Link href="/despre-noi" className="hover:text-blue-300">
          Despre noi
        </Link>

        {/* Organizează eveniment */}
        <div
          className="relative"
          onMouseEnter={() => setOpenOrganizeaza(true)}
          onMouseLeave={() => setOpenOrganizeaza(false)}
        >
          <button className="text-white hover:text-blue-300 relative flex items-center gap-1">
            Organizează eveniment
            <span className="transition-transform duration-200">
              {openOrganizeaza ? "▴" : "▾"}
            </span>
          </button>

          <div
            className={`absolute left-0 top-full w-44 rounded-md shadow-lg bg-white text-black p-3 z-40 transition-all duration-150 ${
              openOrganizeaza ? "opacity-100 visible" : "opacity-0 invisible"
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

        {/* Invitații */}
        <Link href="/invitatii" className="hover:text-blue-300">
          Invitații
        </Link>

        {/* Cum functioneaza */}
        <Link href="/cum-functioneaza" className="hover:text-blue-300">
          Cum functioneaza?
        </Link>

        {/* Prețuri */}
        <div
          className="relative"
          onMouseEnter={() => setOpenPreturi(true)}
          onMouseLeave={() => setOpenPreturi(false)}
        >
          <button className="text-white hover:text-blue-300 relative flex items-center gap-1">
            Prețuri
            <span className="transition-transform duration-200">
              {openPreturi ? "▴" : "▾"}
            </span>
          </button>

          <div
            className={`absolute left-0 top-full w-[190px] rounded-md shadow-lg bg-white text-black p-3 z-40 transition-all duration-150 ${
              openPreturi ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <ul className="flex flex-col space-y-2 p-2">
              <li>
                <Link
                  href="/evenimente-private"
                  className="block hover:text-sky-500"
                >
                  Evenimente private
                </Link>
              </li>
              <li>
                <Link
                  href="/evenimente-business"
                  className="block hover:text-sky-500"
                >
                  Evenimente business
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact, Login, Înregistrare */}
        <Link href="/contact" className="hover:text-blue-300">
          Contact
        </Link>
        <Link href="/inregistrare">
          <button className="bg-[#1A165F] text-white px-4 py-2 rounded-full hover:bg-[#2a2a6a] transition">
            Înregistrare
          </button>
        </Link>
        <Link href="/login">
          <button className="bg-[#1A165F] text-white px-4 py-2 rounded-full hover:bg-[#2a2a6a] transition">
            Login
          </button>
        </Link>
      </nav>
    </header>
  );
}
