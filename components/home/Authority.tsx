import type { HomeContent } from '@/content/homeContent.types';
import { Column } from './Column';
import { Cta } from './Cta';
import { ImagePlaceholder } from './ImagePlaceholder';

export function Authority({ authority }: { authority: HomeContent['authority'] }) {
  return (
    <section className="bg-white px-6 py-28 sm:py-40">
      <div className="mx-auto grid max-w-6xl gap-12 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] sm:items-start sm:gap-20">
        <ImagePlaceholder label="Print do checklist" className="aspect-[4/5] w-full" />
        <div>
          <h2 className="font-serif text-4xl font-normal text-midnight sm:text-5xl">{authority.heading}</h2>
          <p className="mt-4 max-w-xl text-midnight/70">{authority.intro}</p>
          <ul className="mt-8 space-y-4 border-t border-midnight/10 pt-8">
            {authority.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-midnight/80">
                <Column className="mt-0.5 h-5 w-5 shrink-0 text-cognac" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <Cta href={authority.checklistUrl} variant="outline-dark" className="mt-8">
            {authority.ctaLabel}
          </Cta>
        </div>
      </div>
    </section>
  );
}
