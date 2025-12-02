"use client";

import { useState } from "react";
import { faqs } from "./faq-data";
import { FaqItem } from "./FaqItem";

export function SupportFAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-bg py-16 md:py-20 flex justify-center">
      <div className="w-full max-w-6xl px-4">
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="space-y-3 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-text-muted text-sm md:text-base">
              Got questions? We’ve got answers! Check out our FAQ section to find
              answers to the most common questions about StreamVibe.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <button className="bg-primary text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition">
              Ask a Question
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {faqs.map((item, index) => (
            <FaqItem
              key={item.id}
              item={item}
              index={index}
              isOpen={openId === item.id}
              onToggle={() => toggle(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
