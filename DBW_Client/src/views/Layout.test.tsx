import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { renderWithRouter } from '../../tests';
import { Layout } from './Layout';

describe('Layout', () => {
  it('renders the business name and primary nav links', async () => {
    render(renderWithRouter(<Layout>page content</Layout>));

    expect(await screen.findByRole('link', { name: 'Diamond Blossom Wellness' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About Us' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Services' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'FAQ' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Contact Us' })).toBeInTheDocument();
  });

  it('renders its children', async () => {
    render(renderWithRouter(<Layout>page content</Layout>));

    expect(await screen.findByText('page content')).toBeInTheDocument();
  });
});
