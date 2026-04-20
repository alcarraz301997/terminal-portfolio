import type { Skill } from "../content/skills/Skill";
import skills from "../content/skills/skills.json";

export async function getSkills(): Promise<Skill[]> {
  return skills.map((skill, index) => {
    return {
      id: index,
      title: skill.title,
      tech: skill.tech ?? [],
    } as Skill;
  });
}