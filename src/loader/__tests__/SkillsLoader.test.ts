import { describe, it, expect } from 'vitest';
import { getSkills } from '../SkillsLoader';
import { skillsJsonSchema } from '../../content/skills/skills.schema';

describe('SkillsLoader', () => {
  it('returns valid data for English', () => {
    const skills = getSkills('en');
    expect(Array.isArray(skills)).toBe(true);
    expect(skills.length).toBeGreaterThan(0);
    expect(() => skillsJsonSchema.parse(skills)).not.toThrow();
  });

  it('returns valid data for Spanish', () => {
    const skills = getSkills('es');
    expect(Array.isArray(skills)).toBe(true);
    expect(skills.length).toBeGreaterThan(0);
  });

  it('assigns numeric ids and has required fields', () => {
    const skills = getSkills('en');
    skills.forEach((skill, index) => {
      expect(skill.id).toBe(index);
      expect(typeof skill.title).toBe('string');
      expect(Array.isArray(skill.tech)).toBe(true);
      expect(skill.tech.length).toBeGreaterThan(0);
    });
  });
});
