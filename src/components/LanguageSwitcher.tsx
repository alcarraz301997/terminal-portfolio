import { useLanguage, type Language } from "../context/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const handleClick = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <div className="language-switcher">
      <div role="group" aria-label="Switch language">
        <button
          className={`lang-btn ${language === "en" ? "active" : ""}`}
          onClick={() => handleClick("en")}
          aria-pressed={language === "en"}
        >
          EN
        </button>
        <button
          className={`lang-btn ${language === "es" ? "active" : ""}`}
          onClick={() => handleClick("es")}
          aria-pressed={language === "es"}
        >
          ES
        </button>
      </div>
    </div>
  );
}
