import type { HomeContent } from '@/content/homeContent.types';
import { Header } from './Header';
import { Hero } from './Hero';
import { Method } from './Method';
import { EstatePlanning } from './EstatePlanning';
import { FinalCta } from './FinalCta';
import { Footer } from './Footer';

export function HomePage({ content }: { content: HomeContent }) {
  return (
    <main lang={content.lang === 'pt' ? 'pt-BR' : 'en'}>
      <Header nav={content.nav} />
      <Hero hero={content.hero} />
      <Method method={content.method} />
      <EstatePlanning estatePlanning={content.estatePlanning} />
      <FinalCta finalCta={content.finalCta} />
      <Footer />
    </main>
  );
}
