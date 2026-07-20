import type { Project } from "../content/projects/Project";
import { projectsJsonSchema } from "../content/projects/projects.schema";
import projectsEn from "../content/projects/en/projects.json";
import projectsEs from "../content/projects/es/projects.json";
import type { Language } from "../context/LanguageContext";

const projectsByLanguage = {
  en: projectsEn,
  es: projectsEs,
} satisfies Record<Language, typeof projectsEn>;

export function getProjects(language: Language): Project[] {
  const raw = projectsByLanguage[language];
  const projects = projectsJsonSchema.parse(raw);

  return projects.map((project, index) => ({
    id: index,
    title: project.title,
    url: project.url,
    github: project.github,
    tech: project.tech,
    description: project.description.trim(),
  }));
}
