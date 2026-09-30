import type { HomeContent } from '@/content/homeContent.types';

export function Pain({ pain }: { pain: HomeContent['pain'] }) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      <h2 className="font-serif text-3xl font-medium text-midnight sm:text-4xl">{pain.heading}</h2>

      <div className="mt-6 space-y-1 font-serif text-xl italic text-cognac sm:text-2xl">
        {pain.cascadeLines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>

      <h3 className="mt-10 font-semibold text-midnight">{pain.tiredOfHeading}</h3>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-midnight/80">
        {pain.tiredOf.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h3 className="mt-8 font-semibold text-midnight">{pain.alreadyHeading}</h3>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-midnight/80">
        {pain.alreadyDone.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
