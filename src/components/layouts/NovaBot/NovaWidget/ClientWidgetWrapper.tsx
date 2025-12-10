"use client";

import { usePathname } from "next/navigation";
import NovaWidget from "@/components/layouts/NovaBot/NovaWidget/NovaWidget";

export default function ClientWidgetWrapper() {
  const pathname = usePathname();

  if (pathname.startsWith("/novabot")) return null;

  return <NovaWidget />;
}
