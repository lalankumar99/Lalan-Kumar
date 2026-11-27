"use client";

import { useState, useEffect } from "react";

export type Theme = "dark" | "light";

const THEME_KEY = "portfolio_theme";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(THEME_KEY) as Theme | null;
    const initialTheme: Theme = saved === "light" ? "light" : "dark";
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem(THEME_KEY, nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  return { theme, toggleTheme, mounted };
}
