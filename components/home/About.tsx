import Image from 'next/image';
import type { HomeContent } from '@/content/homeContent.types';

export function About({ about }: { about: HomeContent['about'] }) {
  return (
    <section className="bg-white px-6 py-28 sm:py-40">
      <div className="mx-auto grid max-w-5xl gap-10 sm:grid-cols-[240px_1fr] sm:items-start sm:gap-14">
        <Image
          src="/brand/lais-about.jpg"
          alt="Laís Daltrozo"
          width={400}
          height={600}
          className="aspect-[2/3] w-full object-cover"
        />
        <div>
          <h2 className="font-serif text-4xl font-normal text-midnight sm:text-5xl">{about.heading}</h2>
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
