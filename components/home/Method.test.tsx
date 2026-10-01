import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Method } from './Method';
import type { HomeContent } from '@/content/homeContent.types';

const method: HomeContent['method'] = {
  heading: 'How it works',
  intro: 'Some intro text',
  items: [
    { label: 'Term Life', body: 'Body A' },
    { label: 'Whole Life', body: 'Body B' },
  ],
};

describe('Method', () => {
  it('renders with anchor id "metodo"', () => {
    const { container } = render(<Method method={method} />);
    expect(container.querySelector('section#metodo')).not.toBeNull();
  });

  it('renders all items with label and body', () => {
    render(<Method method={method} />);
    expect(screen.getByText('Term Life')).toBeInTheDocument();
    expect(screen.getByText('Body A')).toBeInTheDocument();
    expect(screen.getByText('Whole Life')).toBeInTheDocument();
    expect(screen.getByText('Body B')).toBeInTheDocument();
  });
});
