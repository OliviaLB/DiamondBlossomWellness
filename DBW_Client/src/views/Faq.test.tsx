import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Faq } from './Faq';

describe('Faq', () => {
  it('renders the page title', () => {
    render(<Faq />);

    expect(screen.getByRole('heading', { name: 'Frequently Asked Questions' })).toBeInTheDocument();
  });
});
