"use client";

import DynamicPageHeader from "@/components/ui/DynamicPageHeader";
import FaqSection from "../components/FaqSection";
import Beneficii from "../components/Beneficii";

export default function CumFunctioneaza() {
  return (
    <>
      <DynamicPageHeader />
      <Beneficii />
      <FaqSection />
      <section className="text-center py-20 px-4 bg-white text-gray-800">
        <div className="relative inline-block mb-6">
          <h2 className="text-3xl md:text-4xl font-bold z-10 relative">
            Mai ai întrebări?
          </h2>
          {/* Fundal punctat în spatele titlului */}
          <div className="absolute inset-0 flex justify-center items-center">
            <svg
              width="80"
              height="80"
              viewBox="0 0 20 20"
              className="text-gray-100"
            >
              {" "}
              {/* <- culoare foarte deschisă */}
              <defs>
                <pattern
                  id="dots"
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="1" cy="1" r="1" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
          </div>
        </div>

        {/* Linia albastră */}
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6 relative z-10" />

        {/* Text informativ + email */}
        <p className="text-gray-600 mb-2">
          Ne poți scrie și noi te ajutăm dacă te-ai încurcat sau dacă mai ai
          alte nelămuriri.
        </p>
        <p className="text-blue-600 font-medium">contact@eventify.ro</p>
      </section>
    </>
  );
}
