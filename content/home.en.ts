import type { HomeContent } from './homeContent.types';
import { CALENDLY_URL, WHATSAPP_URL } from './contact';

const homeContentEn: HomeContent = {
  lang: 'en',
  nav: {
    switchLabel: 'PT',
    switchHref: '/',
  },
  hero: {
    title: 'Protect who you love, live with peace of mind',
    subtitle:
      'Life Insurance and Estate Planning consulting for families who want financial security and a clear plan for the future.',
    videoUrl: '',
    ctaLabel: 'Book a Consultation',
    calendlyUrl: CALENDLY_URL,
  },
  method: {
    heading: 'How Life Insurance works',
    body:
      'There are different types of policies — IUL (Indexed Universal Life), Whole Life, and Term Life — each serving a different purpose. Beyond protecting your family, some policies offer living benefits, letting you access part of the accumulated value while you are still alive, for emergencies or opportunities.',
    points: [
      'IUL (Indexed Universal Life): lifetime protection with growth potential tied to market indexes',
      'Whole Life: lifetime protection with guaranteed cash value',
      'Term Life: protection for a set period, at the lowest initial cost',
      'Living benefits: early access to part of the value in cases of critical illness or need',
    ],
  },
  estatePlanning: {
    heading: 'Estate Planning: protecting what you built',
    body:
      'Beyond life insurance, we help you plan how your assets will be protected and transferred, avoiding legal complications and making sure your wishes are honored.',
  },
  finalCta: {
    heading: "Let's talk about your plan",
    calendlyLabel: 'Book a Consultation',
    calendlyUrl: CALENDLY_URL,
    whatsappLabel: 'Chat on WhatsApp',
    whatsappUrl: WHATSAPP_URL,
  },
};

export default homeContentEn;
