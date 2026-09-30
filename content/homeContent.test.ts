import { describe, it, expect } from 'vitest';
import homeContentPt from './home.pt';
import homeContentEn from './home.en';
import type { HomeContent } from './homeContent.types';

function assertShape(content: HomeContent, lang: 'pt' | 'en') {
  expect(content.lang).toBe(lang);
  expect(content.hero.title.length).toBeGreaterThan(0);
  expect(content.hero.calendlyUrl).toMatch(/^https:\/\/calendly\.com\//);
  expect(content.method.points.length).toBeGreaterThan(0);
  expect(content.estatePlanning.body.length).toBeGreaterThan(0);
  expect(content.finalCta.whatsappUrl).toMatch(/^https:\/\/wa\.me\//);
}

describe('home content', () => {
  it('pt content has the required shape', () => {
    assertShape(homeContentPt, 'pt');
  });

  it('en content has the required shape', () => {
    assertShape(homeContentEn, 'en');
  });

  it('nav switch hrefs point at each other', () => {
    expect(homeContentPt.nav.switchHref).toBe('/en');
    expect(homeContentEn.nav.switchHref).toBe('/');
  });
});
