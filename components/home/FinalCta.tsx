import type { HomeContent } from '@/content/homeContent.types';

export function FinalCta({ finalCta }: { finalCta: HomeContent['finalCta'] }) {
  return (
    <section className="flex flex-col items-center gap-4 bg-midnight px-6 py-16 text-center text-ivory">
      <h2 className="text-2xl font-semibold sm:text-3xl">{finalCta.heading}</h2>
      <p className="text-stone">{finalCta.subtext}</p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <a
          href={finalCta.calendlyUrl}
          className="rounded-sm bg-cognac px-8 py-3 font-medium text-ivory"
        >
          {finalCta.calendlyLabel}
        </a>
        <a
          href={finalCta.whatsappUrl}
          className="rounded-sm border border-sand px-8 py-3 font-medium text-ivory"
        >
          {finalCta.whatsappLabel}
        </a>
      </div>
    </section>
  );
}
