import { MessageCircle } from "lucide-react";
import Button from "@/components/ui/Button";

export default function NovaToggleButton({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}) {
  return (
    <Button
      onClick={() => setIsOpen(!isOpen)}
      className={`
        fixed bottom-12 right-6 z-60
        w-13 h-13 shadow-lg rounded-full
        flex items-center justify-center
        bg-primary text-text-main duration-300
      `}
    >
      {isOpen ? <span className="text-2xl font-bold">✕</span> : <MessageCircle size={26} />}
    </Button>
  );
}
