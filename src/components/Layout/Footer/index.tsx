"use client";

import Image from "next/image";
import { navigation } from "../Navbar";
import Link from "next/link";
import { Facebook, Instagram } from "iconsax-react";

export default function Footer() {
  return (
    <div className={`bg-[#0D0D0D] px-8 md:px-32 pt-10 pb-8 flex flex-col gap-10`}>
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
            <div className={`flex w-full items-center gap-10`}>
              <div className={`opacity-60`}>Phone</div>
              <div>081242424543</div>
            </div>
            <div className={`flex w-full items-center gap-10`}>
              <div className={`opacity-60`}>Email</div>
              <div>dandyhosea4@gmail.com</div>
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
                <Facebook /> <Instagram />
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
