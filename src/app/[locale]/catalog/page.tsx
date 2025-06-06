"use client";

import Increment from "@/components/Molecules/Increment";
import FilterModal from "@/components/Organism/FilterModal";
import ItemsCard from "@/components/Organism/ItemsCard";
import ItemsCardLoading from "@/components/Organism/ItemsCard/loading";
import SortModal from "@/components/Organism/SortModal";
import { LOCATION_LIST } from "@/lib/variable";
import { getCurrencyList } from "@/service/currency";
import { getPropertyList } from "@/service/property";
import { PropertyListProps } from "@/types/property/list";
import { currencyFormat, useDebounce } from "@/utils/general";
import { mockUpList } from "@/utils/mockUpData";
import { useRequest } from "ahooks";
import {
  AddCircle,
  ArrowLeft2,
  ArrowRight2,
  Check,
  Filter,
  MinusCirlce,
  Sort,
} from "iconsax-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export interface FilterProps {
  keyword: string;
  sort: string;
  availability: string;
  propertyType: string;
  address: string;
  lowerPrice: string | number;
  higherPrice: string | number;
  minArea: string | number;
  maxArea: string | number;
  bedRoom: string | number;
  bathRoom: string | number;
  facilities: string[];
  limit: number;
  page: number;
  sellingType: string;
  currency: string;
}

