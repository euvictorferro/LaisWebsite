import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { LinktreePage } from './LinktreePage';
import { linktreeLinks } from '@/content/linktreeLinks';

describe('LinktreePage', () => {
  it('renders a link for every entry in linktreeLinks', () => {
    render(<LinktreePage />);
    for (const link of linktreeLinks) {
      expect(screen.getByRole('link', { name: link.label })).toHaveAttribute('href', link.url);
    }
  });
});
