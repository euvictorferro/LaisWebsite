import type { HomeContent } from '@/content/homeContent.types';

export function Scenario({ scenario }: { scenario: HomeContent['scenario'] }) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-28 sm:py-40">
      <h2 className="font-serif text-4xl font-normal text-midnight sm:text-5xl">{scenario.heading}</h2>
      <div className="mt-10 grid gap-px overflow-hidden bg-midnight/10 sm:grid-cols-2">
        <div className="bg-ivory p-8">
          <h3 className="font-semibold text-midnight/70">{scenario.scenarioALabel}</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-midnight/70">
            {scenario.scenarioAItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="bg-white p-8">
          <h3 className="font-semibold text-cognac">{scenario.scenarioBLabel}</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-midnight/80">
            {scenario.scenarioBItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-8 font-serif text-lg italic text-midnight/70">{scenario.bridge}</p>
    </section>
  );
}
