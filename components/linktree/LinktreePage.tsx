import Image from 'next/image';
import { linktreeLinks } from '@/content/linktreeLinks';
import { NPN } from '@/content/contact';
import { LinkButton } from './LinkButton';

export function LinktreePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-md flex-col items-center gap-4 bg-midnight px-6 py-16 text-ivory">
      <Image src="/brand/logo-ivory.png" alt="Daltrozo" width={160} height={80} className="h-12 w-auto" priority />
      <p className="text-stone">NPN {NPN}</p>
      <div className="mt-4 flex w-full flex-col gap-3">
        {linktreeLinks.map((link) => (
          <LinkButton key={link.url} {...link} />
        ))}
      </div>
    </main>
  );
}
