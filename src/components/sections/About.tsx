import { useEffect, useState } from "react";
import { PersonIcon, EmailIcon, LocationOnIcon, GitHubIcon } from "../Icons";
import Command from "../Command";
import type { About } from "../../content/about/about.schema";
import { getAbout } from "../../loader/AboutLoader";
import { useLanguage } from "../../context/LanguageContext";

export default function About() {
  const [about, setAbout] = useState<About | null>(null);
  const { language } = useLanguage();

  useEffect(() => {
    setAbout(getAbout(language));
  }, [language]);

  if (!about) return null;

  return (
    <div className="sections">
      <Command command="$ cat about.txt" />

      <h2 className="title">▸ {about.title}</h2>

      <p className="description">{about.description}</p>

      <div className="information">
        <div className="grid-information">
          <div className="info-item">
            <PersonIcon className="icon-information" />
            <span className="text-information">{about.name}</span>
          </div>
          <div className="info-item">
            <EmailIcon className="icon-information" />
            <span className="text-information">{about.email}</span>
          </div>
          <div className="info-item">
            <LocationOnIcon className="icon-information" />
            <span className="text-information">{about.location}</span>
          </div>
          <div className="info-item">
            <GitHubIcon className="icon-information" />
            <span className="text-information">{about.github}</span>
          </div>
        </div>
      </div>

      <div className="whoami">
        <p className="text-whoami">{about.whoamiCommand}</p>
        <p className="description-whoami">{about.whoamiText}</p>
      </div>
    </div>
  );
}
