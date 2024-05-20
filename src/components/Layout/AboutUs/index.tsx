export default function AboutUs() {
  return (
    <div
      className={`flex flex-col md:flex-row items-center bg-white py-14 px-8 gap-10  md:px-28 md:py-20 md:gap-24`}
    >
      {/* About Us */}
      <div className={`md:w-1/2 flex flex-col gap-10`}>
        <div className={`font-josefin_sans text-black md:text-5xl text-3xl `}>
          About Us
        </div>
        <div className={`text-black text-xl font-light leading-9`}>
          Lorem ipsum dolor sit amet consectetur. Lacus aliquet viverra lectus
          semper nisl ut id lacus. Non urna enim urna lacus sed phasellus
          adipiscing nibh tempus. Vitae lacinia enim morbi dui aliquam fringilla
          ipsum nec. Dapibus fringilla sit id a elit volutpat.
        </div>
      </div>
      <div
        className={`grid grid-cols-2  md:grid-cols-2 md:w-1/2 gap-x-12 gap-y-6 md:gap-12`}
      >
        <div className={`font-josefin_sans`}>
          <div className={`text-primary text-4xl md:text-5xl`}>120+</div>
          <div
            className={`text-[#2D2D2D] text-xl md:text-2xl font-lato font-light mt-3`}
          >
            Properties
          </div>
        </div>
        <div className={`font-josefin_sans`}>
          <div className={`text-primary text-4xl md:text-5xl`}>120+</div>
          <div
            className={`text-[#2D2D2D] text-xl md:text-2xl font-lato font-light mt-3`}
          >
            Properties
          </div>
        </div>
        <div className={`font-josefin_sans`}>
          <div className={`text-primary text-4xl md:text-5xl`}>50+</div>
          <div
            className={`text-[#2D2D2D] text-xl md:text-2xl font-lato font-light mt-3`}
          >
            Agents
          </div>
        </div>
        <div className={`font-josefin_sans`}>
          <div className={`text-primary text-4xl md:text-5xl`}>120+</div>
          <div
            className={`text-[#2D2D2D] text-xl md:text-2xl font-lato font-light mt-3`}
          >
            Properties
          </div>
        </div>
      </div>
    </div>
  );
}
