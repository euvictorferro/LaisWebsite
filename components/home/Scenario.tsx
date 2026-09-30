import type { HomeContent } from '@/content/homeContent.types';

export function Scenario({ scenario }: { scenario: HomeContent['scenario'] }) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="text-2xl font-bold sm:text-3xl">{scenario.heading}</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div className="rounded-lg border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-900">{scenario.scenarioALabel}</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700">
            {scenario.scenarioAItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-gray-200 p-6">
          <h3 className="font-semibold text-gray-900">{scenario.scenarioBLabel}</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700">
            {scenario.scenarioBItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-6 text-gray-600">{scenario.bridge}</p>
    </section>
  );
}
