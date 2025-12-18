"use client";
import { useState } from "react";
import { SendHorizontal } from "lucide-react";
import Link from "next/link";
import { useChatStore } from "@/stores/chatStore";
import { useFavouritesStore } from "@/stores/favouritesStore";
import { useWatchedStore } from "@/stores/watchedStore";
import { useWatchLaterStore } from "@/stores/watchLaterStore";

type Props = { isLoggedIn: boolean };

export default function NovaInput({ isLoggedIn }: Props) {
  const [input, setInput] = useState("");
  const addMessage = useChatStore((state) => state.addMessage);
  const isThinking = useChatStore((s) => s.isThinking);
  const setThinking = useChatStore((s) => s.setThinking);
  const favorites = useFavouritesStore((s) => s.favourites);
  const watched = useWatchedStore((s) => s.watched);
  const watchLater = useWatchLaterStore((s) => s.watchLater);

  const handleSend = async () => {
    if (!isLoggedIn || !input.trim() || isThinking) return;

    const userMsg = input.trim();
    addMessage({ sender: "user", text: userMsg });
    setInput("");

    setThinking(true);

    // Call backend
    const userContext = {
      name: "Anonymous",
      favorites: favorites.map((m) => m.title),
      watched: watched.map((m) => m.title),
      watchLater: watchLater.map((m) => m.title),
    };

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message: userMsg,
        user: userContext,
      }),
    });

    const data = await res.json();
    const reply = data.reply;

    // Add real reply
    addMessage({ sender: "nova", text: reply });

    setThinking(false);
  };

  return (
    <div className="p-3 border-t border-border flex items-center gap-2">
      <input
        type="text"
        disabled={!isLoggedIn || isThinking}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={
          !isLoggedIn
            ? "Login required to chat"
            : isThinking
            ? "Nova is thinking..."
            : "Type a message..."
        }
        className={`flex-1 bg-bg-dark border border-border rounded-lg px-3 py-2 text-text-main outline-none ${
          !isLoggedIn || isThinking ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey && isLoggedIn && !isThinking) {
            e.preventDefault();
            handleSend();
          }
        }}
      />

      {isLoggedIn ? (
        <button
          type="button"
          onClick={handleSend}
          disabled={isThinking}
          className={`px-3 py-2 bg-primary text-text-main rounded-lg ${
            isThinking ? "opacity-50" : ""
          }`}
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
