import Image from 'next/image';
import type { HomeContent } from '@/content/homeContent.types';

export function Header({ nav }: { nav: HomeContent['nav'] }) {
  return (
    <header className="flex items-center justify-between px-6 py-5">
      <Image src="/brand/logo-black.png" alt="Daltrozo" width={140} height={70} className="h-10 w-auto" priority />
      <a href={nav.switchHref} className="text-sm font-medium text-stone hover:text-cognac">
        {nav.switchLabel}
      </a>
    </header>
  );
}
