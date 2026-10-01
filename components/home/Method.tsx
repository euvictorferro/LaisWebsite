import type { HomeContent } from '@/content/homeContent.types';
import { ImagePlaceholder } from './ImagePlaceholder';

export function Method({ method }: { method: HomeContent['method'] }) {
  return (
    <section id="metodo" className="mx-auto max-w-6xl px-6 py-28 sm:py-40">
      <div className="grid gap-10 sm:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] sm:items-end sm:gap-16">
        <div>
          <h2 className="font-serif text-4xl font-normal text-midnight sm:text-5xl">{method.heading}</h2>
          <p className="mt-4 max-w-md text-midnight/70">{method.intro}</p>
        </div>
        <ImagePlaceholder label="Comparativo das apólices" className="aspect-[16/10] w-full" />
      </div>
      <div className="mt-16 grid gap-10 border-t border-midnight/10 pt-10 sm:grid-cols-3 sm:gap-8">
        {method.items.map((item) => (
          <div key={item.label} className="border-l-2 border-sand pl-5">
            <h3 className="font-semibold text-cognac">{item.label}</h3>
            <p className="mt-2 text-midnight/80">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
