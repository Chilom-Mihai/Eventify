"use client";

import { Check } from "lucide-react";

type PackageKey =
  | "gratuit"
  | "rasp25"
  | "nelimitat"
  | "multilanguage"
  | "premiumML";

interface FeatureRow {
  label: string;
  values: Record<PackageKey, boolean | number | string>;
}

const features: FeatureRow[] = [
  {
    label: "Trimitere un număr nelimitat de invitații",
    values: {
      gratuit: true,
      rasp25: false,
      nelimitat: true,
      multilanguage: true,
      premiumML: true,
    },
  },
  {
    label: "Nu există costuri adiționale",
    values: {
      gratuit: true,
      rasp25: true,
      nelimitat: true,
      multilanguage: true,
      premiumML: true,
    },
  },
  {
    label: "Crearea evenimentului și introducerea de detalii",
    values: {
      gratuit: true,
      rasp25: true,
      nelimitat: true,
      multilanguage: true,
      premiumML: true,
    },
  },
  {
    label: "Adăugarea și integrarea adreselor cu Waze / Google Maps",
    values: {
      gratuit: true,
      rasp25: true,
      nelimitat: true,
      multilanguage: true,
      premiumML: true,
    },
  },
  {
    label: "Posibilitatea de a crea și personaliza template-uri de invitații",
    values: {
      gratuit: false,
      rasp25: true,
      nelimitat: true,
      multilanguage: true,
      premiumML: true,
    },
  },
  {
    label:
      "Posibilitatea de creare invitații de la zero cu template-ul video personalizat",
    values: {
      gratuit: false,
      rasp25: true,
      nelimitat: true,
      multilanguage: true,
      premiumML: true,
    },
  },
  {
    label:
      "Trimiterea invitațiilor pe e-mail, Facebook, Whatsapp sau alte canale digitale",
    values: {
      gratuit: true,
      rasp25: true,
      nelimitat: true,
      multilanguage: true,
      premiumML: true,
    },
  },
  {
    label: "Adăugarea de întrebări personalizate pe invitație",
    values: {
      gratuit: false,
      rasp25: true,
      nelimitat: true,
      multilanguage: true,
      premiumML: true,
    },
  },
  {
    label: "Integrarea unui mesaj personalizat pe invitație (audio / video)",
    values: {
      gratuit: false,
      rasp25: true,
      nelimitat: true,
      multilanguage: true,
      premiumML: true,
    },
  },
  {
    label: "Adăugarea unei melodii care va rula la deschiderea invitației",
    values: {
      gratuit: false,
      rasp25: true,
      nelimitat: true,
      multilanguage: true,
      premiumML: true,
    },
  },
  {
    label: "Vizualizarea și centralizarea răspunsurilor primite de la invitați",
    values: {
      gratuit: false,
      rasp25: true,
      nelimitat: true,
      multilanguage: true,
      premiumML: true,
    },
  },
  {
    label: "Filtrarea răspunsurilor primite după anumite criterii",
    values: {
      gratuit: false,
      rasp25: true,
      nelimitat: true,
      multilanguage: true,
      premiumML: true,
    },
  },
  {
    label: "Posibilitatea de a adăuga invitați dintr-un document Excel",
    values: {
      gratuit: false,
      rasp25: true,
      nelimitat: true,
      multilanguage: true,
      premiumML: true,
    },
  },
  {
    label: "Introducerea manuală a invitaților",
    values: {
      gratuit: false,
      rasp25: true,
      nelimitat: true,
      multilanguage: true,
      premiumML: true,
    },
  },
  {
    label: "Adăugarea mai multor organizatori",
    values: {
      gratuit: false,
      rasp25: true,
      nelimitat: true,
      multilanguage: true,
      premiumML: true,
    },
  },
  {
    label: "Crearea planului locației și a punctelor de interes",
    values: {
      gratuit: true,
      rasp25: true,
      nelimitat: true,
      multilanguage: true,
      premiumML: true,
    },
  },
  {
    label: "Aranjarea invitațiilor la mese",
    values: {
      gratuit: true,
      rasp25: true,
      nelimitat: true,
      multilanguage: true,
      premiumML: true,
    },
  },
  {
    label: "Gestionarea bugetului evenimentului și centralizarea cheltuielilor",
    values: {
      gratuit: true,
      rasp25: true,
      nelimitat: true,
      multilanguage: true,
      premiumML: true,
    },
  },
  {
    label: "Parcurgerea de task-uri personalizate și notificări",
    values: {
      gratuit: true,
      rasp25: true,
      nelimitat: true,
      multilanguage: true,
      premiumML: true,
    },
  },
  {
    label: "Posibilitatea de export informații din aplicație",
    values: {
      gratuit: false,
      rasp25: false,
      nelimitat: true,
      multilanguage: true,
      premiumML: true,
    },
  },
  {
    label: "Crearea și publicarea listei de cadouri",
    values: {
      gratuit: false,
      rasp25: false,
      nelimitat: true,
      multilanguage: true,
      premiumML: true,
    },
  },
  {
    label: "Alegerea hostesselor din lista de invitați",
    values: {
      gratuit: false,
      rasp25: false,
      nelimitat: true,
      multilanguage: true,
      premiumML: true,
    },
  },
  {
    label: "Funcția “Smart Check-in” pentru primirea invitațiilor",
    values: {
      gratuit: false,
      rasp25: false,
      nelimitat: true,
      multilanguage: true,
      premiumML: true,
    },
  },
  {
    label: "Publicarea evenimentului în secțiunea privată",
    values: {
      gratuit: false,
      rasp25: false,
      nelimitat: true,
      multilanguage: true,
      premiumML: true,
    },
  },
  {
    label: "Notificarea invitaților în cazul schimbărilor de program",
    values: {
      gratuit: false,
      rasp25: false,
      nelimitat: true,
      multilanguage: true,
      premiumML: true,
    },
  },
  {
    label: "Feed dedicat evenimentului",
    values: {
      gratuit: false,
      rasp25: false,
      nelimitat: true,
      multilanguage: true,
      premiumML: true,
    },
  },
  {
    label: "Publicarea meniului și a filmărilor",
    values: {
      gratuit: false,
      rasp25: false,
      nelimitat: true,
      multilanguage: true,
      premiumML: true,
    },
  },
  {
    label: "Crearea programului din ziua evenimentului",
    values: {
      gratuit: false,
      rasp25: false,
      nelimitat: true,
      multilanguage: true,
      premiumML: true,
    },
  },
  {
    label: "Introducerea darului primit de la fiecare invitat",
    values: {
      gratuit: false,
      rasp25: false,
      nelimitat: true,
      multilanguage: true,
      premiumML: true,
    },
  },
  {
    label: "Număr de invitați per eveniment",
    values: {
      gratuit: 5,
      rasp25: 25,
      nelimitat: "Nelimitat",
      multilanguage: 2,
      premiumML: 3,
    },
  },
  {
    label: "Valabilitate eveniment",
    values: {
      gratuit: "6 luni",
      rasp25: "18 luni",
      nelimitat: "18 luni",
      multilanguage: "18 luni",
      premiumML: "18 luni",
    },
  },
  {
    label: "Valabilitate invitație",
    values: {
      gratuit: "48 ore",
      rasp25: "18 luni",
      nelimitat: "18 luni",
      multilanguage: "18 luni",
      premiumML: "18 luni",
    },
  },
];

