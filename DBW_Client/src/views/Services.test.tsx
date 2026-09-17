import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Services } from './Services';

describe('Services', () => {
  it('renders the page title', () => {
    render(<Services />);

    expect(screen.getByRole('heading', { name: 'Our Treatments' })).toBeInTheDocument();
  });
});
