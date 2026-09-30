import type { LinktreeLink } from '@/content/linktreeLinks';

export function LinkButton({ label, url }: LinktreeLink) {
  return (
    <a
      href={url}
      className="block w-full rounded-full border border-black px-6 py-4 text-center font-medium"
    >
      {label}
    </a>
  );
}
