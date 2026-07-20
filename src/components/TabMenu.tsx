import { useEffect } from "react";
import { useHash } from "../hooks/useHash";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";

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

const tabLabels: Record<string, string> = {
  "1": "about.sh",
  "2": "projects.sh",
  "3": "skills.sh",
  "4": "experience.sh",
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
        {renderContent()}
      </div>
    </>
  );
}
