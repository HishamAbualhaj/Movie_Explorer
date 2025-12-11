"use client";
import { useRef, useState } from "react";
import CategorySwiper from "./CategorySwiper";
import { ChevronLeft, ChevronRight } from "lucide-react";
import LandingTitle from "@/components/ui/LandingTitle";

const Categories = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [progress, setProgress] = useState(0);
  return (
    <div className="py-40">
      <div className="container-wrapper ">
        <div className="flex items-center justify-between">
          <LandingTitle
            title="Explore our wide variety of categories"
            subtitle="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
          />
          <div className="flex max-lg:hidden items-center gap-2 bg-bg-dark p-3 rounded-md">
            <div
              ref={prevRef}
              className="text-white bg-bg-light p-3 rounded-md cursor-pointer hover:bg-bg-light/80 transition"
            >
              <ChevronLeft />
            </div>
            <div className="flex gap-2">
              {Array.from({ length }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => window._categorySwiper?.slideTo(i)}
                  className={`h-1 w-6 rounded-md transition-all duration-300
                  ${activeIndex === i ? "bg-primary " : "bg-gray-600"}
                `}
                />
              ))}
            </div>
            <div
              ref={nextRef}
              className="text-white bg-bg-light p-3 rounded-md cursor-pointer hover:bg-bg-light/80 transition"
            >
              <ChevronRight />
            </div>
          </div>
        </div>
        <div className="mt-12">
          <CategorySwiper
            prevRef={prevRef}
            nextRef={nextRef}
            setActiveIndex={setActiveIndex}
            setLength={setLength}
            setProgress={setProgress}
          />
        </div>

        <div className="bg-gray-600 h-1.5 mt-5 lg:hidden rounded-md w-[150px] mx-auto">
          <div className="bg-primary h-1.5 rounded-md" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
