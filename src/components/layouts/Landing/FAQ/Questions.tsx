"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const Questions = ({
  id,
  question,
  answer,
}: {
  id: number;
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="pt-5">
      <div className="">
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="hover:bg-bg-light p-2 rounded-md transition cursor-pointer"
        >
          <div className="grid grid-cols-[auto_1fr] items-center gap-x-5 pb-5">
            <div className="bg-bg-light text-xl text-white py-4 px-5 rounded-lg">
              {"0" + id}
            </div>
            <div className="flex justify-between">
              <div className="text-lg text-white">{question}</div>

              <div className="">
                {isOpen ? (
                  <Minus className="text-white" />
                ) : (
                  <Plus className="text-white" />
                )}
              </div>
            </div>
            <div
              className={`md:col-start-2 col-start-1 max-md:col-span-full row-start-2 mt-2 text-text-muted overflow-hidden transition-all  ${
                isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-50"
              }`}
            >
              {answer}
            </div>
          </div>

          <div className="opacity-50 w-full h-px bg-[linear-gradient(90deg,transparent_0%,#E50000_20%,#E50000_40%,transparent_100%)]"></div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
