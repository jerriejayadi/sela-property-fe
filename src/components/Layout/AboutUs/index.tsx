import { useTranslations } from "next-intl";

export default function AboutUs() {
  const t = useTranslations("landing_page");
  return (
    <div
      className={`flex flex-col md:flex-row items-center bg-white py-14 px-8 gap-10  md:px-28 md:py-20 md:gap-24`}
    >
      {/* About Us */}
      <div className={`md:w-1/2 flex flex-col gap-4 md:gap-10`}>
        <div
          className={`font-montserrat text-black md:text-5xl text-3xl font-semibold tracking-widest `}
        >
          {t("about_us_heading")}
        </div>
        <div
          className={`text-black md:text-xl font-light leading-7 md:leading-9`}
        >
          {t("about_us_caption")}
        </div>
      </div>
      <div
        className={`grid grid-cols-2  md:grid-cols-2 md:w-1/2 gap-x-12 gap-y-6 md:gap-12`}
      >
        <div className={`font-josefin_sans`}>
          <div className={`text-primary text-4xl md:text-5xl`}>100+</div>
          <div
            className={`text-[#2D2D2D] text-xl md:text-2xl font-lato font-light mt-3`}
          >
            {t("about_us_sold_properties")}
          </div>
        </div>
        <div className={`font-josefin_sans`}>
          <div className={`text-primary text-4xl md:text-5xl`}>10+</div>
          <div
            className={`text-[#2D2D2D] text-xl md:text-2xl font-lato font-light mt-3`}
          >
            {t("about_us_areas")}
          </div>
        </div>
        <div className={`font-josefin_sans`}>
          <div className={`text-primary text-4xl md:text-5xl`}>5+</div>
          <div
            className={`text-[#2D2D2D] text-xl md:text-2xl font-lato font-light mt-3`}
          >
            {t("about_us_years")}
          </div>
        </div>
        {/* <div className={`font-josefin_sans`}>
          <div className={`text-primary text-4xl md:text-5xl`}>120+</div>
          <div
            className={`text-[#2D2D2D] text-xl md:text-2xl font-lato font-light mt-3`}
          >
            Properties
          </div>
        </div> */}
      </div>
    </div>
  );
}
