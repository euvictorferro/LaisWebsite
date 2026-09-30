import type { HomeContent } from '@/content/homeContent.types';

export function Faq({ faq }: { faq: HomeContent['faq'] }) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="text-2xl font-bold sm:text-3xl">{faq.heading}</h2>
      <div className="mt-6 space-y-6">
        {faq.items.map((item) => (
          <div key={item.question}>
            <h3 className="font-semibold text-gray-900">{item.question}</h3>
            <p className="mt-1 text-gray-700">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
