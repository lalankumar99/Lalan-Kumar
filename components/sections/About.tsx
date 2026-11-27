"use client";

import { useLanguage } from "@/hooks/useLanguage";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  const { content } = useLanguage();

  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading title={content.sections.about} />
        <div className="card">
          <span className="card-meta">
            {content.profile.college} · {content.profile.location}
          </span>
          <h3 className="card-title">{content.profile.aboutHeading}</h3>
          <p className="card-text">{content.profile.aboutText}</p>
        </div>
      </div>
    </section>
  );
}
