import { Locale, PortfolioContent } from "@/types";
import { en } from "./locales/en";
import { hi } from "./locales/hi";
import { zh } from "./locales/zh";
import { de } from "./locales/de";
import { fr } from "./locales/fr";
import { es } from "./locales/es";
import { ja } from "./locales/ja";
import { ar } from "./locales/ar";

export const localeData: Record<Locale, PortfolioContent> = {
  en,
  hi,
  zh,
  de,
  fr,
  es,
  ja,
  ar,
};

export * from "./languages";
export * from "./socials";
export * from "./seo";
