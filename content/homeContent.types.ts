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
  pain: {
    heading: string;
    intro: string;
    items: string[];
  };
  method: {
    heading: string;
    intro: string;
    items: {
      label: string;
      body: string;
    }[];
  };
  estatePlanning: {
    heading: string;
    intro: string;
    body: string[];
    objectionBreak: string;
  };
  about: {
    heading: string;
    body: string[];
  };
  finalCta: {
    heading: string;
    subtext: string;
    calendlyLabel: string;
    calendlyUrl: string;
    whatsappLabel: string;
    whatsappUrl: string;
  };
}
