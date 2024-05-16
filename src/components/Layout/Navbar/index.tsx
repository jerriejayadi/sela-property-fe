"use client";

import { toTitleCase } from "@/utils/general";
import { HambergerMenu } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";

export const navigation = [
  {
    name: "catalog",
    title: "Catalog",
    url: "/catalog",
  },
  {
    name: "hot_listing",
    title: "Hot Listing",
    url: "/catalog",
  },
  {
    name: "about_us",
    title: "About Us",
    url: "/catalog",
  },
  {
    name: "faq",
    title: "F.A.Q",
    url: "/catalog",
  },
  {
    name: "contact",
    title: (
      <div className={`flex items-center gap-2`}>
        <div>
          <Image width={20} height={20} alt={``} src={`/icons/ion_call.png`} />
        </div>
        <div>(0361) 555-222</div>
      </div>
    ),
    url: "",
  },
];

export default function Navbar() {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className={`fixed top-0 py-5 px-8 md:px-20 md:py-10 flex items-center justify-between w-full z-50`}
    >
      <Link href={`/`} className={`flex items-center gap-2 md:gap-4`}>
        <Image
          className={`w-8 h-8 md:w-12 md:h-12`}
          src={"/images/sela-logo.svg"}
          alt={``}
          width={74}
          height={48}
        />

        <div className={`font-audrey md:text-2xl text-base`}>
          {"Sela Property".toUpperCase()}
        </div>
      </Link>
      <div className={`items-center gap-16 hidden md:flex`}>
        {navigation?.map((rows, index) => (
          <div key={index}>
            {rows.url.length === 0 ? (
              rows.title
            ) : (
              <Link href={rows.url}>{rows.title}</Link>
            )}
          </div>
        ))}
      </div>
      <div className="flex md:hidden">
        <HambergerMenu />
      </div>
    </div>
  );
}
