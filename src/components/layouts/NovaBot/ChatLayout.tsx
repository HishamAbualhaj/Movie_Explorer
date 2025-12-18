"use client";

import { useState } from "react";
import ChatSidebar from "./ChatSidebar";
import ChatWindow from "./ChatWindow";
import { Menu } from "lucide-react";

export default function ChatLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-[85vh] w-screen overflow-hidden bg-bg flex">
      <div
        className={`
          fixed inset-y-0 left-0 z-40 w-64 bg-bg
          transform transition-transform duration-300
          md:static md:translate-x-0 md:shrink-0
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <ChatSidebar />
      </div>

      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
        />
      )}

      <div className="flex flex-col flex-1 min-w-0 h-full">
        <div className="md:hidden flex items-center gap-3 p-4 border-b border-border">
          <button onClick={() => setSidebarOpen(true)}>
            <Menu />
          </button>
          <h1 className="font-semibold">Nova</h1>
        </div>

        <ChatWindow />
      </div>
    </div>
  );
}
