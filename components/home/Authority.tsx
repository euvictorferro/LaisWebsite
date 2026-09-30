import type { HomeContent } from '@/content/homeContent.types';
import { Column } from './Column';

export function Authority({ authority }: { authority: HomeContent['authority'] }) {
  return (
    <section className="bg-white px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-serif text-3xl font-medium text-midnight sm:text-4xl">{authority.heading}</h2>
        <p className="mt-4 text-midnight/70">{authority.intro}</p>
        <ul className="mt-6 space-y-4">
          {authority.points.map((point) => (
            <li key={point} className="flex items-start gap-3 text-midnight/80">
              <Column className="mt-0.5 h-5 w-5 shrink-0 text-cognac" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <a
          href={authority.checklistUrl}
          className="mt-8 inline-block rounded-sm border border-cognac px-8 py-3 font-medium text-cognac hover:bg-cognac hover:text-ivory"
        >
          {authority.ctaLabel}
        </a>
      </div>
    </section>
  );
}
