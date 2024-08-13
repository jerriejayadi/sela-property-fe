"use client";

import Image from "next/image";
import { navigation } from "../Navbar";
import Link from "next/link";
import { Facebook, Instagram, Whatsapp } from "iconsax-react";
import { EMAIL, PHONE_NUMBER } from "@/lib/variable";

export default function Footer() {
  return (
    <div
      className={`bg-[#0D0D0D] px-8 md:px-32 pt-10 pb-8 flex flex-col gap-10`}
    >
      <div className={`flex flex-col md:flex-row items-start justify-between`}>
        <div className={`flex flex-col gap-6`}>
          <div className={`flex items-center gap-4`}>
            <Image
              className={`w-12 h-12`}
              alt={``}
              src={`/images/sela-logo.svg`}
              width={74}
              height={48}
            />
            <div className={`font-audrey text-2xl`}>SELA PROPERTY</div>
          </div>
          <div className={`font-semibold`}>Reach Us</div>
          <div className={`flex flex-col `}>
            <div className={`flex w-full items-center gap-4 md:gap-10`}>
              <div className={`opacity-60`}>
                <Whatsapp />
              </div>
              <div>{PHONE_NUMBER}</div>
            </div>
            <div className={`flex w-full items-center gap-4 md:gap-10`}>
              <div className={`opacity-60`}>
                <svg
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-6 "
                >
                  <path
                    d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>{EMAIL}</div>
            </div>
          </div>
        </div>
        <div className={`mt-5`}>
          <div className={`flex flex-col md:flex-row w-full gap-1 md:gap-10 `}>
            {navigation
              .filter((rows) => rows.url.length > 0)
              .map((rows, index) => (
                <div key={index}>
                  {rows.url.length > 0 && (
                    <Link className={`w-full`} href={rows.url}>
                      {rows.title}
                    </Link>
                  )}
                </div>
              ))}
            <div className={`py-5 md:py-0`}>
              <div>Follow us On</div>
              <div className={`flex gap-6 mt-6`}>
                <button
                  onClick={() => {
                    window.open(
                      `https://www.instagram.com/selaproperty`,
                      "_blank"
                    );
                  }}
                >
                  <Instagram />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`mx-auto w-full text-center text-sm font-normal`}>
        Sela Property © 2024. All Right Reserved
      </div>
    </div>
  );
}
