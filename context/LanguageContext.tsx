"use client";

import React, { createContext, useState, useEffect, ReactNode } from "react";
import { Locale, PortfolioContent } from "@/types";
import { localeData, languages, DEFAULT_LOCALE } from "@/data";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  content: PortfolioContent;
  dir: "ltr" | "rtl";
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const STORAGE_KEY = "portfolio_locale";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (saved && localeData[saved]) {
      setLocaleState(saved);
    }
  }, []);

  const currentLang =
    languages.find((lang) => lang.code === locale) || languages[0];

  useEffect(() => {
    document.documentElement.lang = currentLang.code;
    document.documentElement.dir = currentLang.dir;
  }, [currentLang]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem(STORAGE_KEY, newLocale);
  };

  return (
    <LanguageContext.Provider
      value={{
        locale,
        setLocale,
        content: localeData[locale],
        dir: currentLang.dir,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
