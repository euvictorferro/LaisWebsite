import type { AnchorHTMLAttributes } from 'react';

type CtaVariant = 'solid' | 'outline-light' | 'outline-dark';

const variantClasses: Record<CtaVariant, string> = {
  solid: 'bg-cognac text-ivory hover:bg-midnight',
  'outline-light': 'border border-ivory/50 text-ivory hover:border-ivory hover:bg-ivory/10',
  'outline-dark': 'border border-cognac text-cognac hover:bg-cognac hover:text-ivory',
};

export function Cta({
  variant = 'solid',
  className = '',
  ...props
}: { variant?: CtaVariant } & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      className={`inline-block px-9 py-4 text-sm font-medium tracking-wide transition-colors duration-300 ${variantClasses[variant]} ${className}`}
    />
  );
}
