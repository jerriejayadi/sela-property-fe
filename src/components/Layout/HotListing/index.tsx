"use client";

import ItemsCard from "@/components/Organism/ItemsCard";
import Image from "next/image";
import { mockUpList } from "@/utils/mockUpData";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRequest } from "ahooks";
import { getPropertyList } from "@/service/property";
import { useEffect } from "react";

export default function HotListing() {
  const t = useTranslations("landing_page");
  const router = useRouter();
  const { data, run } = useRequest(getPropertyList, { manual: true });
  useEffect(()=>{
    run({tags:'hot_listing'})
  },[])
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
          className={`text-black md:text-xl font-light leading-6 md:leading-9 mt-4 text-center `}
        >
          {t("hot_listing_caption")}
        </div>
      </div>
      {/* items */}
      <div className={`grid grid-cols-2 sm:grid-cols-3 mt-10 gap-2 md:gap-7 mx-auto`}>
        {/* items card */}
        {data?.result.items.map((rows, index) => (
          <ItemsCard
            currency={rows.currencyId ?? "IDR"}
            images={rows.images.map((rows) => rows.url)}
            key={index}
            price={rows.price}
            propertyName={rows.title}
            landSize={rows.landSize}
            buildSize={rows.buildingSize}
            location={rows.address.regency + `, ` + rows.address.province}
            bathRoom={rows.bathRoomsAmount}
            bedRoom={rows.bedRoomsAmount}
            onClick={() => {
              router.push(`/${rows.id}`);
            }}
          />
        ))}
      </div>
      <div className={`mt-10`}>
        <Link
          href={`/catalog`}
          className={`w-full  text-primary hover:underline active:underline px-3 py-2 md:p-4 font-lato active:bg-opacity-50 `}
        >
          See More Listing
        </Link>
      </div>
    </div>
  );
}
