import Link from "next/link";
import { Whatsapp, ArrowRight2 } from "iconsax-react";
import { useRouter } from "next/navigation";

interface WhatsappCTA {
  onClick?: () => void;
  className?: string;
}

export default function WhatsappCTA({ className, onClick }: WhatsappCTA) {
  const router = useRouter();
  const handleClick = () => {
    window.open("https://wa.me/+6281234567890", "_blank");
  };
  return (
    <div
      onClick={onClick ?? handleClick}
      className={`${
        className ?? ""
      } w-full bg-primary hover:bg-opacity-80 hover:cursor-pointer text-white  flex items-center justify-between transition-all duration-150 `}
    >
      <div className={`flex text-start items-center md:text-xl gap-5 pl-4 md:pl-10 `}>
        <Whatsapp className={`w-10 h-10`} variant={`Bold`} />
        Chat 081234567890
      </div>

      <div className={`h-full bg-white ml-5 p-6 md:p-8 text-primary`}>
        <ArrowRight2 className={`w-5 h-5  bg-white text-primary`} />
      </div>
    </div>
  );
}
