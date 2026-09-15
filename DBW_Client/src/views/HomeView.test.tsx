import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { HomeView } from './HomeView';

describe('HomeView', () => {
  it('renders the site title', () => {
    render(<HomeView />);

    expect(screen.getByRole('heading', { name: 'Diamond Blossom Wellness' })).toBeInTheDocument();
  });
});
