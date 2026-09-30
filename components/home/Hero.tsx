import type { HomeContent } from '@/content/homeContent.types';
import { Column } from './Column';

export function Hero({ hero }: { hero: HomeContent['hero'] }) {
  const hasVideo = hero.videoUrl.trim().length > 0;

  return (
    <section className="flex flex-col items-center gap-6 bg-midnight px-6 py-20 text-center text-ivory sm:py-28">
      <Column className="h-10 w-10 text-sand" />
      <h1 className="max-w-2xl text-3xl font-semibold sm:text-5xl">{hero.title}</h1>
      <p className="max-w-xl text-base text-stone sm:text-lg">{hero.subtitle}</p>

      <div className="aspect-video w-full max-w-2xl overflow-hidden rounded-sm bg-white/5">
        {hasVideo ? (
          <video data-testid="hero-video" src={hero.videoUrl} controls className="h-full w-full" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-stone">
            Vídeo em breve / Video coming soon
          </div>
        )}
      </div>

      <a
        href={hero.calendlyUrl}
        className="rounded-sm bg-cognac px-8 py-3 font-medium text-ivory"
      >
        {hero.ctaLabel}
      </a>

      <p className="max-w-xl text-sm text-stone">{hero.qualifier}</p>
    </section>
  );
}
