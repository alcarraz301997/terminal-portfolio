
import type { Experience } from "../content/experiences/Experience";
import experiences from "../content/experiences/experiences.json";

export async function getExperiences(): Promise<Experience[]> {
  return [...experiences]
    .reverse()
    .map((experience, index) => {
      return {
        id: index,
        title: experience.title,
        company: experience.company,
        start_year: experience.start_year,
        end_year: experience.end_year,
        city: experience.city,
        descriptions: experience.descriptions ?? [],
        tech: experience.tech ?? [],
      } as Experience;
    });
}