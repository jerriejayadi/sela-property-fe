export default function NotFound() {
  return (
    <div className={`bg-catalog_bg_image w-screen h-screen `}>
      <div className="flex flex-col items-start justify-center  bg-black bg-opacity-60 min-h-screen w-full px-8 py-20 md:px-20 md:py-40">
        <div className={`text-2xl md:text-6xl font-montserrat font-bold `}>
          Error 404: Property Not Found
        </div>
        <div
          className={`mt-4 md:mt-8 font-lato font-light md:text-2xl  leading-7 md:leading-10`}
        >
          The Property you are looking for is not available.
        </div>
      </div>
    </div>
  );
}
