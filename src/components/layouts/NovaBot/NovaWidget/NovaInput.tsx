"use client";
import { useState } from "react";
import { SendHorizontal } from "lucide-react";
import Link from "next/link";
import { useChatStore } from "@/stores/chatStore";

type Props = { isLoggedIn: boolean };

export default function NovaInput({ isLoggedIn }: Props) {
  const [input, setInput] = useState("");
  const addMessage = useChatStore((state) => state.addMessage);

  const handleSend = () => {
    if (!isLoggedIn || !input.trim()) return;
    addMessage({ sender: "user", text: input });
    setInput("");
  };

  return (
    <div className="p-3 border-t border-border flex items-center gap-2">
      <input
        type="text"
        disabled={!isLoggedIn}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={isLoggedIn ? "Type a message..." : "Login required to chat"}
        className={`flex-1 bg-bg-dark border border-border rounded-lg px-3 py-2 text-text-main outline-none ${
          !isLoggedIn ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey && isLoggedIn) {
            e.preventDefault();
            handleSend();
          }
        }}
      />

      {isLoggedIn ? (
        <button
          type="button"
          onClick={handleSend}
          className="px-3 py-2 bg-primary text-text-main rounded-lg"
        >
          <SendHorizontal size={18} />
        </button>
      ) : (
        <Link
          href="/login"
          className="px-3 py-2 bg-primary text-text-main rounded-lg text-sm"
        >
          Login
        </Link>
      )}
    </div>
  );
}
