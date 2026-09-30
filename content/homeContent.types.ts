export interface HomeContent {
  lang: 'pt' | 'en';
  nav: {
    switchLabel: string;
    switchHref: string;
  };
  hero: {
    title: string;
    subtitle: string;
    videoUrl: string;
    ctaLabel: string;
    calendlyUrl: string;
  };
  method: {
    heading: string;
    body: string;
    points: string[];
  };
  estatePlanning: {
    heading: string;
    body: string;
  };
  finalCta: {
    heading: string;
    calendlyLabel: string;
    calendlyUrl: string;
    whatsappLabel: string;
    whatsappUrl: string;
  };
}
