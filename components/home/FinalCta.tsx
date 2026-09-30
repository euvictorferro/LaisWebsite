import type { HomeContent } from '@/content/homeContent.types';

export function FinalCta({ finalCta }: { finalCta: HomeContent['finalCta'] }) {
  return (
    <section className="flex flex-col items-center gap-4 px-6 py-16 text-center">
      <h2 className="text-2xl font-bold sm:text-3xl">{finalCta.heading}</h2>
      <div className="flex flex-col gap-3 sm:flex-row">
        <a
          href={finalCta.calendlyUrl}
          className="rounded-full bg-black px-8 py-3 font-medium text-white"
        >
          {finalCta.calendlyLabel}
        </a>
        <a
          href={finalCta.whatsappUrl}
          className="rounded-full border border-black px-8 py-3 font-medium"
        >
          {finalCta.whatsappLabel}
        </a>
      </div>
    </section>
  );
}
