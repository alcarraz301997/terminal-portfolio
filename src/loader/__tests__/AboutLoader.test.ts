import { describe, it, expect } from 'vitest';
import { getAbout } from '../AboutLoader';
import { aboutSchema } from '../../content/about/about.schema';

describe('AboutLoader', () => {
  it('returns valid data for English', () => {
    const about = getAbout('en');
    expect(() => aboutSchema.parse(about)).not.toThrow();
    expect(about.title).toBeDefined();
    expect(about.name).toBeDefined();
    expect(about.email).toBeDefined();
  });

  it('returns valid data for Spanish', () => {
    const about = getAbout('es');
    expect(() => aboutSchema.parse(about)).not.toThrow();
    expect(about.title).toBeDefined();
    expect(about.name).toBeDefined();
  });

  it('returns data matching all schema fields', () => {
    const about = getAbout('en');
    expect(about).toHaveProperty('title');
    expect(about).toHaveProperty('description');
    expect(about).toHaveProperty('name');
    expect(about).toHaveProperty('email');
    expect(about).toHaveProperty('location');
    expect(about).toHaveProperty('github');
    expect(about).toHaveProperty('whoamiCommand');
    expect(about).toHaveProperty('whoamiText');
  });
});
