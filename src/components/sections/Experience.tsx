import { useEffect, useState } from "react";
import { BusinessCenterIcon, CalendarTodayIcon, LocationOnIcon } from "../Icons";
import Command from "../Command";
import type { Experience } from "../../content/experiences/experiences.schema";
import { getExperiences } from "../../loader/ExperienceLoader";
import { useLanguage } from "../../context/LanguageContext";

export default function Experience() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const { language } = useLanguage();

  useEffect(() => {
    setExperiences(getExperiences(language));
  }, [language]);

  const present = (year?: number) => {
    if (!year) {
      return language === "es" ? "Presente" : "Present";
    }
    return year;
  };

  return (
    <div className="sections">
      <Command command="$ git log --all --graph --decorate" />

      <div className="cards">
        {experiences.map((e) => (
          <div className="experience-card" key={e.id}>
            <div className="card-header">
              <h3 className="card-title">{e.title}</h3>
              <div className="experience-subtitles">
                <div className="experience-subtitle-row">
                  <BusinessCenterIcon className="experience-icon" />
                  <span className="experience-subtitle">{e.company}</span>
                </div>
                <div className="experience-subtitle-row">
                  <CalendarTodayIcon className="experience-icon" />
                  <span className="experience-subtitle">
                    {e.start_year} - {present(e.end_year)}
                  </span>
                </div>
                <div className="experience-subtitle-row">
                  <LocationOnIcon className="experience-icon" />
                  <span className="experience-subtitle">{e.city}</span>
                </div>
              </div>
            </div>
            <div className="card-content experience-content">
              <ul className="skill-list">
                {e.descriptions.map((d, index) => (
                  <li className="skill-item" key={index}>
                    <span className="skill-description">▸ {d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
