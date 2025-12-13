"use client";
import React from "react";

interface SectionRapperProps {
  type: string;
  children: React.ReactNode;
}

const SectionRapper = ({ type, children }: SectionRapperProps) => {
  return (
    <div className="relative border border-border rounded-lg p-6 m-2 mb-8">
      <div className="flex items-center mb-6">
        <span className="absolute -top-5 left-6 bg-red-600 text-text-main px-5 py-3 rounded-sm text-sm">
          {type}
        </span>
      </div>

      <div>{children}</div>
    </div>
  );
};

export default SectionRapper;
