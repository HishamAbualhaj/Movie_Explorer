"use client";

import { useEffect, useRef } from "react";
import { useChatStore } from "@/stores/chatStore";

type Props = {
  isOpen: boolean;
  isLoggedIn: boolean;
};

export default function NovaMessages({ isOpen, isLoggedIn }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const messages = useChatStore((s) => s.messages);
  const addMessage = useChatStore((s) => s.addMessage);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages.length]);

  useEffect(() => {
    if (!isOpen) return;

    if (messages.length === 0) {
      const timeout = setTimeout(() => {
        addMessage({
          sender: "nova",
          text: isLoggedIn
            ? "Hey there! I’m Nova. What kind of movie are you in the mood for?"
            : "Hey! Please log in to chat with me and get personalized movie recommendations.",
        });
      }, 800);

      return () => clearTimeout(timeout);
    }
  }, [isOpen, isLoggedIn, messages.length, addMessage]);

  return (
    <div
      ref={containerRef}
      className="flex-1 min-h-0 p-4 overflow-y-auto space-y-4 scrollbar-thin scrollbar-track-bg-dark scrollbar-thumb-border hover:scrollbar-thumb-text-secondary"
    >
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`flex items-start gap-2 animate-fade-in ${
            msg.sender === "user" ? "justify-end" : ""
          }`}
        >
          {msg.sender === "nova" && (
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-text-main font-bold">
              N
            </div>
          )}

          <div
            className={`p-3 rounded-lg border border-border max-w-[85%] ${
              msg.sender === "nova"
                ? "bg-bg text-text-secondary"
                : "bg-primary text-text-main"
            }`}
          >
            <p>{msg.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
