import { Profile } from "./profile.types";
import { EducationItem } from "./education.types";
import { SkillCategory } from "./skill.types";
import { TrainingItem } from "./training.types";
import { ProjectItem } from "./project.types";
import { NavItem, SectionTitles } from "./navigation.types";

export type Locale = "en" | "hi" | "zh" | "de" | "fr" | "es" | "ja" | "ar";

export interface LanguageOption {
  code: Locale;
  name: string;
  nativeName: string;
  dir: "ltr" | "rtl";
}

export interface PortfolioContent {
  nav: NavItem[];
  sections: SectionTitles;
  profile: Profile;
  skills: SkillCategory[];
  projects: ProjectItem[];
  training: TrainingItem[];
  education: EducationItem[];
}
