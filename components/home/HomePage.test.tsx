import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HomePage } from './HomePage';
import homeContentPt from '@/content/home.pt';

describe('HomePage', () => {
  it('renders all sections from the given content', () => {
    render(<HomePage content={homeContentPt} />);
    expect(screen.getByText(homeContentPt.hero.title)).toBeInTheDocument();
    expect(screen.getByText(homeContentPt.method.heading)).toBeInTheDocument();
    expect(screen.getByText(homeContentPt.estatePlanning.heading)).toBeInTheDocument();
    expect(screen.getByText(homeContentPt.finalCta.heading)).toBeInTheDocument();
  });
});
