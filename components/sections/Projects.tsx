"use client";

import { useLanguage } from "@/hooks/useLanguage";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Projects() {
  const { content } = useLanguage();

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading title={content.sections.projects} />
        <div className="grid-auto">
          {content.projects.map((project) => (
            <article key={project.id} className="card">
              <span className="card-meta">{project.status}</span>
              <h3 className="card-title">{project.name}</h3>
              <p className="card-text">{project.description}</p>

              <div className="tags">
                {project.techStack.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>

              {project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-link"
                >
                  {content.sections.visitProject}
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