export default function CompararePachete() {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto overflow-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Compară pachete</h2>
        <div className="w-20 h-1 mx-auto bg-gray-800 rounded-full mb-12"></div>
        <table className="w-full table-fixed border-separate border-spacing-0">
          <thead>
            <tr>
              <th className="border-b border-gray-200 px-4 py-2 text-left">
                Funcționalități
              </th>
              {(
                [
                  "Gratuit",
                  "25 Răspunsuri",
                  "Nelimitat",
                  "Multilanguage",
                  "Premium ML",
                ] as string[]
              ).map((heading) => (
                <th
                  key={heading}
                  className="border-b border-gray-200 px-2 py-8 text-center"
                >
                  <div className="transform -rotate-90 whitespace-nowrap text-xs font-semibold text-gray-600">
                    {heading}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {features.map(({ label, values }) => (
              <tr
                key={label}
                className="odd:bg-white even:bg-gray-50 hover:bg-gray-100"
              >
                <td className="px-4 py-3 text-sm text-gray-700">{label}</td>
                {(Object.keys(values) as PackageKey[]).map((pkg) => (
                  <td key={pkg} className="px-4 py-3 text-center">
                    {typeof values[pkg] === "boolean" ? (
                      values[pkg] ? (
                        <Check className="inline w-4 h-4 text-green-500" />
                      ) : (
                        <span className="text-red-500 text-xl">×</span>
                      )
                    ) : (
                      values[pkg]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
