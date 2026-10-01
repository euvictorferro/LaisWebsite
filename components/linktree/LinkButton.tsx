import type { LinktreeLink } from '@/content/linktreeLinks';

export function LinkButton({ label, url }: LinktreeLink) {
  return (
    <a
      href={url}
      className="block w-full rounded-sm border border-sand px-6 py-4 text-center font-medium text-ivory hover:bg-cognac hover:border-cognac"
    >
      {label}
    </a>
  );
}
