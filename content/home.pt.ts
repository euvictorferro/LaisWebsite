import type { HomeContent } from './homeContent.types';
import { CALENDLY_URL, WHATSAPP_URL } from './contact';

const homeContentPt: HomeContent = {
  lang: 'pt',
  nav: {
    switchLabel: 'EN',
    switchHref: '/en',
  },
  hero: {
    title: 'Proteja quem você ama, viva com tranquilidade',
    subtitle:
      'Consultoria em Life Insurance e Estate Planning para famílias que querem segurança financeira e um plano claro para o futuro.',
    videoUrl: '',
    ctaLabel: 'Agendar Consultoria',
    calendlyUrl: CALENDLY_URL,
  },
  method: {
    heading: 'Como funciona o Life Insurance',
    body:
      'Existem diferentes tipos de apólice — IUL (Indexed Universal Life), Whole Life e Term Life — cada uma com um propósito diferente. Além da proteção para sua família, algumas modalidades oferecem benefícios em vida, permitindo acesso a parte do valor acumulado ainda em vida, para emergências ou oportunidades.',
    points: [
      'IUL (Indexed Universal Life): proteção vitalícia com potencial de crescimento atrelado a índices de mercado',
      'Whole Life: proteção vitalícia com valor em dinheiro garantido',
      'Term Life: proteção por um período determinado, com o menor custo inicial',
      'Benefícios em vida: acesso antecipado a parte do valor em casos de doença grave ou necessidade',
    ],
  },
  estatePlanning: {
    heading: 'Estate Planning: o complemento para proteger seu patrimônio',
    body:
      'Além do seguro de vida, ajudamos você a planejar como seus bens serão protegidos e transferidos, evitando complicações legais e garantindo que sua vontade seja respeitada.',
  },
  finalCta: {
    heading: 'Vamos conversar sobre o seu plano?',
    calendlyLabel: 'Agendar Consultoria',
    calendlyUrl: CALENDLY_URL,
    whatsappLabel: 'Falar no WhatsApp',
    whatsappUrl: WHATSAPP_URL,
  },
};

export default homeContentPt;
