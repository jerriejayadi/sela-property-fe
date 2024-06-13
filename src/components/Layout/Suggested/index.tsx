import ItemsCard from "@/components/Organism/ItemsCard";
import { mockUpList } from "@/utils/mockUpData";

interface SuggestedPropertyProps {
  className?: string;
}

export default function SuggestedProperty({
  className,
}: SuggestedPropertyProps) {
  return (
    <div className={`${className ?? ""} #F3F3F3  text-black`}>
      {/* title */}
      <div>
        <div className={`font-montserrat font-semibold text-base md:text-4xl `}>
          Suggested
        </div>
        <div className={`font-lato font-light mt-1 md:mt-4 text-xs md:text-xl `}>
          Lorem ipsum dolor sit amet consectetur. Lacus aliquet viverra lectus
        </div>
      </div>
      {/* items */}
      <div className={`grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mt-5 md:mt-10`}>
        {mockUpList.slice(0, 3).map((rows, index) => (
          <ItemsCard
            key={index}
            price={rows.price}
            propertyName={rows.propertyName}
            landSize={rows.landSize}
            buildSize={rows.buildSize}
            location={rows.location}
            bathRoom={rows.bathRoom}
            bedRoom={rows.bedRoom}
          />
        ))}
      </div>
    </div>
  );
}
