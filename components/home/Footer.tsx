import Image from 'next/image';
import { NPN } from '@/content/contact';

export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-3 bg-midnight px-6 py-10 text-center text-sm text-stone">
      <Image src="/brand/logo-ivory.png" alt="Daltrozo" width={100} height={50} className="h-6 w-auto opacity-80" />
      <p>
        NPN {NPN} · © {new Date().getFullYear()} Laís Daltrozo
      </p>
    </footer>
  );
}
