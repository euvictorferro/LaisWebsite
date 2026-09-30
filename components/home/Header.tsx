import type { HomeContent } from '@/content/homeContent.types';

export function Header({ nav }: { nav: HomeContent['nav'] }) {
  return (
    <header className="flex items-center justify-between px-6 py-4">
      <span className="font-semibold">Laís Daltrozo</span>
      <a href={nav.switchHref} className="text-sm underline">
        {nav.switchLabel}
      </a>
    </header>
  );
}
