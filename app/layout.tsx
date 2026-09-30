import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Laís Daltrozo',
  description: 'Laís Daltrozo | Life Insurance & Estate Planning',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
