"use client";

import DynamicPageHeader from "@/components/ui/DynamicPageHeader";
import { Check } from "lucide-react";
import Image from "next/image";
import AnimatedIcon from "../../../public/Images/AnimatedIcon.png";
import CompararePachete from "@/components/ui/CompararePachete";

export default function EvenimentePrivatePachete() {
  return (
    <section className="w-full">
      <DynamicPageHeader />
      <h2 className="text-3xl md:text-4xl font-bold text-center px-4 py-20">
        Prețuri pachete
      </h2>
      <div className="w-20 h-1 mx-auto bg-blue-600 rounded-full mb-12" />

      <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto flex-wrap justify-center">
        {/* Pachet Gratuit */}
        <div className="bg-white shadow-lg rounded-xl px-8 py-[28px] w-full max-w-[600px] transition duration-300 hover:shadow-2xl hover:scale-[1.03] hover:z-10">
          <h3 className="text-center text-sm font-semibold text-gray-600 mb-2">
            PACHET GRATUIT
          </h3>
          <p className="text-3xl text-center font-bold text-sky-500 mb-8">
            Gratuit
          </p>
          <ul className="space-y-3 text-base text-gray-700 text-left">
            <li className="flex items-start gap-2">
              <Check className="text-sky-500 w-4 h-4 mt-1" />
              Crearea și introducerea detaliilor evenimentului
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-sky-500 w-4 h-4 mt-1" />
              Adăugarea și integrarea adreselor cu Waze și Google Maps
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-sky-500 w-4 h-4 mt-1" />
              Alegerea invitației din template-urile existente
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-sky-500 w-4 h-4 mt-1" />
              Posibilitatea de a crea o invitație de la zero
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-sky-500 w-4 h-4 mt-1" />
              Încărcarea unei invitații foto sau video deja create
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-sky-500 w-4 h-4 mt-1" />
              Adăugarea de întrebări personalizate pe invitație
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-sky-500 w-4 h-4 mt-1" />
              Trimiterea invitației pe Whatsapp, Facebook sau E-mail
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-sky-500 w-4 h-4 mt-1" />
              Vizualizarea a doar 5 răspunsuri primite de la invitați
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-sky-500 w-4 h-4 mt-1" />
              Parcurgerea de task-uri personalizate
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-sky-500 w-4 h-4 mt-1" />
              Gestionarea bugetului și centralizarea cheltuielilor
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-sky-500 w-4 h-4 mt-1" />
              Crearea programului din ziua evenimentului
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-sky-500 w-4 h-4 mt-1" />
              Valabilitate invitație 48 de ore
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-sky-500 w-4 h-4 mt-1" />
              Valabilitate eveniment 6 luni
            </li>
          </ul>
        </div>

        {/* Pachet 25 răspunsuri */}
        <div className="bg-white shadow-lg rounded-xl px-8 py-[28px] w-full max-w-[600px] transition duration-300 hover:shadow-2xl hover:scale-[1.03] hover:z-10">
          <h3 className="text-center text-sm font-semibold text-gray-600 mb-2 uppercase">
            PACHET Invitație cu răspunsuri nelimitate
          </h3>
          <p className="text-3xl text-center font-bold text-red-500 mb-4">
            399 Lei
          </p>
          <p className="text-center text-xs bg-gray-700 text-white px-3 py-1 rounded-full font-semibold mb-6">
            CONȚINE TOTUL DIN PACHET GRATUIT
          </p>
          <ul className="space-y-3 text-base text-gray-700 text-left">
            <li className="flex items-start gap-2">
              <Check className="text-sky-500 w-4 h-4 mt-1" />
              Vizualizarea nelimitată a răspunsurilor primite de la invitați
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-sky-500 w-4 h-4 mt-1" />
              Valabilitate eveniment și invitație 18 luni
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-sky-500 w-4 h-4 mt-1" />
              Centralizarea răspunsurilor primite de la invitați
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-sky-500 w-4 h-4 mt-1" />
              Integrarea în invitație a locațiilor cu Waze / Google Maps
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-sky-500 w-4 h-4 mt-1" />
              Posibilitatea de a adăuga manual invitați
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-sky-500 w-4 h-4 mt-1" />
              Adăugarea unei melodii care va rula la deschiderea invitației
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-sky-500 w-4 h-4 mt-1" />
              Înregistrarea unui mesaj audio personalizat pe invitație
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-sky-500 w-4 h-4 mt-1" />
              Posibilitatea de a adăuga invitați dintr-un document Excel
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-sky-500 w-4 h-4 mt-1" />
              Filtrarea răspunsurilor după anumite criterii
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-sky-500 w-4 h-4 mt-1" />
              Posibilitatea de a trimite invitații prin e-mail utilizând o listă
              de adrese dintr-un document Excel
            </li>
          </ul>
        </div>

        {/* Pachet răspunsuri nelimitate */}
        <div className="bg-white shadow-lg rounded-xl px-8 py-[28px] w-full max-w-[600px] transition duration-300 hover:shadow-2xl hover:scale-[1.03] hover:z-10">
          <h3 className="text-center text-sm font-semibold text-gray-600 mb-2">
            PACHET INVITAȚIE CU RĂSPUNSURI NELIMITATE
          </h3>
          <p className="text-3xl text-center font-bold text-red-500 mb-4">
            499 Lei
          </p>
          <p className="text-center text-xs bg-gray-700 text-white px-3 py-1 rounded-full font-semibold mb-6">
            CONȚINE TOTUL DIN INVITATIE RASPUNSURI NELIMITATE +
          </p>
          <ul className="space-y-3 text-base text-gray-700 text-left">
            <li className="flex items-start gap-2">
              <Check className="text-sky-500 w-4 h-4 mt-1" />
              Crearea a până la maxim 2 invitații
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-sky-500 w-4 h-4 mt-1" />
              Valabilitate eveniment și invitație 18 luni
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-sky-500 w-4 h-4 mt-1" />
              Invitații în limba română, engleză, franceză, spaniolă, italiană,
              germană sau maghiară.
            </li>
          </ul>
        </div>
        <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-sm mx-auto bg-white shadow-lg rounded-xl p-8 text-center">
            <Image
              src={AnimatedIcon}
              alt="Animated invitations icon"
              width={64}
              height={64}
              className="mx-auto mb-4"
              priority
            />

            <h3 className="text-xl font-semibold text-sky-500 mb-4">
              Pachet Invitații animate
            </h3>

            <p className="text-gray-600 mb-6  ">
              Adăugarea de animații în cadrul invitațiilor create în aplicația
              Ality necesită achiziționarea unui pachet adițional.
              <br />
              <br />
              Acesta se achiziționează o singură dată per eveniment, după
              alegerea unui pachet principal
            </p>

            <p className="text-3xl font-bold text-gray-800 mb-2">75 Lei</p>
            <p className="text-xs text-gray-500">
              *prețul poate să difere în funcție de tipul evenimentului
            </p>
          </div>
        </section>
        <CompararePachete />
      </div>
    </section>
  );
}
