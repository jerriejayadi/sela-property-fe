import Newsletter from "@/components/Layout/Newsletter";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutUs() {
  const t = useTranslations("about_us");
  return (
    <main className={`bg-white `}>
      {/* header */}
      <div className={`bg-catalog_bg_image w-full  bg-cover`}>
        <div className="bg-black bg-opacity-60 h-full w-full px-8 py-20 md:px-20 md:py-40">
          <div
            className={`text-2xl md:text-6xl font-montserrat font-bold tracking-widest`}
          >
            {"About Sela Property".toUpperCase()}
          </div>
        </div>
      </div>
      {/* content */}
      <div className={` text-black`}>
        {/* section 1 */}
        <div
          className={`bg-white flex md:flex-row flex-col-reverse items-center gap-10 p-5 md:p-20`}
        >
          {/* text */}
          <div className={`md:w-[55%]`}>
            <div
              className={`text-2xl md:text-5xl font-semibold font-montserrat`}
            >
              {t("1_heading")}
            </div>
            <div
              className={`font-lato text-base md:text-xl font-light text-secondary mt-10 leading-7 md:leading-9`}
            >
              {t.rich("1_desc", {
                guidelines: (chunks) => (
                  <>
                    <br />
                    <br />
                    {chunks}
                  </>
                ),
              })}
            </div>
          </div>
          {/* image */}
          <div className={`md:w-[520px]`}>
            <Image
              alt={""}
              src={`/images/about-hero.jpeg`}
              width={520}
              height={505}
            />
          </div>
        </div>

        {/* section 2 */}
        <div className={`bg-[#F3F3F3] p-5 md:p-20`}>
          {/* title */}
          <div>
            <div
              className={`text-2xl md:text-[40px] font-montserrat font-semibold`}
            >
              {t("2_heading")}
            </div>
            <div
              className={`text-secondary font-lato font-light mt-10 text-base md:text-xl leading-7 md:leading-9`}
            >
              {t("2_desc")}
            </div>
          </div>
          {/* content */}
          <div className={`flex flex-col md:flex-row shrink-0 gap-10 mt-10`}>
            <div className={` shrink-0`}>
              <Image
                alt=""
                src={`/images/Bali_Locator_Map 1.png`}
                width={765}
                height={507}
              />
            </div>
            <div>
              <div
                className={`text-base md:text-xl font-light font-lato text-secondary leading-7 md:leading-9`}
              >
                Lorem ipsum dolor sit amet consectetur. Aliquet gravida aliquam
                quis tincidunt. Hac tellus justo eu tempor. Placerat ullamcorper
                libero habitant eu diam congue ullamcorper.{" "}
              </div>
              <div
                className={`mt-10 grid grid-cols-2  md:grid-cols-2 gap-x-12 gap-y-6 md:gap-12`}
              >
                <div className={`font-josefin_sans`}>
                  <div className={`text-primary text-4xl md:text-5xl`}>
                    100+
                  </div>
                  <div
                    className={`text-[#2D2D2D] text-xl md:text-2xl font-lato font-light mt-3`}
                  >
                    Sold Properties
                  </div>
                </div>
                <div className={`font-josefin_sans`}>
                  <div className={`text-primary text-4xl md:text-5xl`}>10+</div>
                  <div
                    className={`text-[#2D2D2D] text-xl md:text-2xl font-lato font-light mt-3`}
                  >
                    Areas in Bali
                  </div>
                </div>
                <div className={`font-josefin_sans`}>
                  <div className={`text-primary text-4xl md:text-5xl`}>5+</div>
                  <div
                    className={`text-[#2D2D2D] text-xl md:text-2xl font-lato font-light mt-3`}
                  >
                    Years of experience
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
          </div>
        </div>

        {/* section 3 */}
        <div className={`p-5 md:p-20 bg-white `}>
          <div
            className={`text-2xl md:text-[40px] font-montserrat font-semibold`}
          >
            {t("3_heading")}
          </div>
          <div
            className={`font-lato font-light text-secondary text-base md:text-xl leading-7 md:leading-9 mt-3 md:mt-10`}
          >
            {t("3_desc")}
          </div>
          <div className={`flex gap-4 mt-4 w-full overflow-auto`}>
            <div className={`shrink-0`}>
              <Image
                className={`w-60 h-72 object-cover`}
                alt={``}
                src={`/images/image-8-sela.jpeg`}
                width={590}
                height={382}
              />
            </div>
            <div className={`shrink-0`}>
              <Image
                className={`w-60 h-72 object-cover`}
                alt={``}
                src={`/images/image-9-sela.jpeg`}
                width={590}
                height={393}
              />
            </div>
            <div className={`shrink-0`}>
              <Image
                className={`w-60 h-72 object-cover`}
                alt={``}
                src={`/images/image-10-sela.jpeg`}
                width={442}
                height={590}
              />
            </div>
            <div className={`shrink-0`}>
              <Image
                className={`w-[520px] h-72 object-cover`}
                alt={``}
                src={`/images/image-11-sela.jpeg`}
                width={1040}
                height={693}
              />
            </div>
          </div>
        </div>

        {/* newsletter */}
        <div className={`text-white`}>
          <Newsletter />
        </div>
      </div>
    </main>
  );
}
