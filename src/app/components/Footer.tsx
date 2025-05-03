// components/Footer.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Smile,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollUp(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-r from-[#0a1c61] to-[#00aaff] text-white px-6 py-16">
      {/* <hr className="border-t border-white/20 mb-10" /> */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Eventify</h2>
          <ul className="space-y-2 text-white/90 text-sm">
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Bulevardul Pipera 1/II, Voluntari, Ilfov
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> 0750.401.866
            </li>
            <li className="flex items-center gap-2 ">
              <Mail size={16} />
              <a className="text-blue-400" href="mailto:contact@eventify.ro">
                contact@eventify.ro
              </a>
            </li>
          </ul>
        </div>

        {/* Management Links */}
        <div>
          <h3 className="font-semibold mb-4">Management</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="#"
                className="text-white/70 hover:text-white hover:translate-x-1 transition duration-200 block"
              >
                Evenimente private
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-white/70 hover:text-white hover:translate-x-1 transition duration-200 block"
              >
                Evenimente business
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-white/70 hover:text-white hover:translate-x-1 transition duration-200 block"
              >
                Invitații digitale
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-white/70 hover:text-white hover:translate-x-1 transition duration-200 block"
              >
                FaceRecognition
              </Link>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold mb-4">Utile</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="#"
                className="text-white/70 hover:text-white hover:translate-x-1 transition duration-200 block"
              >
                Despre
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-white/70 hover:text-white hover:translate-x-1 transition duration-200 block"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-white/70 hover:text-white hover:translate-x-1 transition duration-200 block"
              >
                Termeni
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-white/70 hover:text-white hover:translate-x-1 transition duration-200 block"
              >
                Confidențialitate
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-white/70 hover:text-white hover:translate-x-1 transition duration-200 block"
              >
                Politica de anulare
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-white/70 hover:text-white hover:translate-x-1 transition duration-200 block"
              >
                Protecția datelor
              </Link>
            </li>
          </ul>
        </div>

        {/* App Store + Social */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col gap-3">
            <Image
              src="/images/appstore.svg"
              alt="App Store"
              width={120}
              height={40}
            />
            <Image
              src="/images/googleplay.svg"
              alt="Google Play"
              width={120}
              height={40}
            />
          </div>

          <div className="flex gap-4 mt-2">
            <Link
              href="https://www.facebook.com"
              className="rounded-full border border-white bg-white text-black p-2 transition hover:bg-transparent hover:text-white"
            >
              <Facebook className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.instagram.com"
              className="rounded-full border border-white bg-white text-black p-2 transition hover:bg-transparent hover:text-white"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.youtube.com"
              className="rounded-full border border-white bg-white text-black p-2 transition hover:bg-transparent hover:text-white"
            >
              <Youtube className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Payment/Legal Logos */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-12">
        {/* Imagine mare cu plăți: Netopia + Mastercard + Visa */}
        <Image
          src="/images/netopia.svg" // imagine combinată
          alt="Plăți acceptate"
          width={400}
          height={100}
        />

        {/* Legal links pe verticală */}
        <div className="flex flex-col gap-4">
          <Image src="/images/anpc.svg" alt="ANPC" width={200} height={50} />
          <Image
            src="/images/litigii.svg"
            alt="Litigii"
            width={200}
            height={50}
          />
        </div>
      </div>

      {/* WhatsApp Button */}
      <Link
        href="https://wa.me/40750401866"
        className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Smile className="w-6 h-6" />
      </Link>

      {/* Scroll to top */}
      {showScrollUp && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-sky-500 text-white p-2 w-10 h-10 flex items-center justify-center shadow-lg z-50 hover:bg-sky-600 transition"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  );
}
