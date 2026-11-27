"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { socials } from "@/data";

export default function Footer() {
  const { content } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              {social.name}
            </a>
          ))}
        </div>
        <p>
          © {year} {content.profile.name}. {content.sections.footerRights}
        </p>
      </div>
    </footer>
  );
}
