import type { HomeContent } from '@/content/homeContent.types';

export function Scenario({ scenario }: { scenario: HomeContent['scenario'] }) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-midnight sm:text-3xl">{scenario.heading}</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div className="rounded-sm border border-stone/40 bg-stone/10 p-6">
          <h3 className="font-semibold text-midnight/70">{scenario.scenarioALabel}</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-midnight/70">
            {scenario.scenarioAItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-sm border border-cognac bg-cognac/5 p-6">
          <h3 className="font-semibold text-cognac">{scenario.scenarioBLabel}</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-midnight/80">
            {scenario.scenarioBItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-6 font-serif italic text-midnight/70">{scenario.bridge}</p>
    </section>
  );
}
