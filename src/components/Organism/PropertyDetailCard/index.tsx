import Image from "next/image";

interface PropertyDetailCardProps {
  className?: string;
  props: string;
  iconURL: string;
  value: string | number;
  unitOfMeasurement?: string;
  size?:string;
}

export default function PropertyDetailCard({
  className,
  props,
  iconURL,
  value,
  unitOfMeasurement,
  size
}: PropertyDetailCardProps) {
  return (
    <div className={`${className ?? ""} flex items-center gap-1 md:pr-12 `}>
      <div className={`flex items-center justify-center shrink-0 size-12  `}>
        <Image
          className={`object-cover ${size} `}
          alt={``}
          src={iconURL}
          width={1000}
          height={1000}
        />
      </div>
      <div className={`text-black tracking-widest`}>
        <div className={`md:text-2xl font-bold text-black `}>
          {value}
          {unitOfMeasurement && (
            <span className={`font-light `}>{unitOfMeasurement}</span>
          )}
        </div>
        <div className={`text-[10px]`}>{props}</div>
      </div>
    </div>
  );
}
