import { describe, it, expect } from 'vitest';
import homeContentPt from './home.pt';
import homeContentEn from './home.en';
import type { HomeContent } from './homeContent.types';

function assertShape(content: HomeContent, lang: 'pt' | 'en') {
  expect(content.lang).toBe(lang);
  expect(content.hero.title.length).toBeGreaterThan(0);
  expect(content.hero.calendlyUrl).toMatch(/^https:\/\/calendly\.com\//);
  expect(content.pain.tiredOf.length).toBeGreaterThan(0);
  expect(content.pain.alreadyDone.length).toBeGreaterThan(0);
  expect(content.authority.points.length).toBeGreaterThan(0);
  expect(content.authority.checklistUrl).toMatch(/^https:\/\//);
  expect(content.method.items.length).toBeGreaterThan(0);
  expect(content.estatePlanning.body.length).toBeGreaterThan(0);
  expect(content.scenario.scenarioAItems.length).toBeGreaterThan(0);
  expect(content.scenario.scenarioBItems.length).toBeGreaterThan(0);
  expect(content.faq.items.length).toBeGreaterThan(0);
  expect(content.about.body.length).toBeGreaterThan(0);
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
