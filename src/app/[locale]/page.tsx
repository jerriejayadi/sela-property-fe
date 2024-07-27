import AboutUs from "@/components/Layout/AboutUs";
import ContactUs from "@/components/Layout/ContactUs";
import HotListing from "@/components/Layout/HotListing";
import LandingPage from "@/components/Layout/LandingPage";
import Newsletter from "@/components/Layout/Newsletter";
import SearchHome from "@/components/Layout/SearchHome";
import Carousel from "@/components/Organism/LandingPageCarousel";
import { SearchNormal1 } from "iconsax-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex relative min-w-screen min-h-screen flex-col items-center justify-between  text-white">
      <section className={`relative`}>
        <section className={``}>
          <LandingPage />
        </section>
        <section
          className={`max-w-[720px] bg-[#DED8D3] rounded-lg  absolute mx-auto -bottom-4 w-full left-0 right-0 shadow-md`}
        >
          <SearchHome />
        </section>
      </section>

      <section className={`w-screen`}>
        <AboutUs />
      </section>

      <section className={`w-full`}>
        <Image
          className={`w-full object-cover min-h-[250px]`}
          alt={``}
          src={`/images/fullwidthimage.png`}
          width={1920}
          height={1920}
        />
      </section>
      <section className={`w-full`}>
        <HotListing />
      </section>
      {/* <section className={`w-full`}>
        <ContactUs />
      </section> */}
      <section className={`w-full`}>
        <Newsletter />
      </section>
    </main>
  );
}
