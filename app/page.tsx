import type { Metadata } from 'next';
import { HomePage } from '@/components/home/HomePage';
import homeContentPt from '@/content/home.pt';

export const metadata: Metadata = {
  title: 'Laís Daltrozo | Life Insurance & Estate Planning',
  description:
    'Consultoria em Life Insurance e Estate Planning com Laís Daltrozo. Agende uma consultoria gratuita.',
  alternates: {
    languages: {
      'pt-BR': '/',
      en: '/en',
    },
  },
};

export default function Home() {
  return <HomePage content={homeContentPt} />;
}
