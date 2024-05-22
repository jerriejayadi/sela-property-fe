"use client";

import LanguageToggle from "@/components/Molecules/LanguageToggle";
import { toTitleCase } from "@/utils/general";
import { CloseCircle, HambergerMenu } from "iconsax-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavbarMobile from "../NavbarMobile";
import { usePathname } from "next/navigation";

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
    title: <LanguageToggle />,
    url: "",
  },
];

export default function Navbar() {
  const path = usePathname();
  const paths = path.split(`/`);
  const t = useTranslations("navbar");
  const [navbarBackground, setNavbarBackground] = useState<boolean>(false);
  const [isNavbarMobile, setIsNavbarMobile] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [show, setShow] = useState<boolean>(true);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      // if scroll down hide the navbar
      setShow(false);
    } else {
      // if scroll up show the navbar
      setShow(true);
    }
    // remember current page location to use in the next move
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    // cleanup function
    window.addEventListener("scroll", () => {
      if (window.scrollY > 75) {
        setNavbarBackground(true);
      } else {
        setNavbarBackground(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className={`fixed top-0 h-fit py-5 px-8 md:px-20 md:py-8 flex items-center justify-between w-full z-50 transition-all duration-300 ${
        (navbarBackground || isNavbarMobile) &&
        "bg-black bg-opacity-80 backdrop-blur-sm"
      } `}
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
              <Link
                className={`${
                  paths.some((rows2) => rows2 === rows.name)
                    ? "text-primary underline"
                    : "text-white"
                } hover:text-primary active:text-primary`}
                href={rows.url}
              >
                {t(rows.name)}
              </Link>
            )}
          </div>
        ))}
      </div>
      <div className="flex md:hidden">
        <HambergerMenu
          className={`z-50 transition-all duration-1000 ${
            isNavbarMobile ? "hidden" : "flex"
          }`}
          onClick={() => {
            setIsNavbarMobile(true);
          }}
        />
        <CloseCircle
          className={`z-50 transition-all duration-1000 ${
            isNavbarMobile ? "flex" : "hidden"
          }`}
          onClick={() => {
            setIsNavbarMobile(false);
          }}
        />
      </div>
      <div
        onClick={() => {
          setIsNavbarMobile(false);
        }}
        className={`fixed inset-0 bg-inherit  h-screen justify-center  p-6 transition-all duration-700 ${
          isNavbarMobile
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full"
        } `}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={`mt-[75px] flex flex-col gap-4`}
        >
          {navigation.map((rows, index) => (
            <>
              {rows.url.length > 0 && (
                <Link
                  className={`hover:text-primary active:text-primary`}
                  href={rows.url}
                  key={index}
                >
                  {t(rows.name)}
                </Link>
              )}
            </>
          ))}
        </div>
      </div>
      {/* <NavbarMobile
        isOpen={isNavbarMobile}
        onClose={() => {
          setIsNavbarMobile(false);
        }}
      /> */}
    </div>
  );
}
