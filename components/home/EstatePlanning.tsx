import type { HomeContent } from '@/content/homeContent.types';

export function EstatePlanning({
  estatePlanning,
}: {
  estatePlanning: HomeContent['estatePlanning'];
}) {
  return (
    <section id="servicos" className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="text-2xl font-bold sm:text-3xl">{estatePlanning.heading}</h2>
      <p className="mt-4 text-gray-600">{estatePlanning.intro}</p>
      <div className="mt-4 space-y-4 text-gray-700">
        {estatePlanning.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <p className="mt-6 border-l-4 border-gray-300 pl-4 italic text-gray-600">
        {estatePlanning.objectionBreak}
      </p>
    </section>
  );
}
