"use client";

import ItemsCard from "@/components/Organism/ItemsCard";
import { mockUpList } from "@/utils/mockUpData";
import Image from "next/image";
import { useEffect, useState } from "react";

export interface FilterProps {
  availability: string;
  propertyType: string[];
}

export default function Catalog() {
  const [filter, setFilter] = useState<FilterProps>({
    availability: "",
    propertyType: [],
  });

  useEffect(() => {}, [filter]);
  return (
    <div className="relative">
      <div className={`relative `}>
        <div className={`bg-catalog_bg_image w-full  bg-cover`}>
          <div className="bg-black bg-opacity-50 h-full w-full px-20 py-40">
            <div className={`text-6xl font-josefin_sans font-bold`}>
              Discover your Dream <br /> Future Living
            </div>
          </div>
        </div>
      </div>
      <div className={`bg-white px-20 py-10 text-[#2F2F2F]`}>
        <div className={`flex items-start justify-center  divide-x-2`}>
          {/* filter */}
          <div className={`px-8 py-4 divide-y-2 w-1/3 font-lato`}>
            <div className={`flex items-center gap-6 py-4`}>
              <Image
                alt={``}
                src={`/icons/filter.png`}
                width={16}
                height={16}
              />
              <div>Filters</div>
            </div>
            <div className={`py-3`}>
              <div className={`py-3 font-semibold`}>Availability</div>
              <div className={`flex flex-col gap-3 text-sm`}>
                <div className={`flex items-center`}>
                  <input
                    className={`accent-primary`}
                    type="radio"
                    id={`hot_listing`}
                    value={`hot_listing`}
                    checked={filter.availability === "hot_listing"}
                    onChange={() => {
                      setFilter({ ...filter, availability: "hot_listing" });
                    }}
                  />
                  <label className={`ml-2`} htmlFor={`hot_listing`}>
                    Hot Listing
                  </label>
                </div>
                <div className={`flex items-center`}>
                  <input
                    className={`accent-primary`}
                    type="radio"
                    id={`available`}
                    value={`available`}
                    checked={filter.availability === "available"}
                    onChange={() => {
                      setFilter({ ...filter, availability: "available" });
                    }}
                  />
                  <label className={`ml-2`} htmlFor={`available`}>
                    Available
                  </label>
                </div>
                <div className={`flex items-center`}>
                  {" "}
                  <input
                    className={`accent-primary`}
                    type="radio"
                    id={`sold`}
                    value={`sold`}
                    checked={filter.availability === "sold"}
                    onChange={() => {
                      setFilter({ ...filter, availability: "sold" });
                    }}
                  />
                  <label className={`ml-2`} htmlFor={`sold`}>
                    Sold
                  </label>
                </div>
              </div>
            </div>
            <div className={`mb-2`}>
              <div className={`font-semibold my-3`}>Property Type</div>
              <div
                className={`flex items-center justify-start gap-2 mb-3 flex-wrap text-sm`}
              >
                <div className={`px-3 py-2 bg-primary text-white`}>Villa</div>
                <div className={`px-3 py-2 bg-[#F9F9F9]`}>House</div>
                <div className={`px-3 py-2 bg-[#F9F9F9]`}>Apartment</div>
              </div>
              <button className={`w-fit hover:underline mb-3 text-xs`}>
                Lainnya
              </button>
            </div>
            <div>
              <div className={`my-3 font-semibold`}>Location</div>
              <div className={`flex gap-3 max-w-full flex-wrap mb-3 text-sm`}>
                <div className={`px-3 py-2 bg-primary text-white`}>Villa</div>
                <div className={`px-3 py-2 bg-[#F9F9F9]`}>House</div>
                <div className={`px-3 py-2 bg-[#F9F9F9]`}>Apartment</div>
                <div className={`px-3 py-2 bg-[#F9F9F9]`}>House</div>
                <div className={`px-3 py-2 bg-[#F9F9F9]`}>Apartment</div>
                <div className={`px-3 py-2 bg-[#F9F9F9]`}>House</div>
                <div className={`px-3 py-2 bg-[#F9F9F9]`}>Apartment</div>
                <div className={`px-3 py-2 bg-[#F9F9F9]`}>House</div>
                <div className={`px-3 py-2 bg-[#F9F9F9]`}>Apartment</div>
              </div>
              <button className={`w-fit hover:underline mb-3 text-xs`}>
                Lainnya
              </button>
            </div>
            <div>
              <div className={`my-3 font-semibold`}>Price</div>
              <div className={`flex items-center gap-1 mb-3`}>
                <div>Rp</div>
                <input
                  placeholder={"0"}
                  type="text"
                  className={`w-full p-2 bg-[#F9F9F9] `}
                />
                {/* <select className={`w-full bg-[#F9F9F9] p-2 text-[#787878]`}>
                  <option>Min Price</option>
                </select> */}
                <div className={`h-[1px] w-10 bg-black`} />
                <div>Rp</div>
                <input
                  placeholder={"0"}
                  type="text"
                  className={`w-full p-2 bg-[#F9F9F9]`}
                />
                {/* <select className={`w-full bg-[#F9F9F9] p-2 text-[#787878]`}>
                  <option>Max Price</option>
                </select> */}
              </div>
            </div>
            <div>
              <div className={`my-3 font-semibold`}>Surface Area</div>
              <div className={`flex items-center gap-1`}>
                <select className={`w-full bg-[#F9F9F9] p-2 text-[#787878]`}>
                  <option>Min Area</option>
                </select>
                <div className={`h-[1px] w-10 bg-black `} />
                <select className={`w-full bg-[#F9F9F9] p-2 text-[#787878]`}>
                  <option>Max Area</option>
                </select>
              </div>
            </div>
            <div>
              <div className={`my-3 font-semibold`}>Room Area</div>
              <div className={`flex flex-col gap-1`}>
                <select className={`w-full bg-[#F9F9F9] p-2 text-[#787878]`}>
                  <option>Amount of Bedroom</option>
                </select>
                <select className={`w-full bg-[#F9F9F9] p-2 text-[#787878]`}>
                  <option>Amount of Bathroom</option>
                </select>
              </div>
            </div>
            <div>
              <div className={`my-3 font-semibold`}>Other Facilities</div>
              <div className={`flex flex-col gap-4`}>
                <div className={`flex items-center gap-2`}>
                  <input
                    className="accent-primary rounded-lg w-6 h-6"
                    type="checkbox"
                  />{" "}
                  <label>Security 24 hours</label>
                </div>
                <div className={`flex items-center gap-2`}>
                  <input
                    className="accent-primary rounded-lg w-6 h-6"
                    type="checkbox"
                  />{" "}
                  <label>Security 24 hours</label>
                </div>
              </div>
              <div className={`flex items-center gap-2 mt-2 w-full`}>
                <button
                  className={`text-primary w-full py-4 px-11 border border-opacity-10 border-black active:bg-black active:bg-opacity-5`}
                >
                  Reset
                </button>
                <button
                  className={`bg-primary w-full text-white py-4 px-11 active:bg-opacity-80`}
                >
                  Apply Filter
                </button>
              </div>
            </div>
          </div>

          {/* catalog */}
          <div className={`px-8 flex flex-col gap-3 divide-y-2 w-2/3`}>
            {/* search bar */}
            <div className={`flex divide-x-2 items-center`}>
              <div className={`w-full`}>
                <input
                  className={`w-full px-2 py-4`}
                  type={`text`}
                  placeholder={"Search For Icon"}
                />
              </div>
              <div>
                <select>
                  <option>Hello</option>
                </select>
              </div>
            </div>

            {/* Item List */}
            <div className={`grid grid-cols-3 gap-8 pt-10`}>
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
          </div>
        </div>
      </div>
    </div>
  );
}
