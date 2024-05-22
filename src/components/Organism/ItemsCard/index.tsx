"use client";
import Image from "next/image";
import Carousel from "../Carousel";
import { useState } from "react";

interface ItemsCardProps {
  images?: string[];
  className?: string;
  price: number;
  propertyName: string;
  landSize: number;
  buildSize: number;
  location: string;
  bathRoom: number;
  bedRoom: number;
}
export default function ItemsCard({
  className,
  price,
  propertyName,
  landSize,
  buildSize,
  location,
  bathRoom,
  bedRoom,
}: ItemsCardProps) {
  const [hovered, setHovered] = useState<boolean>(false);
  return (
    <div
      className={`flex flex-col border border-[#E9E9E9] shadow-md ${className} rounded-lg`}
    >
      {/* Image */}
      <div
        className={`relative cursor-pointer`}
        onMouseEnter={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
      >
        <div className={`${hovered && "bg-black bg-opacity-80 z-50"}`}>
          <Carousel
            className={`h-[250px] md:h-[300px] rounded-t-lg`}
            slides={[
              `/images/bg-landing-page.png`,
              `/images/background-image.jpg`,
            ]}
          />
        </div>
        <button
          onClick={() => {
            alert("clicked detail");
          }}
          className={`bg-primary text-white p-3 w-fit h-fit absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center my-auto mx-auto transition-all duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          See Details
        </button>
      </div>
      {/* description */}
      <div className={`flex flex-col md:flex-row justify-between p-3`}>
        {/* left desc */}
        <div className={`text-black flex flex-col gap-4`}>
          <div className={`text-sm md:text-2xl font-josefin_sans`}>
            <div className={`font-bold`}>IDR {price}</div>
            <div className={`font-normal `}>{propertyName}</div>
          </div>
          <div className={`font-light text-xs`}>
            Landsize {landSize} sqm, Buildsize {buildSize} sqm
          </div>
          <div className={`flex`}>
            <div className={`flex items-center `}>
              <Image
                className={`w-3 h-3 md:w-6 md:h-6`}
                alt={``}
                src={`/icons/mdi_bedroom.svg`}
                width={24}
                height={24}
              />
              <div>{bedRoom}</div>
            </div>
            <div className={`flex items-center `}>
              <Image
                className={`w-3 h-3 md:w-6 md:h-6`}
                alt={``}
                src={`/icons/cbi_roomsbathroom.png`}
                width={24}
                height={24}
              />
              <div>{bathRoom}</div>
            </div>
          </div>
          <div className="flex items-center">
            <Image
              className={`w-3 h-3 md:w-6 md:h-6`}
              alt={``}
              src={`/icons/mdi_location.svg`}
              width={24}
              height={24}
            />
            <div className={`font-light text-xs md:text-xl`}>{location}</div>
          </div>
        </div>
        {/* right desc */}
      </div>
    </div>
  );
}
