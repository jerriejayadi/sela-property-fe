"use client";
import Image from "next/image";
import Carousel from "../Carousel";
import { useState } from "react";
import { currencyFormat } from "@/utils/general";

export default function ItemsCardLoading() {
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <div className={`flex flex-col  rounded-lg shadow-md `}>
      {/* Image */}
      <div className={`relative cursor-pointer`}>
        <div className={`${hovered && "bg-black bg-opacity-80 z-50"}`}>
          <div
            className={`h-[145px] md:h-[300px] rounded-t-lg bg-gray-500  animate-pulse`}
          ></div>
        </div>
      </div>
      {/* description */}
      <div className={`flex flex-col md:flex-row justify-between p-2`}>
        {/* left desc */}
        <div
          className={`text-black flex flex-col justify-between  gap-1 md:gap-4`}
        >
          <div className={`text-sm md:text-2xl font-josefin_sans`}>
            <div className={`font-bold text-sm md:text-2xl`}>
              <div
                className={`w-36 h-5 md:h-8  bg-gradient-to-r from-gray-500 to-gray-300 animate-pulse rounded-lg`}
              />
            </div>
            <div
              className={`font-normal line-clamp-2 text-xs md:text-2xl h-[32px] md:h-[64px]`}
            >
              <div
                className={`w-64 h-5 md:h-8  bg-gradient-to-r from-gray-500 to-gray-300 animate-pulse rounded-lg`}
              />
            </div>
          </div>
          <div className={`flex flex-col gap-2 md:gap-4`}>
            <div className={`font-light text-[10px] md:text-lg`}>
              <div
                className={`w-64 h-2 md:h-7  bg-gradient-to-r from-gray-500 to-gray-300 animate-pulse rounded-lg`}
              />
              <div
                className={`w-36 h-2 md:h-7  bg-gradient-to-r from-gray-500 to-gray-300 animate-pulse rounded-lg`}
              />
            </div>

            <div className={`flex gap-2 md:gap-3`}>
              <div className={`flex items-center gap-1 `}>
                <div className={`w-36 animate-pulse`} />
              </div>
              <div className={`flex items-center gap-1  `}>
                <div className={`w-36 animate-pulse`} />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div
                className={`w-36 h-5 md:h-8  bg-gradient-to-r from-gray-500 to-gray-300 animate-pulse rounded-lg`}
              />
            </div>
          </div>
        </div>
        {/* right desc */}
      </div>
    </div>
  );
}
