import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ErrorBoundary from '../ErrorBoundary';

function ThrowError({ message }: { message: string }): never {
  throw new Error(message);
}

describe('ErrorBoundary', () => {
  it('renders children when no error', () => {
    render(
      <ErrorBoundary>
        <p>Child content</p>
      </ErrorBoundary>
    );
    expect(screen.getByText('Child content')).toBeInTheDocument();
  });

  it('shows fallback when child throws', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    render(
      <ErrorBoundary>
        <ThrowError message="test error" />
      </ErrorBoundary>
    );
    expect(screen.getByText('$ something went wrong')).toBeInTheDocument();
    expect(screen.getByText('test error')).toBeInTheDocument();
    spy.mockRestore();
  });

  it('resets error state when clicking try again', async () => {
    const user = userEvent.setup();
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    let shouldThrow = true;

    function ConditionalThrow() {
      if (shouldThrow) throw new Error('boom');
      return <p>Recovered</p>;
    }

    render(
      <ErrorBoundary>
        <ConditionalThrow />
      </ErrorBoundary>
    );

    expect(screen.getByText('$ something went wrong')).toBeInTheDocument();

    shouldThrow = false;
    await user.click(screen.getByText('$ try again'));

    expect(screen.getByText('Recovered')).toBeInTheDocument();
    spy.mockRestore();
  });
});
