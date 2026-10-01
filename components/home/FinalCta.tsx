import type { HomeContent } from '@/content/homeContent.types';
import { Cta } from './Cta';

export function FinalCta({ finalCta }: { finalCta: HomeContent['finalCta'] }) {
  return (
    <section className="flex flex-col items-center gap-6 bg-midnight px-6 py-24 text-center text-ivory sm:py-32">
      <h2 className="font-serif text-4xl font-medium sm:text-5xl">{finalCta.heading}</h2>
      <p className="max-w-md text-stone">{finalCta.subtext}</p>
      <div className="mt-2 flex flex-col gap-4 sm:flex-row">
        <Cta href={finalCta.calendlyUrl}>{finalCta.calendlyLabel}</Cta>
        <Cta href={finalCta.whatsappUrl} variant="outline-light">
          {finalCta.whatsappLabel}
        </Cta>
      </div>
    </section>
  );
}
