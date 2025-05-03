"use client";

import { CheckCircleIcon } from "@heroicons/react/20/solid";

import Image from "next/image";
import CountUp from "react-countup";

export default function DespreNoi() {
  return (
    <>
      <section className="relative bg-blue-700 text-white pt-36 pb-20 overflow-hidden">
        {/* Conținut */}
        <div className="relative z-10 text-center pb-32">
          <h1 className="text-5xl font-bold">Despre noi</h1>
          <div className="mt-3 w-24 h-1 bg-white/70 mx-auto rounded-full" />
        </div>

        {/* Valuri stratificate (de jos în sus) */}
        <div className="absolute bottom-0 left-0 w-full z-0">
          <svg
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            preserveAspectRatio="none"
          >
            {/* cel mai de jos - blue-200 */}
            <path
              fill="#bfdbfe"
              d="M0,256 C360,320 1080,240 1440,280 V320 H0 Z"
            />
            {/* mijloc - blue-400 */}
            <path
              fill="#60a5fa"
              d="M0,240 C360,300 1080,200 1440,240 V320 H0 Z"
            />
            {/* sus - blue-600 */}
            <path
              fill="#2563eb"
              d="M0,224 C360,280 1080,160 1440,200 V320 H0 Z"
            />
          </svg>
        </div>
      </section>

      <section className="flex flex-col md:flex-row justify-center items-center py-20 px-4 gap-6">
        {/* Imaginea */}
        <div className="relative w-full md:w-[600px] h-[300px] md:h-[500px]">
          <Image
            src="/Images/DespreNoiImage1.png"
            alt="Eventify desk"
            fill
            className="rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Cardul suprapus pe desktop, dedesubt pe mobil */}
        <div className="relative md:-ml-20 mt-6 md:mt-0 z-10 bg-white/95 backdrop-blur-md p-8 rounded-xl shadow-md max-w-md w-full">
          <div className="absolute top-0 left-0 w-16 h-16">
            <svg
              className="w-full h-full text-gray-200"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <defs>
                <pattern
                  id="dots"
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="1" cy="1" r="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">
            Eventify
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
            Platforma unică în România de smart event management. Eventify
            susține organizatorii evenimentelor pe întreg parcursul acestora,
            prin dezvoltarea modulelor inovatoare, totul fiind realizat digital.
            Eventify îmbină transparența, securitatea și facilitează toate
            procesele organizatorice. Atât organizatorii, cât și participanții,
            vor beneficia de servicii de calitate, pe măsura așteptărilor.
          </p>
          <a
            href="/organizeaza"
            className="inline-block px-6 py-3 bg-sky-500 text-white font-semibold rounded hover:bg-sky-600 transition relative z-10"
          >
            Organizează eveniment
          </a>
        </div>
      </section>

      {/* Secțiunea cu 3 coloane */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-8 items-start">
        <div className="bg-gradient-to-r from-[#0d1c5b] to-[#00b3e6] text-white rounded-lg p-6 flex flex-col justify-center items-center text-center shadow-md">
          <h3 className="text-lg font-bold mb-4 leading-snug">
            Partenerul tău digital <br />
            în organizarea <br />
            evenimentului perfect.
          </h3>
          <a
            href="/login"
            className="mt-4 bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold py-2 px-6 rounded-full"
          >
            Login
          </a>
        </div>

        <div>
          <p className="text-gray-400 text-2xl font-medium mb-1">01.</p>
          <h4 className="text-xl font-bold text-gray-900 mb-2">Inovație</h4>
          <p className="text-gray-700 text-base leading-relaxed">
            Punem la dispoziția organizatorilor și participanților o gamă largă
            de servicii inovatoare ce creează experiențe memorabile și un
            eveniment care se ridică la nivelul așteptărilor.
          </p>
        </div>

        <div>
          <p className="text-gray-400 text-2xl font-medium mb-1">02.</p>
          <h4 className="text-xl font-bold text-gray-900 mb-2">Atitudine</h4>
          <p className="text-gray-700 text-base leading-relaxed">
            Înțelegem foarte bine nevoile acestui domeniu și știm cum să aplicăm
            tehnologia pentru a le rezolva. De asemenea, suntem alături de
            clienții noștri prin suport 24/7.
          </p>
        </div>
      </section>

      {/* Secțiunea cu statistici animate */}
      <section className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-3 gap-8 items-center">
        <div className="flex justify-center md:justify-center">
          <Image
            src="/Images/Logo.png"
            alt="Logo Ality"
            width={150}
            height={150}
            className="object-contain"
          />
        </div>

        <div className="bg-gray-50 p-8 rounded-lg shadow text-center">
          <h2 className="text-sky-500 text-4xl font-bold">
            <CountUp end={43992} duration={3} useGrouping={false} />
          </h2>
          <p className="text-gray-700 mt-2 font-medium">Utilizatori</p>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg shadow text-center">
          <h2 className="text-sky-500 text-4xl font-bold">
            <CountUp end={7230} duration={3} useGrouping={false} />
          </h2>
          <p className="text-gray-700 mt-2 font-medium">Evenimente</p>
        </div>
      </section>

      {/* Secțiunea Beneficii */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Textul */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Beneficii</h2>
            <div className="w-20 h-1 bg-sky-500 mb-6 rounded-full"></div>
            <p className="text-gray-600 mb-6">
              Ality vine în ajutorul organizatorilor la fiecare eveniment,
              pentru a-i susține înainte, pe durata și după terminarea acestuia.
            </p>

            {/* Transparență */}
            <div className="mb-8">
              <h3 className="font-bold text-gray-900 mb-3">
                Transparență procese:
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                {[
                  "colectarea automată a datelor tuturor participanților",
                  "vizualizarea live a numărului de persoane ajunse la eveniment",
                  "crearea de rapoarte analitice detaliate și personalizabile",
                  "buget alocat total, rămas dar și fiecare cheltuială în parte",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-sky-500 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Eficiență */}
            <div>
              <h3 className="font-bold text-gray-900 mb-3">
                Eficiență crescută:
              </h3>
              <ul className="space-y-3 text-sm text-gray-700">
                {[
                  "centralizarea tuturor evenimentelor în platformă",
                  "evidență centralizată a staff-ului implicat în organizare",
                  "gestionarea facilă a progresului fiecărui eveniment",
                  "timpi mai mici de așteptare pentru invitați",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircleIcon className="w-5 h-5 text-sky-500 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Imaginea din dreapta */}
          <div className="w-full h-full">
            <Image
              src="/Images/beneficii.png"
              alt="Cuplu relaxat folosind aplicația"
              width={700}
              height={500}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </section>
      <section className="bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Textul din stânga */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              O platformă unică de
              <br /> management pentru:
            </h2>
            <div className="w-20 h-1 bg-sky-500 mb-8 rounded-full"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-700">
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Evenimente private
                </h3>
                <p>
                  Nuntă, botez, nuntă și botez, tăiere de mot, turtă, cununie
                  civilă, aniversare.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Evenimente publice
                </h3>
                <p>Concerte, festivaluri, maratoane sau revelioane.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Evenimente corporate
                </h3>
                <p>Team building-uri, petreceri corporate, conferințe.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  Evenimente speciale
                </h3>
                <p>
                  Ceremonii, baluri de absolvire, baluri de boboci, revederi.
                </p>
              </div>
            </div>
          </div>

          {/* Imaginea */}
          <div className="flex justify-center">
            <Image
              src="/Images/platforma-management.png"
              alt="Ilustrație management platformă"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>
        </div>
      </section>
      <section className="bg-[#f7f9fc] text-center py-24">
        {/* Logo */}
        <Image
          src="/Images/Logo.png"
          alt="Eventify Logo"
          width={150}
          height={150}
          className="mx-auto mb-6"
        />

        {/* Slogan */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          We put qu
          <span className="text-sky-500">Eventify</span> in
          <span className="text-sky-500"> Eventify</span>
        </h2>

        {/* Buton contact */}
        <a
          href="/contact"
          className="inline-block mt-6 px-6 py-2 bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold rounded-full transition"
        >
          Contact
        </a>
      </section>
    </>
  );
}
