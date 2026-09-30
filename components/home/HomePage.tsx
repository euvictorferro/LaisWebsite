import type { HomeContent } from '@/content/homeContent.types';
import { Header } from './Header';
import { Hero } from './Hero';
import { Pain } from './Pain';
import { Authority } from './Authority';
import { Method } from './Method';
import { PhotoBreak } from './PhotoBreak';
import { EstatePlanning } from './EstatePlanning';
import { Scenario } from './Scenario';
import { Faq } from './Faq';
import { About } from './About';
import { FinalCta } from './FinalCta';
import { Footer } from './Footer';

export function HomePage({ content }: { content: HomeContent }) {
  return (
    <main lang={content.lang === 'pt' ? 'pt-BR' : 'en'}>
      <Header nav={content.nav} />
      <Hero hero={content.hero} />
      <Pain pain={content.pain} />
      <Authority authority={content.authority} />
      <Method method={content.method} />
      <PhotoBreak />
      <EstatePlanning estatePlanning={content.estatePlanning} />
      <Scenario scenario={content.scenario} />
      <Faq faq={content.faq} />
      <About about={content.about} />
      <FinalCta finalCta={content.finalCta} />
      <Footer />
    </main>
  );
}
