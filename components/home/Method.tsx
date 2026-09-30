import type { HomeContent } from '@/content/homeContent.types';

export function Method({ method }: { method: HomeContent['method'] }) {
  return (
    <section id="metodo" className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-midnight sm:text-3xl">{method.heading}</h2>
      <p className="mt-4 text-midnight/70">{method.intro}</p>
      <div className="mt-8 space-y-8">
        {method.items.map((item) => (
          <div key={item.label} className="border-l-2 border-sand pl-5">
            <h3 className="font-semibold text-cognac">{item.label}</h3>
            <p className="mt-1 text-midnight/80">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
