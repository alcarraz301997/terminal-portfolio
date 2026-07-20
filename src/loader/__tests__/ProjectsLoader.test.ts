import { describe, it, expect } from 'vitest';
import { getProjects } from '../ProjectsLoader';
import { projectsJsonSchema } from '../../content/projects/projects.schema';

describe('ProjectsLoader', () => {
  it('returns valid data for English', () => {
    const projects = getProjects('en');
    expect(Array.isArray(projects)).toBe(true);
    expect(projects.length).toBeGreaterThan(0);
    expect(() => projectsJsonSchema.parse(projects)).not.toThrow();
  });

  it('returns valid data for Spanish', () => {
    const projects = getProjects('es');
    expect(Array.isArray(projects)).toBe(true);
    expect(projects.length).toBeGreaterThan(0);
  });

  it('assigns numeric ids and trims descriptions', () => {
    const projects = getProjects('en');
    projects.forEach((project, index) => {
      expect(project.id).toBe(index);
      expect(project.description).toBe(project.description.trim());
      expect(typeof project.title).toBe('string');
      expect(Array.isArray(project.tech)).toBe(true);
    });
  });
});
