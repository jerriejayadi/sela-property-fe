import Carousel from "@/components/Organism/LandingPageCarousel";

export default function LandingPage() {
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
          <div className={`font-josefin_sans md:text-6xl max-w-[665px] text-4xl font-semibold`}>
            The Best Way to Find Your Perfect Home for Future!
          </div>
          <div className={`max-w-[900px] md:text-xl`}>
            Lorem ipsum dolor sit amet consectetur. Lacus aliquet viverra lectus
            semper nisl ut id lacus. Non urna enim urna lacus sed phasellus
            adipiscing nibh tempus. Vitae lacinia enim morbi dui aliquam
            fringilla ipsum nec. Dapibus fringilla sit id a elit volutpat.
          </div>
        </div>
      </div>
    </div>
  );
}
