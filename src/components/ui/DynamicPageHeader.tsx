"use client";

import { usePathname } from "next/navigation";

export default function DynamicPageHeader() {
  const pathname = usePathname();

  // Obține ultimul segment din path
  const rawSegment = pathname.split("/").filter(Boolean).pop() || "";

  // Formatează titlul: înlocuiește cratime cu spațiu și capitalizează
  const formattedTitle = rawSegment
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <section className="relative bg-blue-700 text-white pt-36 pb-20 overflow-hidden">
      <div className="relative z-10 text-center pb-32">
        <h1 className="text-5xl font-bold">{formattedTitle}</h1>
        <div className="mt-3 w-24 h-1 bg-white/70 mx-auto rounded-full" />
      </div>

      {/* Valuri stratificate */}
      <div className="absolute bottom-0 left-0 w-full z-0">
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#bfdbfe"
            d="M0,256 C360,320 1080,240 1440,280 V320 H0 Z"
          />
          <path
            fill="#60a5fa"
            d="M0,240 C360,300 1080,200 1440,240 V320 H0 Z"
          />
          <path
            fill="#2563eb"
            d="M0,224 C360,280 1080,160 1440,200 V320 H0 Z"
          />
        </svg>
      </div>
    </section>
  );
}
