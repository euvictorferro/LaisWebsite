import type { HomeContent } from './homeContent.types';
import { CALENDLY_URL, WHATSAPP_URL } from './contact';

const homeContentEn: HomeContent = {
  lang: 'en',
  nav: {
    switchLabel: 'PT',
    switchHref: '/',
  },
  hero: {
    title: 'Wealth protection for a life built between two countries',
    subtitle:
      'You worked hard for what you have — in Brazil and in the US. I help Brazilians protect that story with Life Insurance and estate planning, instead of leaving it to luck or "figuring it out later."',
    videoUrl: '',
    ctaLabel: 'Book a Free Consultation',
    calendlyUrl: CALENDLY_URL,
  },
  pain: {
    heading: "If something stopped you from deciding tomorrow, what would happen today?",
    intro:
      "Most people only think about this when it's already too late. A few signs it's worth stopping to think now:",
    items: [
      "Your family in the US would get stuck in a slow, expensive probate if something happened to you — and probably doesn't even know it.",
      'Your wealth is concentrated in a single currency and a single country, with your whole plan depending on it.',
      "You have life insurance, but you've never checked whether it actually covers the cost of a US probate.",
      "You've known you need to \"get this sorted\" for a while, but don't know where to start — or who to trust to explain it in plain terms.",
    ],
  },
  method: {
    heading: 'Which life insurance actually fits you?',
    intro:
      'There are very different paths here, and most people only find out the difference when it is too late.',
    items: [
      {
        label: 'Term Life',
        body:
          'Insurance "for a term" (10, 20, or 30 years). If something happens during that period, your family gets paid. If the term ends and you are still alive, the policy expires. It is the cheapest option — makes sense if you have young dependents, a mortgage with a fixed term, or want to cover a specific window of risk.',
      },
      {
        label: 'Whole Life',
        body:
          'Insurance "for life." It never expires, and it builds cash value you can access. More expensive, but it gives permanent coverage and an extra layer of wealth protection.',
      },
      {
        label: 'IUL (Indexed Universal Life)',
        body:
          'Beyond protecting your family, it builds value tied to the performance of market indexes (like the S&P 500). When the market goes up, your balance grows with it — but there is a protection floor: if the index drops, your accumulated balance does not lose value. And you do not have to wait to pass away to use it: that value can be accessed while you are alive, to supplement income, cover emergencies, or boost retirement.',
      },
    ],
  },
  estatePlanning: {
    heading: 'What happens to your estate if something stops you from deciding?',
    intro:
      'Without an estate plan, your family faces probate — the court process that confirms whether a will is valid and authorizes the distribution of assets.',
    body: [
      'In the US, probate is mandatory when there is no Trust in place. It takes 6 months to 2 years on average, costs between $15,000 and $50,000 — taken directly out of the inheritance — and, unlike what most people think, it is public: anyone can look up what you left behind and to whom.',
      'I help you understand and put together the pieces that avoid this: a Trust (which distributes the inheritance in weeks, privately, without those fees), an up-to-date will, and a Power of Attorney — so someone you trust can act on your behalf if you cannot.',
    ],
    objectionBreak:
      "This is not \"just for the wealthy\" — it's for any Brazilian in the US who has already built something and doesn't want their family sorting it out alone, in grief, inside a legal system that isn't their own.",
  },
  about: {
    heading: 'About Laís',
    body: [
      'I am Laís Daltrozo. I help Brazilians who built a life in the United States protect what they earned on both sides of the border — with life insurance and estate planning built for people rooted in two countries, not just one.',
      "I work with clients in Portuguese, in terms you actually understand — no legal jargon that just gets in the way.",
    ],
  },
  finalCta: {
    heading: "Let's talk about your plan",
    subtext: 'Free 20-minute consultation, in Portuguese — no strings attached.',
    calendlyLabel: 'Book a Free Consultation',
    calendlyUrl: CALENDLY_URL,
    whatsappLabel: 'Chat on WhatsApp',
    whatsappUrl: WHATSAPP_URL,
  },
};

export default homeContentEn;
