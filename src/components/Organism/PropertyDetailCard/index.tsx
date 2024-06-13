import Image from "next/image";

interface PropertyDetailCardProps {
  className?: string;
  props: string;
  iconURL: string;
  value: string | number;
  unitOfMeasurement?: string;
}

export default function PropertyDetailCard({
  className,
  props,
  iconURL,
  value,
  unitOfMeasurement,
}: PropertyDetailCardProps) {
  return (
    <div className={`${className ?? ""} flex items-center gap-1 md:pr-12 `}>
      <div className={`flex justify-center shrink-0 w-12 h-12 `}>
        <Image
          className={`object-contain `}
          alt={``}
          src={iconURL}
          width={28}
          height={28}
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
