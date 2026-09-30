import Image from 'next/image';
import type { HomeContent } from '@/content/homeContent.types';

export function About({ about }: { about: HomeContent['about'] }) {
  return (
    <section className="bg-white px-6 py-16">
      <div className="mx-auto grid max-w-3xl gap-8 sm:grid-cols-[200px_1fr] sm:items-start">
        <Image
          src="/brand/lais-about.jpg"
          alt="Laís Daltrozo"
          width={400}
          height={600}
          className="aspect-[2/3] w-full rounded-sm object-cover"
        />
        <div>
          <h2 className="text-2xl font-semibold text-midnight sm:text-3xl">{about.heading}</h2>
          <div className="mt-4 space-y-4 text-midnight/80">
            {about.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