export default function Catalog() {
  const t = useTranslations("catalog");
  const router = useRouter();
  const searchParams = useSearchParams();

  const [sortModal, setSortModal] = useState<boolean>(false);
  const [filterModal, setFilterModal] = useState<boolean>(false);
  const [searched, setSearched] = useState<boolean>(false);
  const [data, setData] = useState<PropertyListProps>();

  // filter state
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
    [currency, setCurrency] = useState<string>("IDR"),
    [page, setPage] = useState<number>(1);

  const [filter, setFilter] = useState<FilterProps>({
    keyword: searchParams.get(`keyword`)!,
    sort: "",
    availability: searchParams.get(`availability`)!,
    propertyType: "",
    address: "",
    lowerPrice: "0",
    higherPrice: "0",
    minArea: "0",
    maxArea: "0",
    bedRoom: "0",
    bathRoom: "0",
    facilities: [],
    limit: 9,
    page: page,
    sellingType: searchParams.get(`sellingType`)!,
    currency: "IDR",
  });

  enum EPropertyType {
    VILLA = "VILLA",
    HOUSE = "HOUSE",
    APARTMENT = "APARTMENT",
    LAND = "LAND",
    HOTEL = "HOTEL",
  }

  const SellingType = [
    {
      name: "BUY",
      value: "SELL",
    },
    {
      name: "RENT",
      value: "RENT",
    },
  ];

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
        filterTemp[key] = "0";
      }
    }
    setFilter(filterTemp);
  };

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
      limit: 9,
      page: 1,
      sellingType: sellingType,
      currency: currency,
    });
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
      limit: 9,
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
  };

  const search = useDebounce(filter.address, 1000);

  const { runAsync, error, loading } = useRequest(getPropertyList);
  const { run: getCurrency, data: currencyList } = useRequest(getCurrencyList);

  useEffect(() => {
    runAsync(filter).then((res) => setData(res));
  }, [filter]);

  // const handleScroll = () => {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop !==
  //       document.documentElement.offsetHeight ||
  //     loading
  //   ) {
  //     return;
  //   }
  //   setFilter((prev) => ({ ...prev, page: prev.page + 1 })); // Load next page
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [loading]);

  return (
    <div className="relative">
      <div className={`relative `}>
        <div className={`bg-catalog_bg_image w-full  bg-cover`}>
          <div className="bg-black bg-opacity-60 h-full w-full px-8 py-20 md:px-20 md:py-40">
            <div
              className={`text-2xl md:text-6xl font-montserrat font-bold tracking-widest w-full md:w-[70%]`}
            >
              {t("heading").toUpperCase()}
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
                <div className={`flex items-center`}>
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
                  <label className={`ml-2`} htmlFor={`available`}>
                    All
                  </label>
                </div>
                <div className={`flex items-center`}>
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
                    checked={availability === "false"}
                    onChange={() => {
                      setAvailability("false");
                    }}
                  />
                  <label className={`ml-2`} htmlFor={`sold`}>
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

                {SellingType.map((rows, index) => (
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
                  <select
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                    className={`w-full border border-gray-500 rounded-lg px-3 py-3`}
                  >
                    <option value={``}>All Location</option>
                    {LOCATION_LIST.map((rows, index) => (
                      <option key={index} value={rows}>
                        {rows}
                      </option>
                    ))}
                  </select>
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
                    handleSubmitFilter();
                  }}
                  className={`bg-primary flex justify-center flex-grow  text-white py-4  active:bg-opacity-80`}
                >
                  Apply Filter
                </button>
              </div>
            </div>

            {/* <div>
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
                    value={bedRoom as number}
                    onSubtract={() => {
                      if (bedRoom <= 0) {
                        setBedRoom(0);
                      } else {
                        setBedRoom(bedRoom - 1);
                      }
                    }}
                    onAdd={() => {
                      setBedRoom(bedRoom + 1);
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
                    value={bathRoom as number}
                    onSubtract={() => {
                      if (bathRoom <= 0) {
                        setBathroom(0);
                      } else {
                        setBathroom(bathRoom - 1);
                      }
                    }}
                    onAdd={() => {
                      setBathroom(bathRoom + 1);
                    }}
                  />
                </div>
              </div>
            </div> */}
            <div className={`flex flex-col`}>
              {/* <div className={`my-3 font-semibold`}>Other Facilities</div>
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
              </div> */}
            </div>
          </div>

          {/* catalog */}
          <div
            className={`md:px-8 flex flex-col gap-3 md:gap-5 divide-y-2 w-full`}
          >
            {/* search bar */}
            <div className={`flex divide-x-2 items-center `}>
              <div className={`w-full pr-3`}>
                <input
                  onChange={(e) => {
                    setKeyword(e.target.value);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      setFilter({ ...filter, keyword: e.currentTarget.value });
                    }
                  }}
                  onBlur={(e) => {
                    setFilter({ ...filter, keyword: e.currentTarget.value });
                  }}
                  value={keyword}
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

            {loading ? (
              <div
                className={`grid grid-cols-2 pt-4 lg:grid-cols-3 gap-x-4 gap-y-2 md:gap-8 md:pt-10`}
              >
                {[0, 1, 2].map((rows, index) => (
                  <ItemsCardLoading key={index} />
                ))}{" "}
              </div>
            ) : error ? (
              <div
                className={`w-full flex flex-col items-center justify-center pt-4 md:pt-10 gap-4`}
              >
                <div className={`text-xl md:text-5xl`}>We are sorry :&#40;</div>
                <div className={`text-sm md:text-xl text-center`}>
                  The property that you are looking for is not available
                </div>
              </div>
            ) : (
              <div>
                <div
                  className={`grid grid-cols-2 pt-4 lg:grid-cols-3 gap-x-4 gap-y-2 md:gap-8 md:pt-10`}
                >
                  {data?.result.items.map((rows, index) => (
                    <ItemsCard
                      key={index}
                      images={rows.images
                        .slice(0, 3)
                        .map((images) => images.url)}
                      currency={rows.currencyId}
                      price={rows.price}
                      propertyName={rows.title}
                      landSize={rows.landSize}
                      buildSize={rows.buildingSize}
                      location={
                        rows.address.regency + ", " + rows.address.province
                      }
                      bathRoom={rows.bathRoomsAmount}
                      bedRoom={rows.bedRoomsAmount}
                      onClick={() => {
                        router.push(`/${rows.id}`);
                      }}
                    />
                  ))}
                </div>
                <div className="flex items-center justify-center gap-4 mt-8">
                  <button
                    className="disabled:text-gray-300"
                    disabled={page < 1}
                    onClick={() => {
                      setPage(page - 1);
                      setFilter((prev) => ({ ...prev, page: prev.page - 1 }));
                    }}
                  >
                    <ArrowLeft2 />
                  </button>
                  <input
                    value={page}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.currentTarget.blur();
                      }
                    }}
                    onBlur={(e) => {
                      if(Number(e.target.value)<1){
                        setFilter((prev) => ({
                          ...prev,
                          page: 1,
                        }));
                        setPage(1)
                      } else {
                        setFilter((prev) => ({
                          ...prev,
                          page: Number(e.target.value),
                        }));
                        setPage(Number(e.target.value))
                      }
                    }}
                    onChange={(e) => {
                      if (
                        Number(e.target.value) > data!.result.meta.totalPages
                      ) {
                        setPage(data!.result.meta.totalPages);
                      } else {
                        setPage(Number(e.target.value.replace(/\D/g,'')));
                      }
                    }}
                    className="border border-gray-200 rounded-lg p-2 size-10 flex items-center justify-center"
                    placeholder="1"
                  />
                  <p>of</p>
                  <p>{data?.result.meta.totalPages}</p>
                  <button
                    className="disabled:text-gray-300"
                    disabled={page === data?.result.meta.totalPages}
                    onClick={() => {
                      setPage(page + 1);
                      setFilter((prev) => ({ ...prev, page: prev.page + 1 }));
                    }}
                  >
                    <ArrowRight2 />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <FilterModal
        filter={filter}
        setFilter={setFilter}
        SellingType={SellingType}
        currencyList={currencyList!}
        open={filterModal}
        onClose={function (): void {
          setFilterModal(false);
        }}
        onSubmit={function (_args: FilterProps): void {
          setFilter(_args);
        }}
      />
    </div>
  );
}
