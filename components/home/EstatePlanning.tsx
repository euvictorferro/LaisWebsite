import type { HomeContent } from '@/content/homeContent.types';
import { ImagePlaceholder } from './ImagePlaceholder';

export function EstatePlanning({
  estatePlanning,
}: {
  estatePlanning: HomeContent['estatePlanning'];
}) {
  return (
    <section id="servicos" className="bg-white px-6 py-28 sm:py-40">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-16">
        <div>
          <h2 className="font-serif text-4xl font-normal leading-tight text-midnight sm:text-5xl">
            {estatePlanning.heading}
          </h2>
          <ImagePlaceholder label="Diagrama do Trust" className="mt-8 aspect-[4/3] w-full" />
        </div>
        <div>
          <p className="text-midnight/70">{estatePlanning.intro}</p>
          <div className="mt-4 space-y-4 text-midnight/80">
            {estatePlanning.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-6 border-l-2 border-cognac pl-5 font-serif italic text-midnight/80">
            {estatePlanning.objectionBreak}
          </p>
        </div>
      </div>
    </section>
  );
}
