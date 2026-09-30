import type { HomeContent } from '@/content/homeContent.types';

export function Pain({ pain }: { pain: HomeContent['pain'] }) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="text-2xl font-bold sm:text-3xl">{pain.heading}</h2>

      <div className="mt-4 space-y-1">
        {pain.cascadeLines.map((line) => (
          <p key={line} className="font-medium text-gray-800">
            {line}
          </p>
        ))}
      </div>

      <h3 className="mt-8 font-semibold text-gray-900">{pain.tiredOfHeading}</h3>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700">
        {pain.tiredOf.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h3 className="mt-8 font-semibold text-gray-900">{pain.alreadyHeading}</h3>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700">
        {pain.alreadyDone.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
