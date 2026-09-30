import type { HomeContent } from './homeContent.types';
import { CALENDLY_URL, WHATSAPP_URL } from './contact';

const homeContentPt: HomeContent = {
  lang: 'pt',
  nav: {
    switchLabel: 'EN',
    switchHref: '/en',
  },
  hero: {
    title: 'Proteção patrimonial pra quem construiu a vida entre dois países',
    subtitle:
      'Você trabalhou duro pra ter o que tem — no Brasil e nos EUA. Eu ajudo brasileiros a proteger essa história com Life Insurance e planejamento sucessório, sem depender só da sorte ou de "resolver depois".',
    videoUrl: '',
    ctaLabel: 'Agendar Consultoria Gratuita',
    calendlyUrl: CALENDLY_URL,
  },
  pain: {
    heading: 'Se algo te impedisse de decidir amanhã, o que aconteceria hoje?',
    intro:
      'A maioria das pessoas só pensa nisso quando já é tarde demais. Alguns sinais de que vale parar pra pensar agora:',
    items: [
      'Sua família nos EUA ficaria travada num inventário lento e caro se algo acontecesse com você — e provavelmente nem sabe disso.',
      'Seu patrimônio está concentrado só em real, dependendo de um único país e uma única moeda pra sustentar seu plano.',
      'Você tem seguro de vida, mas nunca parou pra ver se ele realmente cobre o custo de um probate nos EUA.',
      'Você sabe que precisa "organizar isso" há um tempo, mas não sabe nem por onde começar — ou em quem confiar pra te explicar em português.',
    ],
  },
  method: {
    heading: 'Qual seguro de vida faz sentido pra você?',
    intro:
      'Existem caminhos bem diferentes, e a maioria das pessoas só descobre a diferença tarde demais.',
    items: [
      {
        label: 'Term Life',
        body:
          'Seguro "por prazo" (10, 20 ou 30 anos). Se algo acontece nesse período, sua família recebe. Se o prazo termina e você está vivo, a apólice expira. É a opção mais barata — faz sentido se você tem dependentes pequenos, uma hipoteca com prazo definido, ou quer cobrir um período específico de risco.',
      },
      {
        label: 'Whole Life',
        body:
          'Seguro "por toda a vida". Nunca expira, e acumula valor em dinheiro que você pode acessar. Mais caro, mas dá cobertura permanente e uma camada extra de proteção patrimonial.',
      },
      {
        label: 'IUL (Indexed Universal Life)',
        body:
          'Além de proteger sua família, acumula valor vinculado ao desempenho de índices do mercado (como o S&P 500). Quando o mercado sobe, seu saldo cresce junto — mas tem um piso de proteção: se o índice cair, seu saldo acumulado não perde valor. E você não precisa esperar morrer pra usar: esse valor pode ser acessado ainda em vida, pra complementar renda, cobrir emergências ou reforçar a aposentadoria.',
      },
    ],
  },
  estatePlanning: {
    heading: 'O que acontece com seu patrimônio se algo te impedir de decidir?',
    intro:
      'Sem um planejamento sucessório, sua família enfrenta o probate — o processo judicial que confirma se o testamento é válido e autoriza a distribuição dos bens.',
    body: [
      'Nos EUA, o probate é obrigatório quando não existe um Trust. Ele leva em média de 6 meses a 2 anos, custa entre $15.000 e $50.000 — tirado direto da herança — e, diferente do que muita gente pensa, é público: qualquer pessoa pode consultar o que você deixou e para quem.',
      'Eu ajudo você a entender e organizar as peças que evitam isso: um Trust (que distribui a herança em semanas, em sigilo, sem essas taxas), um testamento atualizado, e uma Power of Attorney — pra que alguém de sua confiança possa agir por você se você não puder.',
    ],
    objectionBreak:
      'Isso não é "coisa pra rico" — é pra qualquer brasileiro nos EUA que já construiu algo e não quer deixar a família resolvendo sozinha, na dor, num sistema jurídico que não é o seu.',
  },
  about: {
    heading: 'Sobre a Laís',
    body: [
      'Sou a Laís Daltrozo. Ajudo brasileiros que construíram vida nos Estados Unidos a proteger o que conquistaram dos dois lados da fronteira — com seguro de vida e planejamento patrimonial pensados pra quem tem raiz em dois países, não só em um.',
      'Atendo em português, do jeito que você entende de verdade — sem o jurídiquês que só complica.',
    ],
  },
  finalCta: {
    heading: 'Vamos conversar sobre o seu plano?',
    subtext: 'Consulta gratuita, 20 minutos, em português — sem compromisso.',
    calendlyLabel: 'Agendar Consultoria Gratuita',
    calendlyUrl: CALENDLY_URL,
    whatsappLabel: 'Falar no WhatsApp',
    whatsappUrl: WHATSAPP_URL,
  },
};

export default homeContentPt;
