import type { HomeContent } from '@/content/homeContent.types';

// Accordion no estilo do design system de referência: itens sem fundo, divisores finos,
// pergunta em serif medium e toggle circular com easing cubic-bezier(0.16, 1, 0.3, 1).
export function Faq({ faq }: { faq: HomeContent['faq'] }) {
  return (
    <section
      id="faq"
      className="mx-auto grid max-w-6xl gap-10 px-6 py-28 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] sm:gap-16 sm:py-40"
    >
      <h2 className="font-serif text-4xl font-normal leading-tight text-midnight sm:sticky sm:top-28 sm:self-start sm:text-5xl">
        {faq.heading}
      </h2>
      <div className="border-t border-midnight/15">
        {faq.items.map((item) => (
          <details key={item.question} className="group border-b border-midnight/15">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-7 font-serif text-xl font-medium leading-snug text-midnight transition-colors duration-300 hover:text-cognac sm:text-2xl [&::-webkit-details-marker]:hidden">
              {item.question}
              <span
                aria-hidden="true"
                className="flex size-9 shrink-0 items-center justify-center rounded-full border border-midnight/25 font-sans text-lg leading-none text-cognac transition-[transform,background-color,color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-cognac group-open:rotate-45 group-open:border-cognac group-open:bg-cognac group-open:text-ivory"
              >
                +
              </span>
            </summary>
            <p className="max-w-xl pb-7 pr-14 text-midnight/70">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
