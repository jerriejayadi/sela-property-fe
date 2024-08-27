"use client";
import Image from "next/image";
import Carousel from "../Carousel";
import { useState } from "react";
import { currencyFormat } from "@/utils/general";

interface ItemsCardProps {
  images?: string[];
  className?: string;
  price: number | string;
  propertyName: string;
  landSize: number | string;
  buildSize: number | string;
  location: string;
  bathRoom: number;
  bedRoom: number;
  onClick?: () => void;
  currency: string;
}
export default function ItemsCard({
  currency,
  images,
  className,
  price,
  propertyName,
  landSize,
  buildSize,
  location,
  bathRoom,
  bedRoom,
  onClick,
}: ItemsCardProps) {
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <div
      className={`flex flex-col  ${className} rounded-lg shadow-md max-w-[300px]`}
    >
      {/* Image */}
      <div className={`relative cursor-pointer`}>
        {" "}
        <div
          className={`z-40 ${
            hovered && ` w-full h-full bg-black bg-opacity-50`
          } absolute top-0 transition-all duration-500 rounded-t-lg `}
        />
        <Carousel
          className={`h-[145px] md:h-[300px] rounded-t-lg z-30 `}
          slides={images ?? []}
        />
        <div
          onClick={onClick}
          onMouseEnter={() => {
            setHovered(true);
          }}
          onMouseLeave={() => {
            setHovered(false);
          }}
          className={`w-full h-[75%] absolute top-0 bottom-0 left-0 right-0  items-center justify-center my-auto mx-auto rounded-lg z-40 `}
        >
          <button
            onClick={onClick}
            className={`bg-primary text-white p-3 w-fit h-fit  transition-all duration-300 ${
              hovered ? "opacity-100" : "opacity-0"
            }  z-40 absolute top-0 bottom-0 left-0 right-0  items-center justify-center my-auto mx-auto rounded-lg  `}
          >
            See Details
          </button>
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
              {currency} {currencyFormat(price)}
            </div>
            <div
              className={`font-normal line-clamp-2 text-xs md:text-2xl h-[32px] md:h-[64px]`}
            >
              {propertyName}
            </div>
          </div>
          <div className={`flex flex-col gap-2 md:gap-4`}>
            <div className={`font-light text-[10px] md:text-lg`}>
              Landsize {landSize} sqm, Buildsize {buildSize} sqm
            </div>

            <div className={`flex gap-2 md:gap-3`}>
              <div className={`flex items-center gap-1 `}>
                <Image
                  className={`w-4 h-4 md:w-6 md:h-6 shrink-0 object-cover`}
                  alt={``}
                  src={`/icons/bedroom.png`}
                  width={24}
                  height={24}
                />
                <div className={`text-xs md:text-base`}>{bedRoom}</div>
              </div>
              <div className={`flex items-center gap-1  `}>
                <Image
                  className={`w-4 h-4 md:w-6 md:h-6 shrink-0 object-cover`}
                  alt={``}
                  src={`/icons/bathroom.png`}
                  width={24}
                  height={24}
                />
                <div className={`text-xs md:text-base`}>{bathRoom}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Image
                className={`w-3 h-3 md:w-6 md:h-6`}
                alt={``}
                src={`/icons/location.png`}
                width={24}
                height={24}
              />
              <div className={`font-light text-xs md:text-xl `}>{location}</div>
            </div>
          </div>
        </div>
        {/* right desc */}
      </div>
    </div>
  );
}
