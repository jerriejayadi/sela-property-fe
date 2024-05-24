import { useTranslations } from "next-intl";
import { navigation } from "../Navbar";
import { useRouter } from "next/navigation";

interface NavbarMobileProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NavbarMobile({ isOpen, onClose }: NavbarMobileProps) {
  const router = useRouter();
  const t = useTranslations("navbar");
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 bg-[#0F0F0F] bg-opacity-80 backdrop-blur-sm  h-screen justify-center z-40 p-6 transition-all duration-300  ${
        isOpen ? "h-screen opacity-100" : "h-0 opacity-0"
      } `}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={`mt-[75px] flex flex-col gap-4`}
      >
        {navigation.map((rows, index) => (
          <div key={index}>{t(rows.name)}</div>
        ))}
      </div>
    </div>
  );
}
