import Carousel from "@/components/Organism/LandingPageCarousel";
import { useTranslations } from "next-intl";

export default function LandingPage() {
  const t = useTranslations("landing_page");
  return (
    <div className={``}>
      <div className="relative">
        <Carousel
          className={`absolute top-0 max-w-[1920px]`}
          slides={[`/images/image-1-sela.jpeg`, `/images/image-2-sela.jpeg`]}
        />
        <div className={`absolute top-0 bg-black h-screen`} />
        <div
          className={`absolute top-0 flex flex-col  justify-center h-full px-8 gap-4 md:px-20 md:gap-20 md:max-w-[70%]`}
        >
          <div
            className={`font-montserrat tracking-widest md:text-5xl max-w-[665px] text-3xl font-semibold`}
          >
            {t("title").toUpperCase()}
          </div>
          <div className={`max-w-[900px] md:text-xl font-lato font-light`}>
            {t("desc")}
          </div>
        </div>
      </div>
    </div>
  );
}
