import type { HomeContent } from '@/content/homeContent.types';
import { Header } from './Header';
import { Hero } from './Hero';
import { Pain } from './Pain';
import { Method } from './Method';
import { EstatePlanning } from './EstatePlanning';
import { About } from './About';
import { FinalCta } from './FinalCta';
import { Footer } from './Footer';

export function HomePage({ content }: { content: HomeContent }) {
  return (
    <main lang={content.lang === 'pt' ? 'pt-BR' : 'en'}>
      <Header nav={content.nav} />
      <Hero hero={content.hero} />
      <Pain pain={content.pain} />
      <Method method={content.method} />
      <EstatePlanning estatePlanning={content.estatePlanning} />
      <About about={content.about} />
      <FinalCta finalCta={content.finalCta} />
      <Footer />
    </main>
  );
}
