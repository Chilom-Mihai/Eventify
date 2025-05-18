"use client";

import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Formulare de contact și introducere */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Hai să ne cunoaștem</h2>
          <p className="text-gray-600 mb-8">
            Aliatul tău de bază pentru organizarea eficientă și inteligentă a
            unui eveniment. Îmbunătățește planificările, dar și comunicarea
            dintre toate părțile participante. Gestionează perfect timpul
            organizatorilor și al participanților.
          </p>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Nume"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <input
              type="text"
              placeholder="Subiect"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <textarea
              rows={6}
              placeholder="Mesaj"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <button
              type="submit"
              className="bg-sky-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-sky-600 transition"
            >
              Trimite
            </button>
          </form>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">Download</h3>
          <div className="flex gap-4 mb-8">
            <a href="#" className="inline-block">
              <Image
                src="/images/appsoreBlack.png"
                alt="Download on the App Store"
                width={180}
                height={44}
                className="hover:opacity-80 transition"
              />
            </a>
            <a href="#" className="inline-block">
              <Image
                src="/images/googlePlayBlack.png"
                alt="Get it on Google Play"
                width={140}
                height={44}
                className="hover:opacity-80 transition"
              />
            </a>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-lg font-semibold mb-6">Date contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="bg-sky-500 text-white p-3 rounded-full">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-medium">Telefon</p>
                  <a
                    href="tel:0750401866"
                    className="text-gray-600 hover:text-gray-800 transition"
                  >
                    0750.401.866
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="bg-sky-500 text-white p-3 rounded-full">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:contact@eventify.ro"
                    className="text-gray-600 hover:text-gray-800 transition"
                  >
                    contact@eventify.ro
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <div className="bg-sky-500 text-white p-3 rounded-full">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-medium">Adresă</p>
                  <p className="text-gray-600">
                    Bulevardul Pipera 1/II
                    <br />
                    Voluntari, Ilfov
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
