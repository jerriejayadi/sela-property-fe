import { useTranslations } from "next-intl";
import { navigation } from "../Navbar";

interface NavbarMobileProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NavbarMobile({ isOpen, onClose }: NavbarMobileProps) {
  const t = useTranslations("navbar");
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 bg-[#0F0F0F] bg-opacity-50 backdrop-blur-md  h-screen justify-center z-40 p-6 transition-all duration-300  ${
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
