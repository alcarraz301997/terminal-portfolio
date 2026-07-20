import { describe, it, expect } from 'vitest';
import { getExperiences } from '../ExperienceLoader';

describe('ExperienceLoader', () => {
  it('returns valid data for English', () => {
    const experiences = getExperiences('en');
    expect(Array.isArray(experiences)).toBe(true);
    expect(experiences.length).toBeGreaterThan(0);
    experiences.forEach((exp) => {
      expect(exp.title).toBeDefined();
      expect(exp.company).toBeDefined();
    });
  });

  it('returns valid data for Spanish', () => {
    const experiences = getExperiences('es');
    expect(Array.isArray(experiences)).toBe(true);
    expect(experiences.length).toBeGreaterThan(0);
  });

  it('returns experiences in reverse chronological order with numeric ids', () => {
    const experiences = getExperiences('en');
    experiences.forEach((exp, index) => {
      expect(exp.id).toBe(index);
      expect(typeof exp.title).toBe('string');
      expect(typeof exp.company).toBe('string');
      expect(typeof exp.start_year).toBe('number');
      expect(Array.isArray(exp.descriptions)).toBe(true);
      expect(Array.isArray(exp.tech)).toBe(true);
    });
  });

  it('returns experiences with most recent first', () => {
    const experiences = getExperiences('en');
    if (experiences.length > 1) {
      expect(experiences[0].start_year).toBeGreaterThanOrEqual(experiences[1].start_year);
    }
  });
});
