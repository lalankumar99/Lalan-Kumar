"use client";

import { useLanguage } from "@/hooks/useLanguage";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Skills() {
  const { content } = useLanguage();

  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading title={content.sections.skills} />
        <div className="grid-2">
          {content.skills.map((group) => (
            <div key={group.id} className="card">
              <h3 className="card-title">{group.category}</h3>
              <div className="tags">
                {group.items.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
