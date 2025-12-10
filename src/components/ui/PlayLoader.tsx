"use client";

import { Loader2 } from "lucide-react";

export default function PlayLoader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="w-8 h-8 text-white animate-spin" />
        <span className="text-sm text-gray-300">Loading...</span>
      </div>
    </div>
  );
}
