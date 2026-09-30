import type { HomeContent } from '@/content/homeContent.types';

export function Faq({ faq }: { faq: HomeContent['faq'] }) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-midnight sm:text-3xl">{faq.heading}</h2>
      <div className="mt-6 divide-y divide-stone/30">
        {faq.items.map((item) => (
          <div key={item.question} className="py-5">
            <h3 className="font-semibold text-midnight">{item.question}</h3>
            <p className="mt-2 text-midnight/70">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
