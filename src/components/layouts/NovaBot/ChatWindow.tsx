"use client";

import { useChatStore } from "@/stores/chatStore";
import NovaInput from "./NovaWidget/NovaInput";
import NovaMessages from "./NovaWidget/NovaMessages";
import { useAuthStore } from "@/stores/authStore";

export default function ChatWindow() {
  const isThinking = useChatStore((s) => s.isThinking);
  const isLoggedIn = useAuthStore((s) => s.isLoggedIn);

  return (
    <div className="flex flex-col flex-1">
      <div className="p-4 border-b border-t border-border bg-bg-dark flex items-center justify-between">
        <h1 className="text-xl font-semibold">Nova</h1>
        {isThinking && <p className="text-text-secondary">typing...</p>}
      </div>

      <NovaMessages isOpen={true} isLoggedIn={isLoggedIn} />

      <NovaInput isLoggedIn={isLoggedIn} />
    </div>
  );
}
