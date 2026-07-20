import type { About } from "../content/about/about.schema";
import { aboutSchema } from "../content/about/about.schema";
import aboutEn from "../content/about/en/about.json";
import aboutEs from "../content/about/es/about.json";
import type { Language } from "../context/LanguageContext";

const aboutByLanguage = {
  en: aboutEn,
  es: aboutEs,
} satisfies Record<Language, typeof aboutEn>;

export function getAbout(language: Language): About {
  const raw = aboutByLanguage[language];
  return aboutSchema.parse(raw);
}
