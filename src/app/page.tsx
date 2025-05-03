import Image from "next/image";
import Link from "next/link";
import homeImage from "../../public/Images/homeImage.jpg";
import { Briefcase, Heart, Check, Ticket, MailOpen } from "lucide-react";

export default function HomePage() {
  return (
    <main>
      {/* Secțiunea Hero */}
      <section className="bg-gradient-to-r from-[#0a1c61] to-[#00aaff] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Text */}
          <div className="flex-1 max-w-xl">
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Smart Event <br /> Management
            </h1>
            <p className="text-lg text-white/90">
              Ality este partenerul tău digital în organizarea unui eveniment de
              succes, care digitalizează, automatizează și centralizează toate
              procesele și activitățile necesare în planificarea și desfășurarea
              evenimentului. Atât organizatorii cât și participanții au parte de
              o experiență plăcută și modernă, direct de pe propriul device.
            </p>
          </div>

          {/* Imagine */}
          <div className="flex-1">
            <Image
              src={homeImage}
              alt="Interfață aplicație evenimente"
              className="w-full max-w-xl mx-auto rounded-md shadow-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* Secțiunea Organizează eveniment */}
      <section className="bg-gradient-to-r from-[#0a1c61] to-[#00aaff] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Titlu în stânga */}
          <div className="flex-1 text-left">
            <h2 className="text-4xl font-bold leading-snug">
              Organizează <br />
              <span className="underline decoration-white/80 decoration-4 underline-offset-4">
                eveniment
              </span>
            </h2>
          </div>

          {/* Carduri */}
          <div className="flex-1 grid md:grid-cols-2 gap-8 w-full">
            {/* Card Privat */}
            {/* Card Privat */}
            <div className="bg-white text-black rounded-lg shadow-lg p-6 text-center">
              <Heart className="mx-auto w-10 h-10 text-pink-500 mb-3" />
              <h3 className="text-2xl font-semibold mb-2">Privat</h3>
              <p className="mb-4 text-sm">Organizează evenimentul visat!</p>
              <ul className="text-left mb-6 space-y-1 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-500" />
                  Nuntă
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-500" />
                  Botez
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-500" />
                  Aniversare
                </li>
              </ul>

              <Link href="/organizeaza/privat">
                <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-[#1A165F] transition">
                  Află mai multe
                </button>
              </Link>
            </div>

            {/* Card Business */}
            <div className="bg-white text-black rounded-lg shadow-lg p-6 text-center">
              <Briefcase className="mx-auto w-10 h-10 text-blue-700 mb-3" />
              <h3 className="text-2xl font-semibold mb-2">Business</h3>
              <p className="mb-4 text-sm">Firmă care organizează evenimente?</p>
              <ul className="text-left mb-6 space-y-1 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-500" />
                  Publice
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-500" />
                  Corporate
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-500" />
                  Speciale
                </li>
              </ul>

              <Link href="/organizeaza/business">
                <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-[#1A165F] transition">
                  Află mai multe
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Invitații și bilete */}
      <section className="bg-gradient-to-r from-[#0a1c61] to-[#00aaff] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Titlu în stânga */}
          <div className="flex-1 text-left">
            <h2 className="text-4xl font-bold leading-snug">
              Invitații și <br />
              <span className="underline decoration-white/80 decoration-4 underline-offset-4">
                bilete
              </span>
            </h2>
          </div>

          {/* Carduri */}
          <div className="flex-1 grid md:grid-cols-2 gap-8">
            {/* Card Invitații */}
            <div className="bg-white text-black rounded-lg shadow-lg p-6 text-center">
              <MailOpen className="mx-auto w-10 h-10 text-indigo-500 mb-3" />
              <h3 className="text-2xl font-semibold mb-2">Creare invitații</h3>
              <p className="mb-4 text-sm">
                Invitații speciale pentru fiecare tip de eveniment.
              </p>
              <ul className="text-left mb-6 space-y-1 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-500" />
                  Alege un model de invitație
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-500" />
                  Creează invitații singur
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-500" />
                  Încarcă invitație foto creată
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-500" />
                  Încarcă invitație video creată
                </li>
              </ul>
              <Link href="/invitatii">
                <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-[#1A165F] transition">
                  Află mai multe
                </button>
              </Link>
            </div>

            {/* Card Bilete */}
            <div className="bg-white text-black rounded-lg shadow-lg p-6 text-center">
              <Ticket className="mx-auto w-10 h-10 text-yellow-600 mb-3" />
              <h3 className="text-2xl font-semibold mb-2">Vânzare bilete</h3>
              <p className="mb-4 text-sm">
                Creează și vinde bilete pentru evenimentele pe care le
                organizezi.
              </p>

              <ul className="text-left mb-6 space-y-1 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-500" />
                  Bilete standard
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-500" />
                  Pass-uri
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-500" />
                  Vouchere
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sky-500" />
                  Invitații
                </li>
              </ul>
              <Link href="/organizeaza/business">
                <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-[#1A165F] transition">
                  Află mai multe
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
