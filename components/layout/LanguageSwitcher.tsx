"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { languages } from "@/data";
import { Locale } from "@/types";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <select
      aria-label="Select Language"
      className="lang-select"
      value={locale}
      onChange={(e) => setLocale(e.target.value as Locale)}
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.nativeName}
        </option>
      ))}
    </select>
  );
}
