import { useState, lazy, Suspense } from "react";
import { Box, Tabs, Tab } from "@mui/material";

const About = lazy(() => import("./sections/About"));
const Projects = lazy(() => import("./sections/Projects"));
const Skills = lazy(() => import("./sections/Skills"));
const Experience = lazy(() => import("./sections/Experience"));

export default function TabMenu() {
  const [value, setValue] = useState("1");

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const renderContent = () => {
    switch (value) {
      case '1':
        return <About/>;

      case '2':
        return <Projects/>;

      case '3':
        return <Skills/>;

      case '4':
        return <Experience/>;

      default:
        return <About/>;
    }
  }

  const tabId = (v: string) => `tab-${v}`;
  const panelId = (v: string) => `tabpanel-${v}`;

  return (
    <>
      <Box component="nav" className="tab-principal">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Portfolio sections"
          sx={{
            "& .MuiTabs-indicator": {
              display: "none",
            },
          }}
        >
          <Tab
            className="tab-terminal"
            value="1"
            label="about.sh"
            disableRipple
            id={tabId("1")}
            aria-controls={panelId("1")}
          />
          <Tab
            className="tab-terminal"
            value="2"
            label="projects.sh"
            disableRipple
            id={tabId("2")}
            aria-controls={panelId("2")}
          />
          <Tab
            className="tab-terminal"
            value="3"
            label="skills.sh"
            disableRipple
            id={tabId("3")}
            aria-controls={panelId("3")}
          />
          <Tab
            className="tab-terminal"
            value="4"
            label="experience.sh"
            disableRipple
            id={tabId("4")}
            aria-controls={panelId("4")}
          />
        </Tabs>
      </Box>
      <div role="tabpanel" id={panelId(value)} aria-labelledby={tabId(value)}>
        <Suspense
          fallback={
            <div
              style={{
                padding: "2rem",
                textAlign: "center",
                fontFamily: "var(--text-family)",
                color: "var(--color-text-description)",
              }}
            >
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
