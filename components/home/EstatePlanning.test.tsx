import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { EstatePlanning } from './EstatePlanning';
import type { HomeContent } from '@/content/homeContent.types';

const estatePlanning: HomeContent['estatePlanning'] = {
  heading: 'Estate Planning heading',
  intro: 'Estate Planning intro',
  body: ['Paragraph one', 'Paragraph two'],
  objectionBreak: 'Not just for the wealthy',
};

describe('EstatePlanning', () => {
  it('renders with anchor id "servicos" so /servicos redirects here', () => {
    const { container } = render(<EstatePlanning estatePlanning={estatePlanning} />);
    expect(container.querySelector('section#servicos')).not.toBeNull();
  });

  it('renders heading, intro, all body paragraphs, and the objection break', () => {
    render(<EstatePlanning estatePlanning={estatePlanning} />);
    expect(screen.getByText('Estate Planning heading')).toBeInTheDocument();
    expect(screen.getByText('Estate Planning intro')).toBeInTheDocument();
    expect(screen.getByText('Paragraph one')).toBeInTheDocument();
    expect(screen.getByText('Paragraph two')).toBeInTheDocument();
    expect(screen.getByText('Not just for the wealthy')).toBeInTheDocument();
  });
});
