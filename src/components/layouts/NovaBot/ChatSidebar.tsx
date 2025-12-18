"use client";

import { useEffect } from "react";
import { useChatStore } from "@/stores/chatStore";
import { Plus } from "lucide-react";
import { useFavouritesStore } from "@/stores/favouritesStore";
import { useWatchedStore } from "@/stores/watchedStore";
import { useWatchLaterStore } from "@/stores/watchLaterStore";

export default function ChatSidebar() {
  const conversations = useChatStore((s) => s.conversations);
  const fetchConversations = useChatStore((s) => s.fetchConversations);
  const loadConversation = useChatStore((s) => s.loadConversation);
  const clearChat = useChatStore((s) => s.clearChat);
  const userId = useChatStore((s) => s.userId);
  const addMessage = useChatStore((s) => s.addMessage);
  const setThinking = useChatStore((s) => s.setThinking);
  const isThinking = useChatStore((s) => s.isThinking);
  const favorites = useFavouritesStore((s) => s.favourites);
  const watched = useWatchedStore((s) => s.watched);
  const watchLater = useWatchLaterStore((s) => s.watchLater);

  type SpecialPromptKeys =
    | "Movie Recommendations"
    | "Suggest a Genre"
    | "Surprise Me";

  const specialPrompts = (user: any): Record<SpecialPromptKeys, string> => {
    const {
      name,
      favorites: userFavorites = [],
      watched: userWatched = [],
      watchLater: userWatchLater = [],
    } = user || {};

    return {
      "Movie Recommendations": `The user wants personalized movie recommendations. Consider their favorite movies: ${userFavorites.join(
        ", "
      )}. Movies they have watched: ${userWatched.join(
        ", "
      )}. Movies they plan to watch later: ${userWatchLater.join(
        ", "
      )}. Give 3-5 recommendations with a brief reason for each. Do not include spoilers. Address the user by name if available: ${
        name || "Anonymous"
      }.`,

      "Suggest a Genre": `The user wants a genre suggestion for their next movie. Based on their favorites: ${userFavorites.join(
        ", "
      )}, watched movies: ${userWatched.join(
        ", "
      )}, and watch-later list: ${userWatchLater.join(
        ", "
      )}, suggest 1-2 movie genres they might enjoy. Explain why the genre fits their tastes, and mention a couple of example movies in that genre. Keep it friendly and personal. User name: ${
        name || "Anonymous"
      }.`,

      "Surprise Me": `The user wants a fun, surprising movie suggestion. Consider their favorites: ${userFavorites.join(
        ", "
      )}, watched: ${userWatched.join(
        ", "
      )}, watch-later: ${userWatchLater.join(
        ", "
      )}. Pick an unexpected or underrated movie they might not know but could enjoy. Explain briefly why it’s a good choice. Make it playful and engaging. User name: ${
        name || "Anonymous"
      }.`,
    };
  };

  const handleSpecialPrompt = async (item: string) => {
    if (isThinking) return;
    const userContext = {
      name: "Anonymous",
      favorites: favorites.map((m) => m.title),
      watched: watched.map((m) => m.title),
      watchLater: watchLater.map((m) => m.title),
    };

    const promptMap = specialPrompts(userContext);
    const prompt = promptMap[item as SpecialPromptKeys];

    addMessage({ sender: "user", text: item });
    setThinking(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user: userContext, 
          message: prompt, 
        }),
      });

      const data = await res.json();
      addMessage({ sender: "nova", text: data.reply });
    } catch (err) {
      console.error(err);
      addMessage({ sender: "nova", text: "Oops! Something went wrong." });
    } finally {
      setThinking(false);
    }
  };

  useEffect(() => {
    if (userId) fetchConversations();
  }, [userId]);

  return (
    <div className="h-full w-64 bg-bg border-r border-border p-4 flex flex-col">
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
                onClick={() => handleSpecialPrompt(item)}
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
