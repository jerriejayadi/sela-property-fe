import AboutUs from "@/components/Layout/AboutUs";
import ContactUs from "@/components/Layout/ContactUs";
import HotListing from "@/components/Layout/HotListing";
import LandingPage from "@/components/Layout/LandingPage";
import Newsletter from "@/components/Layout/Newsletter";
import Carousel from "@/components/Organism/LandingPageCarousel";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex relative min-w-screen min-h-screen flex-col items-center justify-between  text-white">
      <section className={``}>
        <LandingPage />
      </section>
      <section className={`w-screen`}>
        <AboutUs />
      </section>
      <section className={`w-full`}>
        <Image
          className={`w-full object-cover`}
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
