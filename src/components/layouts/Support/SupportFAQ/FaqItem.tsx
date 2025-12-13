import { FaqItem as Faq } from "./faq-data";

type Props = {
  item: Faq;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
};

export function FaqItem({ item, index, isOpen, onToggle }: Props) {
  return (
    <div className="relative pb-6 after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 
           after:bg-linear-to-r after:from-black after:via-red-600 after:to-black">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 text-left"
      >
        <div className="min-w-12 h-12 bg-[#1a1a1a] rounded-xl flex items-center justify-center text-lg font-semibold text-white">
          {String(index + 1).padStart(2, "0")}
        </div>

        <div className="flex-1">
          <h3 className="text-lg font-medium text-white">{item.question}</h3>

          {isOpen && (
            <p className="text-sm text-text-muted mt-2">
              {item.answer}
            </p>
          )}
        </div>

        <span className="text-2xl text-white">
          {isOpen ? "−" : "+"}
        </span>
      </button>
    </div>
  );
}
