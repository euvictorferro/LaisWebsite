import { NPN } from '@/content/contact';

export function Footer() {
  return (
    <footer className="px-6 py-8 text-center text-sm text-gray-400">
      NPN {NPN} · © {new Date().getFullYear()} Laís Daltrozo
    </footer>
  );
}
