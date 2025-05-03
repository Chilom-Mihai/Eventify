import { Minus, Plus } from "lucide-react";

export default function AccordionItem({
  faq,
  isOpen,
  onClick,
}: {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b pb-4">
      <div
        className="group flex justify-between items-center cursor-pointer transition-colors hover:text-blue-600"
        onClick={onClick}
      >
        <h3 className="text-base font-semibold">{faq.question}</h3>
        {isOpen ? (
          <Minus className="w-5 h-5 text-blue-600 transition-colors" />
        ) : (
          <Plus className="w-5 h-5 text-gray-500 group-hover:text-blue-600 transition-colors" />
        )}
      </div>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 mt-3 p-4" : "max-h-0 p-0"
        } bg-blue-50 text-gray-800 rounded-md`}
      >
        <div className={`${isOpen ? "block" : "hidden"}`}>{faq.answer}</div>
      </div>
    </div>
  );
}
