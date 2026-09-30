import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Scenario } from './Scenario';
import type { HomeContent } from '@/content/homeContent.types';

const scenario: HomeContent['scenario'] = {
  heading: 'Scenario heading',
  scenarioALabel: 'Scenario A',
  scenarioAItems: ['A item one'],
  scenarioBLabel: 'Scenario B',
  scenarioBItems: ['B item one'],
  bridge: 'Bridge text',
};

describe('Scenario', () => {
  it('renders heading, both scenario labels/items, and the bridge', () => {
    render(<Scenario scenario={scenario} />);
    expect(screen.getByText('Scenario heading')).toBeInTheDocument();
    expect(screen.getByText('Scenario A')).toBeInTheDocument();
    expect(screen.getByText('A item one')).toBeInTheDocument();
    expect(screen.getByText('Scenario B')).toBeInTheDocument();
    expect(screen.getByText('B item one')).toBeInTheDocument();
    expect(screen.getByText('Bridge text')).toBeInTheDocument();
  });
});
