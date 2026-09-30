import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { EstatePlanning } from './EstatePlanning';
import type { HomeContent } from '@/content/homeContent.types';

const estatePlanning: HomeContent['estatePlanning'] = {
  heading: 'Estate Planning heading',
  body: 'Estate Planning body',
};

describe('EstatePlanning', () => {
  it('renders with anchor id "servicos" so /servicos redirects here', () => {
    const { container } = render(<EstatePlanning estatePlanning={estatePlanning} />);
    expect(container.querySelector('section#servicos')).not.toBeNull();
  });

  it('renders heading and body', () => {
    render(<EstatePlanning estatePlanning={estatePlanning} />);
    expect(screen.getByText('Estate Planning heading')).toBeInTheDocument();
    expect(screen.getByText('Estate Planning body')).toBeInTheDocument();
  });
});
