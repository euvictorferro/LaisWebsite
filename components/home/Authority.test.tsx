import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Authority } from './Authority';
import type { HomeContent } from '@/content/homeContent.types';

const authority: HomeContent['authority'] = {
  heading: 'Authority heading',
  intro: 'Authority intro',
  points: ['Point A', 'Point B'],
  ctaLabel: 'Download it',
  checklistUrl: 'https://drive.google.com/example',
};

describe('Authority', () => {
  it('renders heading, intro, points, and the checklist CTA link', () => {
    render(<Authority authority={authority} />);
    expect(screen.getByText('Authority heading')).toBeInTheDocument();
    expect(screen.getByText('Authority intro')).toBeInTheDocument();
    expect(screen.getByText('Point A')).toBeInTheDocument();
    expect(screen.getByText('Point B')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Download it' })).toHaveAttribute(
      'href',
      'https://drive.google.com/example'
    );
  });
});
