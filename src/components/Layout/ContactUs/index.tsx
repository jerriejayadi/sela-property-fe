import { ArrowRight, ArrowRight2 } from "iconsax-react";
import Image from "next/image";

export default function ContactUs() {
  return (
    <div
      className={`flex flex-col bg-white md:px-20 md:py-16 md:flex-row items-center justify-between w-full`}
    >
      <Image
        className={`w-full md:w-[40%]`}
        alt={``}
        src={`/images/SellYourPropertyImage.png`}
        width={512}
        height={407}
      />
      <div
        className={`text-black px-6 py-3 md:p-0 w-full md:w-[50%] flex flex-col gap-5 md:gap-10`}
      >
        <div className={`text-2xl md:text-5xl font-semibold mt-5 md:mt-0`}>Sell your property Faster</div>
        <div className={`md:text-xl font-light`}>
          Sela Property strive to ensure you get the best possible result. Our
          goal is to deliver an experience and achieve a premium price.{" "}
        </div>
        <div>
          <button
            className={`w-full md:w-fit px-3 py-2 md:p-4 gap-2 bg-primary flex items-center justify-center text-white active:bg-opacity-80`}
          >
            Contact Us <ArrowRight className={`w-4 h-4`} />
          </button>
        </div>
      </div>
    </div>
  );
}
