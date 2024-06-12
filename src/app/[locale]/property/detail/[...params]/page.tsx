"use client";

import {
  ArrowDown2,
  ArrowRight2,
  ArrowUp2,
  Check,
  Location,
  TickCircle,
  Whatsapp,
} from "iconsax-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRequest } from "ahooks";
import { getPropertyDetails } from "@/service/property";
import { currencyFormat } from "@/utils/general";
import { useRouter } from "next/navigation";
import Link from "next/link";
import WhatsappCTA from "@/components/Organism/WhatsappCTA";
import SuggestedProperty from "@/components/Layout/Suggested";

const ImageList = [
  {
    url: "/images/detail-property-bg.jpeg",
    width: 2500,
    height: 1666,
  },
  {
    url: "/images/detail-property-image-1.jpeg",
    width: 840,
    height: 560,
  },
  {
    url: "/images/detail-property-image-2.jpeg",
    width: 2500,
    height: 1666,
  },
  {
    url: "/images/detail-property-image-3.jpeg",
    width: 2500,
    height: 1666,
  },
  {
    url: "/images/detail-property-image-3.jpeg",
    width: 2500,
    height: 1666,
  },
];

export default function PropertyDetail({
  params: { params },
}: {
  params: {
    params: [id: string];
  };
}) {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState<string>(ImageList[0].url);
  const [seeMorePhotos, setSeeMorePhotos] = useState<boolean>(false);
  let [current, setCurrent] = useState<number>(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(ImageList.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === ImageList.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  const { data, error, runAsync, loading } = useRequest(getPropertyDetails, {
    manual: true,
  });

  const fetchPropertyDetail = () => {
    runAsync({ id: "0x" }).then((res) => {
      setSelectedImage(res.images[0].url as string);
    });
  };

  useEffect(() => {
    fetchPropertyDetail();
  }, []);
  return (
    <div>
      {/*Photo */}
      <div className={`relative`}>
        <div
          className={`relative flex flex-col md:flex-row items-start md:items-end md:justify-between p-5 md:px-20 md:py-16 h-64 md:h-screen object-cover bg-cover transition-all duration-500`}
          style={{ backgroundImage: `url(${selectedImage})` }}
        >
          {/* property detail */}
          <div className={`flex flex-col justify-end h-full `}>
            <div
              className={`bg-primary text-white p-[2px] md:p-2 w-fit text-[5px] md:text-sm`}
            >
              Best Deal
            </div>
            <div
              className={`font-josefin_sans font-bold text-sm md:text-4xl mt-1 md:mt-7`}
            >
              IDR {currencyFormat(data?.price.toString() as string)}
            </div>
            <div className={`font-josefin_sans text-2xl md:text-6xl md:mt-2`}>
              {data?.title}
            </div>
            <div className={`flex items-center md:mt-2`}>
              <Location className={`w-1 h-1 md:w-6 md:h-6`} variant={`Bold`} />
              <div
                className={`font-josefin_sans font-light text-[8px] md:text-xl`}
              >
                Ubud, Bali
              </div>
            </div>
          </div>
          {/* image list */}

          <div
            className={`gap-2 md:justify-center  md:overflow-auto mt-3 md:mt-0`}
          >
            <div
              style={{
                transform: `translateY(-${current * 100}%)`,
              }}
              className={`flex shrink-0 md:justify-end md:flex-col md:items-center md:h-[448px] gap-2`}
            >
              {data?.images.slice(0, 3).map((rows, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setSelectedImage(rows.url);
                  }}
                >
                  <Image
                    className={`w-16 h-10 md:w-60 md:h-36  ${
                      selectedImage === rows.url && "border-2 border-orange-300"
                    }`}
                    alt={``}
                    loader={({ src }) => {
                      return src;
                    }}
                    src={rows.url}
                    width={1920}
                    height={1080}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div
        className={`w-full flex items-center bg-[#FFFFFF] text-black h-full drop-shadow-md  `}
      >
        <div className={`w-[70%] text-2xl font-bold font-lato  pl-20 h-full `}>
          Get the Help you Need, Contact Us!
        </div>
        <div className="w-[30%] bg-primary ">
          <WhatsappCTA />
        </div>
      </div>

      {/* Content */}
      <div
        className={`px-4 md:px-20 md:py-10 flex flex-col gap-12 bg-[#FCFCFC] `}
      >
        {/*  */}
        <div
          className={`flex items-center lg:justify-between divide-x flex-wrap`}
        >
          <div className={`flex items-center gap-1 pr-12`}>
            <div className={`p-2`}>
              <Image
                alt={``}
                src={`/icons/buildsize.png`}
                width={29}
                height={29}
              />
            </div>
            <div className={`text-black tracking-widest`}>
              <div className={`text-2xl font-bold text-black `}>
                {data?.buildingSize}
                <span className={`font-light `}>
                  {data?.buildingSizeMeasurement}
                </span>
              </div>
              <div className={`text-[10px]`}>Buildsize</div>
            </div>
          </div>
          <div className={`flex items-center gap-1 px-12`}>
            <div className={`p-2`}>
              <Image
                alt={``}
                src={`/icons/landsize.png`}
                width={29}
                height={29}
              />
            </div>
            <div className={`text-black tracking-widest`}>
              <div className={`text-2xl font-bold text-black `}>
                {data?.landSize}
                <span className={`font-light `}>
                  {data?.landSizeMeasurement}
                </span>
              </div>
              <div className={`text-[10px]`}>Landsize</div>
            </div>
          </div>
          <div className={`flex items-center gap-1 px-12  `}>
            <div className={`p-2`}>
              <Image
                alt={``}
                src={`/icons/bedroom.png`}
                width={29}
                height={29}
              />
            </div>
            <div className={`text-black tracking-widest`}>
              <div className={`text-2xl font-bold text-black `}>
                {data?.bedRoomsAmount}
              </div>
              <div className={`text-[10px]`}>Bedroom</div>
            </div>
          </div>
          <div className={`flex items-center gap-1 px-12`}>
            <div className={`p-2`}>
              <Image
                alt={``}
                src={`/icons/buildsize.png`}
                width={29}
                height={29}
              />
            </div>
            <div className={`text-black tracking-widest`}>
              <div className={`text-2xl font-bold text-black `}>
                {data?.bathRoomsAmount}
              </div>
              <div className={`text-[10px]`}>Bathroom</div>
            </div>
          </div>
          <div className={`flex items-center gap-1 px-12`}>
            <div className={`p-2`}>
              <Image
                alt={``}
                src={`/icons/cbi_roomsbathroom.png`}
                width={29}
                height={29}
              />
            </div>
            <div className={`text-black tracking-widest`}>
              <div className={`text-2xl font-bold text-black `}>
                {data?.carParkAmount}
              </div>
              <div className={`text-[10px]`}>Carpark</div>
            </div>
          </div>
        </div>

        {/* About Us */}
        <div>
          <div className={` md:text-2xl font-josefin_sans text-black`}>
            Description
          </div>
          <div className="text-[10px] md:text-base mt-6 text-secondary">
            {data?.description}
          </div>
        </div>

        {/* Key Features */}
        <div>
          <div className={`md:text-2xl font-josefin_sans text-black`}>
            Key Features
          </div>
          <div className="text-[10px] md:text-base mt-6 text-secondary">
            Lorem ipsum dolor sit amet consectetur. Varius sagittis integer est
            leo. Arcu id orci condimentum malesuada iaculis a eget. Et nisi
            rhoncus fermentum nulla cras id adipiscing auctor senectus. Eget
            enim rhoncus blandit neque faucibus. Egestas placerat id amet a
            morbi lectus pharetra eleifend.
          </div>
          <div
            className={`grid md:grid-cols-2 text-[10px] md:text-base mt-5 gap-y-3 `}
          >
            <div className={`flex items-center gap-5`}>
              <TickCircle className="text-green-500 w-5 h-5 md:w-9 md:h-9" />
              <div className={`text-black`}>
                Lorem ipsum dolor sit amet consectetur. Varius sagittis integer
                est leo.{" "}
              </div>
            </div>
            <div className={`flex items-center gap-5`}>
              <TickCircle className="text-green-500 w-5 h-5 md:w-9 md:h-9" />
              <div className={`text-black`}>
                Lorem ipsum dolor sit amet consectetur. Varius sagittis integer
                est leo.{" "}
              </div>
            </div>
            <div className={`flex items-center gap-5`}>
              <TickCircle className="text-green-500 w-5 h-5 md:w-9 md:h-9" />
              <div className={`text-black`}>
                Lorem ipsum dolor sit amet consectetur. Varius sagittis integer
                est leo.{" "}
              </div>
            </div>
            <div className={`flex items-center gap-5`}>
              <TickCircle className="text-green-500 w-5 h-5 md:w-9 md:h-9" />
              <div className={`text-black`}>
                Lorem ipsum dolor sit amet consectetur. Varius sagittis integer
                est leo.{" "}
              </div>
            </div>
            <div className={`flex items-center gap-5`}>
              <TickCircle className="text-green-500 w-5 h-5 md:w-9 md:h-9" />
              <div className={`text-black`}>
                Lorem ipsum dolor sit amet consectetur. Varius sagittis integer
                est leo.{" "}
              </div>
            </div>
            <div className={`flex items-center gap-5`}>
              <TickCircle className="text-green-500 w-5 h-5 md:w-9 md:h-9" />
              <div className={`text-black`}>
                Lorem ipsum dolor sit amet consectetur. Varius sagittis integer
                est leo.{" "}
              </div>
            </div>
            <div className={`flex items-center gap-5`}>
              <TickCircle className="text-green-500 w-5 h-5 md:w-9 md:h-9" />
              <div className={`text-black`}>
                Lorem ipsum dolor sit amet consectetur. Varius sagittis integer
                est leo.{" "}
              </div>
            </div>
            <div className={`flex items-center gap-5`}>
              <TickCircle className="text-green-500 w-5 h-5 md:w-9 md:h-9" />
              <div className={`text-black`}>
                Lorem ipsum dolor sit amet consectetur. Varius sagittis integer
                est leo.{" "}
              </div>
            </div>
            <div className={`flex items-center gap-5`}>
              <TickCircle className="text-green-500 w-5 h-5 md:w-9 md:h-9" />
              <div className={`text-black`}>
                Lorem ipsum dolor sit amet consectetur. Varius sagittis integer
                est leo.{" "}
              </div>
            </div>
          </div>
        </div>

        {/* Property Gallery */}
        <div
          className={`text-black relative ${
            seeMorePhotos ? "h-full" : "h-[1000px] overflow-hidden "
          }`}
        >
          {!seeMorePhotos && (
            <div
              className={`absolute w-full top-0 bg-gradient-to-b from-transparent from-60% h-[1000px] to-white z-50`}
            />
          )}

          <div className={`md:text-2xl font-josefin_sans text-black`}>
            Property Gallery
          </div>
          <div className={`grid grid-cols-2`}>
            {ImageList.map((rows, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedImage(rows.url);
                }}
              >
                <Image
                  className={`w-[622px] h-[427px] ${
                    selectedImage === rows.url && "border-2 border-orange-300"
                  }`}
                  alt={``}
                  loader={({ src }) => {
                    return src;
                  }}
                  src={rows.url}
                  width={1920}
                  height={1080}
                />
              </div>
            ))}
          </div>
        </div>
        {!seeMorePhotos && (
          <div
            onClick={() => {
              setSeeMorePhotos(true);
            }}
            className={`text-black w-full text-center hover:underline active:underline`}
          >
            See More Photos
          </div>
        )}

        {/* Suggested */}
        <SuggestedProperty />
      </div>
    </div>
  );
}
