export interface HomeContent {
  lang: 'pt' | 'en';
  nav: {
    switchLabel: string;
    switchHref: string;
  };
  hero: {
    title: string;
    subtitle: string;
    qualifier: string;
    videoUrl: string;
    ctaLabel: string;
    calendlyUrl: string;
  };
  pain: {
    heading: string;
    cascadeLines: string[];
    tiredOfHeading: string;
    tiredOf: string[];
    alreadyHeading: string;
    alreadyDone: string[];
  };
  authority: {
    heading: string;
    intro: string;
    points: string[];
    ctaLabel: string;
    checklistUrl: string;
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
  scenario: {
    heading: string;
    scenarioALabel: string;
    scenarioAItems: string[];
    scenarioBLabel: string;
    scenarioBItems: string[];
    bridge: string;
  };
  faq: {
    heading: string;
    items: {
      question: string;
      answer: string;
    }[];
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
