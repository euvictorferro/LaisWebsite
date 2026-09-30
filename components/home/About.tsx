import type { HomeContent } from '@/content/homeContent.types';

export function About({ about }: { about: HomeContent['about'] }) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="text-2xl font-bold sm:text-3xl">{about.heading}</h2>
      <div className="mt-4 space-y-4 text-gray-700">
        {about.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
