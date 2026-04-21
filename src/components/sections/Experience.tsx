import { Box, Card, CardContent, CardHeader, List, ListItem, ListItemText, Typography } from "@mui/material";
import Command from "../Command";
import { useEffect, useState } from "react";
import type { Experience } from "../../content/experiences/Experience";
import { getExperiences } from "../../loader/ExperienceLoader";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

export default function Experience() {
  const [experiences, setExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    getExperiences().then(setExperiences);
  }, [])

  const present = (year?: number) => {
    if (!year) {
      return 'Presente';
    }
    return year;
  }

  return (
    <Box className="sections">

      {/* Texto */}
      <Command command="$ git log --all --graph --decorate" />

      <Box className="cards">
        {experiences.map((e) => (
          <Card
            className="experience-card"
            key={e.id}
          >
            <CardHeader
              className="card-header"
              title={
                <Typography className="card-title">{e.title}</Typography>
              }
              subheader={
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, lineHeight:1  }}>
                    <BusinessCenterIcon sx={{ color: "var(--color-select-orange)", fontSize: "var(--text-size-span)" }}/>
                    <Typography className="experience-subtitle">{e.company}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, lineHeight: 1  }}>
                    <BusinessCenterIcon sx={{ color: "var(--color-select-orange)", fontSize: "var(--text-size-span)" }}/>
                    <Typography className="experience-subtitle">{e.start_year}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, lineHeight: 1  }}>
                    <BusinessCenterIcon sx={{ color: "var(--color-select-orange)", fontSize: "var(--text-size-span)" }}/>
                    <Typography className="experience-subtitle">{present(e.end_year)}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, lineHeight: 1  }}>
                    <BusinessCenterIcon sx={{ color: "var(--color-select-orange)", fontSize: "var(--text-size-span)" }}/>
                    <Typography className="experience-subtitle">{e.city}</Typography>
                  </Box>
                </Box>
              }
            />
            <CardContent sx={{ p: 1 }}>
              <List
                sx={{
                  display: "grid",
                  gap: 1,
                }}
              >
                {e.descriptions.map((d, index) => (
                  <ListItem
                    className="skill-item"
                    key={index}
                    sx={{ py: 0, minHeight: "unset" }}
                  >
                    <ListItemText
                      sx={{ m:0 }}
                      primary={
                        <Typography
                          className="skill-description"
                          sx={{ whiteSpace: "nowrap" }}
                        >
                          ▸ {d}
                        </Typography>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        ))}
      </Box>

    </Box>
  );
}