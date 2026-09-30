import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Header', () => {
  it('links to the other language using nav.switchHref', () => {
    render(<Header nav={{ switchLabel: 'EN', switchHref: '/en' }} />);
    const link = screen.getByRole('link', { name: 'EN' });
    expect(link).toHaveAttribute('href', '/en');
  });
});
