import type { Skill } from "../content/skills/skills.schema";
import { skillsJsonSchema } from "../content/skills/skills.schema";
import skillsEn from "../content/skills/en/skills.json";
import skillsEs from "../content/skills/es/skills.json";
import type { Language } from "../context/LanguageContext";

const skillsByLanguage = {
  en: skillsEn,
  es: skillsEs,
} satisfies Record<Language, typeof skillsEn>;

export function getSkills(language: Language): Skill[] {
  const raw = skillsByLanguage[language];
  const skills = skillsJsonSchema.parse(raw);

  return skills.map((skill, index) => ({
    id: index,
    title: skill.title,
    tech: skill.tech,
  }));
}
