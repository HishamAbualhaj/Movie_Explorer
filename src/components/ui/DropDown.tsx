"use client";
import { ChevronDown } from "lucide-react";
import { Activity, useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Dropdown = ({
  label = "Select option",
  options = [],
  onSelect,
}: {
  label?: string;
  options: string[];
  onSelect?: (value: string) => void;
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="relative min-w-64">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-2 rounded-lg bg-bg-light text-white border border-bg-light hover:border-primary transition"
      >
        <span className="text-sm">{selected ?? label}</span>
        <ChevronDown
          size={18}
          className={`transition ${open ? "rotate-180" : ""}`}
        />
      </button>

      <Activity mode={open ? "visible" : "hidden"}>
        <div className="max-h-[250px] p-2 overflow-auto absolute z-50 mt-2 w-full rounded-lg bg-bg-dark border border-bg-light shadow-lg">
          {options.map((option, i) => (
            <button
              key={i}
              onClick={() => {
                setSelected(option);
                setOpen(false);
                onSelect?.(option);
              }}
              className="w-full text-left px-4 py-2 text-sm text-text-secondary hover:bg-bg-light hover:text-white transition"
            >
              {option}
            </button>
          ))}
        </div>
        <Portal>
          <div
            onClick={() => {
              setOpen(false);
            }}
            className="fixed z-20 bg-transparent inset-0"
          ></div>
        </Portal>
      </Activity>
    </div>
  );
};

const Portal = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const portalRoot = document.querySelector("body");
  if (!portalRoot) return null;

  return createPortal(children, portalRoot);
};

export default Dropdown;
