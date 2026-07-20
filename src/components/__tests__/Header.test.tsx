import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
  it('renders the terminal title', () => {
    render(<Header />);
    expect(screen.getByText('junior-alcarraz@portfolio:~')).toBeInTheDocument();
  });

  it('renders the prompt symbol', () => {
    render(<Header />);
    const header = document.querySelector('header');
    expect(header?.textContent).toContain('>');
  });
});
