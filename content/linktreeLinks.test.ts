import { describe, it, expect } from 'vitest';
import { linktreeLinks } from './linktreeLinks';

describe('linktreeLinks', () => {
  it('includes the Calendly, WhatsApp, and checklist links', () => {
    const urls = linktreeLinks.map((link) => link.url);
    expect(urls).toContain('https://calendly.com/laisdaltrozo/30min');
    expect(urls).toContain('https://wa.me/13127097886');
    expect(urls.some((url) => url.includes('drive.google.com'))).toBe(true);
  });

  it('every link has a non-empty label and a valid-looking url', () => {
    for (const link of linktreeLinks) {
      expect(link.label.length).toBeGreaterThan(0);
      expect(link.url).toMatch(/^https:\/\//);
    }
  });
});
