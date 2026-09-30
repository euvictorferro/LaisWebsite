import type { HomeContent } from '@/content/homeContent.types';

export function Hero({ hero }: { hero: HomeContent['hero'] }) {
  const hasVideo = hero.videoUrl.trim().length > 0;

  return (
    <section className="flex flex-col items-center gap-6 px-6 py-16 text-center sm:py-24">
      <h1 className="text-3xl font-bold sm:text-5xl">{hero.title}</h1>
      <p className="max-w-xl text-base text-gray-600 sm:text-lg">{hero.subtitle}</p>

      <div className="aspect-video w-full max-w-2xl overflow-hidden rounded-lg bg-gray-100">
        {hasVideo ? (
          <video data-testid="hero-video" src={hero.videoUrl} controls className="h-full w-full" />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-gray-400">
            Vídeo em breve / Video coming soon
          </div>
        )}
      </div>

      <a
        href={hero.calendlyUrl}
        className="rounded-full bg-black px-8 py-3 font-medium text-white"
      >
        {hero.ctaLabel}
      </a>
    </section>
  );
}
