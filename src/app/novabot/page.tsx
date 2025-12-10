import ChatSidebar from "@/components/layouts/NovaBot/ChatSidebar";
import ChatWindow from "@/components/layouts/NovaBot/ChatWindow";

export default function NovabotPage() {
  return (
    <main className="flex h-screen bg-bg-dark text-text-main">
      <ChatSidebar />
      <ChatWindow />
    </main>
  );
}
