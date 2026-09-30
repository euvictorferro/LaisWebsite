import type { HomeContent } from './homeContent.types';
import { CALENDLY_URL, WHATSAPP_URL, CHECKLIST_URL } from './contact';

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
    qualifier:
      'Mesmo que você ache que "isso é assunto pra depois" ou que seu patrimônio ainda não é grande o suficiente pra precisar disso.',
    videoUrl: '',
    ctaLabel: 'Agendar Consultoria Gratuita',
    calendlyUrl: CALENDLY_URL,
  },
  pain: {
    heading: 'Até quando você vai adiar essa conversa?',
    cascadeLines: [
      'Você trabalha duro.',
      'Constrói dos dois lados da fronteira.',
      'E segue empurrando essa decisão com a barriga.',
    ],
    tiredOfHeading: 'Se você está cansado de:',
    tiredOf: [
      'Saber que "precisa organizar isso" há meses e nunca sobrar tempo',
      'Ter seguro de vida, mas nunca ter checado se ele cobre o que realmente importa',
      'Acompanhar as notícias do Brasil torcendo pro real não desabar de novo',
      'Não saber em quem confiar pra explicar isso em português, sem juridiquês',
    ],
    alreadyHeading: 'Então provavelmente você também já:',
    alreadyDone: [
      'Pensou "e se algo acontecer comigo, quem cuida da minha família nos EUA?"',
      'Adiou a conversa achando que ia doer no bolso mais do que realmente dói',
      'Viu alguém próximo enfrentar um processo de herança arrastado e complicado',
      'Decidiu "resolver isso ano que vem" — e o ano que vem virou este ano de novo',
    ],
  },
  authority: {
    heading: 'O checklist que expõe onde seu patrimônio está desprotegido',
    intro:
      'Depois de anos ajudando brasileiros nos EUA a organizar seguro de vida e sucessão, eu reuni os 12 pontos que mais aparecem como lacuna real — e quase ninguém sabe que precisa resolver.',
    points: [
      'Sua família ficaria travada num inventário lento e caro nos EUA?',
      'Seus bens no Brasil estão protegidos de um inventário judicial arrastado?',
      'Você tem uma Power of Attorney válida nos dois países?',
      'Seu seguro de vida tem liquidez imediata pra cobrir custos de sucessão sem precisar vender bens?',
    ],
    ctaLabel: 'Baixar o Checklist Gratuito',
    checklistUrl: CHECKLIST_URL,
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
  scenario: {
    heading: 'Daqui a 5 anos, qual cenário vai ser o seu?',
    scenarioALabel: 'Cenário A — sem plano',
    scenarioAItems: [
      'Sua família enfrenta o probate: 6 meses a 2 anos de processo, pago com o próprio dinheiro que deveria ser herança.',
      'Todo o seu patrimônio continua dependendo de um único país e uma única moeda.',
      'Ninguém sabe exatamente o que você queria, porque nunca ficou escrito em lugar nenhum.',
    ],
    scenarioBLabel: 'Cenário B — protegido',
    scenarioBItems: [
      'Sua família recebe o que é dela em semanas, em sigilo, sem taxas de inventário.',
      'Seu plano financeiro não depende de um cenário só — você diversificou entre os dois países.',
      'Existe um documento claro, e alguém de confiança pode agir por você se precisar.',
    ],
    bridge:
      'A diferença entre os dois cenários não é sorte. É uma conversa de 20 minutos que a maioria das pessoas continua adiando.',
  },
  faq: {
    heading: 'Perguntas frequentes',
    items: [
      {
        question: 'Isso é só pra quem já tem muito dinheiro?',
        answer:
          'Não. Se você tem uma casa, uma conta, um negócio ou uma família que depende de você, você já tem patrimônio pra proteger. A maioria dos meus clientes não se considerava "rica" antes de conversarmos.',
      },
      {
        question: 'Eu já tenho seguro de vida no Brasil, ainda preciso disso?',
        answer:
          'Seguro brasileiro não resolve o que acontece com seus bens e sua família nos EUA. São sistemas jurídicos diferentes — o que protege lá não necessariamente protege aqui.',
      },
      {
        question: 'Quanto custa a consulta?',
        answer:
          'A consulta inicial é gratuita, dura cerca de 20 minutos, e não tem nenhum compromisso. Você sai dela sabendo exatamente onde estão as lacunas do seu caso.',
      },
      {
        question: 'Preciso ser cidadão americano pra contratar um seguro de vida nos EUA?',
        answer:
          'Não necessariamente — isso depende do seu status migratório e da seguradora. Na consulta eu te explico exatamente o que se aplica ao seu caso.',
      },
      {
        question: 'Quanto tempo leva pra organizar tudo isso?',
        answer:
          'Varia por caso, mas a maior parte do processo é mais rápida do que as pessoas imaginam — o que realmente demora é a decisão de começar.',
      },
    ],
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
    subtext: 'Consulta gratuita, 20 minutos, em português — sem compromisso, sem letra miúda.',
    calendlyLabel: 'Agendar Consultoria Gratuita',
    calendlyUrl: CALENDLY_URL,
    whatsappLabel: 'Falar no WhatsApp',
    whatsappUrl: WHATSAPP_URL,
  },
};

export default homeContentPt;
