import type { Experience } from "../content/experiences/experiences.schema";
import { experiencesJsonSchema } from "../content/experiences/experiences.schema";
import experiencesEn from "../content/experiences/en/experiences.json";
import experiencesEs from "../content/experiences/es/experiences.json";
import type { Language } from "../context/LanguageContext";

const experiencesByLanguage = {
  en: experiencesEn,
  es: experiencesEs,
} satisfies Record<Language, typeof experiencesEn>;

export function getExperiences(language: Language): Experience[] {
  const raw = experiencesByLanguage[language];
  const experiences = experiencesJsonSchema.parse(raw);

  return [...experiences]
    .reverse()
    .map((experience, index) => ({
      id: index,
      title: experience.title,
      company: experience.company,
      start_year: experience.start_year,
      end_year: experience.end_year,
      city: experience.city,
      descriptions: experience.descriptions,
      tech: experience.tech,
    }));
}
