import { useEffect, lazy, Suspense } from "react";
import { useHash } from "../hooks/useHash";

const tabRoutes = {
  "1": "#/about",
  "2": "#/projects",
  "3": "#/skills",
  "4": "#/experience",
} as const;

const routeToTab = {
  "#/about": "1",
  "#/projects": "2",
  "#/skills": "3",
  "#/experience": "4",
} as const;

// Funciones de import para precarga
const importAbout = () => import("./sections/About");
const importProjects = () => import("./sections/Projects");
const importSkills = () => import("./sections/Skills");
const importExperience = () => import("./sections/Experience");

const About = lazy(importAbout);
const Projects = lazy(importProjects);
const Skills = lazy(importSkills);
const Experience = lazy(importExperience);

const tabLabels: Record<string, string> = {
  "1": "about.sh",
  "2": "projects.sh",
  "3": "skills.sh",
  "4": "experience.sh",
};

const tabImporters: Record<string, () => Promise<unknown>> = {
  "1": importAbout,
  "2": importProjects,
  "3": importSkills,
  "4": importExperience,
};

export default function TabMenu() {
  const [hash, setHash] = useHash();

  const currentTab = routeToTab[hash as keyof typeof routeToTab] || "1";

  useEffect(() => {
    if (!hash || hash === "#/" || hash === "") {
      setHash("#/about");
    }
  }, []);

  const handleChange = (tab: string) => {
    setHash(tabRoutes[tab as keyof typeof tabRoutes]);
  };

  const handleMouseEnter = (tab: string) => {
    const importer = tabImporters[tab];
    if (importer) importer();
  };

  const renderContent = () => {
    switch (currentTab) {
      case "1":
        return <About />;
      case "2":
        return <Projects />;
      case "3":
        return <Skills />;
      case "4":
        return <Experience />;
      default:
        return <About />;
    }
  };

  const tabId = (v: string) => `tab-${v}`;
  const panelId = (v: string) => `tabpanel-${v}`;

  return (
    <>
      <nav className="tab-principal">
        <div className="tabs-container" role="tablist" aria-label="Portfolio sections">
          {Object.entries(tabLabels).map(([key, label]) => (
            <button
              key={key}
              className={`tab-terminal ${currentTab === key ? "active" : ""}`}
              role="tab"
              aria-selected={currentTab === key}
              aria-controls={panelId(key)}
              id={tabId(key)}
              onClick={() => handleChange(key)}
              onMouseEnter={() => handleMouseEnter(key)}
            >
              {label}
            </button>
          ))}
        </div>
      </nav>
      <div
        role="tabpanel"
        id={panelId(currentTab)}
        aria-labelledby={tabId(currentTab)}
      >
        <Suspense
          fallback={
            <div className="loading-fallback">
              <span>$ loading<span className="cursor">_</span></span>
            </div>
          }
        >
          {renderContent()}
        </Suspense>
      </div>
    </>
  );
}
