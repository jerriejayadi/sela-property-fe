"use client";
import { useState } from "react";
import Image from "next/image";
import { FilterProps } from "@/app/[locale]/catalog/page";
import Increment from "@/components/Molecules/Increment";
import { currencyFormat } from "@/utils/general";

interface SortModalProps {
  value?: string;
  open: boolean;
  onClose: () => void;
  onSubmit: (_args: FilterProps) => void;
}

export default function FilterModal({
  value,
  open,
  onClose,
  onSubmit,
}: SortModalProps) {
  const [selected, setSelected] = useState<string>(value ?? "");
  const [searched, setSearched] = useState<boolean>(false);

  const [keyword, setKeyword] = useState<string>(""),
    [availability, setAvailability] = useState<"true" | "false" | "">(""),
    [propertyType, setPropertyType] = useState<string>(""),
    [location, setLocation] = useState<string>(""),
    [minPrice, setMinPrice] = useState<string>(""),
    [maxPrice, setMaxPrice] = useState<string>(""),
    [address, setAddress] = useState<string>(""),
    [tags, setTags] = useState<string[]>(),
    [bathRoom, setBathroom] = useState<number>(0),
    [sellingType, setSellingType] = useState<string>(""),
    [bedRoom, setBedRoom] = useState<number>(0);

  const [filter, setFilter] = useState<FilterProps>({
    currency: "",
    keyword: "",
    sort: "",
    availability: "",
    propertyType: "",
    location: "",
    minPrice: "0",
    maxPrice: "0",
    minArea: "0",
    maxArea: "0",
    bedRoom: "0",
    bathRoom: "0",
    facilities: [],
    limit: 0,
    page: 0,
    sellingType: "",
  });

  enum EPropertyType {
    VILLA = "VILLA",
    HOUSE = "HOUSE",
    APARTMENT = "APARTMENT",
    LAND = "LAND",
    HOTEL = "HOTEL",
  }

  const PropertyType = [
    {
      name: "Apartment",
      value: EPropertyType.APARTMENT,
    },
    {
      name: "House",
      value: EPropertyType.HOUSE,
    },
    {
      name: "Hotel",
      value: EPropertyType.HOTEL,
    },
    {
      name: "Villa",
      value: EPropertyType.VILLA,
    },
    {
      name: "Land",
      value: EPropertyType.LAND,
    },
  ];

  // const handlePropertyType = (value: string, action: string) => {
  //   let propertyTypeTemp = filter.propertyType;
  //   if (action === "add") {
  //     propertyTypeTemp.push(value);
  //   } else {
  //     propertyTypeTemp.splice(propertyTypeTemp.indexOf(value), 1);
  //   }
  //   console.log(propertyTypeTemp);
  //   setFilter({ ...filter, propertyType: propertyTypeTemp });
  // };

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
      filterTemp[key] = (Number(filterTemp[key]) + 1).toString();
    } else {
      if (filterTemp[key] !== 0) {
        filterTemp[key] = (Number(filterTemp[key]) - 1).toString();
      } else {
        filterTemp[key] = 0;
      }
    }
    setFilter(filterTemp);
  };
  const resetFilter = () => {
    setFilter({
      currency: "",
      keyword: "",
      sort: "",
      availability: "",
      propertyType: "",
      location: "",
      minPrice: "0",
      maxPrice: "0",
      minArea: "0",
      maxArea: "0",
      bedRoom: "0",
      bathRoom: "0",
      facilities: [],
      limit: 0,
      page: 0,
      sellingType: "",
    });
  };
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0  h-screen justify-center z-40  overflow-y-auto ${
        open ? " bg-black bg-opacity-50 visible " : "bg-transparent invisible"
      } transition-all duration-500`}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={`fixed  w-full bottom-0 bg-white rounded-t-xl text-black p-5 transition-all duration-500 ${
          open ? "-translate-y-0  " : "translate-y-full "
        }`}
      >
        {/* Header */}
        <div className={`flex items-center justify-between pb-4`}>
          <div className={`font-lato font-bold text-2xl`}>Filter</div>
          <button
            onClick={() => {
              resetFilter();
            }}
            className={`text-primary active:underline`}
          >
            Reset
          </button>
        </div>
        {/* content */}
        <div
          className={`  divide-y-2  font-lato overflow-scroll max-h-[450px]`}
        >
          <div className={`pb-4`}>
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
              {/* {PropertyType.map((rows, index) => (
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
                ))} */}
              {PropertyType.map((rows, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setPropertyType(rows.value);
                  }}
                  className={`px-3 py-2 cursor-pointer ${
                    propertyType === rows.value
                      ? "bg-primary text-white"
                      : "bg-[#F9F9F9] text-black"
                  }`}
                >
                  {rows.name}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className={`my-3 font-semibold`}>Location</div>
            <div className={`flex gap-3 max-w-full flex-wrap mb-3 text-sm`}>
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
          </div>
          <div>
            <div className={`my-3 font-semibold`}>Price</div>
            <div className={`flex items-center gap-1 mb-3`}>
              <div>Rp</div>
              <input
                onChange={(e) => {
                  setFilter({
                    ...filter,
                    minPrice: currencyFormat(e.target.value),
                  });
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
                  setFilter({
                    ...filter,
                    maxPrice: currencyFormat(e.target.value),
                  });
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
              <input
                placeholder={`Min Area`}
                className={`w-full bg-[#F9F9F9] p-2 placeholder:text-[#787878]`}
              />
              {/* <select className={`w-full bg-[#F9F9F9] p-2 text-[#787878]`}>
                <option>Min Area</option>
              </select> */}
              <div className={`h-[1px] w-10 bg-black `} />
              <input
                onChange={(e) => {
                  setFilter({ ...filter, maxArea: e.target.value });
                }}
                placeholder={`Max Area`}
                className={`w-full bg-[#F9F9F9] p-2 placeholder:text-[#787878]`}
              />
              {/* <select className={`w-full bg-[#F9F9F9] p-2 text-[#787878]`}>
                <option>Max Area</option>
              </select> */}
            </div>
          </div>
          <div>
            <div className={`my-3 font-semibold`}>Room Area</div>
            <div className={`flex flex-col gap-4 mb-4`}>
              <div className="flex items-center justify-between">
                <div className={`flex items-center`}>
                  <Image
                    className={`w-6 h-6`}
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
                    className={`w-6 h-6`}
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
              className={`flex flex-shrink-1 items-center gap-2 my-5 w-full`}
            >
              <button
                onClick={() => {
                  onSubmit(filter);
                }}
                className={`bg-primary flex justify-center flex-grow  text-white py-4  active:bg-opacity-80`}
              >
                Apply Filter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
