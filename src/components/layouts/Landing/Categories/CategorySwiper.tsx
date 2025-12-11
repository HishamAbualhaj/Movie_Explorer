"use client";
import "swiper/swiper.css";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { RefObject, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

const CategorySwiper = ({
  prevRef,
  nextRef,
  setActiveIndex,
  setLength,
  setProgress,
}: {
  prevRef: RefObject<null>;
  nextRef: RefObject<null>;
  setActiveIndex: (i: number) => void;
  setLength: (l: number) => void;
  setProgress: (i: number) => void;
}) => {
  const categories = [
    {
      image: "/action.png",
      title: "Action",
      url: "/",
    },
    {
      image: "/adventure.png",
      title: "Adventure",
      url: "",
    },
    {
      image: "/comedy.png",
      title: "Comedy",
      url: "",
    },
    {
      image: "/drama.png",
      title: "Drama",
      url: "/",
    },
    {
      image: "/horror.png",
      title: "Horror",
      url: "/",
    },
    {
      image: "/comedy.png",
      title: "Cartoon",
      url: "/",
    },
  ];

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination]}
        className="w-full overflow-hidden"
        onInit={(swiper) => {
          window._categorySwiper = swiper;

          const total = swiper.slides.length;

          let perView: number;

          if (typeof swiper.params.slidesPerView === "number") {
            perView = swiper.params.slidesPerView;
          } else {
            perView = 1;
          }

          const pages = Math.ceil(total / perView);

          setLength(pages);
        }}
        onSlideChange={(swiper) => {
          const totalSlides = swiper.slides.length;
          const currentIndex = swiper.activeIndex;
          const percent = ((currentIndex + 1) / totalSlides) * 100;
          setActiveIndex(currentIndex);
          setProgress(percent);
        }}
        spaceBetween={20}
        slidesPerView={5}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          const nav = swiper.params.navigation as any;
          nav.prevEl = prevRef.current;
          nav.nextEl = nextRef.current;
        }}
        breakpoints={{
          1280: { slidesPerView: 5 },
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
      >
        {categories.map((cat, i) => (
          <SwiperSlide key={i}>
            <div className="bg-bg-light p-5 rounded-md">
              <div className="flex justify-center">
                <Image
                  className="object-contain"
                  width={240}
                  height={240}
                  alt="Category Image"
                  src={cat.image}
                />
              </div>
              <Link
                className="flex items-center justify-between mt-3"
                href={cat.url}
              >
                <div className="text-white">{cat.title}</div>
                <ArrowRight className="text-white" size={20} />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default CategorySwiper;
