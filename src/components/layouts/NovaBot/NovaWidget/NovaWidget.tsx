"use client";
import { useEffect, useState } from "react";
import { useAuthStore } from "@/stores/authStore";
import NovaHeader from "./NovaHeader";
import NovaMessages from "./NovaMessages";
import NovaInput from "./NovaInput";
import NovaToggleButton from "./NovaToggleButton";

export default function NovaWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const [showMessages, setShowMessages] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const t = setTimeout(() => setShowMessages(true), 300);
      return () => clearTimeout(t);
    } else {
      setShowMessages(false);
    }
  }, [isOpen]);

  return (
    <>
      <div
        className={`
          fixed z-40 bg-bg-dark border border-border rounded-xl shadow-2xl
          overflow-hidden flex flex-col transition-all duration-500 ease-out
          bottom-26 right-4 sm:bottom-26 sm:right-10
          ${
            isOpen
              ? "w-[95%] h-[75vh] sm:w-[360px] sm:h-[520px] opacity-100"
              : "w-0 h-0 opacity-0"
          }
        `}
        style={{ transformOrigin: "bottom right" }}
      >
        <NovaHeader />
        {showMessages && (
          <>
            <NovaMessages isOpen={isOpen} isLoggedIn={isLoggedIn} />
            <NovaInput isLoggedIn={isLoggedIn} />
          </>
        )}
      </div>

      <NovaToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
