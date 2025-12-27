"use client";

import { useChatStore } from "@/stores/chatStore";
import NovaInput from "./NovaWidget/NovaInput";
import NovaMessages from "./NovaWidget/NovaMessages";
import { useAuthStore } from "@/stores/authStore";

export default function ChatWindow() {
  const isThinking = useChatStore((s) => s.isThinking);
  const isLoggedIn = useAuthStore((s) => s.isLoggedIn);

  return (
    <div className="flex flex-col h-full min-h-0">
      <div className="hidden md:flex p-4 border-b border-border bg-bg-dark items-center justify-between">
        <h1 className="text-xl font-semibold">Nova</h1>
        {isThinking && <p className="text-text-secondary">typing...</p>}
      </div>

      <div className="flex-1 min-h-0 overflow-y-auto">
        <NovaMessages isOpen={true} isLoggedIn={isLoggedIn} />
      </div>

      <div className="border-t border-border">
        <NovaInput isLoggedIn={isLoggedIn} />
      </div>
    </div>
  );
}