import { linktreeLinks } from '@/content/linktreeLinks';
import { LinkButton } from './LinkButton';

export function LinktreePage() {
  return (
    <main className="mx-auto flex max-w-md flex-col items-center gap-4 px-6 py-16">
      <h1 className="text-2xl font-bold">Laís Daltrozo</h1>
      <p className="text-gray-500">NPN 21436256</p>
      <div className="mt-4 flex w-full flex-col gap-3">
        {linktreeLinks.map((link) => (
          <LinkButton key={link.url} {...link} />
        ))}
      </div>
    </main>
  );
}
