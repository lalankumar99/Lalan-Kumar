"use client";

import { useLanguage } from "@/hooks/useLanguage";
import { socials } from "@/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ContactPage() {
  const { content } = useLanguage();

  return (
    <section className="section fade-up">
      <div className="container">
        <SectionHeading title={content.sections.contact} />

        <div className="grid-2">
          <div className="card">
            <span className="card-meta">{content.profile.location}</span>
            <h3 className="card-title">{content.profile.name}</h3>
            <p className="card-text">{content.profile.college}</p>

            <div className="tags" style={{ marginTop: "1.5rem" }}>
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  {social.name}: {social.handle}
                </a>
              ))}
            </div>
          </div>

          <form
            className="card"
            action="mailto:your-email@example.com"
            method="POST"
            encType="text/plain"
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="form-input"
                placeholder="Your Name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="form-input"
                placeholder="you@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="form-input"
                placeholder="Write your message..."
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
