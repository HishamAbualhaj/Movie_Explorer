"use client";

import { useEffect } from "react";
import { useChatStore } from "@/stores/chatStore";
import { Plus } from "lucide-react";

export default function ChatSidebar() {
  const conversations = useChatStore((s) => s.conversations);
  const fetchConversations = useChatStore((s) => s.fetchConversations);
  const loadConversation = useChatStore((s) => s.loadConversation);
  const clearChat = useChatStore((s) => s.clearChat);
  const userId = useChatStore((s) => s.userId);
  const addMessage = useChatStore((s) => s.addMessage);
  const setThinking = useChatStore((s) => s.setThinking);
  const isThinking = useChatStore((s) => s.isThinking);

  useEffect(() => {
    if (userId) fetchConversations();
  }, [userId]);

  return (
    <div className="w-64 bg-bg border-r border-border p-4 flex flex-col">
      <button
        onClick={clearChat}
        className="flex items-center gap-2 bg-primary text-text-main px-3 py-2 rounded-lg mb-4"
      >
        <Plus size={18} /> New Chat
      </button>

      <h3 className="text-md text-semibold text-text-main mb-2">
        Your Conversations
      </h3>

      <div className="flex-1 space-y-2 overflow-y-auto scrollbar-thin scrollbar-thumb-border">
        {conversations.length === 0 && (
          <p className="text-text-secondary text-sm">
            No previous messages yet.
          </p>
        )}

        {conversations.map((conv) => (
          <button
            key={conv.id}
            onClick={() => loadConversation(conv.id)}
            className="p-2 bg-bg-dark border border-border rounded-lg text-sm text-left hover:bg-bg"
          >
            <p className="truncate">{conv.title}</p>
          </button>
        ))}
      </div>

      <div className="mt-4">
        <h3 className="text-sm text-text-secondary mb-2">Ask Nova</h3>

        <div className="space-y-2">
          {["Movie Recommendations", "Suggest a Genre", "Surprise Me"].map(
            (item) => (
              <button
                key={item}
                onClick={() => {
                  if (isThinking) return;
                  addMessage({ sender: "user", text: item });
                  setThinking(true);

                  // trigger the backend to send Nova's response
                  // fetch("/api/chat", {
                  //   method: "POST",
                  //   headers: { "Content-Type": "application/json" },
                  //   body: JSON.stringify({ userId, message: item }),
                  // })
                  //   .then((r) => r.json())
                  //   .then((data) => {
                  //     addMessage({ sender: "nova", text: data.reply });
                  //   })
                  //   .finally(() => setThinking(false));
                }}
                className="w-full text-left p-2 border border-border rounded-lg hover:bg-bg-dark"
              >
                {item}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}
