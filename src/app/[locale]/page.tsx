import AboutUs from "@/components/Layout/AboutUs";
import ContactUs from "@/components/Layout/ContactUs";
import HotListing from "@/components/Layout/HotListing";
import LandingPage from "@/components/Layout/LandingPage";
import Newsletter from "@/components/Layout/Newsletter";
import SearchHome from "@/components/Layout/SearchHome";
import Carousel from "@/components/Organism/LandingPageCarousel";
import { IMAGE_DIVIDER } from "@/lib/variable";
import { SearchNormal1 } from "iconsax-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex relative max-w-[1920px] min-h-screen flex-col items-center justify-between  text-white">
      <section className={`relative`}>
        <section className={`w-full max-w-[1920px]`}>
          <LandingPage />
        </section>
        <section
          className={`max-w-[720px] bg-[#DED8D3] rounded-lg  absolute mx-auto -bottom-4 w-full left-0 right-0 shadow-md`}
        >
          <SearchHome />
        </section>
      </section>

      <section className={`w-full`}>
        <AboutUs />
      </section>

      <section className={`w-full`}>
        <div className={`grid grid-rows-2 grid-flow-col w-fit h-[250px] md:h-[500px]`}>
          {IMAGE_DIVIDER.map((rows, index) => (
            <div
              key={index}
              className={`max-w-[550px] shrink-0 ${index % 3 === 0 && "row-span-2"}`}
            >
              <Image
                key={index}
                className={`w-full h-full object-cover `}
                alt={``}
                src={rows}
                width={1200}
                height={800}
              />
            </div>
          ))}
        </div>
        {/* <Image
          className={`w-full object-cover min-h-[250px]`}
          alt={``}
          src={`/images/fullwidthimage.png`}
          width={1920}
          height={1920}
        /> */}
      </section>
      <section className={`w-full`}>
        <HotListing />
      </section>
      {/* <section className={`w-full`}>
        <ContactUs />
      </section> */}
      <section id={`sell`} className={`w-full`}>
        <Newsletter />
      </section>
    </main>
  );
}
