import { useEffect, useState } from "react";
import {
  CodeIcon,
  StorageIcon,
  DnsIcon,
  CloudIcon,
  RouteIcon,
  ShieldIcon,
} from "../Icons";
import Command from "../Command";
import type { Skill } from "../../content/skills/skills.schema";
import { getSkills } from "../../loader/SkillsLoader";
import { useLanguage } from "../../context/LanguageContext";

export default function Skills() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const { language } = useLanguage();

  useEffect(() => {
    setSkills(getSkills(language));
  }, [language]);

  const getIcon = (tech: string) => {
    switch (tech) {
      case "Languages":
      case "Lenguajes":
        return <CodeIcon />;
      case "Frameworks":
        return <StorageIcon />;
      case "Databases":
      case "Bases de Datos":
        return <DnsIcon />;
      case "Cloud & DevOps":
        return <CloudIcon />;
      case "Tools":
      case "Herramientas":
        return <RouteIcon />;
      case "Security":
      case "Seguridad":
        return <ShieldIcon />;
      default:
        return <CodeIcon />;
    }
  };

  return (
    <div className="sections">
      <Command command="$ cat skills.json | jq" />

      <div className="cards">
        <div className="skills-grid">
          {skills.map((s) => (
            <div key={s.id} className="skill-card">
              <div className="skill-header">
                {getIcon(s.title)}
                <h3 className="card-title">{s.title}</h3>
              </div>
              <div className="skill-content">
                <ul className="skill-list">
                  {s.tech.map((t, index) => (
                    <li className="skill-item" key={index}>
                      <span className="skill-description">▸ {t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="whoami">
        <p className="text-whoami">$ echo "Siempre aprendiendo..."</p>
        <p className="description-whoami">
          Actualmente explorando: Spring-Boot, Oracle
        </p>
      </div>
    </div>
  );
}
