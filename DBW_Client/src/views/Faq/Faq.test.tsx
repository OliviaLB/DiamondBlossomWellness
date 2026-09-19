import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { PAGES } from '@constants/pages';
import Faq from './Faq';

describe('Faq', () => {
  it('renders the page title', () => {
    render(<Faq />);

    expect(screen.getByRole('heading', { name: 'Frequently Asked Questions' })).toBeInTheDocument();
  });

  it('sets its own title and description', () => {
    render(<Faq />);

    expect(document.title).toBe(PAGES.faq.title);
    expect(document.head.querySelector('meta[name="description"]')).toHaveAttribute('content', PAGES.faq.description);
  });
});
