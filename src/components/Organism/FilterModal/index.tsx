"use client";
import { Dispatch, SetStateAction, useState } from "react";
import Image from "next/image";
import { FilterProps } from "@/app/[locale]/catalog/page";
import Increment from "@/components/Molecules/Increment";
import { currencyFormat } from "@/utils/general";
import { useSearchParams } from "next/navigation";
import { CurrencyListResponseProps } from "@/types/currency/list";

interface SortModalProps {
  value?: string;
  open: boolean;
  onClose: () => void;
  onSubmit: (_args: FilterProps) => void;
  SellingType: any;
  currencyList: CurrencyListResponseProps;
  filter: FilterProps;
  setFilter: Dispatch<SetStateAction<FilterProps>>;
}

export default function FilterModal({
  filter,
  setFilter,
  value,
  open,
  onClose,
  onSubmit,
  currencyList,
  SellingType,
}: SortModalProps) {
  const searchParams = useSearchParams();
  const [selected, setSelected] = useState<string>(value ?? "");
  const [searched, setSearched] = useState<boolean>(false);

  const [keyword, setKeyword] = useState<string>(
      searchParams.get("keyword") ?? ""
    ),
    [availability, setAvailability] = useState<"true" | "false" | "">(
      (searchParams.get("availability") as "true" | "false" | "") ?? ""
    ),
    [propertyType, setPropertyType] = useState<string>(""),
    [lowerPrice, setLowerPrice] = useState<string>(""),
    [higherPrice, setHigherPrice] = useState<string>(""),
    [address, setAddress] = useState<string>(""),
    [tags, setTags] = useState<string[]>(),
    [bathRoom, setBathroom] = useState<number>(0),
    [sellingType, setSellingType] = useState<string>(""),
    [bedRoom, setBedRoom] = useState<number>(0),
    [currency, setCurrency] = useState<string>("IDR");

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

  const handleSubmitFilter = () => {
    setFilter({
      keyword: keyword,
      sort: "",
      availability: availability ? availability.toString() : "",
      propertyType: propertyType,
      address: address,
      lowerPrice: Number(lowerPrice.replaceAll(",", "")),
      higherPrice: Number(higherPrice.replaceAll(",", "")),
      minArea: 0,
      maxArea: 0,
      bedRoom: Number(bedRoom),
      bathRoom: Number(bathRoom),
      facilities: [],
      limit: 100,
      page: 1,
      sellingType: sellingType,
      currency: currency,
    });
    onClose();
  };
  const resetFilter = () => {
    setFilter({
      keyword: "",
      sort: "",
      availability: "",
      propertyType: "",
      address: "",
      lowerPrice: 0,
      higherPrice: 0,
      minArea: 0,
      maxArea: 0,
      bedRoom: 0,
      bathRoom: 0,
      facilities: [],
      limit: 100,
      page: 1,
      sellingType: "",
      currency: "",
    });
    setKeyword("");
    setAvailability("");
    setPropertyType("");

    setLowerPrice("");
    setHigherPrice("");
    setAddress("");
    setTags([]);
    setBathroom(0);
    setBedRoom(0);
    setSellingType("");
    setCurrency("");
    onClose()
  };

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
          <div className={`py-3`}>
            <div className={`py-3 font-semibold`}>Availability</div>
            <div className={`flex flex-col gap-3 text-sm`}>
              {/* <div className={`flex items-center`}>
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
                </div> */}
              <div
                className={`flex flex-row-reverse items-center justify-between`}
              >
                <input
                  className={`accent-primary w-5 h-5`}
                  type="radio"
                  id={`available`}
                  value={`available`}
                  checked={availability === ""}
                  onChange={() => {
                    setAvailability("");
                  }}
                />
                <label className={`text-lg`} htmlFor={`available`}>
                  All
                </label>
              </div>
              <div
                className={`flex flex-row-reverse items-center justify-between`}
              >
                <input
                  className={`accent-primary w-5 h-5`}
                  type="radio"
                  id={`available`}
                  value={`available`}
                  checked={availability === "true"}
                  onChange={() => {
                    setAvailability("true");
                  }}
                />
                <label className={`text-lg`} htmlFor={`available`}>
                  Available
                </label>
              </div>
              <div
                className={`flex flex-row-reverse items-center justify-between`}
              >
                {" "}
                <input
                  className={`accent-primary w-5 h-5`}
                  type="radio"
                  id={`sold`}
                  checked={availability === "false"}
                  onChange={() => {
                    setAvailability("false");
                  }}
                />
                <label className={`text-lg`} htmlFor={`sold`}>
                  Sold
                </label>
              </div>
            </div>
          </div>
          <div className={`mb-2`}>
            <div className={`font-semibold my-3`}>Selling Type</div>
            <div
              className={`flex items-center justify-start gap-2 mb-3 flex-wrap text-sm`}
            >
              <div
                onClick={() => {
                  setSellingType("");
                }}
                className={`px-3 py-2 cursor-pointer ${
                  sellingType === ""
                    ? "bg-primary text-white"
                    : "bg-[#F9F9F9] text-black"
                }`}
              >
                ALL
              </div>

              {SellingType.map((rows: any, index: number) => (
                <div
                  key={index}
                  onClick={() => {
                    setSellingType(rows.value);
                  }}
                  className={`px-3 py-2 cursor-pointer ${
                    sellingType === rows.value
                      ? "bg-primary text-white"
                      : "bg-[#F9F9F9] text-black"
                  }`}
                >
                  {rows.name}
                </div>
              ))}
            </div>
          </div>
          <div className={`mb-2`}>
            <div className={`font-semibold my-3`}>Property Type</div>
            <div
              className={`flex items-center justify-start gap-2 mb-3 flex-wrap text-sm`}
            >
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
              <div className={`relative flex w-full`}>
                <input
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value);
                    setSearched(true);
                  }}
                  placeholder={`Location`}
                  type={`text`}
                  className={`w-full border border-gray-500 rounded-lg px-3 py-3`}
                />
                {/* <div
                    className={`absolute  flex-col gap-3 top-10 py-3 px-5 bg-white border border-gray-500 shadow-sm w-full max-h-[100px] overflow-auto ${
                      searched ? "flex" : "hidden"
                    }`}
                  >
                    <div
                      onClick={() => {
                        setAddress("Gianyar");
                        setSearched(false);
                      }}
                      className={`w-full`}
                    >
                      Gianyar
                    </div>
                    <div
                      onClick={() => {
                        setAddress("Canggu");
                        setSearched(false);
                      }}
                      className={`w-full`}
                    >
                      Canggu
                    </div>
                    <div
                      onClick={() => {
                        setAddress("Kuta");
                        setSearched(false);
                      }}
                      className={`w-full`}
                    >
                      Kuta
                    </div>
                  </div> */}
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
            <div className={`my-3 font-semibold`}>
              Price{" "}
              <select
                onChange={(e) => {
                  setCurrency(e.target.value);
                }}
              >
                {currencyList?.result.map((rows, index) => (
                  <option key={`currency-${index}`} value={rows.currencyId}>
                    {rows.currencyId}
                  </option>
                ))}
              </select>
            </div>
            <div></div>
            <div className={`flex flex-col items-start gap-1 mb-3`}>
              <input
                onChange={(e) => {
                  setLowerPrice(currencyFormat(e.target.value));
                }}
                value={lowerPrice}
                placeholder={`${currency} MIN`}
                type="text"
                className={`w-full px-4 py-3  border border-gray-400 bg-white rounded-lg`}
              />

              {/* <select className={`w-full bg-[#F9F9F9] p-2 text-[#787878]`}>
                  <option>Min Price</option>
                </select> */}
              {/* <div className={`h-[1px] w-10 bg-black`} /> */}

              <input
                onChange={(e) => {
                  setHigherPrice(currencyFormat(e.target.value));
                }}
                value={higherPrice}
                placeholder={`${currency} MAX`}
                type="text"
                className={`w-full px-4 py-3  border border-gray-400 bg-white rounded-lg mt-2`}
              />

              {/* <select className={`w-full bg-[#F9F9F9] p-2 text-[#787878]`}>
                  <option>Max Price</option>
                </select> */}
            </div>
          </div>
          <div>
            <div
              className={`flex flex-shrink-1 items-center gap-2 my-5 w-full`}
            >
              <button
                onClick={() => {
                  handleSubmitFilter();
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
