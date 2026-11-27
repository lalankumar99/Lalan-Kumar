"use client";

import { useLanguage } from "@/hooks/useLanguage";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Training() {
  const { content } = useLanguage();

  return (
    <section id="training" className="section">
      <div className="container">
        <SectionHeading title={content.sections.training} />
        <div className="grid-auto">
          {content.training.map((item) => (
            <div key={item.id} className="card">
              <span className="card-meta">{item.type}</span>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-text">{item.organization}</p>
              <p className="card-text">{item.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
