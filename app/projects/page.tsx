import type { Metadata } from "next";
import Projects from "@/components/sections/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Web and student utility projects built by Lalan Kumar.",
};

export default function ProjectsPage() {
  return (
    <div style={{ paddingTop: "1rem" }}>
      <Projects />
    </div>
  );
}
