"use client";

import { useLanguage } from "@/hooks/useLanguage";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Education() {
  const { content } = useLanguage();

  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeading title={content.sections.education} />
        <div className="grid-2">
          {content.education.map((edu) => (
            <div key={edu.id} className="card">
              <span className="card-meta">
                {edu.duration} · {edu.board}
              </span>
              <h3 className="card-title">{edu.degree}</h3>
              <p className="card-text">{edu.institution}</p>
              <p className="card-text">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
