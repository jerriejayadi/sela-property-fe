import ItemsCard from "@/components/Organism/ItemsCard";
import Image from "next/image";
import { mockUpList } from "@/utils/mockUpData";

export default function HotListing() {
  return (
    <div className={`flex flex-col w-full items-center px-3 py-12 md:px-20 md:py-20 bg-[#F3F3F3] `}>
      {/* title */}
      <div className={`px-6`}>
        <div
          className={`font-josefin_sans font-semibold text-3xl md:text-5xl text-center text-black`}
        >
          Hot Listing
        </div>
        <div className={`font-light mt-4 text-secondary text-center text-xl font-lato `}>
          Lorem ipsum dolor sit amet consectetur. Lacus aliquet viverra lectus
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
          />
        ))}
      </div>
      <div className={`mt-10`}>
        <button className={`w-full  text-primary hover:underline active:underline px-3 py-2 md:p-4 font-lato active:bg-opacity-50 `}>See More Listing</button>
      </div>
    </div>
  );
}
