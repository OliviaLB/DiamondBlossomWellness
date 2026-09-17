import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ContactUs } from './ContactUs';

describe('ContactUs', () => {
  it('renders the page title', () => {
    render(<ContactUs />);

    expect(screen.getByRole('heading', { name: 'Get In Touch' })).toBeInTheDocument();
  });
});
