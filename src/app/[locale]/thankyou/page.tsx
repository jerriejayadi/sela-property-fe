"use client";
import SuggestedProperty from "@/components/Layout/Suggested";
import WhatsappCTA from "@/components/Organism/WhatsappCTA";
import { useEffect } from "react";

export default function ThankYou() {
  useEffect(() => {
    window.open(
      "https://wa.me/+6281234567890",
      "_blank",
      "noopener,noreferrer"
    );
  }, []);
  return (
    <main>
      <div className={`bg-catalog_bg_image w-full  bg-cover`}>
        <div className="flex flex-col items-center justify-center text-center bg-black bg-opacity-60 min-h-screen w-full px-8 py-20 md:px-20 md:py-40">
          <div
            className={`text-2xl md:text-6xl font-montserrat font-bold tracking-widest`}
          >
            {"Thank you for trusting us".toUpperCase()}
          </div>
          <div
            className={`mt-8 font-lato font-light text-2xl px-24 leading-10`}
          >
            It’s our privilege to work with our beloved clients. Please let us
            know if we can do anything else for you!
          </div>
          <div className={`mt-40`}>
            <div className={`text-[32px] font-lato font-bold`}>
              Get the Help you need, Contact Us!
            </div>
            <div>
              <WhatsappCTA className="bg-[#60D669]" />
            </div>
          </div>
        </div>
      </div>
      <div className={`bg-[#F3F3F3] px-20 py-10`}>
        <SuggestedProperty />
      </div>
    </main>
  );
}
