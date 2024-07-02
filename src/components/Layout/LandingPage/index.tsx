import Carousel from "@/components/Organism/LandingPageCarousel";
import { useTranslations } from "next-intl";

export default function LandingPage() {
  const t = useTranslations("landing_page");
  return (
    <div className={``}>
      <div className="relative">
        <Carousel
          className={`absolute top-0`}
          slides={[
            `/images/bg-landing-page.png`,
            `/images/background-image.jpg`,
          ]}
        />
        <div
          className={`absolute top-0 flex flex-col  justify-center h-full px-8 gap-4 md:px-20 md:gap-20 md:max-w-[70%]`}
        >
          <div
            className={`font-montserrat tracking-widest md:text-6xl max-w-[665px] text-3xl font-semibold`}
          >
            {t("title")}
          </div>
          <div className={`max-w-[900px] md:text-xl font-lato font-light`}>
            {t("desc")}
          </div>
        </div>
      </div>
    </div>
  );
}
