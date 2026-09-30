import type { HomeContent } from './homeContent.types';
import { CALENDLY_URL, WHATSAPP_URL, CHECKLIST_URL } from './contact';

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
    qualifier:
      'Even if you think "this is a problem for later" or that your estate isn\'t big enough yet to need this.',
    videoUrl: '',
    ctaLabel: 'Book a Free Consultation',
    calendlyUrl: CALENDLY_URL,
  },
  pain: {
    heading: 'How long are you going to put off this conversation?',
    cascadeLines: [
      'You work hard.',
      'You build on both sides of the border.',
      'And you keep pushing this decision down the road.',
    ],
    tiredOfHeading: "If you're tired of:",
    tiredOf: [
      'Knowing you "need to get this organized" for months and never finding the time',
      "Having life insurance but never checking whether it actually covers what matters",
      "Watching the news from Brazil hoping the currency doesn't crash again",
      "Not knowing who to trust to explain this in plain terms, without legal jargon",
    ],
    alreadyHeading: "Then you've probably also:",
    alreadyDone: [
      'Thought "what happens to my family in the US if something happens to me?"',
      "Put off the conversation assuming it would cost more than it actually does",
      'Watched someone close go through a long, complicated inheritance process',
      '"Decided" to deal with it next year — and next year became this year again',
    ],
  },
  authority: {
    heading: 'The checklist that exposes where your estate is unprotected',
    intro:
      "After years helping Brazilians in the US organize life insurance and succession, I put together the 12 points that show up most often as real gaps — the ones almost nobody knows they need to fix.",
    points: [
      'Would your family get stuck in a slow, expensive US probate?',
      'Are your assets in Brazil protected from a long court-supervised inventory process?',
      'Do you have a valid Power of Attorney in both countries?',
      'Does your life insurance have immediate liquidity to cover succession costs without selling assets?',
    ],
    ctaLabel: 'Download the Free Checklist',
    checklistUrl: CHECKLIST_URL,
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
  scenario: {
    heading: 'Five years from now, which scenario will be yours?',
    scenarioALabel: 'Scenario A — no plan',
    scenarioAItems: [
      'Your family faces probate: 6 months to 2 years of process, paid for with the very money that should have been their inheritance.',
      'Your entire estate still depends on a single country and a single currency.',
      "No one knows exactly what you wanted, because it was never written down anywhere.",
    ],
    scenarioBLabel: 'Scenario B — protected',
    scenarioBItems: [
      'Your family receives what is theirs in weeks, privately, without probate fees.',
      "Your financial plan doesn't depend on a single scenario — you diversified across both countries.",
      'There is a clear document, and someone you trust can act on your behalf if needed.',
    ],
    bridge:
      "The difference between the two scenarios isn't luck. It's a 20-minute conversation that most people keep putting off.",
  },
  faq: {
    heading: 'Frequently asked questions',
    items: [
      {
        question: 'Is this only for people who already have a lot of money?',
        answer:
          "No. If you own a home, an account, a business, or have a family that depends on you, you already have an estate worth protecting. Most of my clients didn't think of themselves as \"wealthy\" before we talked.",
      },
      {
        question: 'I already have life insurance in Brazil — do I still need this?',
        answer:
          "Brazilian insurance doesn't address what happens to your assets and your family in the US. These are different legal systems — what protects you there doesn't necessarily protect you here.",
      },
      {
        question: 'How much does the consultation cost?',
        answer:
          'The initial consultation is free, takes about 20 minutes, and comes with no obligation. You leave knowing exactly where the gaps are in your specific case.',
      },
      {
        question: 'Do I need to be a US citizen to get life insurance in the US?',
        answer:
          "Not necessarily — it depends on your immigration status and the insurer. I'll walk you through exactly what applies to your case during the consultation.",
      },
      {
        question: 'How long does it take to get all of this organized?',
        answer:
          'It varies by case, but most of the process is faster than people expect — what actually takes time is the decision to get started.',
      },
    ],
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
    subtext: 'Free 20-minute consultation, in Portuguese — no strings attached, no fine print.',
    calendlyLabel: 'Book a Free Consultation',
    calendlyUrl: CALENDLY_URL,
    whatsappLabel: 'Chat on WhatsApp',
    whatsappUrl: WHATSAPP_URL,
  },
};

export default homeContentEn;
