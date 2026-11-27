"use client";

import { useTheme } from "@/hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <button className="theme-btn" aria-label="Toggle Theme">
        ◐
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-btn"
      aria-label="Toggle Dark or Light Mode"
      title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}
