import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { PAGES } from '@constants/pages';
import { AboutUs } from './AboutUs';

describe('AboutUs', () => {
  it('renders the page title', () => {
    render(<AboutUs />);

    expect(screen.getByRole('heading', { name: 'Our Story' })).toBeInTheDocument();
  });

  it('sets its own title and description', () => {
    render(<AboutUs />);

    expect(document.title).toBe(PAGES.aboutUs.title);
    expect(document.head.querySelector('meta[name="description"]')).toHaveAttribute(
      'content',
      PAGES.aboutUs.description
    );
  });
});
