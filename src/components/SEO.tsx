import { useEffect, useMemo } from "react";
import { useLanguage } from "../context/LanguageContext";

const BASE_URL = "https://portfolio.jrmemo.com";
const GITHUB_URL = "https://github.com/alcarraz301997";

const seoByLanguage = {
  en: {
    title: "Junior Alcarraz | Backend Developer - Linux Enthusiast",
    description:
      "Back-end developer with experience in web development and database management systems. Passionate about problem solving and continuous learning in the technology field.",
    jobTitle: "Backend Developer",
    ogLocale: "en_US",
  },
  es: {
    title: "Junior Alcarraz | Desarrollador Backend - Apasionado por Linux",
    description:
      "Desarrollador back-end con experiencia en desarrollo web y sistemas de gestión de bases de datos. Apasionado por la resolución de problemas y el aprendizaje continuo en el campo de la tecnología.",
    jobTitle: "Desarrollador Backend",
    ogLocale: "es_ES",
  },
} as const;

export default function SEO() {
  const { language } = useLanguage();
  const seo = seoByLanguage[language];

  const structuredData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Junior Alcarraz Montes",
      jobTitle: seo.jobTitle,
      url: BASE_URL,
      email: "guillermo.junior.30@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lima",
        addressCountry: "PE",
      },
      sameAs: [GITHUB_URL],
    }),
    [seo.jobTitle],
  );

  useEffect(() => {
    document.title = seo.title;
    document.documentElement.lang = language;

    const setMeta = (
      name: string,
      content: string,
      isProperty = false,
    ) => {
      const attr = isProperty ? "property" : "name";
      const selector = `meta[${attr}="${name}"]`;
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", seo.description);
    setMeta("og:title", seo.title, true);
    setMeta("og:description", seo.description, true);
    setMeta("og:url", BASE_URL, true);
    setMeta("og:locale", seo.ogLocale, true);
    setMeta("og:site_name", "Junior Alcarraz", true);
    setMeta("og:type", "website", true);
    setMeta("twitter:card", "summary");
    setMeta("twitter:title", seo.title);
    setMeta("twitter:description", seo.description);
  }, [language, seo]);

  return (
    <script
      type="application/ld+json"
      key={language}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
