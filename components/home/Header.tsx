import Image from 'next/image';
import type { HomeContent } from '@/content/homeContent.types';

export function Header({ nav }: { nav: HomeContent['nav'] }) {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-stone/20 bg-ivory/90 px-6 py-7 backdrop-blur-sm sm:px-10">
      <Image src="/brand/logo-black.png" alt="Daltrozo" width={140} height={70} className="h-9 w-auto" priority />
      <a href={nav.switchHref} className="text-sm text-stone transition-colors hover:text-cognac">
        {nav.switchLabel}
      </a>
    </header>
  );
}
