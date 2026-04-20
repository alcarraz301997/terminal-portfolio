import type { Project } from "../content/projects/Project";
import projects from '../content/projects/projects.json';

export async function getProjects(): Promise<Project[]> {
  return projects.map((project, index) => {
    return {
      id: index,
      title: project.title,
      url: project.url,
      github: project.github,
      tech: project.tech ?? [],
      description: project.description.trim(),
    } as Project;
  });
}