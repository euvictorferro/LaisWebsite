import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { About } from './About';
import type { HomeContent } from '@/content/homeContent.types';

const about: HomeContent['about'] = {
  heading: 'About heading',
  body: ['Paragraph one', 'Paragraph two'],
};

describe('About', () => {
  it('renders heading and all body paragraphs', () => {
    render(<About about={about} />);
    expect(screen.getByText('About heading')).toBeInTheDocument();
    expect(screen.getByText('Paragraph one')).toBeInTheDocument();
    expect(screen.getByText('Paragraph two')).toBeInTheDocument();
  });
});
