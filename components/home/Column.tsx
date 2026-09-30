export function Column({ className = 'h-6 w-6 text-cognac' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 32" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="0" width="18" height="3" fill="currentColor" />
      <rect x="5" y="4" width="2" height="24" fill="currentColor" />
      <rect x="9" y="4" width="2" height="24" fill="currentColor" />
      <rect x="13" y="4" width="2" height="24" fill="currentColor" />
      <rect x="17" y="4" width="2" height="24" fill="currentColor" />
      <rect x="3" y="29" width="18" height="3" fill="currentColor" />
    </svg>
  );
}
