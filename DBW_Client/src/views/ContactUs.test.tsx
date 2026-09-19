import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { PAGES } from '@constants/pages';
import { ContactUs } from './ContactUs';

describe('ContactUs', () => {
  it('renders the page title', () => {
    render(<ContactUs />);

    expect(screen.getByRole('heading', { name: 'Get In Touch' })).toBeInTheDocument();
  });

  it('sets its own title and description', () => {
    render(<ContactUs />);

    expect(document.title).toBe(PAGES.contactUs.title);
    expect(document.head.querySelector('meta[name="description"]')).toHaveAttribute(
      'content',
      PAGES.contactUs.description
    );
  });
});
