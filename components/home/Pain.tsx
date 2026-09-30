import type { HomeContent } from '@/content/homeContent.types';

export function Pain({ pain }: { pain: HomeContent['pain'] }) {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-6 py-24 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] sm:gap-16 sm:py-32">
      <div>
        <h2 className="font-serif text-4xl font-normal leading-tight text-midnight sm:text-5xl">
          {pain.heading}
        </h2>
        <div className="mt-6 space-y-1 font-serif text-xl italic text-cognac">
          {pain.cascadeLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-midnight">{pain.tiredOfHeading}</h3>
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
      </div>
    </section>
  );
}
