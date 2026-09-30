import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';
import type { HomeContent } from '@/content/homeContent.types';

const baseHero: HomeContent['hero'] = {
  title: 'Test title',
  subtitle: 'Test subtitle',
  videoUrl: '',
  ctaLabel: 'Book now',
  calendlyUrl: 'https://calendly.com/example/30min',
};

describe('Hero', () => {
  it('renders the placeholder when videoUrl is empty', () => {
    render(<Hero hero={baseHero} />);
    expect(screen.getByText(/vídeo em breve|video coming soon/i)).toBeInTheDocument();
    expect(screen.queryByTestId('hero-video')).not.toBeInTheDocument();
  });

  it('renders the video when videoUrl is set', () => {
    render(<Hero hero={{ ...baseHero, videoUrl: 'https://example.com/video.mp4' }} />);
    expect(screen.getByTestId('hero-video')).toBeInTheDocument();
  });

  it('links the CTA to the calendly url', () => {
    render(<Hero hero={baseHero} />);
    const link = screen.getByRole('link', { name: 'Book now' });
    expect(link).toHaveAttribute('href', 'https://calendly.com/example/30min');
  });
});
