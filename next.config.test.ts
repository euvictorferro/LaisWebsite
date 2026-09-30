import { describe, it, expect } from 'vitest';
import nextConfig from './next.config';

describe('next.config redirects', () => {
  it('redirects /servicos to the estate planning anchor on the home page', async () => {
    const redirects = await nextConfig.redirects?.();
    expect(redirects).toContainEqual({
      source: '/servicos',
      destination: '/#servicos',
      permanent: true,
    });
  });
});
