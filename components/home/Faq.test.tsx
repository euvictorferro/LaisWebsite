import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Faq } from './Faq';
import type { HomeContent } from '@/content/homeContent.types';

const faq: HomeContent['faq'] = {
  heading: 'FAQ heading',
  items: [
    { question: 'Question one?', answer: 'Answer one.' },
    { question: 'Question two?', answer: 'Answer two.' },
  ],
};

describe('Faq', () => {
  it('renders heading and every question/answer pair', () => {
    render(<Faq faq={faq} />);
    expect(screen.getByText('FAQ heading')).toBeInTheDocument();
    expect(screen.getByText('Question one?')).toBeInTheDocument();
    expect(screen.getByText('Answer one.')).toBeInTheDocument();
    expect(screen.getByText('Question two?')).toBeInTheDocument();
    expect(screen.getByText('Answer two.')).toBeInTheDocument();
  });
});
