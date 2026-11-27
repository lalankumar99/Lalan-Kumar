export type ProjectStatus = "Live" | "In Development" | "Concept / Project";

export interface ProjectItem {
  id: string;
  name: string;
  status: string;
  description: string;
  techStack: string[];
  link: string;
  github?: string;
}
