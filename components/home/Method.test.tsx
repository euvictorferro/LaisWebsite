import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Method } from './Method';
import type { HomeContent } from '@/content/homeContent.types';

const method: HomeContent['method'] = {
  heading: 'How it works',
  body: 'Some body text',
  points: ['Point A', 'Point B'],
};

describe('Method', () => {
  it('renders with anchor id "metodo"', () => {
    const { container } = render(<Method method={method} />);
    expect(container.querySelector('section#metodo')).not.toBeNull();
  });

  it('renders all points as a list', () => {
    render(<Method method={method} />);
    expect(screen.getByText('Point A')).toBeInTheDocument();
    expect(screen.getByText('Point B')).toBeInTheDocument();
  });
});
