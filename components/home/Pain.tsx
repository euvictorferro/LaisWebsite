import type { HomeContent } from '@/content/homeContent.types';

export function Pain({ pain }: { pain: HomeContent['pain'] }) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="text-2xl font-bold sm:text-3xl">{pain.heading}</h2>
      <p className="mt-4 text-gray-600">{pain.intro}</p>
      <ul className="mt-6 list-disc space-y-3 pl-5 text-gray-700">
        {pain.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
