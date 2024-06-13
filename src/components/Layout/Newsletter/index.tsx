"use client";
import WhatsappCTA from "@/components/Organism/WhatsappCTA";

export default function Newsletter() {
  return (
    <div className={`bg-[url('/images/newsletter-bg.jpeg')]  `}>
      <div
        className={`bg-black bg-opacity-50 px-5 md:px-20 py-14 flex flex-col md:flex-row md:items-end justify-between`}
      >
        <div className={`md:w-[40%]`}>
          <div className={`text-2xl md:text-4xl font-bold`}>
            Discover your Opportunity, for Future Living
          </div>
          <div className={`md:text-xl font-light mt-4 md:mt-12`}>
            It’s our privilege to work with out beloved clients. To get the
            credence and sell your property is a big decision, so it’s important
            to work with agents you can trust to get the job done perfectly!
          </div>
        </div>
        <div className={`md:w-[50%] flex flex-col gap-4 mt-4 md:mt-0`}>
          <div className={` text-2xl md:text-3xl font-bold`}>
            Connect With Us
          </div>
          <WhatsappCTA />
          <div>
            or Email dandyhosea4@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
}
