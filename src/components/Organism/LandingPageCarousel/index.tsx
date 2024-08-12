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

  useEffect(() => {
    let interval = setInterval(() => {
      if (current === slides.length - 1) setCurrent(0);
      else setCurrent(current + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, [current, slides.length]);
  useEffect(() => {
    console.log(slides[current]);
  }, [current]);
  return (
    <div
      style={{
        backgroundImage: `url(${slides[current]})`,
        backgroundSize: "cover",
        
      }}
      className={` h-screen overflow-hidden relative ${className}  max-h-[800px] w-screen transition-all duration-500`}
    >
      <div className={`bg-black h-screen opacity-50`}>
        <div
          className={`flex w-screen transition-opacity ease-out duration-500 translate-Y-[-${100}%]  `}
          style={{
            transform: `translateY(-${current * 100}%)`,
          }}
        >
          {/* {slides?.map((rows, index) => (
          <Image
            key={index}
            className={`w-full h-screen object-cover rounded-lg  `}
            src={rows}
            alt=""
            // layout={`fill`}
            // objectFit={"contain"}
            width={1440}
            height={800}
          />
        ))} */}
        </div>
        {/* <button
        onClick={previousSlide}
        className={`text-white px-1 py-2  active:text-opacity-50 absolute top-0 bottom-0 my-auto h-fit transition-all duration-75`}
      >
        <ArrowCircleLeft2 />
      </button>
      <button
        onClick={nextSlide}
        className={`text-white px-1 py-2 active:text-opacity-50  absolute top-0 bottom-0 my-auto h-fit right-0 transition-all duration-75`}
      >
        <ArrowCircleRight2 />
      </button> */}

        <div
          className={`absolute flex-col gap-2 top-0 bottom-0 mb-3 mr-20 right-0 mx-auto  items-center justify-center z-50 hidden md:flex `}
        >
          {slides?.map((rows, index) => (
            <div
              key={index}
              onClick={() => {
                setCurrent(index);
              }}
              className={`w-2  rounded-full ${
                current === index ? "bg-white h-12" : "bg-gray-500 h-9"
              } cursor-pointer transition-all duration-300`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
