import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Pain } from './Pain';
import type { HomeContent } from '@/content/homeContent.types';

const pain: HomeContent['pain'] = {
  heading: 'Pain heading',
  intro: 'Pain intro',
  items: ['Pain item A', 'Pain item B'],
};

describe('Pain', () => {
  it('renders heading, intro, and all items', () => {
    render(<Pain pain={pain} />);
    expect(screen.getByText('Pain heading')).toBeInTheDocument();
    expect(screen.getByText('Pain intro')).toBeInTheDocument();
    expect(screen.getByText('Pain item A')).toBeInTheDocument();
    expect(screen.getByText('Pain item B')).toBeInTheDocument();
  });
});
