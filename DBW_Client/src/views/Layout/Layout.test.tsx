import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { renderWithRouter } from '../../../tests';
import Layout from './Layout';

describe('Layout', () => {
  it('renders the business name and primary nav links', async () => {
    render(renderWithRouter(<Layout>page content</Layout>));

    const nav = within(await screen.findByRole('navigation'));

    expect(nav.getByRole('link', { name: 'Diamond Blossom Wellness' })).toBeInTheDocument();
    expect(nav.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(nav.getByRole('link', { name: 'About Us' })).toBeInTheDocument();
    expect(nav.getByRole('link', { name: 'Services' })).toBeInTheDocument();
    expect(nav.getByRole('link', { name: 'FAQ' })).toBeInTheDocument();
    expect(nav.getByRole('link', { name: 'Contact Us' })).toBeInTheDocument();
  });

  it('renders its children', async () => {
    render(renderWithRouter(<Layout>page content</Layout>));

    expect(await screen.findByText('page content')).toBeInTheDocument();
  });

  it('renders the footer after its children', async () => {
    render(renderWithRouter(<Layout>page content</Layout>));

    const content = await screen.findByText('page content');
    const footer = screen.getByRole('contentinfo');

    expect(content.compareDocumentPosition(footer) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });
});
