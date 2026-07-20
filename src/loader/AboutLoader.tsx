import type { About } from "../content/about/About";
import aboutEn from "../content/about/en/about.json";
import aboutEs from "../content/about/es/about.json";
import type { Language } from "../context/LanguageContext";

const aboutByLanguage = {
  en: aboutEn,
  es: aboutEs,
} satisfies Record<Language, typeof aboutEn>;

export function getAbout(language: Language): About {
  const about = aboutByLanguage[language];
  return about as About;
}