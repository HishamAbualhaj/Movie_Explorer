"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { MessageCircle, SendHorizontal } from "lucide-react";
import Button from "@/components/ui/Button";
import { useAuthStore } from "@/stores/authStore";

type Message = {
  sender: string;
  text: string;
};

export default function NovaWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]); 
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  useEffect(() => {
    if (isOpen) {
      const timeout = setTimeout(() => {
        setMessages([
          {
            sender: "nova",
            text: isLoggedIn
              ? "Hey there! I’m Nova. Tell me what kind of movie you're in the mood for!"
              : "Hey! Please log in to chat with me and get personalized movie recommendations.",
          },
        ]);
      }, 700);

      return () => clearTimeout(timeout);
    }
  }, [isOpen, isLoggedIn]);

  const handleSend = () => {
    if (!isLoggedIn) return;
    // add your send logic here
  };

  return (
    <>
      <div
        className={`
          fixed z-40
          bg-bg-dark border border-border rounded-xl shadow-2xl
          overflow-hidden flex flex-col
          transition-all duration-500 ease-out

          bottom-26 right-4
          sm:bottom-26 sm:right-10

          ${isOpen ? 
            "w-[95%] h-[75vh] sm:w-[360px] sm:h-[520px] opacity-100" :
            "w-0 h-0 opacity-0"
          }
        `}
        style={{ transformOrigin: "bottom right" }}
      >
        <div className="p-4 bg-bg-dark border-b border-border flex justify-between items-center">
          <h2 className="text-xl font-semibold text-text-main">Nova</h2>
          <Link href="/nova" className="text-primary hover:underline text-sm">
            Open Full Chat
          </Link>
        </div>

        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((msg, i) => (
            <div key={i} className="flex items-start gap-2 animate-fade-in">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                N
              </div>
              <div className="bg-bg p-3 rounded-lg border border-border max-w-[85%]">
                <p className="text-text-secondary">{msg.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-3 border-t border-border flex items-center gap-2">
          <input
            type="text"
            disabled={!isLoggedIn}
            placeholder={isLoggedIn ? "Type a message..." : "Login required to chat"}
            className={`
              flex-1 bg-bg-dark border border-border rounded-lg px-3 py-2 text-text-main outline-none
              ${!isLoggedIn ? "opacity-50 cursor-not-allowed" : ""}
            `}
          />

          {isLoggedIn ? (
            <button
              onClick={handleSend}
              className="px-3 py-2 bg-primary text-white rounded-lg"
            >
              <SendHorizontal size={18} />
            </button>
          ) : (
            <Link
              href="/login"
              className="px-3 py-2 bg-primary text-white rounded-lg text-sm"
            >
              Login
            </Link>
          )}
        </div>
      </div>

      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          fixed bottom-12 right-6 z-60
          w-13 h-13 shadow-lg rounded-full
          flex items-center justify-center
          bg-primary text-white
          duration-300
        `}
      >
        {isOpen ? (
          <span className="text-2xl font-bold">✕</span>
        ) : (
          <MessageCircle size={26} />
        )}
      </Button>
    </>
  );
}
