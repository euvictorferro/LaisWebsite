import type { HomeContent } from '@/content/homeContent.types';

export function Authority({ authority }: { authority: HomeContent['authority'] }) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="text-2xl font-bold sm:text-3xl">{authority.heading}</h2>
      <p className="mt-4 text-gray-600">{authority.intro}</p>
      <ul className="mt-6 list-disc space-y-2 pl-5 text-gray-700">
        {authority.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <a
        href={authority.checklistUrl}
        className="mt-6 inline-block rounded-full border border-black px-8 py-3 font-medium"
      >
        {authority.ctaLabel}
      </a>
    </section>
  );
}
