import type { Metadata } from 'next';
import { HomePage } from '@/components/home/HomePage';
import homeContentEn from '@/content/home.en';

export const metadata: Metadata = {
  title: 'Laís Daltrozo | Life Insurance & Estate Planning',
  description:
    'Life Insurance and Estate Planning consulting with Laís Daltrozo. Book a free consultation.',
  alternates: {
    languages: {
      'pt-BR': '/',
      en: '/en',
    },
  },
};

export default function EnglishHome() {
  return <HomePage content={homeContentEn} />;
}
