"use client";

import ItemsCard from "@/components/Organism/ItemsCard";
import Image from "next/image";
import { mockUpList } from "@/utils/mockUpData";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function HotListing() {
  const t = useTranslations("landing_page");
  const router = useRouter();
  return (
    <div
      className={`flex flex-col w-full items-center px-3 py-12 md:px-20 md:py-20 bg-[#F3F3F3] `}
    >
      {/* title */}
      <div className={`px-6`}>
        <div
          className={`font-montserrat font-semibold text-3xl md:text-5xl text-center text-black tracking-widest`}
        >
          HOT LISTING
        </div>
        <div
          className={`font-light mt-4 text-secondary text-center text-xl font-lato `}
        >
          {t("hot_listing_caption")}
        </div>
      </div>
      {/* items */}
      <div className={`grid grid-cols-2 sm:grid-cols-3 mt-10 gap-2 md:gap-7`}>
        {/* items card */}
        {mockUpList.map((rows, index) => (
          <ItemsCard
            key={index}
            price={rows.price}
            propertyName={rows.propertyName}
            landSize={rows.landSize}
            buildSize={rows.buildSize}
            location={rows.location}
            bathRoom={rows.bathRoom}
            bedRoom={rows.bedRoom}
            onClick={() => {
              router.push(`/property/detail/0x`);
            }}
          />
        ))}
      </div>
      <div className={`mt-10`}>
        <button
          className={`w-full  text-primary hover:underline active:underline px-3 py-2 md:p-4 font-lato active:bg-opacity-50 `}
        >
          See More Listing
        </button>
      </div>
    </div>
  );
}
