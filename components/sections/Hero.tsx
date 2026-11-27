"use client";

import Link from "next/link";
import { useLanguage } from "@/hooks/useLanguage";
import { socials } from "@/data";
import Badge from "@/components/ui/Badge";

export default function Hero() {
  const { content } = useLanguage();
  const githubLink =
    socials.find((s) => s.name === "GitHub")?.url ||
    "https://github.com/lalankumar99";

  return (
    <section className="hero fade-up">
      <div className="container">
        <Badge text={content.profile.role} />
        <h1 className="hero-title">{content.profile.name}</h1>
        <p className="hero-bio">{content.profile.bio}</p>

        <div className="hero-actions">
          <Link href="/projects" className="btn btn-primary">
            {content.profile.ctaPrimary}
          </Link>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            {content.profile.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
