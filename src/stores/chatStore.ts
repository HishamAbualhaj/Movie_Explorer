import { create } from "zustand";

type Message = { sender: "user" | "nova"; text: string };

type Conversation = {
  id: string;
  title: string;
  messages: Message[];
};

type ChatState = {
  userId: string | null;
  messages: Message[];

  conversations: Conversation[];
  fetchConversations: () => Promise<void>;
  loadConversation: (id: string) => void;

  setUser: (id: string) => void;
  addMessage: (msg: Message) => void;
  clearChat: () => void;

  isThinking: boolean;
  setThinking: (val: boolean) => void;
  // syncToBackend: () => Promise<void>;
};

export const useChatStore = create<ChatState>((set, get) => ({
  userId: null,
  messages: [],

  conversations: [],

  fetchConversations: async () => {
    const userId = get().userId;
    if (!userId) return;

    try {
      const res = await fetch(`/api/chats?user=${userId}`);
      const data = await res.json();

      set({ conversations: data });
    } catch (err) {
      console.error("Failed to fetch conversations:", err);
    }
  },

  loadConversation: (id) => {
    const conv = get().conversations.find((c) => c.id === id);
    if (!conv) return;

    set({ messages: conv.messages });
  },

  setUser: (id) => set({ userId: id }),
  addMessage: (msg) =>
    set((state) => ({ messages: [...state.messages, msg] })),
  clearChat: () => set({ messages: [], isThinking: false }),

  isThinking: false,
  setThinking: (val) => set({ isThinking: val }),
  // syncToBackend: async () => {
  //   const {userId, messages} = get();
  //   if (!userId) return;
  //   await fetch("")
  // }
}));
