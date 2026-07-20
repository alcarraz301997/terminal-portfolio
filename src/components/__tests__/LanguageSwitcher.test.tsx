import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { LanguageProvider } from '../../context/LanguageContext';
import LanguageSwitcher from '../LanguageSwitcher';

function renderWithProvider() {
  return render(
    <LanguageProvider>
      <LanguageSwitcher />
    </LanguageProvider>
  );
}

describe('LanguageSwitcher', () => {
  it('renders both language options', () => {
    renderWithProvider();
    expect(screen.getByText('EN')).toBeInTheDocument();
    expect(screen.getByText('ES')).toBeInTheDocument();
  });

  it('has an accessible label for the toggle group', () => {
    renderWithProvider();
    expect(screen.getByRole('group', { name: /switch language/i })).toBeInTheDocument();
  });
});
