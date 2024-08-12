"use client";

import { ArrowCircleLeft2, ArrowCircleRight2 } from "iconsax-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface CarouselProps {
  slides: string[];
  className?: string;
}

export default function Carousel({ slides, className }: CarouselProps) {
  let [current, setCurrent] = useState<number>(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  //   useEffect(() => {
  //     let interval = setInterval(() => {
  //       if (current === slides.length - 1) setCurrent(0);
  //       else setCurrent(current + 1);
  //     }, 10000);
  //     return () => clearInterval(interval);
  //   }, [current, slides.length]);

  return (
    <div
      className={`overflow-hidden relative ${className} duration-500 w-full`}
    >
      <div
        className={`flex h-full transition ease-out duration-500 translate-X-[-${100}%] `}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides?.map((rows, index) => (
          <div className="w-full flex-shrink-0 object-cover" key={index}>
            <Image
              className={`w-screen h-full object-cover `}
              src={rows}
              alt=""
              width={1440}
              height={800}
              loader={({ src }) => src}
            />
          </div>
        ))}
      </div>
      <div
        className={`absolute bottom-3 mx-auto md:flex items-center justify-center w-full hidden z-50`}
      >
        {slides.map((rows, index) => (
          <div
            key={index}
            className={`w-1 h-1 md:w-3 md:h-3  ${
              current === index ? "bg-white" : "bg-gray-500"
            } rounded-[100%]`}
          />
        ))}
      </div>
      <div className={`absolute bottom-0 right-0 hidden md:flex`}>
        <button
          onClick={previousSlide}
          className={`text-white px-1 py-2  active:text-opacity-50 h-fit transition-all duration-75`}
        >
          <ArrowCircleLeft2 />
        </button>
        <button
          onClick={nextSlide}
          className={`text-white px-1 py-2 active:text-opacity-50   h-fit right-0 transition-all duration-75`}
        >
          <ArrowCircleRight2 />
        </button>
      </div>

      {/* <button
        onClick={previousSlide}
        className={`text-white px-1 py-2  active:text-opacity-50 absolute top-0 bottom-0 my-auto h-fit transition-all duration-75`}
      >
        <ArrowCircleLeft2 className={`w-3 h-3`} />
      </button>
      <button
        onClick={nextSlide}
        className={`text-white px-1 py-2 active:text-opacity-50 absolute top-0 bottom-0 right-0 my-auto  h-fit  transition-all duration-75`}
      >
        <ArrowCircleRight2 className={`w-3 h-3`} />
      </button> */}
    </div>
  );
}
