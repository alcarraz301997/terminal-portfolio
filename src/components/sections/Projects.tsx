import { useEffect, useState } from "react";
import { GitHubIcon, LaunchIcon, CodeIcon } from "../Icons";
import Command from "../Command";
import type { Project } from "../../content/projects/projects.schema";
import { getProjects } from "../../loader/ProjectsLoader";
import { useLanguage } from "../../context/LanguageContext";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const { language } = useLanguage();

  useEffect(() => {
    setProjects(getProjects(language));
  }, [language]);

  return (
    <div className="sections">
      <Command command="$ ls -la ./projects" />

      <div className="cards">
        {projects.map((p) => (
          <div className="card project-card" key={p.id}>
            <div className="card-header project-header">
              <div className="card-header-title">
                <CodeIcon />
                <h3 className="card-title">{p.title}</h3>
              </div>
              <div className="card-header-actions">
                <a
                  className="icon-button"
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GitHub repository for ${p.title}`}
                >
                  <GitHubIcon />
                </a>
                <a
                  className="icon-button"
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Live demo for ${p.title}`}
                >
                  <LaunchIcon />
                </a>
              </div>
            </div>

            <div className="card-content">
              <p className="card-description">{p.description}</p>
              <div className="tech-tags">
                {p.tech.map((t) => (
                  <span className="box-projects" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="footer-projects">
        $ total {projects.length} {language === "es" ? "proyectos" : "projects"}
      </p>
    </div>
  );
}
