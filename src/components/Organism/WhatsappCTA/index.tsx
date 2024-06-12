import Link from "next/link";
import { Whatsapp, ArrowRight2 } from "iconsax-react";
import { useRouter } from "next/navigation";

interface WhatsappCTA {
  className?: string;
}

export default function WhatsappCTA({ className }: WhatsappCTA) {
  const router = useRouter();
  return (
    <Link
      href={`/thankyou`}
      target={`_blank`}
      className={`${
        className ?? ""
      } w-full bg-primary hover:bg-opacity-80 hover:cursor-pointer text-white  flex items-center justify-between transition-all duration-150 `}
    >
      <div className={`flex items-center text-xl gap-5 pl-10 `}>
        <Whatsapp className={`w-10 h-10`} variant={`Bold`} />
        Chat 081234567890
      </div>

      <div className={`h-full bg-white p-8 text-primary`}>
        <ArrowRight2 className={`w-5 h-5  bg-white text-primary`} />
      </div>
    </Link>
  );
}
