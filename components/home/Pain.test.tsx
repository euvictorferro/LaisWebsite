import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Pain } from './Pain';
import type { HomeContent } from '@/content/homeContent.types';

const pain: HomeContent['pain'] = {
  heading: 'Pain heading',
  cascadeLines: ['Line one', 'Line two'],
  tiredOfHeading: 'Tired of heading',
  tiredOf: ['Tired item A'],
  alreadyHeading: 'Already heading',
  alreadyDone: ['Already item A'],
};

describe('Pain', () => {
  it('renders heading, cascade lines, and both bullet lists', () => {
    render(<Pain pain={pain} />);
    expect(screen.getByText('Pain heading')).toBeInTheDocument();
    expect(screen.getByText('Line one')).toBeInTheDocument();
    expect(screen.getByText('Line two')).toBeInTheDocument();
    expect(screen.getByText('Tired of heading')).toBeInTheDocument();
    expect(screen.getByText('Tired item A')).toBeInTheDocument();
    expect(screen.getByText('Already heading')).toBeInTheDocument();
    expect(screen.getByText('Already item A')).toBeInTheDocument();
  });
});
