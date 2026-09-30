import type { HomeContent } from '@/content/homeContent.types';

export function EstatePlanning({
  estatePlanning,
}: {
  estatePlanning: HomeContent['estatePlanning'];
}) {
  return (
    <section id="servicos" className="bg-white px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-2xl font-semibold text-midnight sm:text-3xl">{estatePlanning.heading}</h2>
        <p className="mt-4 text-midnight/70">{estatePlanning.intro}</p>
        <div className="mt-4 space-y-4 text-midnight/80">
          {estatePlanning.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <p className="mt-6 border-l-2 border-cognac pl-5 font-serif italic text-midnight/80">
          {estatePlanning.objectionBreak}
        </p>
      </div>
    </section>
  );
}
