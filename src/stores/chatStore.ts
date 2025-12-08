import { create } from "zustand";

type Message = { sender: "user" | "nova"; text: string };

type ChatState = {
  userId: string | null;
  messages: Message[];
  setUser: (id:string) => void;
  addMessage: (msg: Message) => void;
  clearChat: () => void;
  // syncToBackend: () => Promise<void>;
};

export const useChatStore = create<ChatState>((set, get) => ({
  userId: null,
  messages: [],
  setUser: (id) => set({userId: id}),
  addMessage: (msg) => set((state) => ({ messages: [...state.messages, msg] })),
  clearChat: () => set({ messages: [] }),
  // syncToBackend: async () => {
  //   const {userId, messages} = get();
  //   if (!userId) return;
  //   await fetch("")
  // }
}));
