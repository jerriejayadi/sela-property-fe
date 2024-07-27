import ItemsCard from "@/components/Organism/ItemsCard";
import { getPropertyList } from "@/service/property";
import { mockUpList } from "@/utils/mockUpData";
import { useRequest } from "ahooks";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

import { useEffect } from "react";

interface SuggestedPropertyProps {
  className?: string;
}

export default function SuggestedProperty({
  className,
}: SuggestedPropertyProps) {
  const router = useRouter();
  const t = useTranslations("suggested");
  const { data, run } = useRequest(getPropertyList);

  return (
    <div className={`${className ?? ""} #F3F3F3  text-black`}>
      {/* title */}
      <div>
        <div className={`font-montserrat font-semibold text-base md:text-4xl `}>
          {t("heading")}
        </div>
        <div
          className={`font-lato font-light mt-1 md:mt-4 text-xs md:text-xl `}
        >
          {t("caption")}
        </div>
      </div>
      {/* items */}
      <div
        className={`grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mt-5 md:mt-10`}
      >
        {data?.result.items.slice(0, 3).map((rows, index) => (
          <ItemsCard
            images={rows.images.slice(0, 3).map((rows) => rows.url)}
            key={index}
            price={rows.price}
            propertyName={rows.title}
            landSize={rows.landSize}
            buildSize={rows.buildingSize}
            location={rows.address.regency + `, ` + rows.address.province}
            bathRoom={rows.bathRoomsAmount}
            bedRoom={rows.bedRoomsAmount}
            onClick={() => {
              router.push(`/property/detail/${rows.id}`);
            }}
          />
        ))}
      </div>
    </div>
  );
}
