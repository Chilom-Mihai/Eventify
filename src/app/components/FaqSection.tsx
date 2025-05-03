"use client";

import { useState } from "react";
import faqData from "./faqData";
import AccordionItem from "./AccordionItem";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Întrebări frecvente
        </h2>
        <div className="w-20 h-1 mx-auto bg-blue-600 rounded-full" />
      </div>
      <div className="md:flex md:gap-6">
        <div className="flex-1 flex flex-col gap-6">
          {faqData
            .filter((_, i) => i % 2 === 0)
            .map((faq, index) => (
              <AccordionItem
                key={index}
                faq={faq}
                isOpen={openIndex === index * 2}
                onClick={() => toggle(index * 2)}
              />
            ))}
        </div>
        <div className="flex-1 flex flex-col gap-6">
          {faqData
            .filter((_, i) => i % 2 === 1)
            .map((faq, index) => (
              <AccordionItem
                key={index}
                faq={faq}
                isOpen={openIndex === index * 2 + 1}
                onClick={() => toggle(index * 2 + 1)}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
