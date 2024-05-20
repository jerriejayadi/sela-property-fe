import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export default function LanguageToggle() {
  const router = useRouter();
  const path = usePathname();
  const locale = useLocale();

  const onChange = (locale: string) => {
    const paths = path.split(`/`);
    paths[1] = locale;
    const newPaths = paths.join(`/`);
    router.replace(newPaths);
  };
  return (
    <div>
      <span
        onClick={() => {
          onChange("id");
        }}
        className={`${
          locale === "id" && "font-bold underline "
        } cursor-pointer hover:underline`}
      >
        ID
      </span>{" "}
      |{" "}
      <span
        onClick={() => {
          onChange("en");
        }}
        className={`${
          locale === "en" && "font-bold underline "
        } cursor-pointer hover:underline`}
      >
        EN
      </span>
    </div>
  );
}
