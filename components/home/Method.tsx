import type { HomeContent } from '@/content/homeContent.types';

export function Method({ method }: { method: HomeContent['method'] }) {
  return (
    <section id="metodo" className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="text-2xl font-bold sm:text-3xl">{method.heading}</h2>
      <p className="mt-4 text-gray-600">{method.intro}</p>
      <div className="mt-6 space-y-6">
        {method.items.map((item) => (
          <div key={item.label}>
            <h3 className="font-semibold text-gray-900">{item.label}</h3>
            <p className="mt-1 text-gray-700">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
