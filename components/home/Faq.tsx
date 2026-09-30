import type { HomeContent } from '@/content/homeContent.types';

export function Faq({ faq }: { faq: HomeContent['faq'] }) {
  return (
    <section className="mx-auto max-w-2xl px-6 py-28 sm:py-40">
      <h2 className="font-serif text-3xl font-normal text-midnight sm:text-4xl">{faq.heading}</h2>
      <div className="mt-8 divide-y divide-stone/30 border-t border-stone/30">
        {faq.items.map((item) => (
          <details key={item.question} className="group py-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-midnight">
              {item.question}
              <span className="shrink-0 text-lg text-cognac transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-midnight/70">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
