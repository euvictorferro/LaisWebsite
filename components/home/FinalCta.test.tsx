import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { FinalCta } from './FinalCta';
import type { HomeContent } from '@/content/homeContent.types';

const finalCta: HomeContent['finalCta'] = {
  heading: 'Talk to us',
  calendlyLabel: 'Book now',
  calendlyUrl: 'https://calendly.com/example/30min',
  whatsappLabel: 'WhatsApp us',
  whatsappUrl: 'https://wa.me/1234567890',
};

describe('FinalCta', () => {
  it('renders both CTA links with correct hrefs', () => {
    render(<FinalCta finalCta={finalCta} />);
    expect(screen.getByRole('link', { name: 'Book now' })).toHaveAttribute(
      'href',
      'https://calendly.com/example/30min'
    );
    expect(screen.getByRole('link', { name: 'WhatsApp us' })).toHaveAttribute(
      'href',
      'https://wa.me/1234567890'
    );
  });
});
