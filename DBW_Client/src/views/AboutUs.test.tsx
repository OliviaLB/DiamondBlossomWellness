import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { AboutUs } from './AboutUs';

describe('AboutUs', () => {
  it('renders the page title', () => {
    render(<AboutUs />);

    expect(screen.getByRole('heading', { name: 'Our Story' })).toBeInTheDocument();
  });
});
