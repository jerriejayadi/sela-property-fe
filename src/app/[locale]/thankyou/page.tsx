"use client";
import SuggestedProperty from "@/components/Layout/Suggested";
import WhatsappCTA from "@/components/Organism/WhatsappCTA";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

export default function ThankYou() {
  const t = useTranslations("thank_you");
  // useEffect(() => {
  //   window.open(
  //     "https://wa.me/+6281234567890",
  //     "_blank",
  //     "noopener,noreferrer"
  //   );
  // }, []);
  return (
    <main>
      <div className={`bg-catalog_bg_image w-full  bg-cover`}>
        <div className="flex flex-col items-center justify-center text-center bg-black bg-opacity-60 min-h-screen w-full px-8 py-20 md:px-20 md:py-40">
          <div
            className={`text-2xl md:text-6xl font-montserrat font-bold tracking-widest`}
          >
            {t("heading").toUpperCase()}
          </div>
          <div
            className={`mt-4 md:mt-8 font-lato font-light md:text-2xl md:px-24 leading-7 md:leading-10`}
          >
            {t("desc")}
          </div>
          <div className={`mt-5 md:mt-40`}>
            <div className={`text-xl md:text-[32px] font-lato font-bold`}>
              Get the Help you need, Contact Us!
            </div>
            <div className={`mt-4`}>
              <WhatsappCTA className="bg-[#60D669]" />
            </div>
          </div>
        </div>
      </div>
      <div className={`bg-[#F3F3F3] p-5 md:px-20 md:py-10`}>
        <SuggestedProperty />
      </div>
    </main>
  );
}
