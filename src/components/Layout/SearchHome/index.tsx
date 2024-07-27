"use client";
import { SearchNormal1 } from "iconsax-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchHome() {
  const router = useRouter();
  const [keyword, setKeyword] = useState<string>("");
  const [sellingType, setSellingType] = useState<"RENT" | "SELL">("SELL");

  const handleSearch = () => {
    router.push(`/catalog?keyword=${keyword}&sellingType=${sellingType}`);
  };
  return (
    <>
      <div className={`w-full flex items-center text-black `}>
        <div
          onClick={() => {
            setSellingType("SELL");
          }}
          className={`w-full text-center rounded-t-lg ${
            sellingType === "SELL" ? "bg-white" : "bg-transparent"
          } py-3 cursor-pointer`}
        >
          Buy
        </div>
        <div
          onClick={() => {
            setSellingType("RENT");
          }}
          className={`w-full text-center ${
            sellingType === "RENT" ? "bg-white" : "bg-transparent"
          }  py-3 cursor-pointer `}
        >
          Rent
        </div>
      </div>
      <div className={`px-10 py-6 bg-white text-black `}>
        <div
          className={`border-b border-black border-opacity-20 w-full focus:outline-none flex items-center pr-4`}
        >
          <input
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
            value={keyword}
            placeholder={"Search for Property"}
            type={`text`}
            className={`  w-full px-3 py-2 focus:outline-none`}
          />
          <button
            onClick={() => {
              handleSearch();
            }}
          >
            <SearchNormal1 className={`text-gray-500`} />
          </button>
        </div>
      </div>
    </>
  );
}
