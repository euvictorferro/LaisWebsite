import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Laís Daltrozo | Life Insurance & Estate Planning',
  description:
    'Consultoria em Life Insurance e Estate Planning com Laís Daltrozo. Agende uma consultoria gratuita.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
