import type { HomeContent } from '@/content/homeContent.types';
import { Column } from './Column';
import { Cta } from './Cta';

export function Hero({ hero }: { hero: HomeContent['hero'] }) {
  const hasVideo = hero.videoUrl.trim().length > 0;

  return (
    <section className="bg-midnight text-ivory">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 pb-16 pt-20 sm:grid-cols-12 sm:gap-6 sm:pt-28">
        <div className="sm:col-span-3 sm:flex sm:items-end sm:pb-2">
          <Column className="h-9 w-9 text-sand" />
        </div>

        <div className="sm:col-span-9">
          <h1 className="font-serif text-5xl font-medium leading-[1.05] sm:text-6xl lg:text-7xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-stone">{hero.subtitle}</p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Cta href={hero.calendlyUrl}>{hero.ctaLabel}</Cta>
            <p className="max-w-xs text-sm text-stone/80">{hero.qualifier}</p>
          </div>
        </div>
      </div>

      <div className="relative mt-16 aspect-[16/7] w-full overflow-hidden border-t border-ivory/10 bg-white/5 sm:mt-20">
        {hasVideo ? (
          <video data-testid="hero-video" src={hero.videoUrl} controls className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-stone">
            Vídeo em breve / Video coming soon
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent" />
      </div>
    </section>
  );
}
