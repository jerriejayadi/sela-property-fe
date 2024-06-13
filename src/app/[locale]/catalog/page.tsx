"use client";

import Increment from "@/components/Molecules/Increment";
import FilterModal from "@/components/Organism/FilterModal";
import ItemsCard from "@/components/Organism/ItemsCard";
import SortModal from "@/components/Organism/SortModal";
import { useDebounce } from "@/utils/general";
import { mockUpList } from "@/utils/mockUpData";
import { AddCircle, Check, Filter, MinusCirlce, Sort } from "iconsax-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export interface FilterProps {
  keyword: string;
  sort: string;
  availability: string;
  propertyType: string[];
  location: string;
  minPrice: number;
  maxPrice: number;
  minArea: number;
  maxArea: number;
  bedRoom: number;
  bathRoom: number;
  facilities: string[];
}

export default function Catalog() {
  const router = useRouter();

  const [sortModal, setSortModal] = useState<boolean>(false);
  const [filterModal, setFilterModal] = useState<boolean>(false);
  const [searched, setSearched] = useState<boolean>(false);

  const [filter, setFilter] = useState<FilterProps>({
    keyword: "",
    sort: "",
    availability: "",
    propertyType: [],
    location: "",
    minPrice: 0,
    maxPrice: 0,
    minArea: 0,
    maxArea: 0,
    bedRoom: 0,
    bathRoom: 0,
    facilities: [],
  });

  const propertyType = [
    {
      name: "Villa",
      value: "villa",
    },
    {
      name: "House",
      value: "house",
    },
    {
      name: "Apartment",
      value: "apartment",
    },
  ];

  const location = [
    {
      name: "Villa",
      value: "villa",
    },
    {
      name: "House",
      value: "house",
    },
    {
      name: "Apartment",
      value: "apartment",
    },
  ];

  const handlePropertyType = (value: string, action: string) => {
    let propertyTypeTemp = filter.propertyType;
    if (action === "add") {
      propertyTypeTemp.push(value);
    } else {
      propertyTypeTemp.splice(propertyTypeTemp.indexOf(value), 1);
    }
    console.log(propertyTypeTemp);
    setFilter({ ...filter, propertyType: propertyTypeTemp });
  };

  // const handleLocation = (value: string, action: string) => {
  //   let locationTemp = filter.location;
  //   if (action === "add") {
  //     locationTemp.push(value);
  //   } else {
  //     locationTemp.splice(locationTemp.indexOf(value), 1);
  //   }
  //   setFilter({ ...filter, location: locationTemp });
  // };

  const onIncrementChange = (
    key: "bedRoom" | "bathRoom",
    behavior: "add" | "subtract"
  ) => {
    const filterTemp = { ...filter };
    if (behavior === "add") {
      filterTemp[key] = filterTemp[key] + 1;
    } else {
      if (filterTemp[key] !== 0) {
        filterTemp[key] = filterTemp[key] - 1;
      } else {
        filterTemp[key] = 0;
      }
    }
    setFilter(filterTemp);
  };
  const resetFilter = () => {
    setFilter({
      keyword: "",
      sort: "",
      availability: "",
      propertyType: [],
      location: "",
      minPrice: 0,
      maxPrice: 0,
      minArea: 0,
      maxArea: 0,
      bedRoom: 0,
      bathRoom: 0,
      facilities: [],
    });
  };

  const search = useDebounce(filter.location, 1000);

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  useEffect(() => {}, [search]);
  return (
    <div className="relative">
      <div className={`relative `}>
        <div className={`bg-catalog_bg_image w-full  bg-cover`}>
          <div className="bg-black bg-opacity-60 h-full w-full px-8 py-20 md:px-20 md:py-40">
            <div
              className={`text-2xl md:text-6xl font-montserrat font-bold tracking-widest`}
            >
              DISCOVER YOUR DREAM <br /> FUTURE LIVING
            </div>
          </div>
        </div>
      </div>
      <div className={`bg-white p-5  lg:px-20 lg:py-10 text-[#2F2F2F]`}>
        <div className={`flex items-start justify-center  md:divide-x-2`}>
          {/* filter */}
          <div
            className={`mr-8 py-4 divide-y-2 md:w-[320px] font-lato md:block hidden`}
          >
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
                    className={`accent-primary w-5 h-5`}
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
                    className={`accent-primary w-5 h-5`}
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
                    className={`accent-primary w-5 h-5`}
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
                {propertyType.map((rows, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      handlePropertyType(
                        rows.value,
                        filter.propertyType.some(
                          (rows2) => rows2 === rows.value
                        )
                          ? "remove"
                          : "add"
                      );
                    }}
                    className={`px-3 py-2 cursor-pointer ${
                      filter?.propertyType?.some(
                        (rows2) => rows2 === rows.value
                      )
                        ? "bg-primary text-white"
                        : "bg-[#F9F9F9] text-black"
                    }`}
                  >
                    {rows.name}
                  </div>
                ))}
              </div>
              <button className={`w-fit hover:underline mb-3 text-xs`}>
                Lainnya
              </button>
            </div>
            <div>
              <div className={`my-3 font-semibold`}>Location</div>
              <div className={`flex gap-3 max-w-full flex-wrap mb-3 text-sm`}>
                <div className={`relative flex w-full`}>
                  <input
                    value={filter.location}
                    onKeyDown={() => {
                      setSearched(false);
                    }}
                    onChange={(e) => {
                      setSearched(true);
                      setFilter({ ...filter, location: e.target.value });
                    }}
                    placeholder={`Location`}
                    type={`text`}
                    className={`w-full border border-gray-500 rounded-lg px-3 py-3`}
                  />
                  <div
                    className={`absolute  flex-col gap-3 top-10 py-3 px-5 bg-white border border-gray-500 shadow-sm w-full max-h-[100px] overflow-auto ${
                      searched ? "flex" : "hidden"
                    }`}
                  >
                    <div
                      onClick={() => {
                        setFilter({ ...filter, location: "Gianyar" });
                        setSearched(false);
                      }}
                      className={`w-full`}
                    >
                      Gianyar
                    </div>
                    <div
                      onClick={() => {
                        setFilter({ ...filter, location: "Canggu" });
                        setSearched(false);
                      }}
                      className={`w-full`}
                    >
                      Canggu
                    </div>
                    <div
                      onClick={() => {
                        setFilter({ ...filter, location: "Kuta" });
                        setSearched(false);
                      }}
                      className={`w-full`}
                    >
                      Kuta
                    </div>
                  </div>
                </div>
                {/* {location.map((rows, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      handleLocation(
                        rows.value,
                        filter.location.some((rows2) => rows2 === rows.value)
                          ? "remove"
                          : "add"
                      );
                    }}
                    className={`px-3 py-2 cursor-pointer  ${
                      filter.location.some((rows2) => rows2 === rows.value)
                        ? "bg-primary text-white"
                        : "bg-[#F9F9F9] text-black"
                    }`}
                  >
                    {rows.name}
                  </div>
                ))} */}
              </div>
              {/* <button className={`w-fit hover:underline mb-3 text-xs`}>
                Lainnya
              </button> */}
            </div>
            <div>
              <div className={`my-3 font-semibold`}>Price</div>
              <div className={`flex items-center gap-1 mb-3`}>
                <div>Rp</div>
                <input
                  onChange={(e) => {
                    setFilter({ ...filter, minPrice: Number(e.target.value) });
                  }}
                  value={filter.minPrice}
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
                  onChange={(e) => {
                    setFilter({ ...filter, maxPrice: Number(e.target.value) });
                  }}
                  value={filter.maxPrice}
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
              <div className={`flex items-center gap-1 mb-3 text-sm`}>
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
              <div className={`flex flex-col gap-4 mb-4`}>
                <div className="flex items-center justify-between">
                  <div className={`flex items-center`}>
                    <Image
                      className={`w-3 h-3 md:w-6 md:h-6`}
                      alt={``}
                      src={`/icons/mdi_bedroom.svg`}
                      width={24}
                      height={24}
                    />
                    Bed Room
                  </div>
                  <Increment
                    value={filter.bedRoom}
                    onSubtract={() => {
                      onIncrementChange("bedRoom", "subtract");
                    }}
                    onAdd={() => {
                      onIncrementChange("bedRoom", "add");
                    }}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className={`flex items-center`}>
                    <Image
                      className={`w-3 h-3 md:w-6 md:h-6`}
                      alt={``}
                      src={`/icons/cbi_roomsbathroom.png`}
                      width={24}
                      height={24}
                    />
                    Bath Room
                  </div>
                  <Increment
                    value={filter.bathRoom}
                    onSubtract={() => {
                      onIncrementChange("bathRoom", "subtract");
                    }}
                    onAdd={() => {
                      onIncrementChange("bathRoom", "add");
                    }}
                  />
                </div>
              </div>
            </div>
            <div className={`flex flex-col`}>
              <div className={`my-3 font-semibold`}>Other Facilities</div>
              <div className={`flex flex-col gap-4`}>
                <div className={`flex items-center gap-2`}>
                  <input
                    className="accent-primary rounded-[4px] w-6 h-6 "
                    type="checkbox"
                  />

                  <label>Security 24 hours</label>
                </div>
                <div className={`flex items-center gap-2`}>
                  <input
                    className="accent-primary rounded-lg w-6 h-6"
                    type="checkbox"
                  />{" "}
                  <label>CCTV</label>
                </div>
              </div>
              <div
                className={`flex flex-shrink-1 items-center gap-2 mt-2 w-full`}
              >
                <button
                  onClick={() => {
                    resetFilter();
                  }}
                  className={` text-primary flex justify-center flex-grow py-4 border border-opacity-10 border-black active:bg-black active:bg-opacity-5`}
                >
                  Reset
                </button>
                <button
                  onClick={() => {
                    console.log(filter);
                  }}
                  className={`bg-primary flex justify-center flex-grow  text-white py-4  active:bg-opacity-80`}
                >
                  Apply Filter
                </button>
              </div>
            </div>
          </div>

          {/* catalog */}
          <div className={`md:px-8 flex flex-col gap-5 divide-y-2 w-full`}>
            {/* search bar */}
            <div className={`flex divide-x-2 items-center `}>
              <div className={`w-full pr-3`}>
                <input
                  onChange={(e) => {
                    setFilter({ ...filter, keyword: e.target.value });
                  }}
                  value={filter.keyword}
                  className={`w-full px-3 text-sm  md:py-4 py-2 border-2 border-gray-400 rounded-lg`}
                  type={`text`}
                  placeholder={"Search For Icon"}
                />
              </div>
              <div className={`ml-3 flex items-center gap-3`}>
                {/* <select
                  className={`hidden md:block`}
                  onChange={(e) => {
                    setFilter({ ...filter, sort: e.target.value });
                  }}
                >
                  <option selected value="">
                    Sort By
                  </option>
                  <option value="asc">Asc</option>
                  <option value="desc">Desc</option>
                </select> */}
                <div className={`flex items-center gap-3 ml-3`}>
                  <button
                    onClick={() => {
                      setFilterModal(true);
                    }}
                    className={`outline outline-1 outline-gray-400 rounded-full px-2 py-1 md:hidden hover:outline-primary hover:bg-primary hover:text-white active:outline-primary active:bg-primary active:text-white`}
                  >
                    <Filter className={`w-5 h-5`} />
                  </button>
                  <button
                    onClick={() => {
                      setSortModal(true);
                    }}
                    className={`outline outline-1 outline-gray-400 rounded-full px-2 py-1 hover:outline-primary hover:bg-primary hover:text-white active:outline-primary active:bg-primary active:text-white`}
                  >
                    <Sort className={`w-5 h-5`} />
                  </button>
                  <SortModal
                    open={sortModal}
                    onClose={function (): void {
                      setSortModal(false);
                    }}
                    onSubmit={function (_args: string): void {
                      setFilter({ ...filter, sort: _args });
                      setSortModal(false);
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Item List */}
            <div
              className={`grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2 md:gap-8 md:pt-10`}
            >
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
          </div>
        </div>
      </div>
      <FilterModal
        open={filterModal}
        onClose={function (): void {
          setFilterModal(false);
        }}
        onSubmit={function (_args: string): void {
          setFilterModal(false);
        }}
      />
    </div>
  );
}
