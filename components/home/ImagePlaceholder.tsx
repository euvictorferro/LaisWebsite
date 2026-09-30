import { Column } from './Column';

export function ImagePlaceholder({
  label,
  className = 'aspect-[4/5]',
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 border border-stone/30 bg-stone/[0.07] text-stone/70 ${className}`}
    >
      <Column className="h-6 w-6" />
      <span className="max-w-[16ch] text-center text-xs leading-snug">{label}</span>
    </div>
  );
}
