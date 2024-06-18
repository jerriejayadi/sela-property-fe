"use client";

import {
  ArrowCircleLeft,
  ArrowCircleLeft2,
  ArrowCircleRight,
  ArrowCircleRight2,
  ArrowLeft2,
  ArrowRight2,
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
import PropertyDetailCard from "@/components/Organism/PropertyDetailCard";

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

  const handleCTA = () => {
    window.open(`https://wa.me/+6281234567890`, "_blank");
    router.push(`/thankyou`);
  };

  useEffect(() => {
    fetchPropertyDetail();
  }, []);
  return (
    <div>
      {/*Photo */}
      <div className={`relative`}>
        <div
          className={`relative bg-gradient-to-b from-transparent to-black flex flex-col md:flex-row items-start md:items-end md:justify-between p-5 md:px-20 md:py-16 h-[529px] md:h-screen object-cover bg-cover transition-all duration-500`}
          style={{ backgroundImage: `url(${ImageList[current].url})` }}
        >
          <div className={`absolute top-0 bottom-0 h-fit my-auto  left-4`}>
            <button
              onClick={() => {
                previousSlide();
              }}
            >
              <ArrowLeft2
                className={` active:opacity-80 flex shrink-0 w-10 h-10 p-2 shadow-2xl rounded-[100%] bg-white bg-opacity-50 text-white `}
              />
            </button>
          </div>
          <div className={`absolute my-auto h-fit top-0 bottom-0 right-4`}>
            <button
              onClick={() => {
                nextSlide();
              }}
            >
              <ArrowRight2
                className={`active:opacity-80 flex shrink-0 w-10 h-10 p-2 shadow-2xl rounded-[100%] bg-white bg-opacity-50 text-white`}
              />
            </button>
          </div>
          <div className={`absolute top-0 h-[529px] bg-black z-50`} />
          {/* property detail */}
          <div className={`flex flex-col justify-end h-full w-full `}>
            <div
              className={`bg-primary text-white rounded-md p-2 w-fit text-xs md:text-sm`}
            >
              Best Deal
            </div>
            <div
              className={`font-montserrat font-bold text-xl md:text-4xl mt-1 md:mt-7`}
            >
              IDR {currencyFormat((data?.price.toString() as string) ?? "0")}
            </div>
            <div
              className={`font-montserrat font-semibold text-4xl md:text-6xl md:mt-2`}
            >
              {data?.title}
            </div>
            <div className={`flex items-center justify-between`}>
              <div className={`flex items-center md:mt-2`}>
                <Location
                  className={`w-4 h-4 shrink-0 flex md:w-6 md:h-6`}
                  variant={`Bold`}
                />
                <div className={`font-lato font-light text-sm md:text-xl`}>
                  Ubud, Bali
                </div>
              </div>
            </div>
            <div className={`flex justify-center w-full `}>
              <div className={`flex gap-2 mt-4 justify-center `}>
                {ImageList.map((rows, index) => (
                  <div
                    onClick={() => {
                      setCurrent(index);
                    }}
                    key={index}
                    className={`h-3 ${
                      current === index
                        ? "w-12 rounded-lg opacity-100"
                        : "w-3 rounded-[100%] opacity-50"
                    } bg-white  transition-all duration-500 cursor-pointer `}
                  />
                ))}
              </div>
              {/* <div className="flex gap-2">
                <button
                  onClick={() => {
                    previousSlide();
                  }}
                >
                  <ArrowCircleLeft2 className={`flex shrink-0 w-10 h-10`} />
                </button>
                <button
                  onClick={() => {
                    nextSlide();
                  }}
                >
                  <ArrowCircleRight2 className={`flex shrink-0 w-10 h-10`} />
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div
        className={`w-full fixed bottom-0 md:static flex items-center justify-between bg-[#FFFFFF] text-black  drop-shadow-md z-50 `}
      >
        <div
          className={`md:w-[70%] text-xs md:text-2xl font-bold font-lato pl-2  md:pl-20 h-full `}
        >
          Get the Help you Need, Contact Us!
        </div>
        <div className="md:w-[30%] bg-primary ">
          <div
            onClick={() => {
              handleCTA();
            }}
            className={`w-full  bg-primary hover:bg-opacity-80 hover:cursor-pointer text-white  flex items-center justify-between transition-all duration-150 `}
          >
            <div
              className={`flex items-center text-xs md:text-xl gap-5 pl-2 md:pl-10 `}
            >
              <Whatsapp
                className={`w-5 h-5 md:w-10 md:h-10`}
                variant={`Bold`}
              />
              <span className={`text-xs  md:block`}>Chat 081234567890</span>
            </div>

            <div className={`h-full px-4 py-6 md:p-8 text-white`}>
              <ArrowRight2 className={`w-3 h-3 md:w-5 md:h-5 font-bold`} />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className={`px-4 md:px-20 md:py-10 flex flex-col bg-[#FCFCFC] `}>
        {/*  */}
        <div
          className={`grid grid-cols-2 xs:grid-cols-3 mt-5 md:flex items-center lg:justify-between md:divide-x `}
        >
          <PropertyDetailCard
            props={"Buildsize"}
            iconURL={"/icons/buildsize.png"}
            value={data?.buildingSize ?? 0}
            unitOfMeasurement={data?.buildingSizeMeasurement}
          />
          <PropertyDetailCard
            className={`md:pl-12`}
            props={"Landsize"}
            iconURL={"/icons/landsize.png"}
            value={data?.landSize ?? 0}
            unitOfMeasurement={data?.landSizeMeasurement}
          />
          <PropertyDetailCard
            className={`md:pl-12`}
            props={"Bedroom"}
            iconURL={"/icons/bedroom.png"}
            value={data?.bedRoomsAmount ?? 0}
          />
          <PropertyDetailCard
            className={`md:pl-12`}
            props={"Bathroom"}
            iconURL={"/icons/bathroom.png"}
            value={data?.bathRoomsAmount ?? 0}
          />
          <PropertyDetailCard
            className={`md:pl-12`}
            props={"Carpark"}
            iconURL={"/icons/carpark.png"}
            value={data?.carParkAmount ?? 0}
          />
        </div>

        {/* About Us */}
        <div className={`mt-2 md:mt-10`}>
          <div
            className={` md:text-2xl font-montserrat font-semibold text-black`}
          >
            Description
          </div>
          <div className="font-lato font-light text-sm md:text-base mt-3 md:mt-6 text-secondary leading-6">
            {data?.description}
          </div>
        </div>

        {/* Key Features */}
        <div className={`mt-5 md:mt-10`}>
          <div
            className={`md:text-2xl font-montserrat font-semibold text-black`}
          >
            Key Features
          </div>
          <div className="font-lato font-light text-sm leading-7 md:text-base mt-3 md:mt-6 text-secondary">
            Lorem ipsum dolor sit amet consectetur. Varius sagittis integer est
            leo. Arcu id orci condimentum malesuada iaculis a eget. Et nisi
            rhoncus fermentum nulla cras id adipiscing auctor senectus. Eget
            enim rhoncus blandit neque faucibus. Egestas placerat id amet a
            morbi lectus pharetra eleifend.
          </div>
          <div
            className={`font-lato font-light grid md:grid-cols-2 text-sm md:text-base mt-5 gap-y-3 `}
          >
            <div className={`flex items-center gap-2 md:gap-5`}>
              <TickCircle className="text-green-500 w-5 h-5 md:w-9 md:h-9 flex shrink-0" />
              <div className={`text-black`}>
                Lorem ipsum dolor sit amet consectetur. Varius sagittis integer
                est leo.{" "}
              </div>
            </div>
            <div className={`flex items-center gap-2 md:gap-5`}>
              <TickCircle className="text-green-500 w-5 h-5 md:w-9 md:h-9 flex shrink-0" />
              <div className={`text-black`}>
                Lorem ipsum dolor sit amet consectetur. Varius sagittis integer
                est leo.{" "}
              </div>
            </div>
            <div className={`flex items-center gap-2 md:gap-5`}>
              <TickCircle className="text-green-500 w-5 h-5 md:w-9 md:h-9 flex shrink-0" />
              <div className={`text-black`}>
                Lorem ipsum dolor sit amet consectetur. Varius sagittis integer
                est leo.{" "}
              </div>
            </div>
            <div className={`flex items-center gap-2 md:gap-5`}>
              <TickCircle className="text-green-500 w-5 h-5 md:w-9 md:h-9 flex shrink-0" />
              <div className={`text-black`}>
                Lorem ipsum dolor sit amet consectetur. Varius sagittis integer
                est leo.{" "}
              </div>
            </div>
            <div className={`flex items-center gap-2 md:gap-5`}>
              <TickCircle className="text-green-500 w-5 h-5 md:w-9 md:h-9 flex shrink-0" />
              <div className={`text-black`}>
                Lorem ipsum dolor sit amet consectetur. Varius sagittis integer
                est leo.{" "}
              </div>
            </div>
            <div className={`flex items-center gap-2 md:gap-5`}>
              <TickCircle className="text-green-500 w-5 h-5 md:w-9 md:h-9 flex shrink-0" />
              <div className={`text-black`}>
                Lorem ipsum dolor sit amet consectetur. Varius sagittis integer
                est leo.{" "}
              </div>
            </div>
            <div className={`flex items-center gap-2 md:gap-5`}>
              <TickCircle className="text-green-500 w-5 h-5 md:w-9 md:h-9 flex shrink-0" />
              <div className={`text-black`}>
                Lorem ipsum dolor sit amet consectetur. Varius sagittis integer
                est leo.{" "}
              </div>
            </div>
            <div className={`flex items-center gap-2 md:gap-5`}>
              <TickCircle className="text-green-500 w-5 h-5 md:w-9 md:h-9 flex shrink-0" />
              <div className={`text-black`}>
                Lorem ipsum dolor sit amet consectetur. Varius sagittis integer
                est leo.{" "}
              </div>
            </div>
            <div className={`flex items-center gap-2 md:gap-5`}>
              <TickCircle className="text-green-500 w-5 h-5 md:w-9 md:h-9 flex shrink-0" />
              <div className={`text-black`}>
                Lorem ipsum dolor sit amet consectetur. Varius sagittis integer
                est leo.{" "}
              </div>
            </div>
          </div>
        </div>

        {/* Property Gallery */}
        <div
          className={`mt-5 md:mt-10 text-black relative ${
            seeMorePhotos ? "h-full" : "h-[1000px] overflow-hidden "
          }`}
        >
          {!seeMorePhotos && (
            <div
              className={`absolute w-full top-0 bg-gradient-to-b from-transparent from-60% h-[1000px] to-white z-30`}
            />
          )}

          <div
            className={`py- md:text-2xl font-montserrat font-semibold text-black`}
          >
            Property Gallery
          </div>
          <div className={`grid md:grid-cols-2 gap-4 mt-4`}>
            {ImageList.map((rows, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedImage(rows.url);
                }}
              >
                <Image
                  className={`md:w-[622px] md:h-[427px] ${
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
        <SuggestedProperty className={`pt-4 md:pt-10 py-11`} />
      </div>
    </div>
  );
}
