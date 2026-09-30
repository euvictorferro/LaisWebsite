import type { HomeContent } from '@/content/homeContent.types';

export function Method({ method }: { method: HomeContent['method'] }) {
  return (
    <section id="metodo" className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="text-2xl font-bold sm:text-3xl">{method.heading}</h2>
      <p className="mt-4 text-gray-600">{method.body}</p>
      <ul className="mt-6 list-disc space-y-2 pl-5 text-gray-700">
        {method.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </section>
  );
}
