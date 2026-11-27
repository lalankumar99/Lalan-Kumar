"use client";

import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const { content } = useLanguage();

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link href="/" className="nav-brand">
          Lalan<span>.</span>
        </Link>

        <nav aria-label="Main Navigation">
          <ul className="nav-links">
            {content.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="nav-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-controls">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
